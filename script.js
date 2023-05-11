function validarCampoEncode() {
  const TextArea = document.getElementById("TextArea").value;
  const modal = document.getElementById("modal");
  const resultmodal = document.getElementById("resultmodal");

  if (TextArea != "") {
    resultmodal.style.display = "block";
    scrollResult();
    encode(TextArea);
  } else {
    modal.style.display = "block";
  }
}

function encode(TextArea) {
  const vocals = {
    a: "ai",
    á: "ai",
    A: "AI",
    Á: "AI",
    e: "enter",
    é: "enter",
    E: "ENTER",
    É: "ENTER",
    i: "imes",
    í: "imes",
    I: "IMES",
    í: "IMES",
    o: "ober",
    ó: "ober",
    O: "UFAT",
    Ó: "UFAT",
    u: "ufat",
    ú: "OBER",
    U: "ufat",
    Ú: "OBER",
  };
  let encodedText = "";
  for (const char of TextArea) {
    if (matchVocal(char)) {
      encodedText += vocals[char];
    } else {
      encodedText += char;
    }
  }
  return (document.getElementById("resultTextArea").innerHTML = encodedText);
}

function matchVocal(inChar) {
  const vocals = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U","á", "é", "í", "ó", "ú", "Á", "É", "Í", "Ó", "Ú"];
  for (let index = 0; index < vocals.length; index++) {
    if (inChar === vocals[index]) {
      return true;
    }
  }
  return false;
}

const TextArea = document.getElementById("TextArea");
const modal = document.getElementById("modal");
modal.addEventListener("click", () => {
  ocultarModal();
  TextArea.focus();
});

function ocultarModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

function validarCampoDecode() {
  const TextArea = document.getElementById("TextArea").value;
  const resultmodal = document.getElementById("resultmodal");
  const modal = document.getElementById("modal");
  if (TextArea != "") {
    resultmodal.style.display = "block";
    dencode(TextArea);
  } else {
    modal.style.display = "block";
  }
}

function dencode(TextArea) {
  let decoded = TextArea;
  decoded = decoded.replaceAll("ai", "a");
  decoded = decoded.replaceAll("enter", "e");
  decoded = decoded.replaceAll("imes", "i");
  decoded = decoded.replaceAll("ufat", "u");
  decoded = decoded.replaceAll("ober", "o");
  return (document.getElementById("resultTextArea").innerHTML = decoded);
}

function copyText() {
  let copyText = document.getElementById("resultTextArea");
  copyText.select();
  document.execCommand("copy");

  document.getElementById("btnCopy").innerHTML = "Copied!";
  document.getElementById("btnCopy").style.backgroundColor = "rgb(31, 31, 149)";
  document.getElementById("btnCopy").style.color = "white";
}
function scrollResult() {
  const resultmodal = document.getElementById("resultmodal");
  const section2Position =
    resultmodal.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: section2Position,
    behavior: "instant",
  });
}
