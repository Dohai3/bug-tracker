import React, { Component } from "react";
//import { } from "react-bootstrap";

import BugItem from './BugItem';
import {Table} from "react-bootstrap";

class BugTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bugList : [4, 5, 6]
        };
    }

    render () {
        return (
            <Table responsive>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                </tr>
                </thead>
                <tbody>
                { this.state.bugList.map((key) => {
                    return ( <BugItem bugId={key}/> )
                })}
                </tbody>
            </Table>
        )
    }
}

export default BugTable;
