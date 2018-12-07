import React, { Component } from 'react';
import Slice from './Slice';


class PieChart extends Component {

    render() {
        const colors = this.props.colors;
        const label = this.props.label;
        const length = this.props.length;
        const radius = this.props.radius;
        const hole = this.props.hole;
        const diameter = radius * 2;
        let startAngle = 0;

        let sum = this.props.data.reduce((value1, value2) => {
            return (value1 + value2)
        })
        console.log(sum)

        return (
        
            <svg width={diameter} height={diameter} viewBox={'0 0 ' + diameter + ' ' + diameter} xmlns="http://www.w3.org/2000/svg" version="1.1">
                {this.props.data.map((slice, index) => {
                    let angle, nextAngle, percentage;

                    nextAngle = startAngle;
                    angle = (slice / sum) * 360;
                    percentage = (slice / sum) / 100;
                    startAngle += angle;

                    return <Slice
                        key={index}
                        value={slice}
                        percentage={this.props.percentage}
                        percentValue={percentage.toFixed(1)}
                        startAngle={nextAngle}
                        angle={angle}
                        radius={radius}
                        hole={radius - hole}
                        trueHole={hole}
                        showLabel={label}
                        fill={colors[index % length]}
                        stroke={this.props.stroke}
                        strokeWidth={this.props.strokeWidth}
                    />
                })}
            </svg>



        );
    }
}

export default PieChart;