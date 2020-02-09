import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.header`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  text-align: center;
  margin: 2em auto;
  color: ${props => props.theme.colors.purpleLight};
`;

export const Footer = () => {
  return (
    <FooterContainer>
     Created with <span role="img" aria-label="love">❤️</span> 
    </FooterContainer>
  )
}
