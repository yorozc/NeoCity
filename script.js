const gate = document.querySelector(".gate");
const leftDoor = document.querySelector(".left-door");
const rightDoor = document.querySelector(".right-door");
const botLeft = document.querySelector(".bot-left");
const botRight = document.querySelector(".bot-right");
gate.addEventListener("click", ()=>{
    console.log("Clicked");
    leftDoor.style.animationName = "openLeft";
    rightDoor.style.animationName = "openRight";
    botLeft.style.animationName = "openLeft";
    botRight.style.animationName = "openRight";
});