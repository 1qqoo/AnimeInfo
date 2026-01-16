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
        <h1 className="info__title">Аниме не найдено</h1>
        <Link to="/">← Назад</Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="info__title">{anime.title}</h1>

      <div className="info__container">
        <img
          src={anime.banner}
          alt={anime.title}
          width={600}
          height={700}
        />

        <div>
          <p className="info__description">{anime.description}</p>

          <div>
            <Link to="/">← Назад</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeInfo;
