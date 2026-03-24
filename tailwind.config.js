/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      colors: {
        accent: {
          50: 'rgb(var(--accent-50, 255 251 235) / <alpha-value>)',
          100: 'rgb(var(--accent-100, 254 243 199) / <alpha-value>)',
          200: 'rgb(var(--accent-200, 253 230 138) / <alpha-value>)',
          300: 'rgb(var(--accent-300, 252 211 77) / <alpha-value>)',
          400: 'rgb(var(--accent-400, 251 191 36) / <alpha-value>)',
          500: 'rgb(var(--accent-500, 245 158 11) / <alpha-value>)',
          600: 'rgb(var(--accent-600, 217 119 6) / <alpha-value>)',
          700: 'rgb(var(--accent-700, 180 83 9) / <alpha-value>)',
          800: 'rgb(var(--accent-800, 146 64 14) / <alpha-value>)',
          900: 'rgb(var(--accent-900, 120 53 15) / <alpha-value>)',
        },
        secondary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        warm: {
          50: 'rgb(var(--warm-50) / <alpha-value>)',
          100: 'rgb(var(--warm-100) / <alpha-value>)',
          200: 'rgb(var(--warm-200) / <alpha-value>)',
          300: 'rgb(var(--warm-300) / <alpha-value>)',
          400: 'rgb(var(--warm-400) / <alpha-value>)',
          500: 'rgb(var(--warm-500) / <alpha-value>)',
          600: 'rgb(var(--warm-600) / <alpha-value>)',
          700: 'rgb(var(--warm-700) / <alpha-value>)',
          800: 'rgb(var(--warm-800) / <alpha-value>)',
          900: 'rgb(var(--warm-900) / <alpha-value>)',
          950: 'rgb(var(--warm-950) / <alpha-value>)',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'float': 'float 8s ease-in-out infinite',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-25px) rotate(1deg)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '30%': { transform: 'translate(3%, -15%)' },
          '50%': { transform: 'translate(12%, 9%)' },
          '70%': { transform: 'translate(9%, 4%)' },
          '90%': { transform: 'translate(-1%, 7%)' },
        },
      },
    },
  },
  plugins: [],
};
