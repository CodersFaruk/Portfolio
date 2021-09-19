import React, { Component, Fragment } from 'react';
import Menu from '../components/Menu';
import TopPage from '../components/TopPage';
import AllCourses from '../components/AllCourses';
import Footer from '../components/Footer';

class AllCoursesPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render() {
        return (
            <Fragment>
                <Menu title="Courses"/>
                <TopPage BannerTitle="All Courses"/>
                <AllCourses/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AllCoursesPage;
