module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      cursor: {
        default: 'url(/assets/navigation.svg), default',
        point: 'url(/assets/pointer.svg), pointer',
      },
      colors: {
        primary: '#E10234',
        white10: '#FAFCFC',
        black0: '#444444',
        black10: '#2C2C2C',
        black19: '#191919',
        black20: '#202020',
        black11: '#111111',
        blue10: '#469FF4',
        green10: '#ABD1C6',
        green20: '#004643',
        green30: '#001E1D',
        yellow30: '#F9BC60',
        twitter: '#1DA1F2',
      },
      fontFamily: {
        text: ["'Libre Franklin'", 'sans-serif'],
        number: ['Stalinist One', 'sans-serif'],
      },
      backgroundImage: {
        portait: "url('/assets/bg-hero.png')",
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
      screens: {
        xs: '350px',
        ss: '620px',
        sm: '768px',
        md: '1060px',
        lg: '1200px',
        xl: '1700px',
      },
    },
  },
  plugins: [],
};
