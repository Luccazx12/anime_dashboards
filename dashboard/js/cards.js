deck = [
    {
        id: 0,
        title: "Maior Força",
        valor: "100",
        nome: "Zoro e Luffy",


    },
    {
        id: 1,
        title: "Maior Resistência",
        valor: "100",
        nome: "Zoro",

    },

    {
        id: 2,
        title: "Maior Velocidade",
        valor: "90",
        nome: "Sanji"
    },
    {
        id: 3,
        title: "Maior Haki",
        valor: "100",
        nome: "Luffy",
    },
    {
        id: 4,
        title: "Maior Inteligência",
        valor: "70",
        nome: "Sanji",
    }
]

function mostraMaior(id) {
let card5 = document.getElementById("localdojson");
card5.innerHTML =  
`
<h3>Categoria do gráfico: ${deck[id].title}</h3>
<h3>Valor: ${deck[id].valor}</h3>
<h3 id = "cursiva">Quem foi o vencedor da Categoria:${deck[id].nome}</h3>
<button id = "btngrafico"  onclick = "mostraMaior(1)">Resistência</button>
<button id = "btngrafico2" onclick = "mostraMaior(2)">Velocidade</button>
<button id = "btngrafico2" onclick = "mostraMaior(3)">Haki</button>
<button id = "btngrafico2" onclick = "mostraMaior(4)">Inteligência</button>
<button id = "btngrafico2" onclick = "mostraMaior(0)">Força</button>

`

// if (id==4) {
//     id = 0
//     id++
// }
}
