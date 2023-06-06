import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ResearchActivity = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <p className="lead">
          <br />
          <b>{data.title}:</b> {data.description}
        </p>

      </div>
    </Col>
  );
}

export default ResearchActivity;