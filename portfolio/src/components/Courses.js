import React, { Component, Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppUrl from "../restAPI/AppUrl";
import RestClient from "../restAPI/RestClient";
import Loading from "./Loading";
import SomethingWentWrong from "./SomethingWentWrong";

class Courses extends Component {
  constructor() {
    super();
    this.state = {
      coursesData: [],
      loading:true,
      error:false
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.courseHome).then(result => {
      if(result===null){
        this.setState({error:true,loading:false})
      }else{
        this.setState({ coursesData: result,loading:false });   
      }

    }).catch(error=>{
      this.setState({error:true,loading:false})
    })
  }

  render() {
    if(this.state.loading===true){
      return <Loading/>
    }else if(this.state.error===false){
      const myList = this.state.coursesData;
      const courseView = myList.map(m => {
        return (
          <Col key={m.id} lg={6} md={12} sm={12} className="py-3">
            <Row>
              <Col lg={6} md={6} sm={12} className="mb-3">
                <img
                  className="projectImg bg-danger"
                  src={m.course_img}
                  alt="courseImg"
                />
              </Col>
              <Col lg={6} md={6} sm={12}>
                <h5 className="cardTitle">{m.course_title}</h5>
                <p className="para text-justify">
                  {m.course_des}
                </p>
                <Button variant="primary">
                  <Link className="btnLink" to={"/course-details/"+m.id}>
                    Details
                  </Link>
                </Button>
              </Col>
            </Row>
          </Col>
        );
      });
  
      return (
        <Fragment>
          <Container>
            <h1 className="text-center my-5 headingTitle">Our Courses</h1>
            <Row>{courseView}</Row>
          </Container>
        </Fragment>
      );
    }else {
      return <SomethingWentWrong/>  
    }
  }
}

export default Courses;
