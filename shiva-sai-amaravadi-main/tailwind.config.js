/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom palette from provided image
        primary: {
          50: '#fef7ed',
          100: '#fdedd3',
          200: '#fad7a5',
          300: '#f6bc6d',
          400: '#D4A574', // Main warm brown
          500: '#c7934a',
          600: '#a67c3e',
          700: '#8a6434',
          800: '#715030',
          900: '#5d432a',
        },
        secondary: {
          50: '#fdf4f3',
          100: '#fce7e6',
          200: '#f9d3d1',
          300: '#f4b2ae',
          400: '#B8734A', // Reddish brown
          500: '#a85a3d',
          600: '#8f4830',
          700: '#773b26',
          800: '#63321f',
          900: '#532c1c',
        },
        accent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#D45A5A', // Coral red
          500: '#c53030',
          600: '#b91c1c',
          700: '#991b1b',
          800: '#7f1d1d',
          900: '#6b1a1a',
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#5A5A5A', // Dark gray
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        muted: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#7A9B9B', // Blue-gray
          600: '#64748b',
          700: '#475569',
          800: '#334155',
          900: '#1e293b',
        }
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'typewriter': 'typewriter 4s steps(40) infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(212, 165, 116, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(212, 165, 116, 0.8), 0 0 30px rgba(212, 165, 116, 0.6)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        typewriter: {
          '0%, 20%': { width: '0ch' },
          '30%, 70%': { width: '20ch' },
          '80%, 100%': { width: '0ch' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
      }
    },
  },
  plugins: [],
};