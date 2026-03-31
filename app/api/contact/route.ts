import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { recaptchaToken, ...formData } = body;

    if (!recaptchaToken) {
      return NextResponse.json(
        { success: false, message: 'ReCAPTCHA token is missing.' },
        { status: 400 }
      );
    }

    // Verify ReCAPTCHA with Google
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`;

    const recaptchaRes = await fetch(verifyUrl, { method: 'POST' });
    const recaptchaJson = await recaptchaRes.json();

    if (!recaptchaJson.success || recaptchaJson.score < 0.5) {
      console.error('ReCAPTCHA Verification Failed:', recaptchaJson);
      return NextResponse.json(
        { success: false, message: `ReCAPTCHA verification failed: ${recaptchaJson['error-codes']?.[0] || 'low score'}` },
        { status: 400 }
      );
    }

    // Forward form data to WordPress backend
    const backendUrl = `${process.env.NEXT_PUBLIC_BACKEND_API}/wp-json/nh/v1/cform/`;
    
    const forwardRes = await fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await forwardRes.json();

    if (!forwardRes.ok) {
      console.error('WordPress Backend Error:', result);
      return NextResponse.json(
        { success: false, message: result.message || 'Failed to submit to backend' },
        { status: forwardRes.status }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
