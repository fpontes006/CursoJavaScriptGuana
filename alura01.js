google.charts.load('current', { 'packages': ['corechart'], 'language': 'pt' })
google.charts.setOnLoadCallback(desenharGrafico)


function desenharGrafico() {

    //Grafico de Pizza
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
    var grafico = new google.visualization.PieChart(document.getElementById('grafico_Pizza'))
    grafico.draw(tabela, opcoes)

    //Grafico de Linha
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
        title: 'Gastos por mês',
        vAxis: {
            format: 'currency',
            gridlines: {
                count: 5,
                color: 'transparent'
            }
        },
        curveType: 'function',
        legend: 'none'


    }

    var grafico = new google.visualization.LineChart(document.getElementById('grafico_linha'))
    grafico.draw(tabela, opcoes)

    //Grafico de Coluna
    var tabela = google.visualization.arrayToDataTable([

        ['Mês', 'Entrada', 'Saida'],
        ['jan', 2500, 1000],
        ['fev', 1000, 500],
        ['mar', 3000, 1300],
        ['abr', 1500, 1700],
        ['mai', 5000, 2250],
        ['jun', 3567, 3000],
        ['jul', 3452, 1468],
        ['ago', 1833, 5250],
        ['set', 1800, 1000],
        ['out', 1800, 1000],
        ['nov', 3569, 1500],
        ['dez', 3000, 1740]
    ])

    var opcoes = {
        title: 'Entradas e Saidas da Conta',
        vAxis: {
            gridlines: { color: 'transparent' },
            format: 'currency',
            title: 'Valores'
        },
        hAxis: {
            title: 'Mês'
        }

    }

    var grafico = new google.visualization.ColumnChart(document.getElementById('grafico_colunas'))
    grafico.draw(tabela, opcoes)

    //Grafico de Barra S
    var tabela = new google.visualization.DataTable()

    tabela.addColumn('string', 'categorias')
    tabela.addColumn('number', 'valores')
    tabela.addColumn({ type: 'string', role: 'annotation' })
    tabela.addColumn({ type: 'string', role: 'style' })
    tabela.addRows([
        ['Eduacação', 2000, 'R$ 2.000,00', 'blue'],
        ['Transporte', 500, 'R$ 500,00', 'grey'],
        ['Lazer', 230, 'R$ 230,00', 'grey'],
        ['Saude', 50, 'R$ 50,00', 'grey'],
        ['Cartão de Credito', 900, 'R$ 900,00', '#8904B1'],
        ['Alimentação', 260, 'R$ 260,00', 'grey']

    ])
    tabela.sort([{ column: 1, desc: true }])

    var opcoes = {
        title: 'Tipos De Gastos',
        vAxis: {
            gridlines: { count: 0 }
        },
        legend: 'none',
        hAxis: {
            gridlines: { color: 'transparent' },
            format: 'currency',
            textPosition: 'none'
        },
        annotations: { alwaysOutside: true }
    }

    var grafico = new google.visualization.BarChart(document.getElementById('grafico_Barras_Surpresa'))
    grafico.draw(tabela, opcoes)

    var dadosJson = $.ajax({
        // url: 'dados.json',
        url:'https://gist.githubusercontent.com/fpontes006/30ce7fa7bec5fe93011f7f40cd1750d5/raw/87085a274cec56bfd083eac5f1de88b406af7145/dados.json',
        dataType: 'json',
        async: false
    }).responseText;

    var tabela = new google.visualization.DataTable(dadosJson)
    tabela.sort([{ column: 1, desc: true }])

    var opcoes = {
        title: 'Usuarios e poupanças',
        legend: 'none',
        hAxis: {
            gridlines: { color: 'transparent' },
            textPosition: 'none'
        },
        annotations: { alwaysOutside: true }

    }

    var grafico = new google.visualization.BarChart(document.getElementById('graficoBarrasJson'))
    grafico.draw(tabela, opcoes)

}
