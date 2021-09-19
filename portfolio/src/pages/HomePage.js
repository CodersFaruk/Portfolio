import React, { Component } from "react";
import Menu from "../components/Menu";
import TopBanner from "../components/TopBanner";
import Services from "../components/Services";
import Analysis from "../components/Analysis";
import Summary from "../components/Summary";
import RecentProjects from "../components/RecentProjects";
import Courses from "../components/Courses";
import Video from "../components/Video";
import ClientReview from "../components/ClientReview";
import Footer from "../components/Footer";

class HomePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Menu title="Home"/>
        <TopBanner />
        <Services />
        <Analysis />
        <Summary />
        <RecentProjects />
        <Courses />
        <Video />
        <ClientReview />
        <Footer />
      </>
    );
  }
}

export default HomePage;
