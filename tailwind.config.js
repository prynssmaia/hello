module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      cursor: {
        default: 'url(/assets/navigation.svg), default',
        point: 'url(/assets/pointer.svg), pointer',
      },
      colors: {
        white10: '#FAFCFC',
        black10: '#2C2C2C',
        black20: '#111111',
        blue10: '#469FF4',
        primary: '#350207',
      },
      fontFamily: {
        text: ["'Libre Franklin'", 'sans-serif'],
        number: ['Stalinist One', 'sans-serif'],
      },
      backgroundImage: {
        portait: "url('/assets/bg-hero.png')",
        home: 'linear-gradient(104.4deg, #FFA28F 23.54%, #FF8870 92.45%)',
        hero: 'linear-gradient(121.36deg, #D7057F 23%, #C8098A 14%, #1442DB 48%)',
        blk: 'linear-gradient(180.01deg, rgba(0, 0, 0, 0) 10.42%, rgba(7, 7, 7, 0.5) 40.63%, #0F0F0F 91.14%)',
      },
      boxShadow: {
        pink: '0px 0px 32px #D7057F85',
        red: '0px 0px 32px #BE09C880',
        blue: '0px 0px 24px #1442DB70',
      },
      dropShadow: {
        white: '-5px 6px 0px #FFFFFF',
      },
    },
  },
  plugins: [],
};
