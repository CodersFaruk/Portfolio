import React, { Component, Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import RestClient from "../restAPI/RestClient";
import AppUrl from "../restAPI/AppUrl";
import Loading from "./Loading";
import SomethingWentWrong from "./SomethingWentWrong";

class AllProject extends Component {
  constructor() {
    super();
    this.state = {
      projectData: [],
      loading:true,
      error:false
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.projectAll).then(result => {
      if(result===null){
        this.setState({error:true,loading:false})
      }else{
        this.setState({ projectData: result, loading:false });
      }
    }).catch(error=>{
      this.setState({error:true,loading:false})
    })
  }

  render() {
    if(this.state.loading===true){
      return <Loading/>
    }else if(this.state.error===false){
      const myList = this.state.projectData;
      const projectView = myList.map(m => {
        return (
          <Col key={m.id} lg={4} md={6} sm={12} className="my-3">
            <Card className="projectCard">
              <Card.Img
                className="projectImg"
                variant="top"
                src={m.project_img_one}
              />
              <Card.Body>
                <Card.Title className="cardTitle">{m.project_name}</Card.Title>
                <Card.Text className="para">{m.project_short_des}</Card.Text>
                <Button variant="primary">
                  <Link className="btnLink" to={"/project-details/"+m.id +"/"+m.project_name}>
                    Details
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      });
  
      return (
        <Fragment>
          <Container className="text-center mt-5 mt">
            <Row>{projectView}</Row>
          </Container>
        </Fragment>
      );
    }else {
      return <SomethingWentWrong/>  
    }
  }
}

export default AllProject;
