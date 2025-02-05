import { NavigationItem } from '../../../types/navigation.types';
import { NavLink } from 'react-router-dom';
import './NavItem.style.scss';

export const NavItem : React.FC<NavigationItem> = ({ title, href, onClose }) => {
  return (
    <li className="nav__item">
      <NavLink
        to={href}
        className={({ isActive }) => (isActive ? "nav__item__link nav__item__link--active" : "nav__item__link")}
        onClick={onClose}
      >
        <p className='p-third'>{title}</p>
      </NavLink>
    </li>
  )
}