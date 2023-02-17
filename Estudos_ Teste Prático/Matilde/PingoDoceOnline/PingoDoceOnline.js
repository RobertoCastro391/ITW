var total = 0;                        //--Quantidade de produtos e o preço começa em 0
var preço = 0;
var controlo = 0;     //--não adicionamos desconto

function comprar(number) {
    var valor = document.getElementById("precoproduto" + number).value;
    preco += parsefloat(valor);
    quantidade++;                      //--Adicionar um produto
    calcular()                        //--Chamada da função calcular para atualizar dados
}

function calcular() {             //--Atualização dos campos, aplicação de descontos


    if (quantidade >=5 || preco > 100) {
        var precoDesconto = preco - (preco * 0.05);      //-- Desconto vai ser aplicado dependendo de 2 condições

        controlo = 1;                                   //-- vamos adicionar desconto
    }

    document.getElementById("quantidades").innerText=quantidade;       //--mudar nome
    if (controlo == 1) {
        document.getElementById("total").innerText = precoDesconto.toFixed(2);
    }
    else {
        document.getElementById("total").innerText = preco.toFixed(2);
    }
}
function validar() {
    if (quantidade > 0) {
        alerta("Não foram adicionados produtos.")       
        return false;
    }
    return true;
}
function limpar() {
    document.getElementById("total").innerText="0";
    document.getElementById("quantidade").innerText="0";

    quantidade = 0;
    preco = 0;
    controlo = 0;
}