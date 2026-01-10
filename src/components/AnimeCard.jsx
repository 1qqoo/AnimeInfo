const AnimeCard = (props) => {
  const { title, banner, id, savedHandler } = props;
  return (
    <li
      className="card"
      id={id}
    >
      <img
        src={banner}
        alt={title}
        width={400}
        height={400}
      />
      <h3 className="card__title">{title}</h3>
      <button>Подробнее</button>
      <button onClick={() => savedHandler({ title, banner, id })}>
        Сохранить
      </button>
    </li>
  );
};

export default AnimeCard;
