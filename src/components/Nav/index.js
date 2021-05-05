import React from 'react';
import './index.css';

function Nav(props) {
  return(
    <nav>
      <div className='box-contact'>
        <a href={props.link} className='link-contact'>
          <img src={props.icon} alt={props.descricaoImg} />
          <span>{props.nome}</span>
        </a>
      </div>
    </nav>
  );
}
export default Nav;
