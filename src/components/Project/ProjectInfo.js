import React, { Component } from "react";

class ProjectInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectId: 0
        };
    }

    componentDidMount() {
        this.setState( {
            projectId: this.props.match.params.projectId
        })
    }

    render () {
        return (
            <div>
                <h1>ProjectInfo</h1>
                <h3>{ this.state.projectId }</h3>
            </div>
        )
    }
}

export default ProjectInfo;
