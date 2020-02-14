import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dataPoints =[
    {
        x: new Date('2020', '02', '01'), 
        y: 200
    },
    {
        x: new Date('2020', '07', '01'), 
        y: 500
    },
    {
        x: new Date('2020', '09', '01'), 
        y: 100
    },

];
class Charttemplate extends Component {
 
	render() {	
		const options = {
			theme: "light2",
			title: {
				text: "Work Hours"
			},
			axisY: {
				title: "Number of Hours",
				
                includeZero: false
			
            },
            axisX: {
				title: "Dates",
				
                includeZero: false
			
			},
			data: [{
				type: "line",
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "$#,##0.00",
				dataPoints: dataPoints
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options} 
				 onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
	
	componentDidMount(){
		var chart = this.chart;
		fetch('https://canvasjs.com/data/gallery/react/nifty-stock-price.json')
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			for (var i = 0; i < data.length; i++) {
				dataPoints.push({
					x: new Date(data[i].x),
					y: data[i].y
				});
			}
			chart.render();
		});
	}
}
 
export default Charttemplate;