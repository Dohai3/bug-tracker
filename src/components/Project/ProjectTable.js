import React, { Component } from "react";
import { Table } from "react-bootstrap";

import ProjectItem from './ProjectItem';

class ProjectTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectList : [{ projectId: 4567, projectStatus: "In Progress", projectOwner: "Larry Kidd", projectTitle: "Testing Project 1-2"},
                { projectId: 8975, projectStatus: "Waiting Room", projectOwner: "Loud Mouth", projectTitle: "Testing Project 3-4"}]
        };
    }

    render () {
        return (
            <div className="table-container">
                <Table responsive>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Owner</th>
                    </tr>
                    </thead>
                    <tbody>
                        { this.state.projectList.map((key) => {
                            return ( <ProjectItem data={key}/> )
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default ProjectTable;
