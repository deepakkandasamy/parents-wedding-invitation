module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'], // Include both `src` and `app` directories
    theme: {
      extend: {
        colors: {
          ivory: '#f8f5e9',
          antiqueGold: '#d4af37',
        },
        fontFamily: {
          serif: ['Playfair Display', 'serif'],
        },
      },
    },
    plugins: [],
  };