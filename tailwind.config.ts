import type { Config } from 'tailwindcss';
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', 'class'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        muted: 'var(--neutral-600)',
        'muted-dark': 'var(--neutral-300)',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      spacing: {
        '60': '15rem',
        '80': '20rem',
        '100': '25rem',
        '120': '30rem',
        '140': '35rem',
      },
      animation: {
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
        marquee: 'marquee var(--marquee-duration) linear infinite',
        'fade-in': 'fade-in 0.5s linear forwards',
        orbit: 'orbit var(--orbit-duration, 10s) linear infinite',
      },
      boxShadow: {
        derek:
          '`0px 0px 0px 1px rgb(0 0 0 / 0.06),\n        0px 1px 1px -0.5px rgb(0 0 0 / 0.06),\n        0px 3px 3px -1.5px rgb(0 0 0 / 0.06), \n        0px 6px 6px -3px rgb(0 0 0 / 0.06),\n        0px 12px 12px -6px rgb(0 0 0 / 0.06),\n        0px 24px 24px -12px rgb(0 0 0 / 0.06)`',
        aceternity:
          '`0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`',
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
        marquee: {
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
        'fade-in': {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        orbit: {
          '0%': {
            transform:
              'rotate(var(--initial-position, 0deg)) translate(var(--translate-position)) rotate(calc(-1 * var(--initial-position, 0deg)))',
          },
          '100%': {
            transform:
              'rotate(calc(var(--initial-position, 0deg) + 360deg)) translate(var(--translate-position)) rotate(calc(-1 * (var(--initial-position, 0deg) + 360deg)))',
          },
        },
        growUp: {
          from: {
            height: '0%',
            opacity: '0',
          },
          to: {
            height: 'var(--target-height)',
            opacity: '1',
          },
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [
    addVariablesForColors,
    add3DTransforms,
    addMaskUtilities,
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ':root': newVars,
  });
}

function add3DTransforms({ addUtilities }: any) {
  addUtilities({
    '.perspective-distant': {
      perspective: '1200px',
    },
    '.transform-3d': {
      transformStyle: 'preserve-3d',
    },
  });
}

function addMaskUtilities({ addUtilities }: any) {
  addUtilities({
    '.mask-radial-from-50%': {
      maskImage: 'radial-gradient(circle, white 50%, transparent 50%)',
      WebkitMaskImage: 'radial-gradient(circle, white 50%, transparent 50%)',
    },
    '.mask-r-from-50%': {
      maskImage:
        'radial-gradient(circle at right, white 50%, transparent 100%)',
      WebkitMaskImage:
        'radial-gradient(circle at right, white 50%, transparent 100%)',
    },
    '.mask-b-from-50%': {
      maskImage:
        'radial-gradient(circle at bottom, white 50%, transparent 100%)',
      WebkitMaskImage:
        'radial-gradient(circle at bottom, white 50%, transparent 100%)',
    },
    '.mask-radial-to-70%': {
      maskImage:
        'radial-gradient(circle, white 0%, white 70%, transparent 100%)',
      WebkitMaskImage:
        'radial-gradient(circle, white 0%, white 70%, transparent 100%)',
    },
    '.mask-radial-at-center': {
      maskPosition: 'center',
      WebkitMaskPosition: 'center',
    },
  });
}

export default config;
