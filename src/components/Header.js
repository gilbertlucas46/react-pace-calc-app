import React from "react";
import styled from 'styled-components';

const HeaderContainer = styled.header`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

const Header = () => {
  return (
    <HeaderContainer className="App-header">
      <h1>Calculate your Pace</h1>
    </HeaderContainer>
  )
}

export default Header;
