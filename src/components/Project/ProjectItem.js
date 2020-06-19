import React, { Component } from "react";

class ProjectItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render () {
        return (
            <tr>
                <td>{ this.props.data.projectId }</td>
                <td>{ this.props.data.projectTitle }</td>
                <td>{ this.props.data.projectStatus }</td>
                <td>{ this.props.data.projectOwner }</td>
            </tr>
        )
    }
}

export default ProjectItem;
