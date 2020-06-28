import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProjectItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render () {
        return (
            <tr key={this.props.data.projectId}>
                <td>
                    <Link to={`/projects/${this.props.data.projectId}`}>
                        { this.props.data.projectId }
                    </Link>
                </td>
                <td>{ this.props.data.projectTitle }</td>
                <td>{ this.props.data.projectStatus }</td>
                <td>{ this.props.data.projectOwner }</td>
            </tr>
        )
    }
}

export default ProjectItem;
