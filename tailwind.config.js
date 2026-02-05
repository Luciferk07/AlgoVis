/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f8fafc', // Slate-50
        surface: '#ffffff',    // White
        primary: '#3b82f6',    // Blue-500
        secondary: '#64748b',  // Slate-500
        accent: '#f59e0b',     // Amber-500
        border: '#e2e8f0',     // Slate-200
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}
