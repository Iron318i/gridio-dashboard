import jQuery from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";
import "chart.js";

+function ($) {

    $(document).ready(function () {

	if ($(window).width() > 767) {
	    var chartFontSize = 23;
	} else {
	    var chartFontSize = 12;
	}

//Monthly consumption (KW)
	if ($("canvas").is("#chartMonthlyConsumption")) {

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
				    fontSize: chartFontSize,
				    stepSize: 1,
				    beginAtZero: true
				}
			    }]
		    },
		}

	    });
	    Chart.plugins.register({
		afterDatasetsDraw: function (chart, easing) {
		    // To only draw at the end of animation, check for easing === 1
		    var ctx = chart.ctx;

		    chart.data.datasets.forEach(function (dataset, i) {
			var meta = chart.getDatasetMeta(i);
			if (!meta.hidden) {
			    meta.data.forEach(function (element, index) {
				// Draw the text in black, with the specified font
				ctx.fillStyle = 'rgb(255, 255, 255)';

				var fontSize = 16;
				var fontStyle = 'normal';
				var fontFamily = 'Helvetica Neue';
				ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

				// Just naively convert to string for now
				var dataString = dataset.data[index].toString();

				// Make sure alignment settings are correct
				ctx.textAlign = 'center';
				ctx.textBaseline = 'bottom';

				var padding = 5;
				var position = element.tooltipPosition();
				ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
			    });
			}
		    });
		}
	    });


	    $(".chart-wrp .btn-next").on('click', function () {

		chart.data = {
		    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
		    datasets: [{
			    //barThickness: 6,
			    maxBarThickness: 60,
			    label: '',
			    backgroundColor: '#42b9f1',
			    borderColor: '#42b9f1',
			    data: [4, 4.8, 2.8, 2.4, 2, 0.8, 0.4, 0.8, 1.6, 2.4, 3.2, 3.6, 4, 2.8, 2.4, 2, 0.8, 0.4, 0.8, 1.6, 2.4, 3.2, 3.6, 0.8, 0.4, 0.8, 1.6, 2.4, 3.2, 1.6]
			}]
		};

		chart.update();
	    });
	    $(".chart-wrp .btn-prev").on('click', function () {

		chart.data = {
		    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		    datasets: [{
			    //barThickness: 6,
			    maxBarThickness: 60,
			    label: '',
			    backgroundColor: '#42b9f1',
			    borderColor: '#42b9f1',
			    data: [4, 4.8, 2.8, 2.4, 2, 0.8, 0.4]
			}]
		};

		chart.update();
	    });


	}//is("#chartMonthlyConsumption")

//Contribution (KWh)
	if ($("canvas").is("#chartContribution")) {
	    var ctx = document.getElementById('chartContribution');
	    var chart = new Chart(ctx, {
		// The type of chart we want to create
		type: 'horizontalBar',

		// The data for our dataset
		data: {
		    labels: ['You helped the grid by adjusting your power use', 'You helped the grid without any impact on power use'],
		    datasets: [{
			    //barThickness: 6,
			    maxBarThickness: 60,
			    label: '',
			    data: [4.8, 4.1],
			    backgroundColor: ['#17fe3f', '#e0ff00']
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
			xAxes: [{
				display: false
			    }],
			yAxes: [{
				ticks: {
				    fontColor: "white",
				    fontSize: chartFontSize,
				    stepSize: 1,
				    beginAtZero: true
				}
			    }]
		    },
		}

	    });
	}//is("#chartMonthlyConsumption")
//
//24h Consumption (KW)
	if ($("canvas").is("#chart24hConsumption")) {
	    var ctx = document.getElementById('chart24hConsumption');
	    var chart = new Chart(ctx, {
		// The type of chart we want to create
		type: 'line',

		// The data for our dataset
		data: {
		    labels: ['00:00:30', '00:01:00', '00:01:30', '00:02:00', '00:02:30', '00:03:00', '00:03:30', '00:04:00', '00:04:30', '00:05:00', '00:05:30', '00:06:00', '00:06:30', '00:07:00', '00:07:30', '00:08:00', '00:08:30', '00:09:00', '00:09:30', '00:10:00', '00:10:30', '00:11:30', '00:12:00', '00:12:30', '00:13:00', '00:13:30', '00:14:00', '00:14:30', '00:15:00', '00:15:30', '00:16:00', '00:16:30', '00:17:00', '00:17:30', '00:18:00', '00:18:30', '00:19:00', '00:19:30', '00:20:00', '00:20:30', '00:21:00', '00:21:30', '00:22:00', '00:22:30', '00:23:00', '00:23:30', '00:24:00'],
		    datasets: [{
			    //barThickness: 6,
			    borderWidth: 6,
			    label: '',
			    // backgroundColor: '#42b9f1',
			    borderColor: '#42b9f1',
			    data: [5, 30, 15, 5, 17, 4, 20, 15, 4, 18, 30, 40, 22, 18, 16, 10, 3, 17, 28, 32, 15, 10, 8, 14, 19, 27, 31, 22, 16, 10, 12, 14, 21, 24, 26, 18, 10, 4, 2, 16, 14, 20, 24, 30, 22, 18, 14, 0],
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
				    fontSize: 12,
				    stepSize: 1,
				    beginAtZero: true
				}
			    }]
		    },
		    tooltips: {
			mode: 'index',
			intersect: false
		    },
		    hover: {
			mode: 'index',
			intersect: false
		    },
		    elements: {
			point: {
			    radius: 0
			}
		    }
		}

	    });

	}//is("#chartMonthlyConsumption")


    });

}(jQuery);
