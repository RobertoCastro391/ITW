function calcula() {
    var ALGA_C = document.getElementById("ALGA_C").value;
    var FIS_C = document.getElementById("FIS_C").value;
    var CALC1_C = document.getElementById("CALC1_C").value;
    var ITW_C = document.getElementById("ITW_C").value;
    var FP_C = document.getElementById("FP_C").value;
    var M1S_C = document.getElementById("M1S_C");
    
    var ALGA_N = document.getElementById("ALGA_N").value;
    var FIS_N = document.getElementById("FIS_N").value;
    var CALC1_N = document.getElementById("CALC1_N").value;
    var ITW_N = document.getElementById("ITW_N").value;
    var FP_N = document.getElementById("FP_N").value;
    var M1S_N = document.getElementById("M1S_N");
        
    var MAS_C = document.getElementById("MAS_C").value;
    var CALC2_C = document.getElementById("CALC2_C").value;
    var MD_C = document.getElementById("MD_C").value;
    var IAC_C = document.getElementById("IAC_C").value;
    var POO_C = document.getElementById("POO_C").value;
    var M2S_C = document.getElementById("M2S_C");
    
    var MAS_N = document.getElementById("MAS_N").value;
    var CALC2_N = document.getElementById("CALC2_N").value;
    var MD_N = document.getElementById("MD_N").value;
    var IAC_N = document.getElementById("IAC_N").value;
    var POO_N = document.getElementById("POO_N").value;
    var M2S_N = document.getElementById("M2S_N");
    
    console.log(ALGA_C);
    console.log(ALGA_N);
    
    if (!(checkCredit(ALGA_C))) {
		alert("Um dos créditos do 1º semestre não foi introduzido corretamente");
		return false
		}
	else if (!(checkCredit(FIS_C))) {
		alert("Um dos créditos do 1º semestre não foi introduzido corretamente");
		return false
		}
	else if (!(checkCredit(CALC1_C))) {
		alert("Um dos créditos do 1º semestre não foi introduzido corretamente");
		return false
		}
	else if (!(checkCredit(ITW_C))) {
		alert("Um dos créditos do 1º semestre não foi introduzido corretamente");
		return false
		}
	else if (!(checkCredit(FP_C))) {
		alert("Um dos créditos do 1º semestre não foi introduzido corretamente");
		return false
		}
		
	if (!(checkCredit(MAS_C))) {
		alert("Um dos créditos do 2º semestre não foi introduzido corretamente");
		return false
		}
	else if (!(checkCredit(CALC2_C))) {
		alert("Um dos créditos do 2º semestre não foi introduzido corretamente");
		return false
		}
	else if (!(checkCredit(MD_C))) {
		alert("Um dos créditos do 2º semestre não foi introduzido corretamente");
		return false
		}
	else if (!(checkCredit(IAC_C))) {
		alert("Um dos créditos do 2º semestre não foi introduzido corretamente");
		return false
		}
	else if (!(checkCredit(POO_C))) {
		alert("Um dos créditos do 2º semestre não foi introduzido corretamente");
		return false
		}
    
    if (!(checkNota(ALGA_N))) {
		alert("Um dos valores das notas do 1º semestre não foi introduzido corretamente");
		return false
		}
	else if (!(checkNota(FIS_N))) {
		alert("Um dos valores das notas do 1º semestre não foi introduzido corretamente");
		return false
		}
	else if (!(checkNota(CALC1_N))) {
		alert("Um dos valores das notas do 1º semestre não foi introduzido corretamente");
		return false
		}
	else if (!(checkNota(ITW_N))) {
		alert("Um dos valores das notas do 1º semestre não foi introduzido corretamente");
		return false
		}
	else if (!(checkNota(FP_N))) {
		alert("Um dos valores das notas do 1º semestre não foi introduzido corretamente");
		return false
		}
		
	if (!(checkNota(MAS_N))) {
		alert("Um dos valores das notas do 2º semestre não foi introduzido corretamente");
		return false
		}
	else if (!(checkNota(CALC2_N))) {
		alert("Um dos valores das notas do 2º semestre não foi introduzido corretamente");
		return false
		}
	else if (!(checkNota(MD_N))) {
		alert("Um dos valores das notas do 2º semestre não foi introduzido corretamente");
		return false
		}
	else if (!(checkNota(IAC_N))) {
		alert("Um dos valores das notas do 2º semestre não foi introduzido corretamente");
		return false
		}
	else if (!(checkNota(POO_N))) {
		alert("Um dos valores das notas do 2º semestre não foi introduzido corretamente");
		return false
		}
	
	
    
    M1S_C.value = (ALGA_C * 1.0 + FIS_C * 1.0 + ITW_C * 1.0 + CALC1_C * 1.0 + FP_C * 1.0);
    M2S_C.value = (MAS_C * 1.0 + CALC2_C * 1.0 + MD_C * 1.0 + IAC_C * 1.0 + POO_C * 1.0);
    if (M1S_C.value != 30) {
		alert("Média dos créditos do 1º semestre tem de ser 30");
		return false;
		}
    else if (M2S_C.value != 30) {
		alert("Média dos créditos do 2º semestre tem de ser 30");
		return false;
		}
		
	M1S_N.value = (ALGA_N * ALGA_C + FIS_N * FIS_C + ITW_N * ITW_C + CALC1_C * CALC1_N + FP_C * FP_N) / 30.0;
	M2S_N.value = (MAS_N * MAS_C + CALC2_N * CALC2_C + MD_N * MD_C + IAC_C * IAC_N + POO_C * POO_N) / 30.0;	
	
    return true;
}

function checkCredit(value) {
	if (value * 1.0 == NaN) return false
    return (value >= 4 && value <= 10);
}

function checkNota(value) {
	if (value * 1.0 == NaN) return false
    return (value > 0 && value < 20);
}
