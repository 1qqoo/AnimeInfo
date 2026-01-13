import { useState, useMemo } from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Favorites from './pages/Favorites';

const App = () => {
  const animeList = [
    {
      title: 'Человек бензопила',
      banner:
        'https://cdn.ananasposter.ru/image/cache/catalog/poster/pos22/9/53831-1000x830.jpg',
      id: 1,
    },
    {
      title: 'Саске',
      banner:
        'https://i.pinimg.com/736x/fb/18/de/fb18de9cf2bf43f19916434fd660f987.jpg',
      id: 2,
    },
    {
      title: 'Поднятие уровня в одиночку',
      banner:
        'https://static.kinoafisha.info/k/articles/1200/upload/articles/137332203586.jpg',
      id: 3,
    },
    {
      title: 'Наруто',
      banner: 'https://ir.ozone.ru/s3/multimedia-9/c1000/6762731841.jpg',
      id: 4,
    },
  ];

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
      console.log(state);
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
        </Routes>
      </div>
    </div>
  );
};

export default App;
