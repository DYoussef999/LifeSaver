/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      animation: {
        ripple: 'ripple var(--duration, 3s) ease calc(var(--i, 0) * 0.06s) infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
        'slide-up-delayed': 'slideUp 0.4s ease-out 0.15s forwards',
        'slide-up-delayed-2': 'slideUp 0.4s ease-out 0.3s forwards',
        'pulse-ring': 'pulseRing 2s ease-in-out infinite',
        'checkmark-draw': 'checkmarkDraw 0.6s ease-in-out 0.2s forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'phone-ring': 'phoneRing 0.5s ease-in-out infinite',
        'glow-breathe': 'glowBreathe 2.5s ease-in-out infinite',
      },
      keyframes: {
        ripple: {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
          '50%': { transform: 'translate(-50%, -50%) scale(0.9)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        checkmarkDraw: {
          from: { strokeDashoffset: '100' },
          to: { strokeDashoffset: '0' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.5)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        phoneRing: {
          '0%, 100%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(8deg)' },
        },
        glowBreathe: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
