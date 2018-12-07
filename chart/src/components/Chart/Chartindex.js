import React, { Component } from 'react';
import PieChart from './PieChart';
import './ChartIndex.css';

class Chartindex extends Component {
    state = {
        data: [15, 12, 2, 3, 9],
    }

    getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    componentDidMount() {
        console.log(this.getRandomInt)
        setInterval(() => {
            let dataSize = this.getRandomInt(2, 10), data = [];
            console.log(dataSize)

            // data = dataSize.length();
            // while(data--) {
            //     data.push(this.getRandomInt(2, 10));
            // }
            for (; dataSize--;) {
                data.push(this.getRandomInt(2, 30));
            }

            this.setState({ data: data });

        }, 3000);
    }
    render() {
        // let colors = ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C'];
        let colors = ['red', 'blue', 'green', 'yellow']
        return (
            <div>
                <PieChart
                    data={this.state.data}
                    radius={180}
                    hole={20}
                    colors={colors}
                    // style={{ color: 'red'}}
                    labels={true}
                    percent={true}
                    strokeWidth={8}
                    stroke={'#fff'}

                />

            </div>
        );
    }
}

export default Chartindex;