import React, { Component, Fragment } from 'react';
import { Badge, Button, Col, Container, Row } from 'react-bootstrap';
import RestClient from '../restAPI/RestClient';
import ReactHtmlParser from "react-html-parser";
import AppUrl from '../restAPI/AppUrl';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import SomethingWentWrong from './SomethingWentWrong';

class ProjectDetails extends Component {
    constructor(props){
        super()
        this.state={
            parentId:props.id,
            project_name:"",
            project_short_des:"",
            project_img_two:"",
            project_features:"",
            live_preview:"",
            loading:true,
            error:false
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.projectDetails+this.state.parentId).then(result=>{
            if(result===null){
                this.setState({error:true,loading:false})
              }else{
                this.setState({
                    project_name:result[0]['project_name'],
                    project_short_des:result[0]['project_short_des'],
                    project_img_two:result[0]['project_img_two'],
                    project_features:result[0]['project_features'],
                    live_preview:result[0]['live_preview'],
                    loading:false
                
                })
              }
        }).catch(error=>{
            this.setState({error:true,loading:false})
        })
    }


    render() {
        if(this.state.loading===true){
            return <Loading/>
          }else if(this.state.error===false){
            return (
                <Fragment>
                    <Container className="py-5 mt-5">
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <img className="img-fluid bg-warning" src={this.state.project_img_two} alt="img"/>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <h2 className="headingTitle">Development Project V-{this.state.project_name}</h2>
                                <Badge variant="warning">v-1</Badge>
                                <Badge variant="dark">v-2</Badge>
                                <Badge variant="info">v-3</Badge>
                                <Badge variant="danger">v-4</Badge>
    
                                <h2 className="py-2 serviceName">Development Project V-04: </h2>
                                <p className="para">{this.state.project_short_des}</p>
    
                                {ReactHtmlParser(this.state.project_features)}
    
                                <Button variant="primary">
                                <Link className="btnLink" to='/'>
                                    Live Preview
                                </Link>
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
          }else {
            return <SomethingWentWrong/>  
          }
    }
}

export default ProjectDetails;