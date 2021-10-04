google.charts.load('current', { 'packages': ['corechart'] })
google.charts.setOnLoadCallback(desenharPizza)


function desenharPizza() {
    
    let grafico = new google.visualization.PieChart(document.getElementById('grafico_Pizza'))

    const tabela = new google.visualization.DataTable();

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

    grafico.draw(tabela)
}
