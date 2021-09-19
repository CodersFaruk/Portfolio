import React, {Component} from 'react';
import Menu from "../components/Menu";
import axios from 'axios';
import {Card, Col, Container, Row} from "react-bootstrap";
import Loading from "../components/Loading";
import SomethingWentWrong from "../components/SomethingWentWrong";

class HomePage extends Component {
    constructor(){
        super();
        this.state={
            dataList:[],
            isLoading:true,
            isError:false
        }
    }

    componentDidMount() {
        axios.get('/AdminSummary').then(response=>{
            if(response.status===200){
                this.setState({
                    dataList:response.data,
                    isLoading:false,
                    isError:false,

                })
            }else {
                this.setState({ isLoading:false,isError:true})
            }

        }).catch(error=>{
            this.setState({ isLoading:false,isError:true})
        })
    }


    render() {
        if(this.state.isLoading==true) {
            return (
                <Menu title="Home">
                    <Loading/>
                </Menu>
            )
        }
        else if(this.state.isError==true){
            return (
                <Menu title="Home">
                    <SomethingWentWrong/>
                </Menu>
            )
        }
        else {
            const data=this.state.dataList;

            return (
                <>
                    <Menu title="Home">
                        <Container className="my-5 py-5">
                            <Row>
                                <Col sm={6} md={4} lg={4} className="my-2">
                                    <Card className="bg-dark text-white text-center">
                                        <Card.Body>
                                            <h2>{data['review']}</h2>
                                            <Card.Title> Client Review</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={6} md={4} lg={4} className="my-2">
                                    <Card className="bg-danger text-white text-center">
                                        <Card.Body>
                                            <h2>{data['contact']}</h2>
                                            <Card.Title>Contact</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={6} md={4} lg={4} className="my-2">
                                    <Card className="bg-primary text-white text-center">
                                        <Card.Body>
                                            <h2>{data['course']}</h2>
                                            <Card.Title>Course</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={6} md={4} lg={4} className="my-2">
                                    <Card className="bg-primary text-white text-center">
                                        <Card.Body>
                                            <h2>{data['project']}</h2>
                                            <Card.Title>Project</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={6} md={4} lg={4} className="my-2">
                                    <Card className="bg-dark text-white text-center">
                                        <Card.Body>
                                            <h2>150</h2>
                                            <Card.Title> Client Review</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={6} md={4} lg={4} className="my-2">
                                    <Card className="bg-danger text-white text-center">
                                        <Card.Body>
                                            <h2>{data['service']}</h2>
                                            <Card.Title>Service</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Menu>
                </>
            );

        }

    }
}

export default HomePage;
