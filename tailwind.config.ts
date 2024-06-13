import { type Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      screens: {
        '420px': '420px',
        '500px': '500px',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },

        // My custom animations
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(64px)' },
          to: { opacity: '1', transform: 'translateY(0px)' },
        },
        'fade-down': {
          from: { opacity: '0', transform: 'translateY(-64px)' },
          to: { opacity: '1', transform: 'translateY(0px)' },
        },
        'fade-left': {
          from: { opacity: '0', transform: 'translateX(64px)' },
          to: { opacity: '1', transform: 'translateX(0px)' },
        },
        'fade-right': {
          from: { opacity: '0', transform: 'translateX(-64px)' },
          to: { opacity: '1', transform: 'translateX(0px)' },
        },
        breathing: {
          '0%, 20%, 40%, 60%, 80%, 100%': {
            transform: 'translate(0px, 0px)',
          },
          '10%': {
            transform: 'translate(3px, -6px)',
          },
          '30%': {
            transform: 'translate(2px, -6px)',
          },
          '50%': {
            transform: 'translate(-3px, -6px)',
          },
          /*
          '70%': {
            transform: 'translate(10px, 5px)',
          },*/
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',

        // My custom animations
        'fade-up': 'fade-up 1.5s 0.8s cubic-bezier(0.4, 0.5, 0.25 ,1.0) both',
        'fade-down':
          'fade-down 0.8s 0.2s cubic-bezier(0.4, 0.5, 0.25 ,1.0) both',
        'fade-left':
          'fade-left 3.0s 0.2s cubic-bezier(0.4, 0.5, 0.25 ,1.0) both',
        'fade-right':
          'fade-right 3.0s 0.2s cubic-bezier(0.4, 0.5, 0.25 ,1.0) both',

        breathing: 'breathing 20s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwind-gradient-mask-image'),
  ],
} satisfies Config
