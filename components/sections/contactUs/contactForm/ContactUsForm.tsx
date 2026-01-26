'use client';

import { useState } from 'react';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/utils/utils';
import { Textarea } from '@/components/ui/textarea';
import Button from '@/components/globals/Button';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Congo (Congo-Brazzaville)',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czechia (Czech Republic)',
  'Democratic Republic of the Congo',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Holy See',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Ivory Coast',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Myanmar (formerly Burma)',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'North Korea',
  'North Macedonia',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine State',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Korea',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Sweden',
  'Switzerland',
  'Syria',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States of America',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe',
  'Others',
];

const contactUsSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().optional(),
  email: z.string().email('Invalid email address'),
  company: z.string().min(1, 'Company is required'),
  phone: z.string().optional(),
  country: z.string().min(1, 'Country is required'),
  message: z.string().optional(),
  terms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the privacy policy',
  }),
});

type ContactUsFormValues = z.infer<typeof contactUsSchema>;

export default function ContactUsForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactUsFormValues>({
    resolver: zodResolver(contactUsSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phone: '',
      country: '',
      message: '',
      terms: false,
    },
  });

  const onSubmit = async (data: ContactUsFormValues) => {
    setLoading(true);

    const apiPayload = {
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      company: data.company,
      phone: data.phone || '',
      country: data.country || '',
      message: data.message,
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/wp-json/nh/v1/cform/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(apiPayload),
        },
      );

      if (!res.ok) throw new Error('Failed to submit form');

      const result = await res.json();

      if (result.success) {
        reset({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          country: '',
          message: '',
          terms: false,
        });
        toast.success(result.message || 'Message sent successfully!');
      } else {
        console.error('API Error:', result.message);
        toast.error(result.message || 'Something went wrong.');
      }
    } catch (err) {
      console.error('Submission Error:', err);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-2 w-full flex-col bg-white gap-6 p-6 sm:p-10 lg:p-6 lg:gap-6 lg:gap-y-6 md:p-16 sm:gap-y-10 rounded-2xl lg:max-w-[520px]"
    >
      {/* First Name */}
      <div className="flex flex-col gap-1">
        <Label className="text-black text-base leading-[1.37] font-normal">
          First name
        </Label>
        <Input
          type="text"
          {...register('firstName')}
          disabled={loading}
          className={cn(
            'file:text-black bg-[#FBFBFB] placeholder:text-pulse-pink-600 selection:bg-background  selection:text-black border-border h-10 rounded-xl shadow-none md:text-sm',
            'focus-visible:border focus-visible:ring-0 lg:rounded-[14px]',
          )}
        />
        {errors.firstName && (
          <span className="text-red-500 text-xs ml-1">
            {errors.firstName.message}
          </span>
        )}
      </div>

      {/* Last Name */}
      <div className="flex flex-col gap-1">
        <Label className="text-black text-base leading-[1.37] font-normal">
          Last name
        </Label>
        <Input
          type="text"
          {...register('lastName')}
          disabled={loading}
          className={cn(
            'file:text-black bg-[#FBFBFB] placeholder:text-pulse-pink-600 selection:bg-background selection:text-black border-border h-10 rounded-xl shadow-none md:text-sm',
            'focus-visible:border focus-visible:ring-0 lg:rounded-[14px]',
          )}
        />
        {errors.lastName && (
          <span className="text-red-500 text-xs ml-1">
            {errors.lastName.message}
          </span>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <Label className="text-black text-base leading-[1.37] font-normal">
          Work email
        </Label>
        <Input
          type="email"
          {...register('email')}
          disabled={loading}
          className={cn(
            'file:text-black bg-[#FBFBFB] placeholder:text-pulse-pink-600 selection:bg-background selection:text-black border-border h-10 rounded-xl shadow-none md:text-sm',
            'focus-visible:border focus-visible:ring-0 lg:rounded-[14px]',
          )}
        />
        {errors.email && (
          <span className="text-red-500 text-xs ml-1">
            {errors.email.message}
          </span>
        )}
      </div>

      {/* Country Selection */}
      <div className="flex flex-col gap-1">
        <Label className="text-black text-base leading-[1.37] font-normal">
          Country
        </Label>
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Select
              onValueChange={field.onChange}
              value={field.value}
              disabled={loading}
            >
              <SelectTrigger
                className={cn(
                  'w-full bg-[#FBFBFB] border-border h-10! rounded-xl shadow-none md:text-sm text-black data-placeholder:text-pulse-pink-600',
                  'focus:ring-0 focus:ring-offset-0 focus-visible:border focus-visible:ring-0 lg:rounded-[14px]',
                )}
              >
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent className="bg-white border-border rounded-xl">
                {countries.map((country) => (
                  <SelectItem
                    key={country}
                    value={country}
                    className="cursor-pointer hover:bg-pulse-pink-50 focus:bg-pulse-pink-50 "
                  >
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.country && (
          <span className="text-red-500 text-xs ml-1">
            {errors.country.message}
          </span>
        )}
      </div>

      {/* Company */}
      <div className="flex flex-col gap-1">
        <Label className="text-black text-base leading-[1.37] font-normal">
          Company
        </Label>
        <Input
          type="text"
          {...register('company')}
          disabled={loading}
          className={cn(
            'file:text-black bg-[#FBFBFB] placeholder:text-pulse-pink-600 selection:bg-background selection:text-black border-border h-10 rounded-xl shadow-none md:text-sm',
            'focus-visible:border focus-visible:ring-0 lg:rounded-[14px]',
          )}
        />
        {errors.company && (
          <span className="text-red-500 text-xs ml-1">
            {errors.company.message}
          </span>
        )}
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-1">
        <Label className="text-black text-base leading-[1.37] font-normal">
          Phone number
        </Label>
        <Input
          type="text"
          {...register('phone')}
          disabled={loading}
          className={cn(
            'file:text-black bg-[#FBFBFB] placeholder:text-pulse-pink-600 selection:bg-background selection:text-black border-border h-10 rounded-xl shadow-none md:text-sm',
            'focus-visible:border focus-visible:ring-0 lg:rounded-[14px]',
          )}
        />
        {errors.phone && (
          <span className="text-red-500 text-xs ml-1">
            {errors.phone.message}
          </span>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1 md:col-span-2">
        <Label className="text-black text-base leading-[1.37] font-normal">
          Message
        </Label>
        <Textarea
          {...register('message')}
          disabled={loading}
          className={cn(
            'h-24 bg-[#FBFBFB] file:text-black placeholder:text-pulse-pink-600 selection:bg-background selection:text-black border-border rounded-xl shadow-none md:text-sm',
            'focus-visible:border focus-visible:ring-0 lg:rounded-[14px]',
          )}
        />
        {errors.message && (
          <span className="text-red-500 text-xs ml-1">
            {errors.message.message}
          </span>
        )}
      </div>

      {/* Terms */}
      <div className="flex flex-col gap-1 md:col-span-2">
        <div className="flex items-center gap-2.5">
          <Controller
            name="terms"
            control={control}
            render={({ field }) => (
              <Checkbox
                id="terms"
                checked={!!field.value}
                disabled={loading}
                className="border-border"
                onCheckedChange={(checked) => field.onChange(Boolean(checked))}
              />
            )}
          />
          <Label
            htmlFor="terms"
            className="text-black text-base leading-none font-normal"
          >
            You agree with our{' '}
            <span className="underline">privacy policy.</span>
          </Label>
        </div>
        {errors.terms && (
          <span className="text-red-500 text-xs ml-1 md:col-span-2">
            {errors.terms.message}
          </span>
        )}
      </div>

      {/* Submit */}
      <Button type="submit" className="md:col-span-2" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
