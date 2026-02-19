'use server';
import AdminNotifierEmailTemplate from '@/app/_components/emails/AdminNotifierEmailTemplate';
import AffirmationEmailTemplate from '@/app/_components/emails/AffirmationEmailTemplate';
import { addApplication } from '@/app/_db/applications';
import { WeddingApplicationFormData } from '@/app/_lib/types';
import { Resend } from 'resend';

const hostEmails = process.env.HOST_EMAILS?.split(',') || [];
const loggingEmail = process.env.LOGGING_EMAIL || '';
const senderEmail = 'noreply@liliesdeni.hu';
const resend = new Resend(process.env.RESEND_API_KEY);

export const submitApplication = async (formData: WeddingApplicationFormData) => {
  try {
    console.log('Starting application submission...');

    await addApplication(formData);
    console.log('Application added to database successfully');

    console.log('Sending emails...');
    console.log('Host emails:', hostEmails);
    console.log('Logging email:', loggingEmail);

    const emailResults = await Promise.allSettled([
      resend.emails.send({
        from: senderEmail,
        to: hostEmails.filter(Boolean),
        bcc: [loggingEmail].filter(Boolean),
        subject: 'Leadott jelentkezés',
        react: AdminNotifierEmailTemplate(formData),
      }),
      resend.emails.send({
        from: senderEmail,
        to: [formData.email],
        bcc: [loggingEmail].filter(Boolean),
        subject: 'Visszaigazolás a jelentkezésedről',
        react: AffirmationEmailTemplate(formData),
      }),
    ]);

    // Log email results
    emailResults.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(`Email ${index + 1} sent successfully:`, result.value);
      } else {
        console.error(`Email ${index + 1} failed:`, result.reason);
      }
    });

    return { isSuccess: true };
  } catch (error) {
    console.error('Error in submitApplication:', error);

    // Type-safe error handling
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';

    return {
      isSuccess: false,
      error: errorMessage,
    };
  }
};
