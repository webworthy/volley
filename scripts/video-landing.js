// Video Play Function

const heroVideo = document.getElementById("hero-video");
const videoFrame = document.getElementById("video-frame");
const colorMultiply = document.getElementById("multiply");
const copy = document.getElementById("video-copy-main");
const exit = document.getElementById("video-escape");
const nav = document.getElementById("nav");


let isPlaying = false;
let controls = false;
let navIsHidden = false;

function playVideo() {
    heroVideo.play();
    isPlaying = true;
    updateStylePlaying();
}

function pauseVideo() {
    heroVideo.pause();
    isPlaying = false;
    updateStylePause();
}

function updateStylePlaying() {
    colorMultiply.style.opacity = "0";
    colorMultiply.style.zIndex = "0";
    heroVideo.style.width = "90vw";
    heroVideo.style.height = "90vh";
    heroVideo.style.padding = "5%";
    videoFrame.style.zIndex = "3";
    copy.style.display = "none";
    exit.style.display = "block";
    heroVideo.controls = true;
    nav.style.display = "none";
}

function updateStylePause() {
    exit.style.display = "none";
    videoFrame.style.zIndex = "1";
    copy.style.display = "block";
    heroVideo.controls = false;
    colorMultiply.style.opacity = "0.5";
    heroVideo.style.width = "100vw";
    heroVideo.style.height = "100vh";
    heroVideo.style.padding = "0";
}


function videoLogic() {
    if (isPlaying != true) {
        playVideo();
    } else {
        pauseVideo();
    }
}

function exitVideo() {
    videoLogic();
    heroVideo.currentTime = 0;
    heroVideo.load();
    nav.style.display = "block";
    
}

const playButton = document.getElementById("play-button");

playButton.addEventListener("click", videoLogic);
exit.addEventListener("click", exitVideo)