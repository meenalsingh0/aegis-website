/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-dark': '#0A0A0F',
        'cyber-darker': '#050508',
        'cyber-gray': '#1A1A23',
        'cyber-light': '#2A2A33',
        'cyber-cyan': '#00D4FF',
        'cyber-purple': '#9D4EDD',
        'cyber-green': '#00FF88',
        'cyber-red': '#FF0055',
        'terminal-green': '#00FF41',
        'terminal-black': '#0D0208',
      },
      fontFamily: {
        'mono': ['IBM Plex Mono', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
        'title': ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'type': 'type 3.5s steps(40, end)',
        'blink': 'blink 1s step-end infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'glitch': 'glitch 0.3s linear infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
            opacity: 1,
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(0, 212, 255, 0.8)',
            opacity: 0.8,
          },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        type: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#00D4FF' },
        },
        'fade-in': {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          'from': { transform: 'translateY(20px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        shimmer: {
          '0%': { 'background-position': '-1000px 0' },
          '100%': { 'background-position': '1000px 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, rgba(0, 212, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 212, 255, 0.1) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}