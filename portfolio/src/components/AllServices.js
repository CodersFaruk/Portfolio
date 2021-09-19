import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import RestClient from "../restAPI/RestClient";
import AppUrl from "../restAPI/AppUrl";
import Loading from "./Loading";
import SomethingWentWrong from "./SomethingWentWrong";

class AllServices extends Component {

  constructor() {
    super();
    this.state = {
      serviceData: [],
      loading:true,
      error:false
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.selectService).then(result => {
      if(result===null){
        this.setState({error:true,loading:false})
      }else{
        this.setState({ serviceData: result, loading:false });
      }
    }).catch(error=>{
      this.setState({error:true,loading:false})
    })
  }

  render() {
    if(this.state.loading===true){
      return <Loading/>
    }else if(this.state.error===false){
      const myList = this.state.serviceData;
      const serviceView = myList.map(m => {
        return (
          <Col key={m.id} lg={4} md={6} sm={12}>
            <div className="serviceCard">
              <img className="serviceImg" src={m.service_img} alt="Web Development" />
              <h2 className="serviceName">{m.service_name}</h2>
              <p className="serviceDescription">
                {m.service_des}
              </p>
            </div>
          </Col>
        );
      });
  
      return (
        <Fragment>
          <Container className="py-5">
            <Row className="text-center">{serviceView}</Row>
          </Container>
        </Fragment>
      );
    }else {
      return <SomethingWentWrong/>  
    }
  }
}

export default AllServices;
