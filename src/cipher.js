
function encode() {
let numeros = document.getElementById("numero").value;
let textoo = document.getElementById("text").value;
let mensaje = "";
for(let i = 0;i<textoo.length;i++){
	let numerodecacter = textoo.charAt(i).charCodeAt(0);
	let codificado = ((parseInt(numerodecacter - 65) + parseInt(numeros)) % 26) + 65;
	mensaje += String.fromCharCode(codificado);
}
console.log(mensaje);

//alert(numeros + ' .... ' + textoo);
}



function decode(){

	let numeros = document.getElementById("numero").value;
let textoo = document.getElementById("textD").value;
let mensaje = "";
for(var i = 0;i<textoo.length;i++){
	let numerodecacter = textoo.charAt(i).charCodeAt(0);
	let codificado = ((parseInt(numerodecacter - 65) - parseInt(numeros)) % 26) + 65;
	mensaje += String.fromCharCode(codificado);
}
console.log(mensaje);
}




