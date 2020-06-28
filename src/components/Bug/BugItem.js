import React, { Component } from "react";
import { Link } from "react-router-dom";

class BugItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render () {
        return (
            <tr key={this.props.data.bugId}>
                <td>
                    <Link to={`/bugs/${this.props.data.bugId}`}>
                        { this.props.data.bugId }
                    </Link>
                </td>
                <td>{ this.props.data.bugStatus }</td>
                <td>{ this.props.data.bugPriority }</td>
                <td>{ this.props.data.bugProject }</td>
                <td>{ this.props.data.bugOwner }</td>
                <td>{ this.props.data.bugTitle }</td>
            </tr>
        )
    }
}

export default BugItem;
