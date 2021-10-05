google.charts.load('current', { 'packages': ['corechart'] })
google.charts.setOnLoadCallback(desenharGrafico)


function desenharGrafico() {

    var grafico = new google.visualization.PieChart(document.getElementById('grafico_Pizza'))
    
    var opcoes = {
        title: 'Tipos de Gastos',
        is3D: true,
        legend: 'labeled',
        pieSliceText: 'value',
        slices: {
            0: {},
            1: { color: 'grey' },
            2: { color: 'grey' },
            3: {},
            4: { offset: 0.4 },
            5: { color: 'grey' }
        }
    }

    var tabela = new google.visualization.DataTable();

    tabela.addColumn('string', 'categorias')
    tabela.addColumn('number', 'valores')
    tabela.addRows([
        ['Eduacação', 2000],
        ['Transporte', 500],
        ['Lazer', 230],
        ['Saude', 50],
        ['Cartão de Credito', 900],
        ['Alimentação', 260],

    ])
    grafico.draw(tabela, opcoes)

    tabela = new google.visualization.DataTable()
    tabela.addColumn('string', 'Mês')
    tabela.addColumn('number', 'Gastos')
    tabela.addRows([
        ['jan', 400],
        ['fev', 1100],
        ['mar', 800],
        ['abr', 400],
        ['mai', 500],
        ['jun', 750],
        ['jul', 1500],
        ['ago', 650],
        ['set', 850],
        ['out', 400],
        ['nov', 1000],
        ['dez', 720]
    ])

    var opcoes = {
        title: 'Gastos Mês',

    }

    var grafico = new google.visualization.LineChart(document.getElementById('grafico_linha'))
    

    grafico.draw(tabela,opcoes)
}
