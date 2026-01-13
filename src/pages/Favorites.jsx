import AnimeLists from '../components/AnimeLists';

const Favorites = (props) => {
  const { animeList, filteredAnime, savedHandler } = props;

  return (
    <AnimeLists
      animeList={animeList}
      filteredAnime={filteredAnime}
      savedHandler={savedHandler}
    />
  );
};

export default Favorites;
