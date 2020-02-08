import React from "react";
import styled from 'styled-components';
import logo from '../images/logo.svg';

const HeaderContainer = styled.header`

`;

const Header = () => {
  return (
    <HeaderContainer className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </HeaderContainer>
  )
}

export default Header;
