import { useState, useMemo } from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Favorites from './pages/Favorites';
import AnimeInfo from './pages/AnimeInfo';
import animeList from './data/animeList';

const App = () => {
  const [searchAnime, setSearchAnime] = useState('');
  const [savedAnime, setSavedAnime] = useState([]);

  const clearSearchAnime = searchAnime.trim().toLowerCase();

  const filterBySearch = (list, search) => {
    if (!search) {
      return list;
    }
    return list.filter(({ title }) => title.toLowerCase().includes(search));
  };

  const filteredAnime = useMemo(() => {
    return filterBySearch(animeList, clearSearchAnime);
  }, [animeList, clearSearchAnime]);

  const savedFilteredAnime = useMemo(() => {
    return filterBySearch(savedAnime, clearSearchAnime);
  }, [savedAnime, clearSearchAnime]);

  const savedHandler = (newAnime) => {
    setSavedAnime((state) => {
      if (state.some((anime) => anime.id === newAnime.id)) {
        return state.filter((anime) => anime.id !== newAnime.id);
      } else {
        return [...state, newAnime];
      }
    });
  };

  return (
    <div className="anime">
      <div className="container">
        <Header
          searchAnime={searchAnime}
          setSearchAnime={setSearchAnime}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                animeList={animeList}
                filteredAnime={filteredAnime}
                savedHandler={savedHandler}
              />
            }
          ></Route>
          <Route
            path="/favorites"
            element={
              <Favorites
                animeList={savedAnime}
                filteredAnime={savedFilteredAnime}
                savedHandler={savedHandler}
              />
            }
          ></Route>
          <Route
            path="/animeInfo/:id"
            element={<AnimeInfo animeList={animeList} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
