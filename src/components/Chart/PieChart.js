import React, { Component } from 'react';
import Slice from './Slice';


class PieChart extends Component {

    render() {
        let colors = this.props.colors;
        let label = this.props.labels;
        console.log(label)
        // let length = this.props.length;
        let radius = this.props.radius;
        let hole = this.props.hole;
        let diameter = radius * 2;
        let startAngle = 0;

        let sum = this.props.data.reduce((value1, value2) => {
            return (value1 + value2)
        })
        console.log(sum)

       const chart = this.props.data.map((slice, index) => {
            let angle, nextAngle, percentage;

            nextAngle = startAngle;
            angle = (slice / sum) * 360;
            percentage = (slice / sum) * 100;
            startAngle += angle;
            
            return <Slice
                key={`#Key${index}`}
                value={slice}
                percentage={this.props.percentage}
                percentValue={percentage.toFixed(2)}
                startAngle={nextAngle}
                angle={angle}
                radius={radius}
                hole={radius - hole}
                trueHole={hole}
                showLabel={label}
                fill={colors[index]}
                stroke={this.props.stroke}
                strokeWidth={this.props.strokeWidth}
            />
        })

        return (
        
            <svg width={diameter} height={diameter} viewBox={'0 0 ' + diameter + ' ' + diameter} xmlns="http://www.w3.org/2000/svg" version="1.1">
               {chart}
            </svg>



        );
    }
}

export default PieChart;