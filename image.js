const total = document.querySelectorAll('.Image').length;
const styleChange = document.querySelector(".Images");
let i = 0;
styleChange.style.width =  `${total * 100}vw`;
updateButton();

let manual = false;

function manualCheck(){
    manual = true;
    document.querySelector('.auto').innerHTML = `Auto Slide`;
    clearInterval(intervalId);
    isAutoSliding = false;
    updateButton();
}

function slideLeft(){
    if(i <= 0)return;
    i--;
    styleChange.style.transform = `translateX(${-100 * i}vw)`;
    console.log("Current Index:", i);
    updateButton();
}

function slideRight(){
    if(i >= total - 1)return;
    i++;
    styleChange.style.transform = `translateX(${-100 * i}vw)`;
    console.log("Current Index:", i);
    updateButton();
}

function updateButton(){
    document.querySelector('.left-button').style.display = i === 0 ? "none" : "block";
    document.querySelector('.right-button').style.display = i === total - 1 ? "none" : "block";
}

let isAutoSliding = false;
let intervalId;

function automatic(){
    manual = false;

    if(!isAutoSliding){
        lastCheck();
        document.querySelector('.auto').innerHTML = `Stop`;
        intervalId = setInterval(()=>{
            lastCheck();
            slideRight();
        }, 2000);
        isAutoSliding = true;
    }else{
        document.querySelector('.auto').innerHTML = `Auto Slide`;
        clearInterval(intervalId);
        isAutoSliding = false;
    }
}

function lastCheck(){
    if(i >= total - 1){
        document.querySelector('.auto').innerHTML = `Auto Slide`;
        clearInterval(intervalId);
        isAutoSliding = false;
    }
}