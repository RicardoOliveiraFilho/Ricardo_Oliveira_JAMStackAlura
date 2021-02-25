import typographyVariants from './typographyVariants';

const theme = {
  colors: {
    background: {
      primary: {
        color: '#E9C46A',
      },
      secundary: {
        color: '#FFF8E6',
      },
    },
    primary: {
      main: {
        color: '#000000',
        contrastColor: '#FFFFFF',
      },
    },
  },
  fontFamily: '\'Fira Sans\', \'Fira Sans Condensed\', sans-serif',
  typographyVariants,
  spaceValues: {
    xs: 16,
    md: 9,
  },
  breakpoints: {
    xs: 0,
    md: 768,
  },
};

export default theme;
