function gerar() {
    var tamanho = parseInt(document.getElementById("tamanho").value);
    var quantidade = parseInt(document.getElementById("quantidade").value);
    var usarCaracteresEspeciais = document.getElementById("especial").checked;
    var usarNumeros = document.getElementById("numeros").checked;
    var usarMaiusculas = document.getElementById("letra").checked;

    var caracteres = "abcdefghijklmnopqrstuvwxyz";
    if (usarCaracteresEspeciais) caracteres += "!@#$%&*()+=-*./";
    if (usarNumeros) caracteres += "0123456789";
    if (usarMaiusculas) caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var senhas = [];
    for (var i = 0; i < quantidade; i++) {
        var senha = "";
        for (var j = 0; j < tamanho; j++) {
            var indice = Math.floor(Math.random() * caracteres.length);
            senha += caracteres.charAt(indice);
        }
        senhas.push(senha);
    }

    document.getElementById("senhasGeradas").value = senhas.join("\n");
}

function limpar() {
    document.getElementById("tamanho").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("especial").checked = false;
    document.getElementById("numeros").checked = false;
    document.getElementById("letra").checked = false;
    document.getElementById("senhasGeradas").value = "";
}
