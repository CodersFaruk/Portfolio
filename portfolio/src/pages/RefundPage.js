import React, { Component, Fragment } from 'react';
import Menu from '../components/Menu';
import TopPage from '../components/TopPage';
import RefundSection from '../components/RefundSection';
import Footer from '../components/Footer';

class RefundPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render() {
        return (
            <Fragment>
               <Menu title="Refund Policy" />
               <TopPage BannerTitle="Refund Policy"/>
               <RefundSection/>
               <Footer/>
            </Fragment>
        );
    }
}

export default RefundPage;