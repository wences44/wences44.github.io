import React from "react";
import { useParams, Link } from "react-router-dom";
import countries from "../data";
import SingleEntity from "../components/SingleEntity";

export default function SingleCountry() {
  const { id } = useParams();
  const { name, flag, entities } = countries[id - 1];
  return (
    <section className="section country-section">
      <div className="row">
        <div className="column">
          <h2 className="section-title">{name}</h2>
          <img src={flag} alt={name} height="180px"></img>
        </div>
        <div className="column">
          <Link to="/" className="btn btn-primary">
            back home
          </Link>
        </div>
      </div>
      <br></br>
      <div className="pais">
        <div>
          {entities.map((item) => {
            return <SingleEntity key={item.id} {...item}></SingleEntity>;
          })}
        </div>
      </div>
    </section>
  );
}
