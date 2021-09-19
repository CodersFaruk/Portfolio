import React, { Component, Fragment } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, Container, Row } from "react-bootstrap";
import RestClient from "../restAPI/RestClient";
import AppUrl from "../restAPI/AppUrl";
import Loading from "./Loading";
import SomethingWentWrong from "./SomethingWentWrong";

class ClientReview extends Component {
  constructor() {
    super();
    this.state = {
      clientData: [],
      loading:true,
      error:false
    };
  }
  componentDidMount() {
    RestClient.GetRequest(AppUrl.ClientReview).then(result => {
      if(result===null){
        this.setState({error:true,loading:false})
      }else{
        this.setState({ clientData: result, loading:false});
      }
    }).catch(error=>{
      this.setState({error:true,loading:false})
    })
  }

  render() {
    if(this.state.loading===true){
      return <Loading/>
    }else if(this.state.error===false){
      var settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  
      const myList = this.state.clientData;
      const clientView = myList.map(m => {
        return (
          <div key={m.id} className="my-5">
            <Row className="justify-content-center">
              <Col lg={6} md={6} sm={12}>
                <img className="circleImg" src={m.client_img} alt="1" />
                <h2 className="cardTitle my-2">{m.client_title}</h2>
                <p className="para">
                  {m.client_des}
                </p>
              </Col>
            </Row>
          </div>
        );
      });
  
      return (
        <Fragment>
          <Container className="text-center">
            <h2 className="text-center my-5 headingTitle">CLIENT SAYS</h2>
            <Slider {...settings}>
              {clientView}
            </Slider>
          </Container>
        </Fragment>
      );
    }else {
      return <SomethingWentWrong/>  
    }
  }
}

export default ClientReview;
