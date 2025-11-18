import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors - Modern Tech Blue
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#c7e0fd',
          300: '#a4cafe',
          400: '#7bb3fc',
          500: '#5a9bff', // Main primary
          600: '#3b7cf5',
          700: '#2b5de0',
          800: '#1f41b3',
          900: '#1a308f',
          950: '#0f1d5a',
        },
        // Secondary Colors - Modern Purple Accent
        secondary: {
          50: '#faf8ff',
          100: '#f3f0ff',
          200: '#e9e0ff',
          300: '#d7c9ff',
          400: '#be9dff',
          500: '#a573f5', // Main secondary
          600: '#8f51f0',
          700: '#7736d6',
          800: '#5f24b5',
          900: '#4a1a97',
          950: '#2d0d5f',
        },
        // Accent Color - Modern Teal
        accent: {
          50: '#f0fdfd',
          100: '#d9f7f7',
          200: '#b3eef0',
          300: '#7de3e8',
          400: '#45d4dd',
          500: '#1ec8d3', // Main accent
          600: '#16aab8',
          700: '#138a96',
          800: '#136e7a',
          900: '#135968',
          950: '#083b44',
        },
        // Success - Green
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#145231',
          950: '#052e16',
        },
        // Warning - Orange
        warning: {
          50: '#fefae8',
          100: '#fdf4c6',
          200: '#fbe688',
          300: '#f8d750',
          400: '#f4c430',
          500: '#eaa500',
          600: '#ca8a00',
          700: '#a86b00',
          800: '#8b5500',
          900: '#734600',
          950: '#422600',
        },
        // Error - Red
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        // Neutral - Dark gray for text
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
      },
      backgroundColor: {
        // Gradient backgrounds for sections
        'gradient-start': 'linear-gradient(135deg, #f0f7ff 0%, #faf8ff 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0f1d5a 0%, #2d0d5f 100%)',
        'gradient-accent': 'linear-gradient(135deg, #1ec8d3 0%, #5a9bff 100%)',
      },
      fontSize: {
        'display-xl': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '700' }],
        'heading-xl': ['2rem', { lineHeight: '1.3', fontWeight: '700' }],
        'heading-lg': ['1.5rem', { lineHeight: '1.4', fontWeight: '700' }],
        'heading-md': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-sm': ['1.125rem', { lineHeight: '1.5', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body-base': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.01em' }],
      },
      spacing: {
        'gutter': '1.5rem',
        'section-xs': '2rem',
        'section-sm': '3rem',
        'section-md': '4rem',
        'section-lg': '6rem',
        'section-xl': '8rem',
      },
      borderRadius: {
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'base': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'elevation': '0 20px 25px -5px rgba(90, 155, 255, 0.15), 0 10px 10px -5px rgba(165, 115, 245, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
