const inputEl = document.querySelector(".title-input");
const countInfoEl = document.querySelector(".count-info");
const titleEl = document.querySelector(".title-input");
const timeStart = document.querySelector(".time-start");
const timeEnd = document.querySelector(".time-end");
const btnStart = document.querySelector(".start-btn");
const showCount = document.querySelector(".count");
const btnCount = document.querySelector(".count-btn");
const btnSave = document.querySelector(".save-btn");
const saveCountArea = document.querySelector(".saved-input");
const btnReset = document.querySelector(".reset");

//initials
let count = 0;
let saved = "";

//function to set counter to 0
const counterToZero = function () {
  count = 0;
  showCount.textContent = 0;
};

//When you click on the Count btn
btnCount.addEventListener("click", function () {
  count++;
  showCount.textContent = count;
});

//When you click on the Save btn
btnSave.addEventListener("click", function () {
  saved += count;
  counterToZero();
  saveCountArea.textContent += `${titleEl.value} from ${timeStart.value} to ${timeEnd.value} was ${saved},                   `;
  saved = 0;

  //
});

//When you click on the Reset btn
btnReset.addEventListener("click", function () {
  counterToZero();
  saveCountArea.textContent = "";
  saved = 0;
});

btnStart.addEventListener("click", function () {
  countInfoEl.classList.toggle("hidden");
});
