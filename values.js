const progress = document.querySelector('.advancement');
const inputbox1 = document.querySelector('.inputbox1');
const maxinput= document.querySelector('.maxinput');
let finalValue = 0;
let max = 0;

function changeWidth() {
    if (finalValue > max) {
      finalValue = max;
    }
    progress.style.width = `${(finalValue / max) * 100}%`;
    progress.innerText = `${Math.ceil((finalValue / max) * 100)}%`;
  }
  

inputbox1.addEventListener("keyup", function() {
    finalValue = parseInt(inputbox1.value,10);
    changeWidth();
});
maxinput.addEventListener("keyup", function() {
    max = parseInt(maxinput.value,10);
    changeWidth();
});
