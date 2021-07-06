import React from 'react';

//images
import LogoWhite from '../../assets/LogoWhite.svg'

//icons
import { AiFillFacebook, AiFillLinkedin, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'



//styles
import '../../styles/footer.scss';

const Footer: React.FC = () => {
  return (
      <div className="footer-container">
          <div className="footer-content-top">
            <img src={LogoWhite} alt="Logo" />
          </div>
          <div className="footer-content-bottom">
            <p>© Copyright 2021. Todos os direitos reservados.</p>
          </div>
      </div>
  )
}

export default Footer;