const total = document.querySelectorAll('.Image').length;
const styleChange = document.querySelector(".Images");
let i = 0;
styleChange.style.width = `${total * 100}vw`;
updateButton();

let isAutoSliding = false;
let intervalId;

function slideLeft() {
    if (i <= 0) return;
    i--;
    styleChange.style.transform = `translateX(${-100 * i}vw)`;
    console.log("Current Index:", i);
    updateButton();
}

function slideRight() {
    if (i >= total - 1) return;
    i++;
    styleChange.style.transform = `translateX(${-100 * i}vw)`;
    console.log("Current Index:", i);
    updateButton();
}

function updateButton() {
    document.querySelector('.left-button').style.display = i === 0 ? "none" : "block";
    document.querySelector('.right-button').style.display = i === total - 1 ? "none" : "block";
}

function startAutoSlide() {
    document.querySelector('.auto').innerHTML = `Stop`;
    isAutoSliding = true;
    intervalId = setInterval(() => {
        if (i < total - 1) {
            i++;
            styleChange.style.transform = `translateX(${-100 * i}vw)`;
            console.log("Current Index:", i);
            updateButton();
        } else {
            stopAutoSlide();
        }
    }, 1000);
}

function stopAutoSlide() {
    document.querySelector('.auto').innerHTML = `Auto Slide`;
    clearInterval(intervalId);
    isAutoSliding = false;
}

function automatic() {
    if (!isAutoSliding) {
        startAutoSlide();
    } else {
        stopAutoSlide();
    }
}

// Add event listeners to stop auto-slide when manual buttons are clicked
document.querySelector('.left').addEventListener('click', () => {
    if (isAutoSliding) stopAutoSlide();
    slideLeft();
});

document.querySelector('.right').addEventListener('click', () => {
    if (isAutoSliding) stopAutoSlide();
    slideRight();
});