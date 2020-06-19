import React, { Component } from "react";
//import { } from "react-bootstrap";

import BugItem from './BugItem';
import {Table} from "react-bootstrap";

class BugTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bugList : [{ bugId: 4, bugStatus: "In Progress", bugPriority: 3, bugProject: 1245, bugOwner: "Larry Kidd", bugTitle: "Testing 1-2"},
                { bugId: 134, bugStatus: "Waiting Room", bugPriority: 5, bugProject: 5421, bugOwner: "Loud Mouth", bugTitle: "Testing 3-4"}]
        };
    }

    render () {
        return (
            <div className="table-container">
                <Table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Status</th>
                        <th>Priority</th>
                        <th>Project</th>
                        <th>Owner</th>
                        <th>Title</th>
                    </tr>
                    </thead>
                    <tbody>
                        { this.state.bugList.map((key) => {
                            return ( <BugItem data={key}/> )
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default BugTable;
