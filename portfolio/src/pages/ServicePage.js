import React, { Component, Fragment } from 'react';
import Menu from '../components/Menu';
import TopPage from '../components/TopPage';
import AllServices from '../components/AllServices';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

class ServicePage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render() {
        return (
            <Fragment>
            <Menu title="Services"/>
            <TopPage BannerTitle="All Services"/>
            <AllServices/>
            <ContactForm/>
            <Footer/>
         </Fragment>
        );
    }
}

export default ServicePage;