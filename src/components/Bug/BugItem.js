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
                <td>Id</td>
                <td>{ this.props.bugId }</td>
                <td>{ this.props.bugId }</td>
                <td>{ this.props.bugId }</td>
                <td>{ this.props.bugId }</td>
                <td>{ this.props.bugId }</td>
                <td>{ this.props.bugId }</td>
            </tr>
        )
    }
}

export default BugItem;
