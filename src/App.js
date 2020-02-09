import React from "react";
import Layout from './components/Layout';
import './components/styles/globals.scss';

function App({children}) {
  return (
    <Layout>
      {children}
    </Layout>
  );
}

export default App;
