import icon from '../assets/icons/logo.png';
import SearhForm from './SearchForm';

const Header = (props) => {
  const { searchAnime, setSearchAnime } = props;
  return (
    <div className="container">
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
        <SearhForm
          searchAnime={searchAnime}
          setSearchAnime={setSearchAnime}
        />
      </div>
    </div>
  );
};

export default Header;
