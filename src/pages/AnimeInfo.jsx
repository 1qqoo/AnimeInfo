import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';

const AnimeInfo = (props) => {
  const { animeList } = props;
  const { id } = useParams();

  console.log(id);
  const anime = useMemo(() => {
    const animeId = Number(id);
    return animeList.find((a) => a.id === animeId);
  }, [animeList, id]);

  if (!anime) {
    return (
      <div>
        <Link to="/">← Назад</Link>
      </div>
    );
  }

  return (
    <div className="info">
      <div className="info__container">
        <div
          className="info__media"
          data-title={anime.title}
        >
          <img
            src={anime.banner}
            alt={anime.title}
            width={600}
            height={700}
          />
        </div>
        <div>
          <p className="info__description">{anime.description}</p>
        </div>
      </div>
      <div className="info__link">
        <Link to="/">← Назад</Link>
      </div>
    </div>
  );
};

export default AnimeInfo;
