import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";
import JsxParser from "react-jsx-parser";
import { InlineMath } from "react-katex";
import 'katex/dist/katex.min.css';

const Defense = ({ defense }) => {
return (
    <section fluid id="defense" className="section">
        <Container>
            <Jumbotron className="bg-white">
                <h2 className="display-4 mb-5 text-center">
                    {defense.heading}
                </h2>
                <Row>
                    <div className="pb-5 text-center">

                        <p className="lead">
                            <br />
                            {defense.data.announce}
                            <br />
                        </p>

                        <p className="lead">
                            <br />
                            <b className='text-center'> 📅 Date: </b>
                            {defense.data.date}
                            <br />
                            <b className='text-center'> 📍 Location: </b>
                            <a
                                href={defense.data.location.google_maps_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary"
                            >
                                {defense.data.location.full_name}
                            </a>
                        </p>

                        <p className="lead">
                            <b className='text-center'> 📌 Zoom Link: </b>
                            <a
                                href={defense.data.zoom_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary"
                            >
                                {defense.data.zoom_link}
                            </a>
                            <br />
                            <b className='text-center'> 📌 Zoom Password: </b>
                            {defense.data.password}
                        </p>

                        <p className="lead">
                            <br />
                            <h5>Abstract </h5>
                            <b className='text-center'>
                                <JsxParser
                                    components={{ InlineMath }}
                                    jsx={defense.data.description}
                                />
                            </b>
                            <div style={{ marginTop: "0.5em" }}></div>
                            <i>{defense.data.keywords}</i>
                            <br />
                            <span>📖 </span>
                            <a href={defense.data.manuscript} className="text-primary">
                                Manuscript (close to the final version)
                            </a>
                        </p>

                    </div>
                </Row>
            </Jumbotron>
        </Container>
    </section>
);
}

export default Defense;