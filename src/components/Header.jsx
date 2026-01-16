import icon from '../assets/icons/logo.png';
import SearhForm from './SearchForm';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  const { searchAnime, setSearchAnime } = props;

  return (
    <div className="header">
      <div className="header__logo">
        <img
          className="haeder__icon"
          src={icon}
          alt="icon"
          width={60}
          height={60}
        />
        <h1 className="header__title">nimeInfo</h1>
      </div>
      <nav className="header__menu">
        <NavLink
          to="/"
          end
        >
          Меню
        </NavLink>

        <NavLink to="/favorites">Любимые фильмы</NavLink>
      </nav>
      <SearhForm
        searchAnime={searchAnime}
        setSearchAnime={setSearchAnime}
      />
    </div>
  );
};

export default Header;
