import React, { Component } from "react";
import PieChart from './Charts/PieChart';
import BarChart from './Charts/BarChart';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render () {
        return (
            <div className="pages-model">
                <div id="dashboard-top">
                    <div className="diag-model">
                        <PieChart/>
                    </div>
                    <div className="diag-model">
                        <BarChart/>
                    </div>
                </div>
                <div id="dashboard-bot">
                    <div className="diag-model">
                        <p>something else</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
