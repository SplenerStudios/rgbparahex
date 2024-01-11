//rgb para hex
function convertRGBToHex(red, green, blue) {
  const redInt = parseInt(red, 10);
  const greenInt = parseInt(green, 10);
  const blueInt = parseInt(blue, 10);

  return `#${redInt.toString(16).padStart(2, "0")}${greenInt.toString(16).padStart(2, "0")}${blueInt.toString(16).padStart(2, "0")}`;
}



//variável goblal
const hexdiv = document.querySelector(".hex-div");



//range vermelho
const rangeR = document.querySelector("#input-r");
const slideValueR = document.querySelector("#number-r");

rangeR.addEventListener("input", () => {
  let rangeVal = rangeR.value;
  slideValueR.innerText = rangeVal;
  
  //converter hex
  const red = document.querySelector("input[name='red']").value;
  const green = document.querySelector("input[name='green']").value;
  const blue = document.querySelector("input[name='blue']").value;

  const hex = convertRGBToHex(red, green, blue).toUpperCase();

  document.querySelector(".hex").textContent = `${hex}`;
  hexdiv.style.backgroundColor = hex
});




//range verde
const rangeG = document.querySelector("#input-g");
const slideValueG = document.querySelector("#number-g");

rangeG.addEventListener("input", () => {
  let rangeVal = rangeG.value;
  slideValueG.innerText = rangeVal;
  
  //converter hex

  const red = document.querySelector("input[name='red']").value;

  const green = document.querySelector("input[name='green']").value;
  const blue = document.querySelector("input[name='blue']").value;

  const hex = convertRGBToHex(red, green, blue).toUpperCase();

  document.querySelector(".hex").textContent = `${hex}`;
  hexdiv.style.backgroundColor = hex
});




//ramge azul
const rangeB = document.querySelector("#input-b");
const slideValueB = document.querySelector("#number-b");


rangeB.addEventListener("input", () => {
  let rangeVal = rangeB.value;
  slideValueB.innerText = rangeVal;
  
  //converter hex

  const red = document.querySelector("input[name='red']").value;

  const green = document.querySelector("input[name='green']").value;
  const blue = document.querySelector("input[name='blue']").value;

  const hex = convertRGBToHex(red, green, blue).toUpperCase();

  document.querySelector(".hex").textContent = `${hex}`;
  hexdiv.style.backgroundColor = hex
});

async function copyText() {
  const textToCopy = document.querySelector(".hex").textContent;
  await navigator.clipboard.writeText(textToCopy);
}