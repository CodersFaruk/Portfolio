import React, { Component, Fragment } from 'react';
import Menu from '../components/Menu';
import TopPage from '../components/TopPage';
import PrivacyPolicy from '../components/PrivacyPolicy';
import Footer from '../components/Footer';

class PrivacyPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render() {
        return (
            <Fragment>
               <Menu title="Privacy & Policy" />
               <TopPage BannerTitle="Privacy & Policy"/>
               <PrivacyPolicy/>
               <Footer/>
            </Fragment>
        );
    }
}

export default PrivacyPage;