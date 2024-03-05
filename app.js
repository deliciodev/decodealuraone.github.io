//declarar variaveis
const textArea = document.querySelector(".text-area");
const textSaida = document.querySelector(".text-saida");

//funcao do botao para encriptar, invoca a funcao de codificar dentro dela
function btnCoded() {
  const codedText = codificar(textArea.value);
  textSaida.value = codedText;
  textArea.value = "";

}
//logica para encriptar, uma matriz com 2 colunas onde 1 com as vogais e a outra com seus respectivos codigos
function codificar(codedString) {
  let matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
  codedString = codedString.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++) {
    if(codedString.includes(matrizCodigo[i][0])){
      codedString = codedString.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  
  return codedString;
}

//funcao do botao decriptar, invoca a funcao de decriptar dentro dela
function btnDecod() {
  const decodedText = decodificar(textArea.value);
  textSaida.value = decodedText;
  textArea.value = "";
  
}
// segue a mesma logica da encriptacao, apenas invertendo as posicoes dentro da matriz
function decodificar(decodedString) {
  let matrizCodigo = [["a" , "ai"], ["e" , "enter"], ["i" , "imes"], ["o" , "ober"], ["u" , "ufat"]];
  decodedString = decodedString.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++) {
    if(decodedString.includes(matrizCodigo[i][1])){
      decodedString = decodedString.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }
  
  return decodedString;
}
// funcao para o botao copiar
function copiar() {
  navigator.clipboard.writeText(textSaida.value);

}