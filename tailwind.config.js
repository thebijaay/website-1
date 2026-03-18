/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"]
      },
      animation: {
        spin_slow: 'spin 6s linear infinite'
      },
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001F',
        lightBg: '#fcf4ff',
        darkBg: '#11001F',
      },
      backgroundImage: {
        // Add a custom light-mode gradient
        'light-gradient': 'linear-gradient(135deg, #8e44ad, #ff6ec7, #00c6ff)',
      },
      boxShadow: {
        'black': '4px 4px 0 #000',
        'white': '4px 4px 0 #fff',
      }
    },
  },
  darkMode: 'selector', // body.dark-mode will trigger dark mode
  plugins: [],
}
