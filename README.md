# Sun Park Portfolio Website

A modern portfolio website showcasing design and development work, featuring 3D art, motion graphics, UI/UX design, and more.

## Features

- Responsive design
- Portfolio gallery with filtering
- Smooth page transitions
- Parallax scrolling effects
- Contact form (serverless function)

## Technologies Used

- HTML5, CSS3, JavaScript
- jQuery
- Bootstrap
- Packery (masonry layout)
- Vercel (hosting)

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/sun-park-portfolio.git
   cd sun-park-portfolio
   ```

2. Start a local server:
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

3. Open your browser and go to `http://localhost:8000`

## Deployment

This website is deployed on Vercel. To deploy your own version:

1. Fork this repository
2. Sign up for a free account at [Vercel](https://vercel.com)
3. Connect your GitHub account
4. Import your forked repository
5. Deploy with one click!

## Contact Form Setup

The contact form uses a serverless function. To enable email functionality:

1. Sign up for an email service like [Resend](https://resend.com)
2. Add your API key to Vercel environment variables
3. Update the `/api/contact.js` function to use your email service

## License

© 2025 Sun Park. All rights reserved.