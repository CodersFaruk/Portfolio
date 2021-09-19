import React, { Component, Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarker
} from "@fortawesome/free-solid-svg-icons";
import RestClient from "../restAPI/RestClient";
import AppUrl from "../restAPI/AppUrl";
import Loading from "./Loading";
import SomethingWentWrong from "./SomethingWentWrong";

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      address: "",
      email: "",
      phone: "",
      loading:true,
      error:false
    };
  }
  componentDidMount() {
    RestClient.GetRequest(AppUrl.footerInfo).then(result => {
      if(result===null){
        this.setState({error:true,loading:false})
      }else{
        this.setState({
          address: result[0]["address"],
          email: result[0]["email"],
          phone: result[0]["phone"],
          loading:false,
        });
      }
    }).catch(error=>{
      this.setState({error:true,loading:false})
    })
  }

  sendMsg() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let jsonObject = { name:name, email:email, message:message };

    RestClient.PostRequest(AppUrl.contact, JSON.stringify(jsonObject)).then(result => {
        alert(result);
      })
      .catch(error => {
        alert("error");
      });
  }

  render() {
    if(this.state.loading===true){
      return <Loading/>
    }else if(this.state.error===false){
      return (
        <Fragment>
          <Container className="py-4">
            <Row>
              <Col lg={6} md={6} sm={12}>
                <Form>
                  <h2 className="serviceName my-4">Quick Connect</h2>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control id="name" type="text" />
                  </Form.Group>
  
                  <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control id="email" type="email" />
                  </Form.Group>
  
                  <Form.Group>
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control id="message" as="textarea" rows="3" />
                  </Form.Group>
  
                  <Button onClick={this.sendMsg} variant="primary">
                    Send Now
                  </Button>
                </Form>
              </Col>
  
              <Col lg={6} md={6} sm={12}>
                <h2 className="serviceName my-4">Discuss Now</h2>
                <h6 className="para">
                  <FontAwesomeIcon icon={faMapMarker} /> {this.state.address}
                </h6>
                <h6 className="para my-3">
                  <FontAwesomeIcon icon={faEnvelope} /> {this.state.email}
                </h6>
                <h6 className="para">
                  <FontAwesomeIcon icon={faPhone} /> {this.state.phone}
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

export default ContactForm;
