//document.addEventListener("click", miLetraEnAscii);
let numeros = document.getElementById("numero");
let textoo = document.getElementById("text");
let encodeButton = document.getElementById('button-encode')
let print = document.getElementById('print')


// encodeButton.addEventListener('click', function(){})

encodeButton.addEventListener('click', () => {
    let numeroCifrar = numeros.value
    let textoCifrar = textoo.value.toUpperCase();

    const mensajeEscrito = window.cipher.encode(numeroCifrar, textoCifrar) 
    print.innerHTML = mensajeEscrito
})


// function suma (a,b) {
//     return a+b;
// }


// const resultSuma =  suma(3,3)

// console.log(resultSuma)



// const resultSuma =  suma(3,3)

// console.log(resultSuma)



