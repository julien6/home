import React from "react";

const GetInTouch = ({ heading, message, logos, email }) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message}: <a className="text-decoration-none" href={`mailto:${email}`}>{email}</a>.
      </p>
      <div className="row">
        {logos.map((value, index) => {
          return (
            <div class="col">
              <img
                src={value.src}
                width={value.width}
                height={value.height}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GetInTouch;
