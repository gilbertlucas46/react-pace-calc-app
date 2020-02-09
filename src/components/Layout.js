import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const MainLayout = styled.main`


`;

const Layout = ( {children}) => {
  return (
    <>
      <Header/>
      <MainLayout>
       {children}
      </MainLayout>
    </>
  )
}

export default Layout;
