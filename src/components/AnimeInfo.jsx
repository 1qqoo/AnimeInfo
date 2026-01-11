import { useState } from 'react';
import AnimeLists from './AnimeLists';
import Header from './Header';

const AnimeInfo = () => {
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
  const filteredAnime =
    clearSearchAnime.length > 0
      ? animeList.filter(({ title }) =>
          title.toLowerCase().includes(clearSearchAnime)
        )
      : null;

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
      <Header
        searchAnime={searchAnime}
        setSearchAnime={setSearchAnime}
      />
      <AnimeLists
        animeList={animeList}
        filteredAnime={filteredAnime}
        savedHandler={savedHandler}
      />
      <p>Сохраненные</p>
      <AnimeLists
        animeList={savedAnime}
        filteredAnime={null}
        savedHandler={savedHandler}
      />
    </div>
  );
};

export default AnimeInfo;
