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
    link: {
      primary: {
        color: '#0066FF',
      },
    },
  },
  fontFamily: '\'Fira Sans\', \'Fira Sans Condensed\', sans-serif',
  transition: '200ms ease-in-out',
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
