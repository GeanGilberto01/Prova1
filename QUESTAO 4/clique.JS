function apaga(){
    document.getElementById("i0").src = " ";
}

function apaga2(){
    document.getElementById("i7").src = " ";
}

function troca(){
    document.getElementById("i1").src = " ";
    document.getElementById("i7").src = "../imagens/cafe.jpg";
}

function h6(){
    document.getElementById("i2").src = " ";
    document.getElementById("i2").title = "Lista" ;
}

function alerta(){
    alert("Clicou na mala!");
}

var control = false;
function color(){
    var body = document.querySelector('body');
    if(control == false){
        trocaClasse(body, 'branco', 'vermelho');
        control = true;
    }
    else{
        trocaClasse(body, 'vermelho', 'branco');
        control = false;
    }
}

function inferior(){
    document.getElementById("i6").src = document.getElementById("i5").src;
    document.getElementById("i5").src = " ";
}

function trocaClasse(elemento, antiga, nova) {
    elemento.classList.remove(antiga);
    elemento.classList.add(nova);
}