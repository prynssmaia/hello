module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      cursor: {
        default: 'url(/assets/navigation.svg), default',
        point: 'url(/assets/pointer.svg), pointer',
      },
      colors: {
        'abso': {
          50: "#FFF0F1",
          100: "#FFE1E3",
          200: "#FFC8CF",
          300: "#FF9CA7",
          400: "#FF6479",
          500: "#FF2E4F",
          600: "#F30B39",
          700: "#E10234",
          800: "#AC0530",
          900: "#930830",
          950: "#530014"
        }
        primary: '#E10234',
        white10: '#FAFCFC',
        black0: '#444444',
        black10: '#2C2C2C',
        black19: '#191919',
        black20: '#202020',
        black11: '#111111',
      },
      fontFamily: {
        text: ["'Libre Franklin'", 'sans-serif'],
        number: ['Stalinist One', 'sans-serif'],
      },
      backgroundImage: {
        blk: 'linear-gradient(180.01deg, rgba(0, 0, 0, 0) 10.42%, rgba(7, 7, 7, 0.5) 40.63%, #0F0F0F 91.14%)',
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
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '15%': { transform: 'rotate(14.0deg)' },
          '30%': { transform: 'rotate(-8.0deg)' },
          '40%': { transform: 'rotate(14.0deg)' },
          '50%': { transform: 'rotate(-4.0deg)' },
          '60%': { transform: 'rotate(10.0deg)' },
          '70%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        wave: 'wave 1.5s infinite',
      },
    },
  },
  plugins: [],
};
