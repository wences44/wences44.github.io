import React from "react";
const SingleEntity = ({ entity, url, phone, email, services }) => {
  return (
    <article>
      {url && (
        <h5>
          <u>
            <p>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {entity} assistance
              </a>
            </p>
          </u>
        </h5>
      )}
      {phone && <h5>{phone}</h5>}
      {email && <h5>{email}</h5>}
      {services && <h5>Services: {services}</h5>}
      <hr />
      <br />
    </article>
  );
};

export default SingleEntity;
