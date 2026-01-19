import AnimeCard from './AnimeCard';

const AnimeLists = (props) => {
  const { animeList, filteredAnime, savedHandler, stateButton } = props;

  return (
    <ul className="card__lists">
      {(filteredAnime ?? animeList).map((anime) => {
        return (
          <AnimeCard
            key={anime.id}
            {...anime}
            savedHandler={savedHandler}
            stateButton={stateButton}
          />
        );
      })}
    </ul>
  );
};

export default AnimeLists;
