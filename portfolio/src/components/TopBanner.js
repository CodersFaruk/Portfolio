import React, { Component, Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import AppUrl from "../restAPI/AppUrl";
import RestClient from "../restAPI/RestClient";
import Loading from "./Loading";
import SomethingWentWrong from "./SomethingWentWrong";

class TopBanner extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      subTitle: "",
      loadingSection:"text-center",
      MainSection:"d-none",
      wrong:"d-none"
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.bannerSelect).then(result => {
      if(result===null){
        this.setState({
          loadingSection:"d-none",
          MainSection:"d-none",
          wrong:"text-center"
        }); 
      }else{
        this.setState({
          title: result[0]["banner_title"],
          subTitle: result[0]["banner_sub_title"],
          loadingSection:"d-none",
          MainSection:"text-center",

        });
      }
       
      })
      .catch(error => {
        this.setState({
          loadingSection:"d-none",
          MainSection:"d-none",
          wrong:"text-center"
        }); 
      });
  }

  render() {
    return (
      <Fragment>
        <Container fluid className="topFixedBanner  p-0">
          <div className="topBannerOverlay">
            <Container className="bannerContent">
              <Row>
              <Col className={this.state.wrong}>
                 <SomethingWentWrong/>
              </Col>
                
                <Col className={this.state.loadingSection}>
                 <Loading/>
                </Col>

                <Col className={this.state.MainSection}>
                  <h1 className="bannerTitle">{this.state.title}</h1>
                  <h4 className="bannerSubTitle">{this.state.subTitle}</h4>
                  <Button variant="primary">More Info</Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default TopBanner;
