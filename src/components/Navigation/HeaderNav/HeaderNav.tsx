import './HeaderNav.style.scss';
import { navigationItems } from '../../../data/headerNav.data';
import { NavItem } from '../NavItem/NavItem';
import { NavDropdownItem } from '../NavDropdownItem/NavDropdownItem';

interface HeaderNavProps {
  onClose?: () => void
}

export const HeaderNav : React.FC<HeaderNavProps> = ({ onClose }) => {
  return (
    <nav className="header__nav">
      <ul className="header__nav__menu">
        {navigationItems.map((item) =>
          item.type === 'link' ? (
            <NavItem 
              key={item.title}
              type={item.type}
              title={item.title}
              href={item.href}
              onClose={onClose}
            />
          ) : (
            <NavDropdownItem 
              key={item.title}
              type={item.type}
              title={item.title}
              items={item.items}
              onClose={onClose}
            />
          )
        )}
      </ul>
    </nav>
  )
}