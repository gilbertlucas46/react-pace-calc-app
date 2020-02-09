import React from 'react';
import styled,{ ThemeProvider } from 'styled-components';

import Header from './Header';
import PaceForm from './PaceForm';
import {Footer} from './Footer';

// Define our theme
const theme = {
  colors: {
    powderWhite: "#FFFDF9",
    persianGreen: "#06B49A",
    lightBlue: "#AFDBD2",
    onyx: "#36313D"
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  },
  maxWidth: "600px"
}

const MainLayout = styled.main`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
`;

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <MainLayout>
        <PaceForm/>
      </MainLayout>
      <Footer/>
    </ThemeProvider>
  )
}

export default Layout;
