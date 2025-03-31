const gate = document.querySelector(".gate");
const leftDoor = document.querySelector(".left-door");
const rightDoor = document.querySelector(".right-door");
const botLeft = document.querySelector(".bot-left");
const botRight = document.querySelector(".bot-right");


gate.addEventListener("click", ()=>{
    leftDoor.classList.toggle("open");
    rightDoor.classList.toggle("open");
    botLeft.classList.toggle("open");
    botRight.classList.toggle("open");
});
    

