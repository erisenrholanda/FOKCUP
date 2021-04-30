import React from 'react';
import style from './index.css';
import Logo from './img/Logo.png'

function Header() {
  return(
    <div style={style} className="body">
      <header>
        <li>
            <a href="./">
              <img src={Logo} alt="FOK" className="img" />
            </a>
          </li>
      </header>
      <main>
        <span className='nomedoTime'>FOK CUP</span>
        <span className='descricao'>Organização de Campeonatos de Free Fire</span>
        <nav>
          <div className='box-contact'>
            <a href="https://api.whatsapp.com/message/LKMSVGWEIOTEA1" className='link-contact'>
              <img src="https://img.icons8.com/nolan/64/whatsapp.png" alt='WhatsApp'/>
              <span>WhatsApp</span>
            </a>
          </div>
          <div className='box-contact'>
            <a href="https://www.instagram.com/fokgg/" className='link-contact'>
              <img src="https://img.icons8.com/nolan/64/instagram-new.png" alt="Instagram" />
              <span>Instagram</span>
            </a>
          </div>
          {/* <div className='box-contact'>
            <a href="http://www.youtube.com" className='link-contact'>
              <img src="https://img.icons8.com/nolan/64/youtube-music.png" alt="Youtube" />
              <span>Youtube</span>
            </a>
          </div>
          <div className='box-contact'>
              <a href="http://www.discord.com" className='link-contact'>
                <img src="https://img.icons8.com/nolan/64/discord-logo.png" alt="Discord" />
                <span>Discord</span>
              </a>
          </div> */}
        </nav>
      </main>
      <footer>
        <span></span>
      </footer>
    </div>
  )
}

export default Header
