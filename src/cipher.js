window.cipher = {

  encode: (numeroCifrar, textoCifrar) => {
  let mensaje = "";
  for(let i = 0;i<textoCifrar.length;i++){
    let numeroDecacter = textoCifrar.charAt(i).charCodeAt(0);
    let codificado = ((parseInt(numeroDecacter - 65) + parseInt(numeroCifrar)) % 26) + 65;
    mensaje += String.fromCharCode(codificado);
  }
  
  return mensaje
}

,
  decode: (numeroDecifrar, textoDecifrar) => {
    let mensajeDecifrado = "";
  for(let i = 0;i<textoDecifrar.length;i++){
  let numeroDecacterb = textoDecifrar.charAt(i).charCodeAt(0);
  let decodificado = ((parseInt(numeroDecacterb + 65) - parseInt(numeroDecifrar)) % 26) + 65;
 
  mensajeDecifrado += String.fromCharCode(decodificado);
  }

  return mensajeDecifrado
  
}

  

}
  