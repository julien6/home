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
          <b className='text-center'>{data.title}</b>
          <br /><br />
          {data.description}
        </p>

      </div>
    </Col>
  );
}

export default ResearchActivity;