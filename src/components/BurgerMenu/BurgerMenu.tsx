import './BurgerMenu.style.scss';

interface BurgerMenuProps {
  onClick: () => void;
}

export const BurgerMenu : React.FC<BurgerMenuProps> = ({ onClick }) => {
  return (
    <button className="burger-menu" onClick={onClick}>
      <div className="burger-menu__separator"></div>
      <div className="burger-menu__separator"></div>
      <div className="burger-menu__separator"></div>
    </button>
  )
}