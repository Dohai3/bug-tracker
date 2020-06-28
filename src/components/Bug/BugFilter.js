import React, { Component } from "react";

class BugFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleSearch(event) {
        console.log("we sure are handling that search...." + event.valueOf())
    }

    render () {
        return (
            <div className="input-field">
                <input type="text" placeholder="Filter" onKeyUp={this.handleSearch.bind(this)}/>
            </div>
        )
    }
}

export default BugFilter;
