'use client';

import Button from '@/components/globals/Button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/utils/utils';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const contactUsSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(1, 'Company is required'),
  purpose: z.string().min(1, 'Purpose is required'),
  message: z.string().min(1, 'Message is required'),
  terms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the privacy policy',
  }),
});

type ContactUsFormValues = z.infer<typeof contactUsSchema>;

export default function ContactUsForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ContactUsFormValues>({
    resolver: zodResolver(contactUsSchema),
    defaultValues: { terms: false },
  });

  const onSubmit = (data: ContactUsFormValues) => {
    console.log('Form Data:', data);
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
          className={cn(
            'file:text-black bg-[#FBFBFB] placeholder:text-pulse-pink-600 selection:bg-background  selection:text-black border-border h-10 rounded-xl shadow-none md:text-sm',
            'focus-visible:border focus-visible:ring-0'
          )}
        />
        <span className="text-red-500 text-xs ml-1">
          {errors.firstName?.message}
        </span>
      </div>

      {/* Last Name */}
      <div className="flex flex-col gap-1">
        <Label className="text-black text-base leading-[1.37] font-normal">
          Last name
        </Label>
        <Input
          type="text"
          {...register('lastName')}
          className={cn(
            'file:text-black bg-[#FBFBFB] placeholder:text-pulse-pink-600 selection:bg-background selection:text-black border-border h-10 rounded-xl shadow-none md:text-sm',
            'focus-visible:border focus-visible:ring-0'
          )}
        />
        <span className="text-red-500 text-xs ml-1">
          {errors.lastName?.message}
        </span>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1 md:col-span-2">
        <Label className="text-black text-base leading-[1.37] font-normal">
          Work email
        </Label>
        <Input
          type="email"
          {...register('email')}
          className={cn(
            'file:text-black bg-[#FBFBFB] placeholder:text-pulse-pink-600 selection:bg-background selection:text-black border-border h-10 rounded-xl shadow-none md:text-sm',
            'focus-visible:border focus-visible:ring-0'
          )}
        />
        <span className="text-red-500 text-xs ml-1">
          {errors.email?.message}
        </span>
      </div>

      {/* Company */}
      <div className="flex flex-col gap-1">
        <Label className="text-black text-base leading-[1.37] font-normal">
          Company
        </Label>
        <Input
          type="text"
          {...register('company')}
          className={cn(
            'file:text-black bg-[#FBFBFB] placeholder:text-pulse-pink-600 selection:bg-background selection:text-black border-border h-10 rounded-xl shadow-none md:text-sm',
            'focus-visible:border focus-visible:ring-0'
          )}
        />
        <span className="text-red-500 text-xs ml-1">
          {errors.company?.message}
        </span>
      </div>

      {/* Purpose */}
      <div className="flex flex-col gap-1">
        <Label className="text-black text-base leading-[1.37] font-normal">
          Contact purpose
        </Label>
        <Input
          type="text"
          {...register('purpose')}
          className={cn(
            'file:text-black bg-[#FBFBFB] placeholder:text-pulse-pink-600 selection:bg-background selection:text-black border-border h-10 rounded-xl shadow-none md:text-sm',
            'focus-visible:border focus-visible:ring-0'
          )}
        />
        <span className="text-red-500 text-xs ml-1">
          {errors.purpose?.message}
        </span>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1 md:col-span-2">
        <Label className="text-black text-base leading-[1.37] font-normal">
          Message
        </Label>
        <Textarea
          {...register('message')}
          className={cn(
            'h-24 bg-[#FBFBFB] file:text-black placeholder:text-pulse-pink-600 selection:bg-background selection:text-black border-border rounded-xl shadow-none md:text-sm',
            'focus-visible:border focus-visible:ring-0'
          )}
        />
        <span className="text-red-500 text-xs ml-1">
          {errors.message?.message}
        </span>
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
      <Button type="submit" className="md:col-span-2">
        Send Message
      </Button>
    </form>
  );
}
