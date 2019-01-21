window.cipher = {
  encode: (numeroCifrar, textoCifrar) => {
  let mensaje = "";
  for(let i = 0;i<textoCifrar.length;i++){
    let numeroDecacter = textoCifrar.charAt(i).charCodeAt(0);
    let codificado = ((parseInt(numeroDecacter - 65) + parseInt(numeroCifrar)) % 26) + 65;
    mensaje += String.fromCharCode(codificado);
  }
  // console.log(mensaje);
  // console.log(numeroCifrar + ' .... ' + textoCifrar);
  return mensaje
  }

// decode() {
// 	let numeros = document.getElementById("numero").vFalue;
// let textoo = document.getElementById("textD").value;
// let mensaje = "";
// for(let i = 0;i<textoo.length;i++)
// {
// 	let numeroDecacter = textoo.charAt(i).charCodeAt(0);
// 	let codificado = ((parseInt(numeroDecacter - 65) - parseInt(numeros)) % 26) + 65;
// 	mensaje += String.fromCharCode(codificado);
// }
// console.log(mensaje);
// }
};
