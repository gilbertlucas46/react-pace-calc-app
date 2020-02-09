import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  h1 {
    color: ${props => props.theme.colors.white};
    font-weight: normal;
  }
`;

const Header = () => {
  return (
    <HeaderContainer className="App-header">
      <h1><span>⏱️</span> Calculate your Pace!</h1>
    </HeaderContainer>
  );
};

export default Header;
