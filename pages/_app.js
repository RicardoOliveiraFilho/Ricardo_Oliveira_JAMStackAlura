import React from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

import GlobalStyle from '../src/theme/GlobalStyle';
import theme from '../src/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfólio - Ricardo Oliveira</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&family=Fira+Sans+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
