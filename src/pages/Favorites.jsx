import AnimeLists from '../components/AnimeLists';

const Favorites = (props) => {
  const { animeList, filteredAnime, savedHandler, savedAnime } = props;

  return (
    <AnimeLists
      animeList={animeList}
      filteredAnime={filteredAnime}
      savedHandler={savedHandler}
      savedAnime={savedAnime}
      stateButton={true}
    />
  );
};

export default Favorites;
