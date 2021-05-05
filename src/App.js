import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import styles from './global.css';

function App(link, icon, descricaoImg, nome) {
  return (
    <div className="App" styles={styles.styles}>
      <>
        <Header />
        <Main />
        <Footer />
      </>
    </div>
  );
}

export default App;
