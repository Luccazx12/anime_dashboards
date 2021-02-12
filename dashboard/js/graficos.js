var ctx = document.getElementsByClassName("bar-chart")
var barGraph = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Hunter x Hunter", "Shingekin no Kyojin ", "Haikyuu", "Gintama", "Fullmetal Brotherhood", 
        "Ginga Eiyuu Densetsu ", "Koe no Katachi", "Kimi no Na wa", "Code Geas", "Steins Gate"],
        datasets: [{
            label: "Top 10 Animes do MyAnimeList - Nota 0 - 10",
            data: [9.10, 9.17, 8.87 , 9.10, 9.20, 9.07, 9, 8.97, 8.91, 9.11],
            fill: false,
            borderWidth: 1,
            bordeColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)", "rgb(255,0,0)", "rgb(0, 152, 0)", "rgb(0, 0, 255)"],
            backgroundColor: ["rgba(255, 99, 132)", "rgba(255, 159, 64)", "rgba(255, 205, 86)", "rgba(75, 192, 192)", "rgba(54, 162, 235)", "rgba(153, 102, 255)", "rgba(201, 203, 207)", "rgba(255,0,0)", "rgba(0, 152, 0)", "rgba(0, 0, 255)"]
        }]
    }
})


var ctx = document.getElementsByClassName("line-chart");

var chartGraph = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Indonésia", "Filipinas",  "Chile", "El Salvador", "Peru",  "Japão", "Arábia Saudita", "Malásia", "México", "Costa Rica"],
        datasets: [{
            label: "",
            data: [5, 9, 4 , 7, 6, 10, 8, 3, 2, 1],
            borderWidth: 4,
            bordeColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)", "rgb(255,0,0)", "rgb(0, 152, 0)", "rgb(0, 0, 255)"],
            backgroundColor: ["rgba(255, 99, 132)", "rgba(255, 159, 64)", "rgba(255, 205, 86)", "rgba(75, 192, 192)", "rgba(54, 162, 235)", "rgba(153, 102, 255)", "rgba(201, 203, 207)", "rgba(255,0,0)", "rgba(0, 152, 0)", "rgba(0, 0, 255)"]
        }]
    }
})

var ctx = document.getElementsByClassName("bar-chart2")
var barGraph = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Uruguai", "Índia", "Peru", "Colômbia", "Filipinas", "Equador", "Itália", "El Salvador", "Polônia", "República Dominicana"],
        datasets: [{
            label: "Ranking dos países que mais assistiram a streaming pelo Crunchyroll no Primeiro trimestre de 2020",
            data: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
            fill: false,
            borderWidth: 1,
            bordeColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)", "rgb(255,0,0)", "rgb(0, 152, 0)", "rgb(0, 0, 255)"],
            backgroundColor: ["rgba(255, 99, 132)", "rgba(255, 159, 64)", "rgba(255, 205, 86)", "rgba(75, 192, 192)", "rgba(54, 162, 235)", "rgba(153, 102, 255)", "rgba(201, 203, 207)", "rgba(255,0,0)", "rgba(0, 152, 0)", "rgba(0, 0, 255)"]
        }]
    }
})

var ctx = document.getElementsByClassName('doughnut')
var MyDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Dragon Ball Super", "Naruto Shippuden", "My Hero Academia", "One Piece", "Black Clover"],
        datasets: [{
            label: "Animes mais assistidos da década na América do Sul",
            data: [50, 40, 6, 2, 2],
            fill: false,
            borderWidth: 1,
            bordeColor: ["rgb(54, 162, 235)", "rgb(100, 99, 132)", "rgb(80, 50, 132)", "rgb(100, 150, 220)", "rgb(250, 107, 100)"],
            backgroundColor: ["rgb(54, 162, 235)", "rgba(100, 99, 132)", "rgba(80, 50, 132)", "rgba(255, 0, 0)", "rgba(55, 199, 132)"]
        }]
    }
})
//Cores para os personagen----> "rgb(0,255,127)", "rgb(173,255,47)", "rgb(139,0,139)", "rgb(139,0,0)"],
new Chart(document.getElementsByClassName("radar"),
    {
        "type": "radar", "data":
        {
            "labels": ["Resistência", "Velocidade", "Inteligência", "Força", "Haki"],
            datasets:
                [{
                    label: "Zoro",
                    data: [100, 70, 40, 100, 90],
                    fill: true, "backgroundColor": "rgba(50,205,50, 0.2)",
                    borderColor: "rgb(50,205,50)",
                    pointBackgroundColor: "rgb(50,205,50)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgb(50,205,50)"
                },
                {
                    label: "Sanji", "data": [85, 90, 70, 95, 85],
                    fill: true, "backgroundColor": "rgba(255,215,0, 0.2)",
                    borderColor: "rgb(255,215,0)",
                    pointBackgroundColor: "rgb(255,215,0)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgb(255,215,0)"
                },
                {
                    label: "Luffy", "data": [95, 80, 30, 100, 100],
                    fill: true, "backgroundColor": "rgba(255,0,0, 0.2)",
                    borderColor: "rgb(255,0,0)",
                    pointBackgroundColor: "rgb(255,0,0)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgb(255,0,0)"
                }]
        },
        "options":
        {
            "elements":
            {
                "line":
                {
                    "tension": 0,
                    "borderWidth": 3
                }
            }
        }
    });

var ctx = document.getElementsByClassName("recompensas")
var barGraph = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Roger", "Barba Branca", "Kaido", "Big Mom", "Shanks", "Barba Negra", "Luffy", "Queen", "Katakuri", "Jack"],
        datasets: [{
            label: "Maiores Recompensas de One Piece - Em Bilhões",
            data: [5.64, 5.46, 4.61, 4.39, 4.05, 2.5, 1.5, 1.32, 1.16, 1],
            fill: true, 
            borderWidth: 1,
            bordeColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(255,0,0)", "rgb(201, 203, 207)", "rgb(0, 152, 0)", "rgb(0, 0, 255)"],
            backgroundColor: ["rgba(255, 99, 132)", "rgba(255, 159, 64)", "rgba(255, 205, 86)", "rgba(75, 192, 192)", "rgba(54, 162, 235)", "rgba(153, 102, 255)", "rgba(201, 203, 207)", "rgba(255,0,0)", "rgba(0, 152, 0)", "rgba(0, 0, 255)"]
        }]
    }
})