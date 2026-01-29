# Navbar Update - Startup Landing Style

## Changes Made

### 1. **Updated Navbar Components**

#### `src/components/layout/navbar/index.tsx`

- Added scroll detection using `useScroll` and `useMotionValueEvent` from Framer Motion
- Navbar changes appearance when user scrolls past 100px
- Navigation items now use anchor links (#features, #pricing, #contact)
- Supports locale translations

#### `src/components/layout/navbar/desktop-navbar.tsx`

- Added scroll-based animations:
  - Width changes from 100% to 40% when scrolled
  - Backdrop blur effect when scrolled
  - Smooth spring animations
  - Box shadow appears on scroll
- Hover effects on navigation items with animated background
- Login button animates out when scrolled
- Signup button always visible

#### `src/components/layout/navbar/mobile-navbar.tsx`

- Mobile responsive navbar with hamburger menu
- Scroll-based width animation (100% to 90%)
- Backdrop blur and shadow effects
- Animated menu dropdown
- Login and Signup buttons in mobile menu

### 2. **Added Section IDs to Home Page**

Updated `src/app/[locale]/page.tsx` with anchor IDs:

- `#features` - Features section
- `#pricing` - CTA/Pricing section
- `#contact` - Footer/Contact section

### 3. **Updated Translation Files**

Added "features" translation key:

- **English** (`en.json`): "Features"
- **Traditional Chinese** (`zh-HK.json`): "功能"

### 4. **Removed Unused File**

- Deleted `src/components/layout/navbar/navbar-item.tsx` (no longer needed)

## Features

### Desktop Navigation

- **Scroll Effect**: Navbar shrinks to 40% width and adds blur/shadow when scrolled
- **Hover Animation**: Background animation on hover for nav items
- **Button Animation**: Login button slides out when scrolled
- **Smooth Transitions**: Spring-based animations for natural feel

### Mobile Navigation

- **Responsive**: Full-screen dropdown menu
- **Animated Icons**: Menu icon changes to X when open
- **Scroll Adaptation**: Width adjusts when scrolled
- **Touch Friendly**: Large tap targets

### Internationalization

- All navigation labels support English and Traditional Chinese
- Uses `useTranslations` hook from next-intl
- Smooth language switching

## Scroll Behavior

The navbar uses Framer Motion's `useScroll` hook to detect scroll position:

```typescript
const { scrollY } = useScroll({
  target: ref,
  offset: ['start start', 'end start'],
});

useMotionValueEvent(scrollY, 'change', (latest) => {
  if (latest > 100) {
    setVisible(true);
  } else {
    setVisible(false);
  }
});
```

When `visible` is true (scroll > 100px):

- Desktop navbar shrinks to 40% width
- Backdrop blur activates
- Box shadow appears
- Login button animates out
- Navbar moves down 20px (y: 20)

## Smooth Scroll Setup

The `globals.css` already includes:

```css
html {
  scroll-padding-top: 80px;
  scroll-behavior: smooth;
}
```

This ensures:

- Smooth scrolling to anchor links
- Proper offset for fixed navbar height

## Testing

Test the navbar by:

1. Scrolling down the page - navbar should shrink and change appearance
2. Clicking navigation items - should smooth scroll to sections
3. Testing mobile menu - should open/close smoothly
4. Switching languages - all labels should update
5. Testing dark mode - all styles should adapt

## Browser Support

- Modern browsers with Framer Motion support
- CSS backdrop-filter support
- Smooth scroll behavior
