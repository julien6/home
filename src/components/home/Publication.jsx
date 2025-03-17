import React from 'react';

import {
  Col,
} from "react-bootstrap";

const Publication = ({ data }) => {
  return (
    <Col lg="6">
      <a href={data.url} target="_blank" style={{ fontWeight: "bold", textDecoration: "none" }}>
        <div className="pb-5 text-center">
          <p className="lead">
            <br />
            {data.full_reference}
          </p>

        </div>
      </a>
    </Col>
  );
}

export default Publication;