import React, { Component } from "react";

import ProjectTable from './ProjectTable';
import ProjectAdd from './ProjectAdd';

class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render () {
        return (
            <div>
                <h1>ProjectList</h1>
                <ProjectTable/>
                <ProjectAdd/>
            </div>


        )
    }
}

export default ProjectList;
