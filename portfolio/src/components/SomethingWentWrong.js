import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import errorIcon from '../assets/images/error.svg'

class SomethingWentWrong extends Component {
    render() {
        return (
            <Fragment>
                <Container className="py-5 text-center">
                    <Row>
                        <Col>
                        <div className="loadingImg">
                            <img src={errorIcon} alt="..."/>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default SomethingWentWrong;