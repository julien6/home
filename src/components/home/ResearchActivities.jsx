import React from 'react';
import ResearchActivity from "./ResearchActivity";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";

const ResearchActivities = ({ researchActivities }) => {
  return (
    <section fluid id="researchActivities" className="section">
      <Container>
        <Jumbotron className="bg-white">
          <h2 className="display-4 mb-5 text-right">
            {researchActivities.heading}
          </h2>
          <Row>
            {
              <ResearchActivity key={0} data={researchActivities.data[0]} />
            }
            {
              <ResearchActivity key={0} data={researchActivities.data[1]} />
            }
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
}

export default ResearchActivities;