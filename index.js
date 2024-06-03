/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
1/2.204 kilogram = 1 pound
*/

const convertBtn = document.getElementById("convertBtn");
const lengthEl = document.getElementById("lengthEl");
const volumeEl = document.getElementById("volumeEl");
const massEl = document.getElementById("massEl");

convertBtn.addEventListener("click", function () {
  let inputEl = document.getElementById("inputEl").value;
  if (!inputEl) {
    lengthEl.textContent = "0 meters = 0 feet | 0 feet = 0 meters";
    volumeEl.textContent = "0 liters = 0 gallons | 0 gallons = 0 liters";
    massEl.textContent = "0 kilogram = 0 pounds | 0 pounds = 0 kilogram";
  } else {
    const feetresult = (inputEl * 3.281).toFixed(3);
    const gallonresult = (inputEl * 0.264).toFixed(3);
    const poundresult = (inputEl * 2.204).toFixed(3);
    const meterresult = (inputEl / 3.281).toFixed(3);
    const literresult = (inputEl / 0.264).toFixed(3);
    const kilogramresult = (inputEl / 2.204).toFixed(3);
    lengthEl.innerHTML = `${inputEl} meters = ${feetresult} feet | ${inputEl} feet = ${meterresult} meters`;
    volumeEl.innerHTML = `${inputEl} liters = ${gallonresult} gallons | ${inputEl} gallons = ${literresult} liters`;
    massEl.innerHTML = `${inputEl} kilogram = ${poundresult} pounds | ${inputEl} pounds = ${kilogramresult} kilogram`;
  }
});
