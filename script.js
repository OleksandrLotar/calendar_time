let day = document.querySelector(".day");
let week = document.querySelector(".week");
let mouns = document.querySelector(".mouns");
let year = document.querySelector(".year");

day.innerHTML = "12";
week.innerHTML = "Субота";
mouns.innerHTML = "Грудень";
year.innerHTML = "2045";

let today = new Date();
console.log(today)

day.innerHTML = today.getDate()
week.innerHTML = today.getDay()
mouns.innerHTML = today.getMonth()
year.innerHTML = today.getFullYear()

