// First  Chart 

var ctx = document.getElementById("myChart-01").getContext("2d");

var data = {
    labels: ["January", "February", "March", "April"],
    datasets: [{
            label: "Page Impressions",
            data: [10, 20, 30, 40],
            borderColor: "#3B82F6",
            backgroundColor: "#FECACA",

        },
        {
            label: "Adsense Clicks",
            data: [5, 15, 10, 30],
            backgroundColor: "#36A2EB",
            borderColor: "#3B82F6",
            "fill": false,
            "type": "line",


        },
    ]
};

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {

        scales: {
            yAxes: [{
                ticks: {
                    "beginAtZero": true

                }
            }]
        }
    }
});


// Second   Chart 
var ctx = document.getElementById("myChart-02").getContext("2d");

var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
        label: "Views",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "#D1D5DB",
        borderColor: "#34D399",
        "fill": false,
        lineTension: 0.1,
    }, ]
};

var myBarChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {

        scales: {
            yAxes: [{
                ticks: {


                }
            }]
        }
    }
});

// 3rd  Chart 

var ctx = document.getElementById("myChart-03").getContext("2d");

var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
        label: "Likes",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: ["#F3F4F6", "#FEE2E2", "#FEF3C7", "#D1FAE5", "#DBEAFE", "#E0E7FF", "#FBCFE8"],
        borderColor: ["#6B7280", "#F87171", "#FBBF24", "#10B981", "#3B82F6", "#6366F1", "#DB2777"],
        borderWidth: 1,
    }, ]
};

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {

        scales: {
            yAxes: [{
                ticks: {


                }
            }]
        }
    }
});



// 4th   Chart 

var xValues4 = ["P1", "P2", "P3"];
var yValues4 = [300, 50, 100];
var barColors4 = [
    "#EF4444",
    "#3B82F6",
    "#FBBF24"
];

new Chart("myChart-04", {
    type: "doughnut",
    data: {
        labels: xValues4,
        datasets: [{
            backgroundColor: barColors4,
            data: yValues4
        }]
    },
    options: {
        title: {
            display: true,

        }
    }
});