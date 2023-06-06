import React from 'react';

import {
  Col,
} from "react-bootstrap";

const Publication = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <p className="lead">
          <br />
          {data.full_reference}
        </p>

      </div>
    </Col>
  );
}

export default Publication;