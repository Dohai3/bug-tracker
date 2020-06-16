import React, { Component } from "react";

import BugFilter from './BugFilter';
import BugTable from './BugTable';
import BugAdd from './BugAdd';

class BugList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectId : 0
        };
    }

    render () {
        return (
            <div>
                <h1>BugList</h1>
                <BugFilter/>
                <BugTable/>
                <BugAdd/>
            </div>


        )
    }
}

export default BugList;
