import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class TopPage extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid className="TopFixedImg p-0 text-center">
                    <div className="topPageOverlay">
                            <Row className="m-0">
                               <Col sm={12} >
                                <h2 className="pageToptitle p-0">{this.props.BannerTitle}</h2>
                               </Col> 
                            </Row>
                    </div>
                </Container >
            </Fragment>
        );
    }
}

export default TopPage;