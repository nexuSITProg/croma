import searchSVG from '../../assets/search.svg';
import './Search.style.scss';
import { useMediaQuery } from 'usehooks-ts';

export const Search = () => {
  const isTablet = useMediaQuery('(max-width: 1040px)');

  return (
    <>
      {!isTablet ? 
      <div className="search">
        <input placeholder='Search' type="text" className='search__input' />
        <img src={searchSVG} alt="search-icon" className='search__icon' />
      </div> 
      : 
      <img src={searchSVG} alt="search-icon" className='search__icon' />
      }
    </>
  )
}