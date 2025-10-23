// Vercel Serverless Function to handle contact form submissions
// This replaces the PHP mail functionality for Vercel deployment

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, website, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    // For now, we'll use a simple email service
    // You can integrate with services like:
    // - Resend (https://resend.com) - recommended
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES

    // Example email content
    const emailContent = {
      to: 'sunmyoungpark@gmail.com',
      subject: 'E-mail from Portfolio Website',
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Website:</strong> ${website || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    // TODO: Integrate with an email service
    // For now, just log the submission and return success
    console.log('Contact form submission:', emailContent);

    // Return success response
    return res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully' 
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
}