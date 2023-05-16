import React from "react";
import CountryList from "../components/CountryList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <main>
      <div className="section-title">Help information for ukraine refugees</div>
      <SearchForm />
      <CountryList />
    </main>
  );
};

export default Home;
