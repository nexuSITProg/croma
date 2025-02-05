import { Link } from 'react-router-dom';
import './Button.style.scss';
import { ReactNode } from 'react';

interface ButtonProps {
  link: string,
  type: 'primary' | 'secondary' | 'ghost'
  children: ReactNode
}

export const Button : React.FC<ButtonProps> = ({ link, type, children }) => {
  return (
    <Link to={link}>
      <button className={`btn btn__${type}`}>
        {children}
        <svg className='btn__img' width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.7806 8.53068L11.0306 15.2807C10.8899 15.4214 10.699 15.5005 10.5 15.5005C10.301 15.5005 10.1101 15.4214 9.96937 15.2807C9.82864 15.1399 9.74958 14.9491 9.74958 14.7501C9.74958 14.551 9.82864 14.3602 9.96937 14.2194L15.4397 8.75005H0.75C0.551088 8.75005 0.360322 8.67103 0.21967 8.53038C0.0790178 8.38973 0 8.19896 0 8.00005C0 7.80114 0.0790178 7.61037 0.21967 7.46972C0.360322 7.32907 0.551088 7.25005 0.75 7.25005H15.4397L9.96937 1.78068C9.82864 1.63995 9.74958 1.44907 9.74958 1.25005C9.74958 1.05103 9.82864 0.860156 9.96937 0.719426C10.1101 0.578695 10.301 0.499634 10.5 0.499634C10.699 0.499634 10.8899 0.578695 11.0306 0.719426L17.7806 7.46943C17.8504 7.53908 17.9057 7.6218 17.9434 7.71285C17.9812 7.80389 18.0006 7.90149 18.0006 8.00005C18.0006 8.09861 17.9812 8.19621 17.9434 8.28726C17.9057 8.3783 17.8504 8.46102 17.7806 8.53068Z" className={`btn__img__${type}`} fill="none"/>
        </svg>
      </button>
    </Link>
  )
}