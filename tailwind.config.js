/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#070709',
          900: '#070709',
          800: '#0d0d11',
          700: '#131318',
          600: '#1b1b22',
        },
        charcoal: {
          DEFAULT: '#111115',
          card: '#121217',
          surface: '#16161d',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        crimson: {
          DEFAULT: '#e11d2e',
          glow: '#ff283b',
          dark: '#9b111e',
          light: '#ff4d5e',
          subtle: 'rgba(225, 29, 46, 0.12)',
        },
      },
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-crimson': '0 0 25px rgba(225, 29, 46, 0.35)',
        'glow-crimson-lg': '0 0 50px rgba(225, 29, 46, 0.45)',
        'glow-card': '0 10px 30px -10px rgba(0,0,0,0.7), 0 0 1px 1px rgba(255,255,255,0.05)',
      },
      animation: {
        'spin-slow': 'spin 22s linear infinite',
        'marquee': 'marquee 28s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
