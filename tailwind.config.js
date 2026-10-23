export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        'rb': ['RB Font', 'sans-serif'],
      },
      colors: {
        secondary: {
          DEFAULT: "#023535",       // اللون الأساسي (أزرق-أخضر غامق)
          50: "#e6f0f0",           // فاتح جداً (10%)
          100: "#cce1e1",          // فاتح (20%)
          200: "#99c3c3",          // فاتح (40%)
          300: "#66a5a5",          // فاتح (60%)
          400: "#338787",          // فاتح (80%)
          500: "#023535",          // اللون الأساسي
          600: "#022a2a",          // غامق قليلاً (90%)
          700: "#012020",          // غامق (80%)
          800: "#011515",          // غامق (60%)
          900: "#000b0b",          // غامق جداً (40%)
        },
        primary: {
          DEFAULT: "#FF7D29",      // اللون البرتقالي الأساسي الجديد
          50: "#fff2e9",           // فاتح جداً
          100: "#ffe5d3",          // فاتح
          200: "#ffcba7",          // فاتح متوسط
          300: "#ffb17c",          // متوسط
          400: "#ff9750",          // غامق قليلاً
          500: "#FF7D29",          // اللون الأساسي
          600: "#e06615",          // غامق
          700: "#b25110",          // غامق أكثر
          800: "#853c0c",          // غامق جداً
          900: "#592707",          // غامق جداً جداً
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