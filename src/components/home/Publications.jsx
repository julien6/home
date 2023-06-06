import React from 'react';
import Publication from "./Publication";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";

const Publications = ({ publications }) => {
  return (
    <section fluid id="publications" className="section">
      <Container>
        <Jumbotron className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            {publications.heading}
          </h2>
          <Row>
            <br />
            <b>National Conferences</b>
            {
              publications.data.national_conference.map((data, index) => {
                return <Publication key={index} data={data} />
              })
            }
          </Row>
          
          <br />
          <b>International Conferences</b>
          <Row>
            {
              publications.data.international_conference.map((data, index) => {
                return <Publication key={index} data={data} />
              })
            }
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
}

export default Publications;