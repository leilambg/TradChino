//let comentario = document.querySelector("footer > p");
//comentario.innerHTML = "<b style='color:gray'>Trabajando en chino</b>"

caja.addEventListener("keyup", escribirChino, false);

function escribirChino(evento) {
    console.log("aqui")
    if (evento.keyCode<65 || evento.keyCode>90 || evento.keyCode == 8){
        return
    }
    let palabra = caja.value;
    palabra = palabra.toUpperCase();
    let nc = palabra.length - 1;

    let carcodigodeletra = palabra.charCodeAt(nc);

    let chino = unescape("%u" + carcodigodeletra + "e8");

    palabra = palabra.substring(0, nc) + chino;
    caja.value = palabra;
}
