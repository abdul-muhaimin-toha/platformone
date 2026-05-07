'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { cn } from '@/utils/utils';
import Link from 'next/link';
import Button from '@/components/globals/Button';

export default function GatedContentOverlay({ postId }: { postId?: number }) {
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [company, setCompany] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    firstName: '',
    company: '',
    workEmail: '',
    agreed: '',
  });

  const handleUnlock = async () => {
    const newErrors = {
      firstName: firstName.trim() ? '' : 'First name is required',
      company: '',   // Not required
      workEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workEmail) ? '' : 'Valid work email is required',
      agreed: agreed ? '' : 'You must accept the privacy policy',
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((err) => err)) {
      return;
    }

    setIsLoading(true);
    try {
      const queryParams = new URLSearchParams({
        post_id: postId?.toString() || '',
        first_name: firstName.trim(),
        email: workEmail.trim(),
        company: company.trim(),
      });

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/wp-json/nh/v1/gated-post/unlock?${queryParams.toString()}`,
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
          },
        }
      );

      const data = await response.json();
      console.log('Unlock API Response:', data);

      if (data.success) {
        if (data.post_unlocked_all) {
          // Set cookie for 7 days
          const maxAge = 7 * 24 * 60 * 60; // 7 days in seconds
          document.cookie = `platformone_unlocked=true; max-age=${maxAge}; path=/; SameSite=Lax`;
          
          // Reload the page to reveal the content
          window.location.reload();
        } else {
          setFirstName('');
          setCompany('');
          setWorkEmail('');
          setAgreed(false);
          setErrors({ firstName: '', company: '', workEmail: '', agreed: '' });
        }
      }
    } catch (error) {
      console.error('Error unlocking post:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Fade overlay + CTA — absolutely positioned to overlap content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none flex flex-col items-center justify-end h-88.5 bg-linear-to-b from-white/0 via-white/90 to-white pb-5 px-4">
        {/* CTA section */}
        <div className="flex flex-col items-center gap-6 py-6 px-4 w-full max-w-125 bg-[#FFE4F4] rounded-2xl pointer-events-auto text-center">
          <h3 className="text-[20px] sm:text-[24px] mb-0! font-normal text-black leading-tight">
            Want to see more?
          </h3>
          <Button variant="primary" onClick={() => setShowModal(true)}>
            Unlock article
          </Button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[#1E1E2F]/90" />

          {/* Modal content */}
          <div
            className="relative w-full max-w-130 bg-white rounded-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-6">
              {/* First name + Company row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <Label className="text-black text-base font-normal">
                    First name
                  </Label>
                  <Input
                    type="text"
                    value={firstName}
                    onChange={(e) => { setFirstName(e.target.value); setErrors(prev => ({ ...prev, firstName: '' })); }}
                    className={cn(
                      'bg-[#FBFBFB] border-[#E8E8E8] h-10 rounded-xl shadow-none',
                      'focus-visible:border focus-visible:ring-0',
                      errors.firstName && 'border-red-500 focus-visible:border-red-500'
                    )}
                  />
                  {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName}</span>}
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-black text-base font-normal">
                    Company
                  </Label>
                  <Input
                    type="text"
                    value={company}
                    onChange={(e) => { setCompany(e.target.value); setErrors(prev => ({ ...prev, company: '' })); }}
                    className={cn(
                      'bg-[#FBFBFB] border-[#E8E8E8] h-10 rounded-xl shadow-none',
                      'focus-visible:border focus-visible:ring-0',
                      errors.company && 'border-red-500 focus-visible:border-red-500'
                    )}
                  />
                  {errors.company && <span className="text-red-500 text-xs">{errors.company}</span>}
                </div>
              </div>

              {/* Work email */}
              <div className="flex flex-col gap-1.5">
                <Label className="text-black text-base font-normal">
                  Work email
                </Label>
                <Input
                  type="email"
                  value={workEmail}
                  onChange={(e) => { setWorkEmail(e.target.value); setErrors(prev => ({ ...prev, workEmail: '' })); }}
                  className={cn(
                    'bg-[#FBFBFB] border-[#E8E8E8] h-10 rounded-xl shadow-none',
                    'focus-visible:border focus-visible:ring-0',
                    errors.workEmail && 'border-red-500 focus-visible:border-red-500'
                  )}
                />
                {errors.workEmail && <span className="text-red-500 text-xs">{errors.workEmail}</span>}
              </div>

              {/* Privacy checkbox */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-start sm:items-center gap-2.5">
                  <Checkbox
                    id="gated-terms"
                    checked={agreed}
                    className={cn("border-border mt-0.5 sm:mt-0 shrink-0", errors.agreed && "border-red-500")}
                    onCheckedChange={(checked) => { setAgreed(Boolean(checked)); setErrors(prev => ({ ...prev, agreed: '' })); }}
                  />
                  <Label
                    htmlFor="gated-terms"
                    className="text-black text-base font-normal leading-snug"
                  >
                    You agree with our{' '}
                    <Link
                      href="/policies/privacy-policy"
                      className="!text-black !decoration-black underline hover:!text-pulse-pink-600 hover:!decoration-pulse-pink-600 transition-colors"
                    >
                      privacy policy.
                    </Link>
                  </Label>
                </div>
                {errors.agreed && <span className="text-red-500 text-xs">{errors.agreed}</span>}
              </div>

              {/* Submit button */}
              <Button
                variant="primary"
                onClick={handleUnlock}
                disabled={isLoading}
              >
                {isLoading ? 'Unlocking...' : 'Unlock article'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
