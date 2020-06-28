import React, { Component } from "react";

import BugFilter from './BugFilter';
import BugTable from './BugTable';
import BugAdd from './BugAdd';

class BugPage extends Component {
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
                    <div>
                        <h1>BugList</h1>
                        <BugFilter/>
                    </div>
                    <BugAdd/>
                </div>
                <BugTable/>

            </div>
        )
    }
}

export default BugPage;
