const audio = document.querySelector('audio');

const disk = document.querySelector('.disk');

const text = document.querySelector('.title-container');

const stopButton = document.querySelector("#stop-button");

const playButton = document.querySelector("#play-button");

const seekBar = document.querySelector('#seekBar');

let buttonState = false;

window.onload = () => {
    const controlsHeight = parseFloat(window.getComputedStyle(document.querySelector('.controls')).getPropertyValue("height")) + 7;
    const diskContainerHeight = parseFloat(window.getComputedStyle(document.querySelector('.disk-container')).getPropertyValue("height")) + 3;
    
    text.style.height = `${window.innerHeight - (controlsHeight + diskContainerHeight)}px`;

    // if (window.innerWidth <= 700) {
    //     disk.parentElement.style.margin = `0 ${(window.innerWidth - 360) / 2}px`;
    // }    
};

function playAudio() {
    buttonState = !buttonState;
    if (buttonState) {
        audio.play();
        playButton.children[0].setAttribute('src', 'images/pause.svg');
        playButton.children[0].style.marginLeft = '0px';
        disk.style.left = '40%';
        if (window.innerWidth <= 700) {
            disk.parentElement.style.marginRight = '15%';
        }
        disk.classList.add("disk-active");
    } else {
        audio.pause();
        playButton.children[0].setAttribute('src', 'images/play.svg');
        playButton.children[0].style.marginLeft = '6.5px';
        disk.classList.remove("disk-active");
        if (window.innerWidth <= 700) {
            disk.parentElement.style.marginRight = '0';
        }
        disk.style.left = '0%';
    }
}

playButton.addEventListener('click', function () {
    playAudio();
});

playButton.addEventListener('mouseover', function () {
    if (buttonState == false) {
        document.querySelector('.disk').style.left = '40%';
    }
});

playButton.addEventListener('mouseout', function () {
    if (buttonState == false) {
        document.querySelector('.disk').style.left = '0%';
    }
});

stopButton.addEventListener('click', function () {
    playButton.children[0].style.marginLeft = '6.5px';
    buttonState = false;
    playButton.children[0].setAttribute('src', 'images/play.svg');
    document.querySelector('.disk').style.left = '0%';
    disk.classList.remove("disk-active");
    audio.pause();
    audio.currentTime = '0.0';
    if (window.innerWidth <= 700) {
        disk.parentElement.style.marginRight = '0';
    }
});

audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    seekBar.value = progress;
});

seekBar.addEventListener('input', () => {
    const seekTime = (seekBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
      playAudio();
    }
});
