import React, { Component } from 'react';

class Slice extends Component {
    state = {
        path: '',
        xAxis: 0,
        yAxis: 0
    }

    componentDidMount() {
        this.chartAnimate();
    }

    componentWillReceiveProps() {
        this.setState({ path: '' });
        this.chartAnimate();
    }

    chartAnimate = () => {
        this.drawChart(true);

    }

    getAnglePoint = (startAngle, endAngle, radius, xAngle, yAngle) => {
        let x1, y1, x2, y2;

      
        x1 = xAngle + radius * Math.cos(Math.PI * startAngle / 180);
        y1 = yAngle + radius * Math.sin(Math.PI * startAngle / 180);
        x2 = xAngle + radius * Math.cos(Math.PI * endAngle / 180);
        y2 = yAngle + radius * Math.sin(Math.PI * endAngle / 180);
      
        // console.log(x1, x2, y1, y2)
 
        return { x1, y1, x2, y2 };
      }

    drawChart = (s) => {
        let path = [], a, b, c;
		let step = this.props.angle / (37.5 / 2);

		if (s + step > this.props.angle) {
			s = this.props.angle;
		}

		a = this.getAnglePoint(this.props.startAngle, this.props.startAngle + s, this.props.radius, this.props.radius, this.props.radius);
		b = this.getAnglePoint(this.props.startAngle, this.props.startAngle + s, this.props.radius - this.props.hole, this.props.radius, this.props.radius);

        
		path.push('M' + a.x1 + ',' + a.y1);
		path.push('A'+ this.props.radius +','+ this.props.radius +' 0 '+ (s > 180 ? 1 : 0) +',1 '+ a.x2 + ',' + a.y2);
		path.push('L' + b.x2 + ',' + b.y2);
		path.push('A'+ (this.props.radius - this.props.hole) +','+ (this.props.radius- this.props.hole) +' 0 '+ (s > 180 ? 1 : 0) +',0 '+ b.x1 + ',' + b.y1);

		path.push('Z');

		this.setState({ path: path.join(' ') });

		if (s < this.props.angle) {
			setTimeout(() => { this.drawChart(s + step) } , 16);
		} else if (this.props.showLabel) {
			c = this.getAnglePoint(this.props.startAngle, this.props.startAngle + (this.props.angle / 2), (this.props.radius / 2 + this.props.trueHole / 2), this.props.radius);

			this.setState({
				xAxis: c.x2,
				yAxis: c.y2
			});
		}
	}
    render() {
        return (
            <g>
          
            <path
                d={ this.state.path }
                fill={ this.props.fill }
                stroke={ this.props.stroke }
                strokeWidth={ this.props.strokeWidth ? this.props.strokeWidth : 3 }
                 />
            { this.props.showLabel && this.props.percentValue > 10 ?
                <text x={ this.state.xAxis } y={ this.state.yAxis } fill="#fff" textAnchor="middle">
                    { this.props.percentage ? this.props.percentValue + '%' : this.props.value }
                </text>
            : null }
        </g>
        );
    }
}

export default Slice;