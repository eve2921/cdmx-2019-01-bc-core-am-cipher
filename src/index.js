let numeros = document.getElementById("numero");
let textoo = document.getElementById("text");
let textoo2 = document.getElementById("textD");
let encodeButton = document.getElementById('button-encode')
let decodeButton = document.getElementById('button-decode')
let print = document.getElementById('print')


encodeButton.addEventListener('click', () => {
    let numeroCifrar = numeros.value
    let textoCifrar = textoo.value.toUpperCase();
    const mensajeEscrito = window.cipher.encode(numeroCifrar, textoCifrar) 
   print.innerHTML = mensajeEscrito;
})

decodeButton.addEventListener('click', () => {
    let numeroDecifrar = numeros.value
    let textoDecifrar = textoo2.value.toUpperCase();
    const mensajeEscritoDecodificado =window.cipher.decode(numeroDecifrar, textoDecifrar)
    print.innerHTML = mensajeEscritoDecodificado
})




