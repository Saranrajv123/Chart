import React, { Component } from 'react';
import PieChart from './PieChart';
import './ChartIndex.css';

class Chartindex extends Component {
    state = {
        data: [5, 12, 8, 3, 10]

    }

    getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    componentDidMount() {
        //console.log(this.getRandomInt())
          setInterval(() => {
            let dataSize = this.getRandomInt(2, 6);
            let data = [];
            // console.log(dataSize)

            // data = dataSize.length();
            // while(data--) {
            //     data.push(this.getRandomInt(2, 10));
            // }
            // let loop = 5
            for (; dataSize--;) {
                data.push(this.getRandomInt(1, 20));
            }
            console.log(data)
            this.setState({ data: data });
        }, 2000);
    }

    render() {
        let colors = ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
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