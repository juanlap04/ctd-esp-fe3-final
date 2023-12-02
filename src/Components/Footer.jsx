import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <img src="/images/DH.png" alt='DH-logo' className="dh-logo" />

        <div className="social-icons">
          <img src={'/images/ico-facebook.png'}
               alt='facebook'
               className='social-icon'/>
          <img src={'/images/ico-instagram.png'}
               alt='instagram'
                className='social-icon'/>
          <img src={'/images/ico-tiktok.png'}
               alt='tiktok'
               className='social-icon'/>
          <img src={'/images/ico-whatsapp.png'}
               alt='whatsapp'
               className='social-icon'/>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
