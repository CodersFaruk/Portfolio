import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import AboutPage from '../pages/AboutPage';
import AllCoursesPage from '../pages/AllCoursesPage';
import AllProjectPage from '../pages/AllProjectPage';
import ContactPage from '../pages/ContactPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';
import HomePage from '../pages/HomePage';
import PrivacyPage from '../pages/PrivacyPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import RefundPage from '../pages/RefundPage';
import ServicePage from '../pages/ServicePage';
import TermsConditionPage from '../pages/TermsConditionPage';

class AllRouter extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/service" component={ServicePage} />
                <Route exact path="/course" component={AllCoursesPage} />
                <Route exact path="/portfolio" component={AllProjectPage} />
                <Route exact path="/contact" component={ContactPage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/refund-policy" component={RefundPage} />
                <Route exact path="/terms" component={TermsConditionPage} />
                <Route exact path="/privacy" component={PrivacyPage} />
                <Route exact path="/project-details/:projectId/:projectName" component={ProjectDetailsPage} />
                <Route exact path="/course-details/:courseId" component={CourseDetailsPage} />
                </Switch>
            </Fragment>
        );
    }
}

export default AllRouter;