import classes from './Footer.module.scss';
import ContentWrapper from '../contentWrapper/ContentWrapper';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <ContentWrapper className="footer">
        <ul className={classes.footer__menu}>
          <li className={classes['footer__menu-item']}>Terms Of Use</li>
          <li className={classes['footer__menu-item']}>Privacy-Policy</li>
          <li className={classes['footer__menu-item']}>About</li>
          <li className={classes['footer__menu-item']}>Blog</li>
          <li className={classes['footer__menu-item']}>FAQ</li>
        </ul>
        <div className={classes['footer__text-info']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div className={classes['footer__social']}>
          <span className={classes['footer__social-icon']}>
            <FaFacebookF />
          </span>
          <span className={classes['footer__social-icon']}>
            <FaInstagram />
          </span>
          <span className={classes['footer__social-icon']}>
            <FaTwitter />
          </span>
          <span className={classes['footer__social-icon']}>
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
