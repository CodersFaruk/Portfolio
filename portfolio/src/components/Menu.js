import React, { Component, Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo1 from "../assets/images/logo1.svg";
import logo2 from "../assets/images/logo2.svg";

class Menu extends Component {
  constructor(props) {
    super();
    this.state = {
      titleOfPage: props.title,
      navBarTitle: "navTitle",
      NavVariant: "dark",
      NavbarLogo: [logo1],
      NavbarBack: "navBackground",
      NavBarItem: "navItem"
    };
  }

  onScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        NavVariant: "light",
        navBarTitle: "navTitleScroll",
        NavbarLogo: [logo2],
        NavbarBack: "navBackgroundScroll",
        NavBarItem: "navItemScroll"
      });
    } else if (window.scrollY < 100) {
      this.setState({
        NavVariant: "dark",
        navBarTitle: "navTitle",
        NavbarLogo: [logo1],
        NavbarBack: "navBackground",
        NavBarItem: "navItem"
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  render() {
    return (
      <Fragment>
        <title>{this.state.titleOfPage}</title>
        <Navbar
          fixed="top"
          collapseOnSelect
          expand="lg"
          variant={this.state.NavVariant}
          className={this.state.NavbarBack}
        >
          <Navbar.Brand as={NavLink} to="/" className={this.state.navBarTitle}>
            <img className="LogoImg" src={this.state.NavbarLogo} alt="logo1" />{" "}
            CoderFaruk
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link
                exact
                activeStyle={{ color: "#0073E6" }}
                className={this.state.NavBarItem}
                as={NavLink}
                to="/"
              >
                HOME
              </Nav.Link>
              <Nav.Link
                exact
                activeStyle={{ color: "#0073E6" }}
                className={this.state.NavBarItem}
                as={NavLink}
                to="/service"
              >
                SERVICES
              </Nav.Link>
              <Nav.Link
                exact
                activeStyle={{ color: "#0073E6" }}
                className={this.state.NavBarItem}
                as={NavLink}
                to="/course"
              >
                COURSES
              </Nav.Link>
              <Nav.Link
                exact
                activeStyle={{ color: "#0073E6" }}
                className={this.state.NavBarItem}
                as={NavLink}
                to="/portfolio"
              >
                PORTFOLIO
              </Nav.Link>
              <Nav.Link
                exact
                activeStyle={{ color: "#0073E6" }}
                className={this.state.NavBarItem}
                as={NavLink}
                to="/contact"
              >
                CONTACT
              </Nav.Link>
              <Nav.Link
                exact
                activeStyle={{ color: "#0073E6" }}
                className={this.state.NavBarItem}
                as={NavLink}
                to="/about"
              >
                ABOUT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default Menu;
