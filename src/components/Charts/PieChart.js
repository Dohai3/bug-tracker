import React, { Component } from "react";
import { Pie } from 'react-chartjs-2';
import getRandomColor from '../../utils/getRandomColor';

class PieChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                labels: ["MyBugTracker", "QuizApp", "Credit card app"],
                datasets: [
                    {
                        label: "Bugs",
                        backgroundColor: [getRandomColor(), getRandomColor(), getRandomColor()],
                        data: [12, 1, 34]
                    }
                ]
            },
            options: {
                title:{
                    display: true,
                    text: 'Number of bugs for each of your projects',
                    fontSize: 25
                }
            }
        };
    }

    render () {
        return (
            <div>
                <Pie
                    data={this.state.data}
                />
            </div>
        )
    }
}

export default PieChart;
