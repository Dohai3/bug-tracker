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
                <td>Id</td>
                <td>{ this.props.projectId }</td>
                <td>{ this.props.projectId }</td>
                <td>{ this.props.projectId }</td>
                <td>{ this.props.projectId }</td>
                <td>{ this.props.projectId }</td>
                <td>{ this.props.projectId }</td>
            </tr>
        )
    }
}

export default ProjectItem;
