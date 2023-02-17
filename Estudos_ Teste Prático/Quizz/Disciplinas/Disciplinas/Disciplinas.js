var primeironome = document.getElementById("field_1");
var ultimonome = document.getElementById("field_2");
var sexomasculino = document.getElementById("field_31");
var sexofeminino = document.getElementById("field_32");
var nascimento = document.getElementById("field_4");
var alga = document.getElementById("field_51");
var ef = document.getElementById("field_52");
var calculo = document.getElementById("field_53");
var itw = document.getElementById("field_54");
var fp = document.getElementById("field_55");


var primeironome_error = document.getElementById("field_1_Error");
var ultimonome_error = document.getElementById("field_2_Error");
var sexo_error = document.getElementById("field_3_Error");
var nascimento_error = document.getElementById("field_4_Error");
var disciplinas_error = document.getElementById("field_5_Error");


function validaFormulario() {
    console.log("CALL: validaFormulario()");
    var value = true; 

    x = primeironome.value.trim(); 
    y = ultimonome.value.trim();
    z1 = sexomasculino.value;
    z2 = sexofeminino.value;
    t = nascimento.value;

    if (x.length < 3) {
        primeironome_error.style.display = "block";
        value = false;
    }
    if (y.length < 3) {
        ultimonome_error.style.display = "block";
        value = false;
    }

    if (document.getElementById("field_31").checked == false && document.getElementById("field_32").checked == false) {
        sexo_error.style.display = "block";
        value = false;
    }

    if (t == "") {
        nascimento_error.style.display = "block";
        value = false;
    }

    if (document.getElementById("field_5").checked.value < 2) {
        disciplinas_error.style.display = "block";                         //errado
        value = false;
    }

    return value;
}


function limpaErros() {
    console.log("CALL: limpaErros()");
    primeironome_error.style.display = "none";
    ultimonome_error.style.display = "none";
    sexo_error.style.display = "none";
    nascimento_error.style.display = "none";
    disciplinas_error.style.display = "none";
}

