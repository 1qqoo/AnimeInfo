import AnimeLists from '../components/AnimeLists';

const Home = (props) => {
  const { animeList, filteredAnime, savedHandler } = props;
  return (
    <AnimeLists
      animeList={animeList}
      filteredAnime={filteredAnime}
      savedHandler={savedHandler}
      stateButton={false}
    />
  );
};

export default Home;
