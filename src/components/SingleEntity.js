import React from "react";
const SingleEntity = ({ entity, url, phone, email }) => {
  return (
    <article>
      <h5>
        <u>
          <a href={url}>{entity} assistance </a>
        </u>
      </h5>
      {phone && <h5>{phone}</h5>}
      {email && <h5>{email}</h5>}
      <hr />
      <br />
    </article>
  );
};

export default SingleEntity;
