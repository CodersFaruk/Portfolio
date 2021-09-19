import React, { Component, Fragment } from "react";
import Menu from "../components/Menu";
import TopPage from "../components/TopPage";
import AboutDescription from "../components/AboutDescription";
import Footer from "../components/Footer";

class AboutPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Fragment>
        <Menu title="About"/>
        <TopPage BannerTitle="About Me" />
        <AboutDescription />
        <Footer/>
      </Fragment>
    );
  }
}

export default AboutPage;
