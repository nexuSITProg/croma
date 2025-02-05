import logo from '../../assets/logo.svg';
import './Header.style.scss';
import { HeaderNav } from '../../components/Navigation/HeaderNav/HeaderNav';
import { Search } from '../../components/Search/Search';
import { BurgerMenu } from '../../components/BurgerMenu/BurgerMenu';
import { useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isTablet = useMediaQuery('(max-width: 1040px)');

  return (
    <header className='header'>
      <img src={logo} alt="logo" className='header__logo'/>
      {!isTablet ? 
        <HeaderNav />
      :
        <>
          <BurgerMenu 
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
          {isMenuOpen ? 
          <>
            <div className="backdrop" onClick={() => setIsMenuOpen(false)}></div>
            <div className="header__left-menu">
              <div className="header__left-menu__close" onClick={() => setIsMenuOpen(false)}>X</div>
              <HeaderNav 
                onClose={() => setIsMenuOpen(false)}
              />
            </div> 
          </>
          : 
          <></>}
        </>
      }
      <Search />
    </header>
  )
}