import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCookie } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-2 px-4 text-center w-full relative z-20">
      <div className="mb-2">
        <p className="text-sm">Made with <FontAwesomeIcon icon={faHeart} className="text-red-500" /> and <FontAwesomeIcon icon={faCookie} className="text-yellow-500" /> by Princess Hemen</p>
        <p className="text-xs">Copyright 2024 ©</p>
      </div>
      <div className="flex justify-center space-x-4">
        <a href="https://www.linkedin.com/in/princess-hemen" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="text-blue-700" size="lg" />
        </a>
        <a href="https://github.com/PrincessHemen" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="text-white" size="lg" />
        </a>
        <a href="https://t.me/p_d_hemen" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTelegram} className="text-blue-400" size="lg" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
