import React, { Component, Fragment } from 'react';
import Menu from '../components/Menu';
import TopPage from '../components/TopPage';
import AllProject from '../components/AllProject';
import Footer from '../components/Footer';

class AllProjectPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render() {
        return (
            <Fragment>
                <Menu title="Portfolio"/>
                <TopPage BannerTitle="All Projects"/>
                <AllProject/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AllProjectPage;