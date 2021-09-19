import React, { Component, Fragment } from 'react';
import Menu from '../components/Menu';
import TopPage from '../components/TopPage';
import TermsCondition from '../components/TermsCondition';
import Footer from '../components/Footer';

class TermsConditionPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render() {
        return (
            <Fragment>
               <Menu title="Terms & Conditions" />
               <TopPage BannerTitle="Terms & Conditions"/>
               <TermsCondition/>
               <Footer/>
            </Fragment>
        );
    }
}

export default TermsConditionPage;