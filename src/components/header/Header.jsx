import { useEffect, useState } from 'react';
import { SlMenu } from 'react-icons/sl';
import { VscChromeClose } from 'react-icons/vsc';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/movix-logo.svg';

import classes from './Header.module.scss';

function Header() {
  const [headerState, setHeaderState] = useState('top');
  const [mobileMenu, setMobileMenu] = useState(false);

  const openMobileMenu = () => {
    setMobileMenu(true);
  };

  const menuHandler = () => {
    setMobileMenu(false);
  };

  useEffect(() => {
    const scrollHandler = () => {
      const scrollNum = window.scrollY;
      if (scrollNum > 200) {
        setHeaderState('hide');
      } else {
        setHeaderState('top');
      }
    };
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <header
      className={`${classes.header} ${mobileMenu && classes.mobileView} ${
        classes[headerState]
      }`}
    >
      <Link to="/">
        <img src={logo} alt="logo" className={classes.logo} />
      </Link>

      <ul className={classes.menu}>
        <li className={classes.menu__item}>
          <NavLink
            to="/explore/movie"
            className={({ isActive }) => (isActive ? classes.active : '')}
            onClick={menuHandler}
          >
            Movies
          </NavLink>
        </li>
        <li className={classes.menu__item}>
          <NavLink
            to="/explore/tv"
            className={({ isActive }) => (isActive ? classes.active : '')}
            onClick={menuHandler}
          >
            TV Shows
          </NavLink>
        </li>
      </ul>
      <div className={classes.mobileMenuItems}>
        {mobileMenu ? (
          <VscChromeClose onClick={menuHandler} />
        ) : (
          <SlMenu onClick={openMobileMenu} />
        )}
      </div>
    </header>
  );
}

export default Header;
