import React, { Component, Fragment } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import "video-react/dist/video-react.css";
import { Player, BigPlayButton } from "video-react";
import RestClient from "../restAPI/RestClient";
import AppUrl from "../restAPI/AppUrl";
import Loading from "./Loading";
import SomethingWentWrong from "./SomethingWentWrong";

class Video extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      video_des: "",
      video_url: "",
      loading:true,
      error:false
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.videoInfo).then(result => {
      if(result===null){
        this.setState({error:true,loading:false})
      }else{
        this.setState({
          video_des: result[0]["video_des"],
          video_url: result[0]["video_url"],
          loading:false
        });
      }
    }).catch(error=>{
      this.setState({error:true,loading:false})
    })
  }

  closeModel = () => {
    this.setState({ show: false });
  };
  openModel = () => {
    this.setState({ show: true });
  };

  render() {
    if(this.state.loading===true){
      return <Loading/>
    }else if(this.state.error===false){
      return (
        <Fragment>
          <Container className="my-4">
            <Row>
              <Col className="videoCard text-center">
                <div>
                  <h2 className="VideoTitle">How I Do</h2>
                  <p className="para">{this.state.video_des}</p>
                  <h6>
                    <FontAwesomeIcon
                      onClick={this.openModel}
                      className="videoButton"
                      icon={faPlayCircle}
                    />
                  </h6>
                </div>
              </Col>
            </Row>
          </Container>
  
          <Modal size="lg" show={this.state.show} onHide={this.closeModel}>
            <Modal.Body>
              <Player>
                <source src={this.state.video_url} />
                <BigPlayButton position="center" />
              </Player>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.closeModel}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Fragment>
      );
    }else {
      return <SomethingWentWrong/>  
    }
  }
}

export default Video;
