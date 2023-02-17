var quantidade = 0;
var valor = 0;
var controlo = 0;

function comprar(number) {
    var preco = document.getElementById("precoproduto" + number).value;
    valor += parseFloat(preco);
    quantidade += 1;
    calcular();
}

function calcular(){
    if (quantidade >= 5 || valor > 100) {
        var precodesconto = valor - (valor * 0.05);
        controlo = 1;
    }
    document.getElementById("quantidades").innerText= quantidade;
    if (controlo == 1) {
        document.getElementById("total").innerText = precodesconto.toFixed(2);
    }
    else {
        document.getElementById("total").innerText = valor.toFixed(2);
    }
}



function validar(){
    if (quantidade == 0) {
        alert("Tem que comprar pelo menos um produto.");
        return false;
    }
   
    return true;
    
}

function limpar(){
    document.getElementById("total").innerText = "0.00"
    document.getElementById("quantidades").innerText = "0";
    quantidade = 0;
    valor = 0;
    controlo = 0;

}