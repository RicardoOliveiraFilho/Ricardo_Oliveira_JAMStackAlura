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
  marginValues: {
    xs: '16px',
    md: '9px',
  },
};

export default theme;
