import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope,faPhone,faMapMarker} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import RestClient from "../restAPI/RestClient";
import AppUrl from "../restAPI/AppUrl";
import Loading from "./Loading";
import SomethingWentWrong from "./SomethingWentWrong";

class Footer extends Component {

  constructor() {
    super();
    this.state = {
      address: "",
      email:"",
      phone:"",
      facebook:"",
      youtube:"",
      footer_credit:"",
      loadingSection:"text-center",
      MainSection:"d-none",
      error:false
    };
  }
  componentDidMount() {
    RestClient.GetRequest(AppUrl.footerInfo).then(result => {
      if(result===null){
        this.setState({error:true})
      }else{
        this.setState({ 
          address: result[0]["address"],
          email: result[0]["email"],
          phone: result[0]["phone"],
          facebook: result[0]["facebook"],
          youtube: result[0]["youtube"],
          footer_credit: result[0]["footer_credit"],
          loadingSection:"d-none",
          MainSection:"",
         });
      }
     
    }).catch(error=>{
      this.setState({error:true})
    })
  }

  getYear() {
    return new Date().getFullYear();
  }

  render() {
    if(this.state.error===false){
      return (
        <Fragment >
          <Container fluid className="py-5 bg-light videoCard mt-5">
            <div className={this.state.loadingSection}>
                <Loading className={this.state.loadingSection}/>
            </div>
  
            <Row className={this.state.MainSection}>
              <Col xl={3} md={6} sm={12}>
                <h2 className="serviceName">Follow Me</h2>
                <Link to={'//'+this.state.facebook} target={"_blank"} className="footerLink d-block">
                  <FontAwesomeIcon icon={faFacebook} /> Facebook
                </Link>
                <Link to={'//'+this.state.youtube} target={"_blank"} className="footerLink d-block">
                  <FontAwesomeIcon icon={faYoutube} /> Youtube
                </Link>
              </Col>
              <Col xl={3} md={6} sm={12}>
                <h2 className="serviceName">Address</h2>
                <h6 className="para">
                  <FontAwesomeIcon icon={faMapMarker} /> {this.state.address}
                </h6>
                <h6 className="para">
                  <FontAwesomeIcon icon={faEnvelope} /> {this.state.email}
                </h6>
                <h6 className="para">
                  <FontAwesomeIcon icon={faPhone} /> {this.state.phone}
                </h6>
              </Col>
              <Col xl={3} md={6} sm={12}>
                <h2 className="serviceName">Information</h2>
                <Link to='/about' className="footerLink d-block">About Me</Link>
                <Link to="/portfolio" className="footerLink d-block">My Resume</Link>
                <Link to="/contact" className="footerLink d-block">Contact Me</Link>
              </Col>
              <Col xl={3} md={6} sm={12}>
                <h2 className="serviceName">Legal</h2>
                <Link to='/terms' className="footerLink d-block">Terms & Conditions</Link>
                <Link to='/refund-policy' className="footerLink d-block">Refund policy</Link>
                <Link to="/privacy" className="footerLink d-block">Privacy Policy</Link>
              </Col>
            </Row>
          </Container>
  
          <Container fluid className="text-center copySection ">
            <div className={this.state.loadingSection}>
                <Loading className={this.state.loadingSection}/>
            </div>
  
            <Row className={this.state.MainSection}>
              <Col  sm={12}>
                <h6 className="pt-2">
                  &copy;2019-{this.getYear()} {this.state.footer_credit}
                </h6>
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

export default Footer;
