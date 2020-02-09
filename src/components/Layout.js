import React from 'react';
import styled,{ ThemeProvider } from 'styled-components';

import Header from './Header';
import PaceForm from './PaceForm';
import {Footer} from './Footer';

// Define our theme
const theme = {
  colors: {
    blueDark: "#2a2f43",
    blueLight: "#353a4f",
    highLights: "#38c3d8",
    white: "#ffff",
  },
  fonts: ["sans-serif", "Roboto"],
  radius:  {
    body: "14px",
    inputs: "4px",
  },
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
