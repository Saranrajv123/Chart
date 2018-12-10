import React, { Component } from 'react';
import PieChart from './PieChart';
import './ChartIndex.css';

class Chartindex extends Component {
    state = {
        data: [2, 3, 4, 5, 6]

    }

    getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    componentDidMount() {
        console.log(this.getRandomInt())
          setInterval(() => {
            let dataSize = this.getRandomInt(2, 10);
            let data = [];
            // console.log(dataSize)

            // data = dataSize.length();
            // while(data--) {
            //     data.push(this.getRandomInt(2, 10));
            // }
            for (; dataSize--;) {
                data.push(this.getRandomInt(2, 30));
            }
            this.setState({ data: data });
        }, 2000);
    }

    render() {
        let colors = ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C','#ff8000','#b300b3','#1aff1a']
        return (
            <div>
                <PieChart
                    data={this.state.data}
                    radius={100}
                    hole={8}
                    colors={colors}
                    labels={true}
                    percentage={true}
                    strokeWidth={2}
                    stroke={'#fff'}

                />

               

            </div>
        );
    }
}

export default Chartindex;