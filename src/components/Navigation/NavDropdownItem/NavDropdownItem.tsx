import { NavLink } from 'react-router-dom';
import { NavigationDropdownItem } from '../../../types/navigation.types';
import './NavDropdownItem.style.scss';
import { useState } from 'react';
import arrow from '../../../assets/arrow-down.svg';

export const NavDropdownItem : React.FC<NavigationDropdownItem> = ({ title, items, onClose }) => {
  const [isModalOpen, setIsModalOpen]= useState(false);
  const handleModal = () => {
    setIsModalOpen(prev => !prev)
  }
  

  return (
    <li className="nav__item nav__dropdown" onClick={handleModal}>
      <div className='nav__dropdown__block'>
        <p className='p-third nav__dropdown__title'>{title}</p>
        <img src={arrow} alt="arrow" className='nav__dropdown__img'/>
      </div>

      {isModalOpen ? 
      <div className="dropdown__modal">
        {items.map(item => (
          <NavLink
            to={item.href}
            className={({ isActive }) => (isActive ? "nav__item__link nav__item__link--active" : "nav__item__link")}
            onClick={onClose}
          >
            <span className='nav__dropdown__item p-third'>{item.title}</span>
            <hr className='nav__dropdown__item__separator'/>
          </NavLink>
        ))}
      </div> : ''}
    </li>
  )
}