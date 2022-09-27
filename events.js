"use strict";

window.addEventListener("load", function () {
  const encriptar = document.querySelector("#encriptar");
  const desencriptar = document.querySelector("#desencriptar");

  encriptar.addEventListener("click", function () {
    var texto = document.querySelector("textarea").value;
    encriptar.style.animation = "background_color 0.5s forwards";
    desencriptar.style.animation = "none";
    let texto_1 = document.querySelector("#texto_1");
    let texto_2 = document.querySelector("#texto_2");
    alert("se hizo click en encriptar");
    if (/([A-Za-z])/.test(texto) || texto != "") {
      let muñeco = document.querySelector("#muñeco");
      let resultado = document.querySelector("#texto_final");
      muñeco.style.display = "none";
      texto_1.style.display = "none";
      texto_2.style.display = "none";
      texto_error.style.display = "none";
      resultado.style.display = "block";
      const encriptacion = {
        e: "enter",
        i: "imes",
        a: "ai",
        o: "ober",
        u: "ufat",
      };
      texto = texto.replace(/e|i|a|o|u/gm, (matched) => {
        return encriptacion[matched];
      });
      resultado.innerHTML = texto;
    } else {
      alert("tu texto contiene caracteres especiales");
      let texto_error = document.querySelector("#texto_error");
      texto_1.style.display = "none";
      texto_2.style.display = "none";
      texto_error.style.display = "block";
    }
  });
  desencriptar.addEventListener("click", function () {
    var texto = document.querySelector("textarea").value;
    encriptar.style.animation = "none";
    desencriptar.style.animation = "background_color 0.5s forwards";
    let texto_1 = document.querySelector("#texto_1");
    let texto_2 = document.querySelector("#texto_2");
    alert("se hizo click en desencriptar");
    if (/([A-Za-z])/.test(texto) || (texto != "" && texto.length > 0)) {
      alert("tu texto solo tiene letras");
      let muñeco = document.querySelector("#muñeco");
      let resultado = document.querySelector("#texto_final");
      muñeco.style.display = "none";
      texto_1.style.display = "none";
      texto_2.style.display = "none";
      texto_error.style.display = "none";
      resultado.style.display = "block";
      const desencriptacion = {
        enter: "e",
        imes: "i",
        ai: "a",
        ober: "o",
        ufat: "u",
      };
      texto = texto.replace(/enter|imes|ai|ober|ufat/gm, (matched) => {
        return desencriptacion[matched];
      });
      resultado.innerHTML = texto;
    } else {
      alert("tu texto contiene caracteres especiales");
      alert("tu texto contiene caracteres especiales");
      let texto_error = document.querySelector("#texto_error");
      texto_1.style.display = "none";
      texto_2.style.display = "none";
      texto_error.style.display = "block";
    }
  });
});
