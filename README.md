# Leap by LLL - Website

A modern, multilingual SaaS website built with Next.js 15, Tailwind CSS v4, and next-intl for internationalization.

## Features

- **Next.js 15** with App Router
- **Tailwind CSS v4** with `@theme inline` configuration
- **Internationalization** (i18n) with next-intl
  - English (en) - Default
  - Traditional Chinese (zh-HK)
- **SEO Optimized** with dynamic sitemap, robots.txt, and metadata
- **Framer Motion** animations
- **MDX Blog** support
- **Dark Mode** with next-themes
- **TypeScript** for type safety

## Project Structure

```
leapbylll-www/
├── src/
│   ├── app/
│   │   ├── [locale]/              # Locale-based routing
│   │   │   ├── layout.tsx         # Root layout with i18n
│   │   │   ├── page.tsx           # Home page
│   │   │   ├── login/
│   │   │   ├── signup/
│   │   │   ├── blog/
│   │   │   ├── pricing/
│   │   │   └── contact/
│   │   ├── manifest.ts            # PWA manifest
│   │   ├── robots.ts              # Dynamic robots.txt
│   │   ├── sitemap.ts             # Dynamic sitemap
│   │   └── globals.css            # Tailwind v4 imports
│   ├── components/
│   │   ├── pages/                 # Page-specific components
│   │   │   ├── home/
│   │   │   ├── login/
│   │   │   ├── signup/
│   │   │   ├── blog/
│   │   │   ├── pricing/
│   │   │   └── contact/
│   │   ├── layout/                # Layout components
│   │   │   ├── navbar/
│   │   │   └── footer/
│   │   └── ui/                    # UI primitives
│   ├── i18n/                      # i18n configuration
│   │   ├── routing.ts
│   │   ├── request.ts
│   │   └── navigation.ts
│   ├── messages/                  # Translation files
│   │   ├── en.json
│   │   └── zh-HK.json
│   ├── middleware.ts              # next-intl middleware
│   ├── lib/                       # Utility functions
│   ├── constants/                 # Constants
│   ├── context/                   # React contexts
│   └── types/                     # TypeScript types
├── public/                        # Static assets
└── ...config files
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

The default locale is English. Access Traditional Chinese at [http://localhost:3000/zh-HK](http://localhost:3000/zh-HK).

## Configuration

### Tailwind CSS v4

Tailwind configuration is now in `src/app/globals.css` using the `@theme inline` directive instead of a separate config file.

### Internationalization

- **Locales**: Configured in `src/i18n/routing.ts`
- **Messages**: Translation files in `src/messages/`
- **Navigation**: Use `Link`, `useRouter`, etc. from `@/i18n/navigation`

### Adding a New Locale

1. Add locale to `src/i18n/routing.ts`
2. Create message file in `src/messages/`
3. Update middleware matcher in `src/middleware.ts`

## Build

```bash
npm run build
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Technologies

- **Framework**: Next.js 15.1.0
- **UI**: React 19, Tailwind CSS v4
- **Animations**: Framer Motion
- **i18n**: next-intl 4.0.2
- **Forms**: react-hook-form, zod
- **Content**: MDX with rehype-prism
- **Icons**: Lucide React, Tabler Icons
- **Fonts**: Geist Sans

## License

Private - All rights reserved
