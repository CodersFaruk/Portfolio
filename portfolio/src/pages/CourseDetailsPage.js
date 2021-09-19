import React, { Component, Fragment } from "react";
import Menu from "../components/Menu";
import TopPage from "../components/TopPage";
import CourseDetails from "../components/CourseDetails";
import Footer from "../components/Footer";


class CourseDetailsPage extends Component {
  constructor({match}){
    super()
    this.state={
      paramId:match.params.courseId
    }
  }



  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Fragment>
        <Menu title="Course Details" />
        <TopPage BannerTitle="Course Details" />
        <CourseDetails id={this.state.paramId}/>
        <Footer />
      </Fragment>
    );
  }
}

export default CourseDetailsPage;
