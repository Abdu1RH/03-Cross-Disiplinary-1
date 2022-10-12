Chart.register(ChartDataLabels);

const ctx = document.querySelector('#chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Rock                              ", "Latin", "                        Alternative & Punk", "                       Metal", "                     TV Shows"],

        datasets: [
            {
                label: "Rock",
                data: [87],
                backgroundColor: ["red"],
            },

            {
                label: "Latin",
                data: [0,68],
                backgroundColor: ["yellow"],
            },
            {
                label: "Andre",
                data: [0, 0, 22, 22, 14],
                backgroundColor: ["gray"],

            }]
    },

    options: {

        legend: {
            fontColor: "white",
        },

        scales: {
            y: {
                grid: {
                    color: "gray"
                }
            },

        },

        plugins: {
            title: {
                display: true,
                text: "Antal solgte sange i musikgenrene",
                color: "white"
            },

            datalabels: { // This code is used to display data values
                display: false,
                anchor: 'end',
                align: 'top',
                formatter: Math.round,
                font: {
                    weight: 'bold',
                    size: 10
                }
            }
        }
    }

});
