import React from 'react';
import './index.css';
import Logo from './img/Logo.png';

function Header() {
  return(
    <>
      <header>
        <li>
          <img src={Logo} alt="FOK" />
        </li>
      </header>
    </>
  )
}

export default Header
