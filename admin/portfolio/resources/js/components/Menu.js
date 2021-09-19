import React, {Component,Fragment} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faBookOpen, faCode, faComment, faHome, faPowerOff} from "@fortawesome/free-solid-svg-icons";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {faEnvelope, faFolder} from "@fortawesome/free-regular-svg-icons";

class Menu extends Component {
    constructor(props) {
        super();
        this.state={
            sideNav:false,
            sideNavClass:"sidenavClose",
            NavText:"d-none",
            mainDivOverlay:"main-overlay-close",
        }

        this.showHideSideNav=this.showHideSideNav.bind(this);
    }


    showHideSideNav(){
        if(this.state.sideNav===false){
            this.setState({sideNav:true,NavText:"",sideNavClass:"sidenavOpen",mainDivOverlay:"main-overlay-open"})
        }
        else {
            this.setState({sideNav:false,NavText:"d-none",sideNavClass:"sidenavClose",mainDivOverlay:"main-overlay-close"})
        }
    }

    render() {
        return (
            <Fragment>
                <title>{this.props.title}</title>
                <Navbar  expand="lg" className="fixed-top shadow-sm bg mb-5 py-2 text-white">
                    <Navbar.Brand onClick={this.showHideSideNav}  href="#"><FontAwesomeIcon className="t" icon={faBars} /></Navbar.Brand>
                    <b>ADMIN PANEL</b>
                </Navbar>

                <div className={this.state.sideNavClass}>
                    <Nav.Link className="NavItem" as={NavLink} to="/"> <FontAwesomeIcon icon={faHome}/> <span className={this.state.NavText}>Home</span> </Nav.Link>
                    <Nav.Link className="NavItem" as={NavLink} to="/contact"> <FontAwesomeIcon icon={faEnvelope}/> <span className={this.state.NavText}>Contact</span></Nav.Link>
                    <Nav.Link className="NavItem" as={NavLink} to="/course"> <FontAwesomeIcon icon={faBookOpen}/> <span className={this.state.NavText}>Courses</span></Nav.Link>
                    <Nav.Link className="NavItem" as={NavLink} to="/service"> <FontAwesomeIcon icon={faFolder}/> <span className={this.state.NavText}>Services</span></Nav.Link>
                    <Nav.Link className="NavItem" as={NavLink} to="/project"> <FontAwesomeIcon icon={faCode}/> <span className={this.state.NavText}>Projects</span></Nav.Link>
                    <Nav.Link className="NavItem" as={NavLink} to="/about"> <FontAwesomeIcon icon={faHome}/> <span className={this.state.NavText}>About</span></Nav.Link>
                    <Nav.Link className="NavItem" as={NavLink} to="/review"> <FontAwesomeIcon icon={faComment}/> <span className={this.state.NavText}>Review</span></Nav.Link>
                    <Nav.Link className="NavItem"  href="/logout"> <FontAwesomeIcon icon={faPowerOff}/> <span className={this.state.NavText}>Logout</span></Nav.Link>
                </div>

                <div onClick={this.showHideSideNav} className={this.state.mainDivOverlay}>

                </div>

                <div className="mainDiv">
                    {this.props.children}
                </div>
            </Fragment>
        );
    }
}

export default Menu;
