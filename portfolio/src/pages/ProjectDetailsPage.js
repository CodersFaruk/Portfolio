import React, { Component, Fragment } from 'react';
import Menu from '../components/Menu';
import TopPage from '../components/TopPage';
import ProjectDetails from '../components/ProjectDetails';
import Footer from '../components/Footer';

class ProjectDetailsPage extends Component {
    constructor({match}){
        super()
        this.state={
            ParamsId:match.params.projectId,
            ParamsName:match.params.projectName
        }
    }


    componentDidMount() {
        window.scrollTo(0, 0);
      }


    render() {
        return (
            <Fragment>
            <Menu title="Project Details"/>
            <TopPage BannerTitle={this.state.ParamsName}/>
            <ProjectDetails id={this.state.ParamsId}/>
            <Footer/>
         </Fragment>
        );
    }
}

export default ProjectDetailsPage;