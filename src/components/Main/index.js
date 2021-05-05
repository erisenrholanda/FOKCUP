import React from 'react';
import './index.css';
import Link from '../Nav'

function Main() {
  return(
    <>
    <main>
      <span className='nomedoTime'>FOK CUP</span>
      <span className='descricao'>Organização de Campeonatos de Free Fire</span>
      <Link link = 'https://api.whatsapp.com/message/LKMSVGWEIOTEA1'
        icon = 'https://img.icons8.com/nolan/64/whatsapp.png'
        descricaoImg= 'WhatsApp' nome= 'WhatsApp'
      />
      <Link link = 'https://www.instagram.com/fokgg/'
        icon = 'https://img.icons8.com/nolan/64/instagram-new.png'
        descricaoImg= 'Instagram' nome= 'Instagram'
      />
      {/* <Link link = ''
        icon = 'https://img.icons8.com/nolan/64/youtube-music.png'
        descricaoImg= 'Youtube' nome= 'Youtube'
      />
      <Link link = ''
        icon = 'https://img.icons8.com/nolan/64/discord-logo.png'
        descricaoImg= 'Discord' nome= 'Discord'
      /> */}
    </main>
    </>
  );
}

export default Main