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
            <div className="pages-model">
                <div className="table-header">
                    <h1>BugList</h1>
                    <BugAdd/>
                </div>
                <BugFilter/>
                <BugTable/>

            </div>
        )
    }
}

export default BugList;
