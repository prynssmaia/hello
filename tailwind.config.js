module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#350207',
      },
      fontFamily: {
        text: ["'Libre Franklin'", 'sans-serif'],
      },
      backgroundImage: {
        portait: "url('./assets/bg-hero.png')",
        hero: 'linear-gradient(121.36deg, #D7057F 23%, #C8098A 44%, #1442DB 92%)',
      },
      boxShadow: {
        pink: '0px 0px 32px #D7057F85',
        red: '0px 0px 32px #BE09C880',
        blue: '0px 0px 24px #1442DB70',
      },
    },
  },
  plugins: [],
};
