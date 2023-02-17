var status1 = document.getElementById("Status1");
var status2 = document.getElementById("Status2");
var statusx = document.getElementById("StatusX");
var botao = document.getElementById("botao");

var apostasValidas = 0; //armazenar o número de apostas válidas que existe nas linhas (13 é o máximo)
var multiplas = 1; //vai armazenar o número relativamente ao estado de multiplas que existem na lista
var selecionado1 = 0;  //vai contabilizar o número total de boxes selicionadas com 1
var selecionadoX = 0; //vai contabilizar o número total de boxes selicionadas com X
var selecionado2 = 0; //vai contabilizar o número total de boxes selicionadas com 2

function boxClicked() {       //funçao que vai ser chamada sempre que clicamos numa das boxes; vai usar tb os valores das multiplas e dos 1,2 e X selecionados
    apostasValidas = 0; 
    multiplas = 1; 
    selecionado1 = 0; 
    selecionadoX = 0; 
    selecionado2 = 0;

    for ( var i = 1; i <= 13; i++) {
        var x = document.getElementById("Jogo" + i + "_1").checked; //vai verificar se a coluna 1 está selecionada
        var y = document.getElementById("Jogo" + i + "_X").checked;
        var z = document.getElementById("Jogo" + i + "_2").checked;
        var ApostaNaLinha = 1; // Indica o tipo de aposta na linha que está até ao momento

        if (x || y || z) {
            apostasValidas += 1;
        }
        if (x) {
            selecionado1 += 1;
        }
        if (y) {
            selecionadoX += 1;
        }
        if (z) {
            selecionado2 += 1;
        }
        if ((x && y) || (x && z) || (y && z)) {
            ApostaNaLinha = 2;
        }
        if (x && y && z) {
            ApostaNaLinha = 3;
        }
        multiplas *= ApostaNaLinha; //multiplas = multiplas * ApostaNaLinha

    }
    setStatus(); //Respondavel por mostrar os resultados no WebBrowser
}

function setStatus() {
    status1.innerText = selecionado1; //mudar o texto que aparece nos selecionados de 1
    statusx.innerText = selecionadoX;
    status2.innerText = selecionado2;

    if (apostasValidas == 13 && (multiplas >= 1 && multiplas <= 384)) {
        if (multiplas == 1) {
            disableAllMultipleBoxes();
        }
        else {
            var x = document.getElementById("Multiple_" + multiplas);
            x.checked = true;
        }
        botao.disabled = false;
    }
    else {
        disableAllMultipleBoxes();
        botao.disabled = true;  
    }
}

function disableAllMultipleBoxes() {
    var arr = document.getElementsByName("Multiple"); //Vai buscar todos os elementos que tenham o nome Multiple
    for (var i = 0; i < arr.length; i++) {
        arr[i].checked = false;
    }
}