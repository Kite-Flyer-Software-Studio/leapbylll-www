# Setup & Migration Notes

## Migration Completed

This project has been successfully migrated from the Aceternity Pro template to a production-ready, multilingual SaaS website.

## Key Changes Made

### 1. Directory Structure

- Moved all source files into `src/` folder
- Organized components by page in `src/components/pages/`
- Layout components moved to `src/components/layout/`
- Added `src/i18n/`, `src/messages/`, and `src/types/` directories

### 2. Tailwind CSS v4 Migration

- **Removed**: `tailwind.config.ts`
- **Updated**: `globals.css` now uses `@import "tailwindcss"` and `@theme inline`
- **Updated**: `postcss.config.mjs` to use `@tailwindcss/postcss`
- All custom colors, animations, and shadows moved to CSS variables

### 3. Internationalization (next-intl)

- Added support for English (en) and Traditional Chinese (zh-HK)
- English is the default locale
- All routes are prefixed with locale (e.g., `/en/`, `/zh-HK/`)
- Translation files in `src/messages/`
- Navigation uses `@/i18n/navigation` for locale-aware routing

### 4. SEO Optimization

- Dynamic sitemap at `/sitemap.xml`
- Dynamic robots.txt at `/robots.txt`
- PWA manifest at `/manifest.json`
- Metadata added to all pages
- Hreflang alternates for all pages

### 5. Component Organization

- Home page components: `src/components/pages/home/`
- Login components: `src/components/pages/login/`
- Signup components: `src/components/pages/signup/`
- Contact components: `src/components/pages/contact/`
- Pricing components: `src/components/pages/pricing/`
- Blog components: (kept at root level for now)

## Next Steps

### 1. Install Dependencies

```bash
cd /Users/reicolee/project-codebases/active/KFSS/lll/leapbylll-www
npm install
```

### 2. Review and Update Translations

- Review `src/messages/en.json` and `src/messages/zh-HK.json`
- Update any placeholder content
- Add brand-specific messaging

### 3. Update Components for Translations

The following components have been partially updated but may need additional translation work:

- `src/components/pages/home/features.tsx`
- `src/components/pages/home/companies.tsx`
- `src/components/pages/home/grid-features.tsx`
- `src/components/pages/home/testimonials.tsx`
- `src/components/pages/home/cta.tsx`
- `src/components/layout/footer/footer.tsx`
- All form components (login, signup, contact)

To update a component:

```typescript
import { useTranslations } from 'next-intl';

export function MyComponent() {
  const t = useTranslations('sectionName');
  return <h1>{t('key')}</h1>;
}
```

### 4. Update All Links

Some components may still use `next/link` or `next-view-transitions` Link.
Update to use `@/i18n/navigation`:

```typescript
import { Link } from '@/i18n/navigation';
```

### 5. Test the Application

```bash
npm run dev
```

Visit:

- English: http://localhost:3000/en
- Traditional Chinese: http://localhost:3000/zh-HK

### 6. Update Assets

- Replace `/public/banner.png` with actual banner image
- Replace `/public/header.png` with actual header image
- Update company logos in `/public/logos/`
- Update favicon at `/src/app/favicon.ico`

### 7. Configure Environment Variables

Create `.env.local` (if needed):

```
NEXT_PUBLIC_SITE_URL=https://www.leapbylll.com
```

### 8. Update Metadata

Update metadata in:

- `src/app/[locale]/layout.tsx` (global metadata)
- Each page's metadata export
- `src/app/manifest.ts`
- `src/app/sitemap.ts` (update base URL)

### 9. Additional i18n Setup

Consider adding:

- Language switcher component in navbar
- Locale detection based on browser preferences
- Persistent locale selection (cookies/localStorage)

### 10. Deploy

When ready to deploy:

```bash
npm run build
npm start
```

## Important Notes

### Tailwind CSS v4

- Install with: `npm install tailwindcss@next @tailwindcss/postcss@next @tailwindcss/cli@next`
- The `@next` tag installs the v4 beta
- Some plugins may not be compatible yet

### Component Imports

Most component imports need to be updated from:

```typescript
import { Component } from '@/components/component';
```

to:

```typescript
import { Component } from '@/components/pages/pagename/component';
// or
import { Component } from '@/components/layout/component';
```

### Middleware

The `src/middleware.ts` handles locale routing. If you need custom middleware, integrate with next-intl's middleware.

### MDX Blog Posts

Blog posts are in `src/app/[locale]/blog/[blog-posts]/`. They need to be duplicated per locale or dynamically loaded based on locale.

## File Structure Reference

```
leapbylll-www/
├── src/
│   ├── app/
│   │   ├── [locale]/           ← All pages here
│   │   ├── globals.css         ← Tailwind v4 config
│   │   ├── prism.css
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── manifest.ts
│   ├── components/
│   │   ├── pages/              ← Page-specific components
│   │   ├── layout/             ← Navbar, Footer
│   │   ├── ui/                 ← UI primitives
│   │   └── ...                 ← Shared components
│   ├── i18n/                   ← i18n config
│   ├── messages/               ← Translations
│   ├── middleware.ts           ← Locale routing
│   ├── lib/                    ← Utils
│   ├── constants/
│   ├── context/
│   ├── layouts/
│   └── types/
├── public/                     ← Static assets
├── package.json
├── next.config.mjs
├── tsconfig.json
└── postcss.config.mjs
```

## Support

For questions or issues:

1. Check Next.js 15 documentation: https://nextjs.org/docs
2. Check next-intl documentation: https://next-intl-docs.vercel.app/
3. Check Tailwind CSS v4 documentation: https://tailwindcss.com/docs

## Migration Checklist

- [x] Directory structure with `src/` folder
- [x] Tailwind CSS v4 migration
- [x] next-intl setup
- [x] i18n configuration files
- [x] Message files (en, zh-HK)
- [x] SEO files (sitemap, robots, manifest)
- [x] Root layout with NextIntlClientProvider
- [x] Updated config files
- [x] Organized components by page
- [x] Updated navbar and navigation
- [x] Updated key components for translations
- [ ] Complete translation integration in all components
- [ ] Add language switcher
- [ ] Update all assets and images
- [ ] Test all pages and routes
- [ ] Production deployment
