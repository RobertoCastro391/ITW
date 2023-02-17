var quantidade = 0;
var valor = 0;
var valorTotal = 0;
var produtos = 0;
var quantTotal = 0;:

var _prodBox = document.getElementById("produtos");
var _quantBox = document.getElementById("quantidades");
var _totalBox = document.getElementById("total");


function send() {
    if (valorTotal == 0) {
        alert("Tem que   pelo menos um produto.");
        return false;
    }

    return true;

}

function recalculate() {
    valorTotal = 0
    produtos = 0
    quantTotal = 0
    for (let i = 1; i < 7; i++) {
        var checkbox = document.getElementById("product" + i).checked;
        if (checkbox == true) {
            valor = parseFloat(document.getElementById("price" + i).value);
            quantidade = parseFloat(document.getElementById("qty" + i).value);
            produtos++;
            quantTotal = quantTotal + quantidade;
            valorTotal = valorTotal + (valor * quantidade);
            console.log(produtos, quantTotal, valor, quantidade, valorTotal)

        } else {
            continue
        }
    }
    console.log(produtos, quantTotal, valor, quantidade, valorTotal);
    _prodBox.innerText = produtos;
    _quantBox.innerText = quantTotal;
    _totalBox.innerText = valorTotal.toFixed(2);
}