import { useEffect, useState } from 'react';
import icon from '../assets/icons/logo.png';
import SearhForm from './SearchForm';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  const { searchAnime, setSearchAnime } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
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

      <div className="header__actions">
        <SearhForm
          searchAnime={searchAnime}
          setSearchAnime={setSearchAnime}
        />

        <button
          className={`burger ${isMenuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`overlay ${isMenuOpen ? 'is-open' : ''}`}
        onClick={closeMenu}
      />

      {/* Drawer */}
      <aside className={`drawer ${isMenuOpen ? 'is-open' : ''}`}>
        <div className="drawer__top">
          <span className="drawer__title">Меню</span>
          <button
            className="drawer__close"
            onClick={closeMenu}
            aria-label="Закрыть"
          >
            ✕
          </button>
        </div>

        <nav className="drawer__nav">
          <NavLink
            to="/"
            end
            onClick={closeMenu}
          >
            Меню
          </NavLink>
          <NavLink
            to="/favorites"
            onClick={closeMenu}
          >
            Любимые фильмы
          </NavLink>
        </nav>
      </aside>
    </header>
  );
};

export default Header;
