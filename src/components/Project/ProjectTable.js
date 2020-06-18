import React, { Component } from "react";
import { Table } from "react-bootstrap";

import ProjectItem from './ProjectItem';

class ProjectTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectList : [1, 2, 3]
        };
    }

    render () {
        return (
            <Table responsive>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                </tr>
                </thead>
                <tbody>
                    { this.state.projectList.map((key) => {
                      return ( <ProjectItem projectId={key}/> )
                    })}
                </tbody>
            </Table>
        )
    }
}

export default ProjectTable;
