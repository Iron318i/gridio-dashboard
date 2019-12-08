import jQuery from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";
import "chart.js";


var ctx = document.getElementById('chartMonthlyConsumption').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
	labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	datasets: [{
		//barThickness: 6,
		maxBarThickness: 60,
		label: '',
		backgroundColor: '#42b9f1',
		borderColor: '#42b9f1',
		data: [4, 4.8, 2.8, 2.4, 2, 0.8, 0.4, 0.8, 1.6, 2.4, 3.2, 3.6]
	    }]
    },

    // Configuration options go here
    options: {
	responsive: true,
	maintainAspectRatio: false,
	legend: {
	    display: false
	},
	scales: {
	    yAxes: [{
		    display: false
		}],
	    xAxes: [{
		    ticks: {
			fontColor: "white",
			fontSize: 23,
			stepSize: 1,
			beginAtZero: true
		    }
		}]
	},
    }

});

jQuery(function () {
});
