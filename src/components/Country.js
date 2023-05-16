import React from "react";
import { Link } from "react-router-dom";

const Country = ({ image, name, id }) => {
  return (
    <article>
      <div className="img-container">
        <img
          src={image}
          alt={name}
          height="70px"
          //style="max-height:150px; max-width:200px; overflow: hidden"
        />
      </div>
      <div className="country-footer">
        {/* <h5>{name}</h5> */}
        <Link to={`/country/${id}`} className="btn btn-primary btn-details">
          {name}
        </Link>
      </div>
    </article>
  );
};

export default Country;
