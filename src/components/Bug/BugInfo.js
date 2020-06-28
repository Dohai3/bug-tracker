import React, { Component } from "react";

class BugInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bugId: 0
        };
    }

    componentDidMount() {
        this.setState( {
            bugId: this.props.match.params.bugId
        })
    }

    render () {
        return (
            <div className="pages-model">
                <h1>BugInfo</h1>
                <h3>{ this.state.bugId }</h3>
            </div>
        )
    }
}

export default BugInfo;
