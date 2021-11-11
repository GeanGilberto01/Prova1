function trocaClasse(elemento, antiga, nova) {
    elemento.classList.remove(antiga);
    elemento.classList.add(nova);
}
var a = prompt("1 - Azul\n2 - Verde\n3 - Vermelho")
if (a == 1) {
    setTimeout(function () {
        var body = document.querySelector('body');
        trocaClasse(body, 'branco', 'azul');
    }, 1);
}
if (a == 2) {
    setTimeout(function () {
        var body = document.querySelector('body');
        trocaClasse(body, 'branco', 'verde');
    }, 1);
}
if (a == 3) {
    setTimeout(function () {
        var body = document.querySelector('body');
        trocaClasse(body, 'branco', 'vermelho');
    }, 1);
}