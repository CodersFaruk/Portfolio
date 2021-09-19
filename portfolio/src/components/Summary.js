import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

class Summary extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid className="summaryFixedBanner p-0 my-5">
          <div className="summaryBannerOverlay">
            <Container>
              <Row>
                <Col lg={8} md={6} sm={12}>
                  <Row className="countSection text-center">
                    <Col>
                      <h2 className="countNumber">
                        <CountUp start={0} end={100}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall> 
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </h2>
                      <h4 className="countTitle">TOTAL PROJECTS</h4>
                      <hr className="bg-white w-25" />
                    </Col>
                    <Col>
                      <h2 className="countNumber">
                      <CountUp start={0} end={100}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall> 
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp> 
                      </h2>
                      <h4 className="countTitle">TOTAL CLIENTS</h4>
                      <hr className="bg-white w-25" />
                    </Col>
                  </Row>
                </Col>

                <Col lg={4} md={6} sm={12}>
                  <Card className="cardRadius mt-5">
                    <Card.Body>
                      <Card.Title className="cardTitle">How i Work</Card.Title>
                      <div className="card-text">
                        <div className="cardSubtitle">
                          <div className="cardP">
                            <FontAwesomeIcon
                              className="iconCard"
                              icon={faCheckCircle}
                            /> 
                            Requirements Gathering
                          </div>
                          <div className="cardP">
                            <FontAwesomeIcon
                              className="iconCard"
                              icon={faCheckCircle}
                            /> 
                            Feasibility or Requirements Analysis
                          </div>
                          <div className="cardP">
                            <FontAwesomeIcon
                              className="iconCard"
                              icon={faCheckCircle}
                            /> 
                            Design and Prototyping
                          </div>
                          <div className="cardP">
                            <FontAwesomeIcon
                              className="iconCard"
                              icon={faCheckCircle}
                            />
                            Implementation & Coding
                          </div>
                          <div className="cardP">
                            <FontAwesomeIcon
                              className="iconCard"
                              icon={faCheckCircle}
                            />
                            Coding Testing
                          </div>
                          <div className="cardP">
                            <FontAwesomeIcon
                              className="iconCard"
                              icon={faCheckCircle}
                            />
                            Implementation and Integration
                          </div>
                          <div className="cardP">
                            <FontAwesomeIcon
                              className="iconCard"
                              icon={faCheckCircle}
                            />
                            Operations and Maintenance
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Summary;
