import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import loadingIcon from '../assets/images/loading.svg'

class Loading extends Component {
    render() {
        return (
            <Fragment>
                <Container className="py-5 text-center">
                    <Row>
                        <Col >
                        <div className="loadingImg">
                            <img src={loadingIcon} alt="..."/>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Loading;