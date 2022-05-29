import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a to='https://www.instagram.com'>Instagram</a>
            <a to='https://www.facebook.com'>Facebook</a>
            <a to='https://www.youtube.com'>Youtube</a>
            <a to='https://www.twitter.com'>Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;