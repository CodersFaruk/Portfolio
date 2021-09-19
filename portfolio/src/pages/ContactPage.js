import React, { Component, Fragment } from 'react';
import Menu from '../components/Menu';
import TopPage from '../components/TopPage';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

class ContactPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render() {
        return (
            <Fragment>
               <Menu title="Contact"/>
               <TopPage BannerTitle="Contact Me"/>
               <ContactForm/>
               <Footer/>
            </Fragment>
        );
    }
}

export default ContactPage;