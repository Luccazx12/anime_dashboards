var ctx = document.getElementsByClassName("bar-chart")
var barGraph = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        datasets: [{
            label: "Taxa de Animes- 2020",
            data: [5, 10, 5, 10, 15, 20, 5, 10, 5, 15],
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
        labels: ["Estados Unidos", "Brasil", "Canadá", "Reino Unido", "França", "Austrália", "México", "Alemanha", "Chile", "Argentina"],
        datasets: [{
            label: "",
            data: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
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
                label: "Animes mais asssistidos da década na América do Sul",
                data: [50, 40, 6, 2, 2],
                fill: false,
                borderWidth: 1,
                bordeColor: ["rgb(54, 162, 235)", "rgb(100, 99, 132)", "rgb(80, 50, 132)", "rgb(100, 150, 220)", "rgb(250, 107, 100)"],
                backgroundColor: ["rgb(54, 162, 235)", "rgba(100, 99, 132)", "rgba(80, 50, 132)", "rgba(255, 0, 0)", "rgba(55, 199, 132)"]
            }]
        }
    })