function encriptar() {
  let texto = document.getElementById("texto").value;
  if (!verificar(texto)) return;
  encriptarTexto(texto);
}
function desencriptar() {
  let texto = document.getElementById("texto").value;
  if (!verificar(texto)) return;
  desencriptarTexto(texto);

  //desencriptarTexto2(texto);
}

function desencriptarTexto(texto) {
  let convertido = "";
  for (let i = 0; i < texto.length; i++) {
    let letra = texto.charAt(i);

    if (texto.charAt(i) === "a" && texto.charAt(i + 1) === "i") {
      letra = "a";
      i = i + 1;
      convertido += letra;
    } else if (
      texto.charAt(i) === "e" &&
      texto.charAt(i + 1) === "n" &&
      texto.charAt(i + 2) === "t" &&
      texto.charAt(i + 3) === "e" &&
      texto.charAt(i + 4) === "r"
    ) {
      letra = "e";
      i = i + 4;
      convertido += letra;
    } else if (
      texto.charAt(i) === "i" &&
      texto.charAt(i + 1) === "m" &&
      texto.charAt(i + 2) === "e" &&
      texto.charAt(i + 3) === "s"
    ) {
      letra = "i";
      i = i + 3;
      convertido += letra;
    } else if (
      texto.charAt(i) === "o" &&
      texto.charAt(i + 1) === "b" &&
      texto.charAt(i + 2) === "e" &&
      texto.charAt(i + 3) === "r"
    ) {
      letra = "o";
      i = i + 3;
      convertido += letra;
    } else if (
      texto.charAt(i) === "u" &&
      texto.charAt(i + 1) === "f" &&
      texto.charAt(i + 2) === "a" &&
      texto.charAt(i + 3) === "t"
    ) {
      letra = "u";
      i = i + 3;
      convertido += letra;
    } else convertido += letra;
  }
  document.querySelector("#texto").value = "";
  document.querySelector(".resultado-btncopiar").style.display = "block";
  document.querySelector(".resultado-texto").innerHTML = "";
  document.querySelector(".resultado-texto").innerHTML = convertido;
  copy();
}

//funcion mejorada
function desencriptarTexto2(texto) {
  texto = texto
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  document.querySelector("#texto").value = "";
  document.querySelector(".resultado-btncopiar").style.display = "block";
  document.querySelector(".resultado-texto").innerHTML = "";
  document.querySelector(".resultado-texto").innerHTML = texto;
  copy();
}

function encriptarTexto(texto) {
  let convertido = "";
  for (let i = 0; i < texto.length; i++) {
    let letra = texto.charAt(i);

    if (letra === "a") letra = "ai";
    else if (letra === "e") letra = "enter";
    else if (letra === "i") letra = "imes";
    else if (letra === "o") letra = "ober";
    else if (letra === "u") letra = "ufat";

    convertido += letra;
  }
  document.querySelector("#texto").value = "";
  document.querySelector(".resultado-btncopiar").style.display = "block";
  document.querySelector(".resultado-texto").innerHTML = "";
  document.querySelector(".resultado-texto").innerHTML = convertido;

  copy();
}

function verificar(texto) {
  let regex = /[A-ZáéíóúÁÉÍÓÚ]/g;
  let result = texto.match(regex);
  if (result != null || texto.length == 0) {
    alert("Escribe solo letras minúsculas y sin acentos");
    return false;
  }
  return true;
}

function copy() {
  const div = document.querySelector(".resultado-btncopiar");
  div.addEventListener("click", copyText);

  const divtext = document.querySelector(".resultado-texto");
  function copyText() {
    // Seleccionamos el texto del elemento divtext
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(divtext);
    selection.removeAllRanges();
    selection.addRange(range);

    // Copiamos el texto seleccionado al portapapeles
    document.execCommand("copy");
  }
}
