import React, { Component } from "react";

import ProjectTable from './ProjectTable';
import ProjectAdd from './ProjectAdd';

class ProjectPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render () {
        return (
            <div className="pages-model">
                <div className="table-header">
                    <h2>Your projects</h2>
                    <ProjectAdd/>
                </div>
                <ProjectTable/>
            </div>


        )
    }
}

export default ProjectPage;
