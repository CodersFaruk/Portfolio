import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Bar, BarChart, ResponsiveContainer, XAxis, Tooltip } from "recharts";
import RestClient from "../restAPI/RestClient";
import AppUrl from "../restAPI/AppUrl";
import ReactHtmlParser from 'react-html-parser';
import Loading from "./Loading";
import SomethingWentWrong from "./SomethingWentWrong";

class Analysis extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      techDesc:"",
      loading:true,
      error:false
    }
  }
  componentDidMount() {
    RestClient.GetRequest(AppUrl.TechChart).then(result => {
      if(result===null){
        this.setState({error:true,loading:false})
      }else{
        this.setState({ data: result,loading:false });
      }
    }).catch(error=>{
      this.setState({error:true,loading:false})
    })

    RestClient.GetRequest(AppUrl.techDes).then(result => {
      this.setState({ techDesc: result[0]['tech_des']});
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
          <Container className="text-center py-4">
            <h2 className=" my-5 headingTitle">Technology Used</h2>
            <Row>
              <Col lg={6} md={12} sm={12} className="barChart">
                <ResponsiveContainer>
                  <BarChart width={100} height={300} data={this.state.data}>
                    <XAxis dataKey="technology" />
                    <Tooltip />
                    <Bar dataKey="projects" fill="#0073E6" />
                  </BarChart>
                </ResponsiveContainer>
              </Col>
              <Col lg={6} md={12} sm={12} className="text-justify para">
              { ReactHtmlParser(this.state.techDesc) }
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

export default Analysis;
