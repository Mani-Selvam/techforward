// Based on blueprint:javascript_sendgrid
import { MailService } from '@sendgrid/mail';

let mailService: MailService | null = null;

if (process.env.SENDGRID_API_KEY) {
  mailService = new MailService();
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(
  params: EmailParams
): Promise<boolean> {
  if (!mailService) {
    console.log('SendGrid not configured, skipping email send');
    return false;
  }
  
  try {
    await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text,
      html: params.html,
    });
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

export async function sendRegistrationConfirmation(email: string, name: string): Promise<boolean> {
  const emailParams: EmailParams = {
    to: email,
    from: 'noreply@techforward.com', // Replace with your verified sender
    subject: 'Welcome to TechForward 2025 Webinar!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #3B82F6; text-align: center;">Registration Confirmed!</h1>
        <p>Hi ${name},</p>
        <p>Thank you for registering for the <strong>Future of Digital Collaboration</strong> webinar!</p>
        
        <div style="background: #F3F4F6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Event Details:</h3>
          <p><strong>Date:</strong> March 15, 2025</p>
          <p><strong>Time:</strong> 2:00 PM EST</p>
          <p><strong>Duration:</strong> 90 minutes</p>
          <p><strong>Format:</strong> Interactive 3D Virtual Experience</p>
        </div>
        
        <p>We'll send you a calendar invite and webinar access link closer to the event date.</p>
        
        <p>Get ready for an immersive experience featuring:</p>
        <ul>
          <li>Interactive 3D environments</li>
          <li>Real-time collaboration tools</li>
          <li>Expert insights from industry leaders</li>
          <li>Live Q&A sessions</li>
        </ul>
        
        <p>Best regards,<br>The TechForward Team</p>
      </div>
    `,
    text: `Hi ${name}, Thank you for registering for the Future of Digital Collaboration webinar on March 15, 2025 at 2:00 PM EST. We'll send you access details closer to the event date.`
  };

  return await sendEmail(emailParams);
}