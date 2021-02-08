let name = sessionStorage.getItem("name");
let score =sessionStorage.getItem("Score");
let time = sessionStorage.getItem("time");

document.querySelector(".name").innerHTML= name;
document.querySelector(".score").innerHTML= score;
document.querySelector(".time").innerHTML= time;
