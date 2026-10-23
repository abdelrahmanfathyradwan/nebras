export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Playfair Display"', 'Georgia', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        secondary: {
          DEFAULT: "#023535",
          50: "#e6f0f0",
          100: "#cce1e1",
          200: "#99c3c3",
          300: "#66a5a5",
          400: "#338787",
          500: "#023535",
          600: "#022a2a",
          700: "#012020",
          800: "#011515",
          900: "#000b0b",
        },
        primary: {
          DEFAULT: "#FF7D29",
          50: "#fff2e9",
          100: "#ffe5d3",
          200: "#ffcba7",
          300: "#ffb17c",
          400: "#ff9750",
          500: "#FF7D29",
          600: "#e06615",
          700: "#b25110",
          800: "#853c0c",
          900: "#592707",
        },
        brand: {
          'green-900': '#0B5A3A',
          'green-700': '#0E7A4B',
          'green-600': '#2FA866',
          'orange-500': '#F29A1F',
          'orange-600': '#D4850A',
        },
        sage: {
          100: '#EEEFE6',
          200: '#E2E3D8',
        },
        ink: {
          900: '#12372A',
          800: '#1A4D3A',
          700: '#236B50',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out both',
        'fade-in': 'fadeIn 0.4s ease-out both',
        'scale-in': 'scaleIn 0.3s ease-out both',
        'slide-down': 'slideDown 0.3s ease-out both',
        'pulse-gentle': 'pulse-gentle 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-gentle': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(2, 53, 53, 0.4)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 0 0 12px rgba(2, 53, 53, 0)' },
        },
      },
    },
  },
  plugins: [],
}