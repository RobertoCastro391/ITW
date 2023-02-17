var operacao = "";   //responsável por guardar a operação que foi selecionada
var res = document.getElementById("resultado");
var start = true;  //indica-nos se estamos no estado inicial da calculadora ou não
var op1 = "";
var op2 = "";
var controlo = 1; //pode ter os valores 1(estamos a introduzir valores para op1) ou 2(estamos a introduzir valores para op2)


function addNumber() {
    var x = event.target.value;

    if (controlo == 1) {
        op1 += x;
    }
    else {
        op2 += x;
    }

    if (start == true) {
        res.innerText = "";  //Limpar o que está no resultado
        start = false;
    }
        res.innerText += x;

}

function addOperation() {
    var x = event.target.value;

    if (operacao == "" && op1 != "") {
        operacao = x;
        res.innerText += x;
        controlo = 2;
    }

    else {
        erro();

    }

}

function clearResult() {
    start = true;
    controlo = 1;
    operacao = "";
    op1 = "";
    op2 = "";
    res.innerText = "0";
}

function calculate() {
    var erro = 0; //variavel local para indicar se houve um erro ou não

    if (controlo == 2 && op2 != "") {

        switch (operacao) {
            case "+":
                op1 = parseFloat(op1) + parseFloat(op2);
                break;
            case "-":
                op1 = parseFloat(op1) - parseFloat(op2);
                break;
            case "/":
                if (op2 != 0) {
                    op1 = parseFloat(op1) / parseFloat(op2);
                    break;
                }
                else {
                    erro();
                    erro = 1;
                    break;
                }
            case "*":
                op1 = parseFloat(op1) * parseFloat(op2);
                break;
            case "%":
                op1 = parseFloat(op1) * 100;
                break;
        }
        if (!erro) {
            controlo = 1;
            operacao = "";
            op2 = "";
            res.innerText = op1;
        }

    }
    else {
        erro();
    }
}

function erro() {
    start = true;
    controlo = 1;
    operacao = "";
    op1 = "";
    op2 = "";
    res.innerText = "ERRO :("  ;
}
