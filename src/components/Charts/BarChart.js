import React, { Component } from "react";
import { Bar } from 'react-chartjs-2';
import getRandomColor from '../../utils/getRandomColor';

class BarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                labels: ["MyBugTracker", "QuizApp", "Credit card app"],
                datasets: [
                    {
                        backgroundColor: [getRandomColor(), getRandomColor(), getRandomColor()],
                        data: [124, 723, 2236]
                    }
                ]
            },
            options: {
                title:{
                    display: true,
                    text: 'Number of bugs for each projects',
                    fontSize: 25
                },
                legend:{
                    display: false
                }
            }
        };
    }

    render () {
        return (
            <div>
                <Bar
                    data={this.state.data}
                    height={200}
                    options={this.state.options}
                />
            </div>
        )
    }
}

export default BarChart;
