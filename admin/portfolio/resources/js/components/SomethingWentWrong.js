import React, { Component, Fragment } from 'react';
import {Button, Card, Col, Container, Row} from 'react-bootstrap';
import errorIcon from '../../images/errorpolice.svg'

class SomethingWentWrong extends Component {
    render() {
        return (
            <Fragment>
                <Container className="py-5 text-center">
                    <Row>
                        <Col sm={12} md={12} lg={12} className=" d-flex justify-content-center">
                            <Card className="p-5 border-0">
                                <Card.Img className="cardImg" variant="top" src={errorIcon} />
                                <div className="card-body">
                                    <div className="cardTitle card-title">Something Went Wrong!</div>
                                    <div className="card-text">
                                        <p className="cardMargin">Look like this page is missing.Don't worry though. our best man is on the case. Report error or Back to home page</p>
                                    </div>
                                    <div className="mt-3">
                                        <Button variant="info">Report Error</Button>{' '}
                                        <Button variant="danger">Back Home</Button>
                                    </div>

                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default SomethingWentWrong;
