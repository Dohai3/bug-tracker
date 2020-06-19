import React, { Component } from "react";

class BugItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render () {
        return (
            <tr>
                <td>{ this.props.data.bugId }</td>
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
