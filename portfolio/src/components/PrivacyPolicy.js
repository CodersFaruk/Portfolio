import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactHtmlParser from 'react-html-parser';
import AppUrl from "../restAPI/AppUrl";
import RestClient from "../restAPI/RestClient";
import Loading from "./Loading";
import SomethingWentWrong from "./SomethingWentWrong";

class PrivacyPolicy extends Component {
  constructor() {
    super();
    this.state = {
      privacyDesc:"",
      loading:true,
      error:false
    }
  }
  componentDidMount() {
    RestClient.GetRequest(AppUrl.information).then(result => {
      if(result===null){
        this.setState({error:true,loading:false})
      }else{
        this.setState({
          privacyDesc: result[0]['privaciy'],
          loading:false
         });
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
          <Container className="py-5">
            <Row>
              <Col sm={12} md={12} lg={12}>
              { ReactHtmlParser(this.state.privacyDesc)}
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

export default PrivacyPolicy;
