import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';
import ReactHtmlParser from "react-html-parser";
import RestClient from '../restAPI/RestClient';
import AppUrl from '../restAPI/AppUrl';
import Loading from './Loading';
import SomethingWentWrong from './SomethingWentWrong';

class CourseDetails extends Component {
    constructor(props){
        super()
        this.state={
            id:props.id,
          course_title:"",
          course_des:"",
          course_img:"",
          learn_title:"",
          learn_skill:"",
          video_url:"",
          buy_link:"",
          loading:true,
          error:false
        }
      }
    

    componentDidMount() {
        RestClient.GetRequest(AppUrl.courseDetails+this.state.id).then(result=>{
            if(result===null){
                this.setState({error:true,loading:false})
              }else{
                this.setState({
                    course_title:result[0]['course_title'],
                    course_des:result[0]['course_des'],
                    course_img:result[0]['course_img'],
                    learn_title:result[0]['learn_title'],
                    learn_skill:result[0]['learn_skill'],
                    video_url:result[0]['video_url'],
                    buy_link:result[0]['buy_link'],
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
                        <h1 className="display-3">{this.state.course_title}</h1>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <h2 className="serviceName">{this.state.course_des}</h2>
                                <ul className="para">
                                    {ReactHtmlParser(this.state.learn_skill)}
                                </ul>
                                <Button variant="primary">Buy Now</Button>
                            </Col>
    
                            <Col sm={12} md={6} lg={6}>
                                <Player>
                                    <source src={this.state.video_urls} />
                                    <BigPlayButton position="center" />
                                </Player>
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

export default CourseDetails;
