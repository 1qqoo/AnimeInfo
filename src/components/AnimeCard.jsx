import { Link, useNavigate } from 'react-router-dom';
const AnimeCard = (props) => {
  const { title, banner, id, savedHandler, stateButton } = props;
  const navigate = useNavigate();
  return (
    <li
      className="card"
      onClick={() => navigate(`/animeInfo/${id}`)}
    >
      <div className="card__media">
        <img
          src={banner}
          alt={title}
          width={400}
          height={400}
        />
      </div>
      <h3 className="card__title">{title}</h3>
      <Link
        className="card__link"
        to={`/animeInfo/${id}`}
      >
        Подробнее
      </Link>

      <button
        className="button"
        onClick={(element) => {
          element.stopPropagation();
          savedHandler({ title, banner, id });
        }}
      >
        {stateButton ? 'Удалить' : 'Сохранить'}
      </button>
    </li>
  );
};

export default AnimeCard;
