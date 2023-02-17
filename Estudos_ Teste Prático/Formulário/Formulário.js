 /* Função de validação  */
    function validate() {
            var retVal = true; /* Vamos partir do princípio de que o formulário está válido ... */
    var _nome = document.getElementById("Nome");
    var _nomeError = document.getElementById("NomeError");
    if (_nome.value.trim().length < 3) {
        console.log("Passei aqui!");
    retVal = false;
    _nomeError.classList.add("d-block")
    _nomeError.classList.remove("d-none");
            }
    else {
        _nomeError.classList.remove("d-block")
                _nomeError.classList.add("d-none");
            }
    var _morada = document.getElementById("Morada");
    var _moradaError = document.getElementById("MoradaError");
    var palavrasArray = _morada.value.split(' '); /* Partir a Morada em palavras */
    if (palavrasArray.length < 3) { /* Contar o número de palavras */
        retVal = false;
    _moradaError.classList.add("d-block")
    _moradaError.classList.remove("d-none");
            }
    else {
        _moradaError.classList.remove("d-block")
                _moradaError.classList.add("d-none");
            }
    var _cursoSelecionado = document.getElementById("Curso").selectedIndex;
    var cursosArray = document.getElementById("Curso").options;
    var _cursoError = document.getElementById("CursoError")
    if (cursosArray[_cursoSelecionado].value == "") {
        retVal = false;
    _cursoError.classList.add("d-block")
    _cursoError.classList.remove("d-none");
            }
    else {
        _cursoError.classList.remove("d-block")
                _cursoError.classList.add("d-none");
            }
    var _transportesSelecionados = document.querySelectorAll('input[name="vehicle"]:checked').length;
    var _vehicleError = document.getElementById("VehicleError")
    if (_transportesSelecionados < 2) {
        retVal = false;
    _vehicleError.classList.add("d-block")
    _vehicleError.classList.remove("d-none");
            }
    else {
        _vehicleError.classList.remove("d-block")
                _vehicleError.classList.add("d-none");
            }
    /* Recolher todos os input[type="radio"] que estejam checked */
    var _cores = document.querySelectorAll('input[name="cor"]:checked').length;
    var _coresError = document.getElementById("CorError")
    if (_cores == 0) {
        retVal = false;
    _coresError.classList.add("d-block")
    _coresError.classList.remove("d-none");
            }
    else {
        _coresError.classList.remove("d-block")
                _coresError.classList.add("d-none");
            }
    return retVal;
        }
