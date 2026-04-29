import React from "react";

const GetInTouch = ({ heading, message, logos, email }) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message}: <a className="text-decoration-none" href={`mailto:${email}`}>{email}</a>.
      </p>
      <div className="row g-5">
        {logos.map((value, index) => {
          return (
            <div className="col d-flex align-items-center justify-content-center">
              <a href={value.url} target="_blank" rel="noopener noreferrer">
              <img
                src={value.src}
                width={value.width}
                height={value.height}
                alt="logo"
              />
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GetInTouch;
