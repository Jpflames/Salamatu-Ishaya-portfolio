# Salamatu Ishaya - Virtual Assistant Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Sleek, professional design with gold (#CDA434), black, and white color scheme
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **SEO Optimized**: Complete metadata and SEO best practices
- **Performance**: Built with Next.js 14 App Router for optimal performance

## 📋 Pages

1. **Home** - Hero section with professional introduction
2. **About** - Bio, skills, experience timeline, and values
3. **Services** - Comprehensive list of virtual assistant services
4. **Portfolio** - Showcase of completed projects with modal views
5. **Testimonials** - Client testimonials and reviews
6. **Contact** - Contact form with server action and WhatsApp integration

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom components with Shadcn/UI patterns

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── actions/          # Server actions
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   ├── portfolio/       # Portfolio page
│   ├── services/        # Services page
│   ├── testimonials/    # Testimonials page
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # Reusable components
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── PortfolioCard.tsx
│   ├── ServiceCard.tsx
│   └── TestimonialCard.tsx
├── lib/                 # Utility functions
└── public/              # Static assets
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
- Gold: `#CDA434`
- Black: `#000000`
- White: `#FFFFFF`

### Content
- Update personal information in each page component
- Replace placeholder images in the `public/` folder
- Modify testimonials, services, and portfolio items in respective page files

### Contact Form
The contact form uses a server action located in `app/actions/contact.ts`. To enable email sending:
1. Install an email service (Resend, SendGrid, etc.)
2. Add your API keys to environment variables
3. Update the `submitContactForm` function

## 📧 Contact Information

- **Email**: salamatuishaya@gmail.com
- **WhatsApp**: Update the phone number in `app/contact/page.tsx`

## 📝 License

This project is private and proprietary.

## 🙏 Acknowledgments

Built with modern web technologies and best practices for optimal performance and user experience.

