import Field from './Field';

const SearhForm = (props) => {
  const { searchAnime, setSearchAnime } = props;
  return (
    <form
      className="search__form"
      onSubmit={(event) => event.preventDefault()}
    >
      <Field
        label="Поиск аниме"
        id="search"
        type="search"
        value={searchAnime}
        onChange={(event) => setSearchAnime(event.target.value)}
      />
    </form>
  );
};

export default SearhForm;
