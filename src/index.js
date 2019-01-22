//document.addEventListener("click", miLetraEnAscii);
let numeros = document.getElementById("numero");
let textoo = document.getElementById("text");
let textoo2 = document.getElementById("textD");
let encodeButton = document.getElementById('button-encode')
let decodeButton = document.getElementById('button-decode')
let print = document.getElementById('print')


// encodeButton.addEventListener('click', function(){})

encodeButton.addEventListener('click', () => {
    let numeroCifrar = numeros.value
    let textoCifrar = textoo.value.toUpperCase();
    const mensajeEscrito = window.cipher.encode(numeroCifrar, textoCifrar) 
    console.log(mensajeEscrito);
   print.innerHTML = mensajeEscrito;
})

decodeButton.addEventListener('click', () => {
    let numeroDecifrar = numeros.value
    let textoDecifrar = textoo2.value.toUpperCase();
    const mensajeEscritoDecodificado =window.cipher.decode(numeroDecifrar, textoDecifrar)
    console.log(mensajeEscritoDecodificado);
    print.innerHTML = mensajeEscritoDecodificado
})

// 
// function suma (a,b) {
//     return a+b;
// }


// const resultSuma =  suma(3,3)

// console.log(resultSuma)




