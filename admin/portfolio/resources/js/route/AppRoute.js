import React, {Component} from 'react';
import {Route, Switch} from "react-router";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import CoursePage from "../pages/CoursePage";
import ServicePage from "../pages/ServicePage";
import ProjectPage from "../pages/ProjectPage";
import AboutPage from "../pages/AboutPage";
import ReviewPage from "../pages/ReviewPage";

class AppRoute extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/course" component={CoursePage}/>
                    <Route exact path="/service" component={ServicePage}/>
                    <Route exact path="/project" component={ProjectPage}/>
                    <Route exact path="/review" component={ReviewPage}/>
                    <Route exact path="/about" component={AboutPage}/>
                </Switch>
            </>
        );
    }
}

export default AppRoute;
