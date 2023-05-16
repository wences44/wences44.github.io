import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");
  React.useEffect(() => {
    searchValue.current.focus();
  }, []);
  const searchCountry = () => {
    setSearchTerm(searchValue.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search the country:</label>
        </div>
        <input
          type="text"
          id="name"
          name="name"
          ref={searchValue}
          onChange={searchCountry}
        />
      </form>
    </section>
  );
};

export default SearchForm;
