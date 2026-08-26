/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f9f4',
          100: '#dcf0e3',
          150: '#c9e6d4',
          200: '#bce0cb',
          300: '#8ec9a8',
          400: '#5aab80',
          500: '#3a8d61',
          600: '#26734f',
          700: '#225b3f',
          800: '#1d4a34',
          900: '#08251b',
          950: '#051711',
        },
        emerald2: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        ink: {
          900: '#1a1f1b',
          800: '#2a312d',
          700: '#3a4239',
          600: '#53615b',
          500: '#6b736b',
          400: '#8a918a',
        },
        cream: '#f7f8f5',
        mist: '#eef2ee',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(23,61,44,0.04), 0 8px 24px -12px rgba(23,61,44,0.10)',
        card: '0 1px 2px rgba(23,61,44,0.05), 0 12px 32px -16px rgba(23,61,44,0.12)',
        glow: '0 0 0 1px rgba(42,113,77,0.12), 0 20px 48px -20px rgba(42,113,77,0.30)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'flow': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'count-up': {
          '0%': { opacity: '0', transform: 'translateY(8px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fade-in 0.6s ease both',
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'flow': 'flow 2.8s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};
