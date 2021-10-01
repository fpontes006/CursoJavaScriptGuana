let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flist')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}
function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = ` Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor Invalido ou ja cadastrado na lista')
    }
    num.value = ''
    num.focus()
}
function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores Antes de Finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao Todo, temos ${tot} numeros cadastrados. </p>`
        res.innerHTML += `<p>O Maior numero informado foi ${maior}. </p>`
        res.innerHTML += `<p>O Menor numero informado foi ${menor}. </p>`
        res.innerHTML += `<p>A soma dos numeros informado foi ${soma}. </p>`
        res.innerHTML += `<p>A media dos numeros informado foi ${media}. </p>`
    }

}