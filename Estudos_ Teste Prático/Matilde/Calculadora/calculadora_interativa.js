function boasvindas() {
    alert("Sê bem-vindo à calculadora!");
}
function add(x) {
    var visor = document.getElementById("resultado");
    visor.value = visor.value + x.value;

}
function reset() {
    document.getElementById("resultado").value = ""
}
function calculadora() {


    var visor = document.getElementById("resultado");
    if (visor.value.includes("+")) {
        var operacao = visor.value.split("+");
        visor.value = Number(operacao[0]) + Number(operacao[1]);
    } else if (visor.value.includes("*")) {
        var operacao = visor.value.split("*");
        visor.value = Number(operacao[0]) * Number(operacao[1]);
    } else if (visor.value.includes("/")) {
        var operacao = visor.value.split("/");
        if (operacao[1] == 0) {
            alert("Não se fazem divisões por zero!");
        } else {
            visor.value = Number(operacao[0]) / Number(operacao[1]);
        }
    } else if (visor.value.includes("-")) {
        var operacao = visor.value.split("-");
        visor.value = Number(operacao[0]) - Number(operacao[1]);
    }
}
window.onload = boasvindas();