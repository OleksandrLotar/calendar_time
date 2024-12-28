let day = document.querySelector(".day");
let week = document.querySelector(".week");
let mouns = document.querySelector(".mouns");
let year = document.querySelector(".year");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

// day.innerHTML = "12";
// week.innerHTML = "Субота";
// mouns.innerHTML = "Грудень";
// year.innerHTML = "2045";
// hours.innerHTML = "11";



let days = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
let mounss = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];

let today = new Date();
console.log(today)

day.innerHTML = today.getDate()
week.innerHTML = days[today.getDay()]
mouns.innerHTML = mounss[today.getMonth()]
year.innerHTML = today.getFullYear()
hours.innerHTML = today.getHours()
minutes.innerHTML = today.getMinutes()
seconds.innerHTML = today.getSeconds()

setInterval(() =>{
    let currentTime = new Date();
    hours.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    minutes.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    seconds.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
},1000)
