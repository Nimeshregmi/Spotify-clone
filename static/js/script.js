

console.log("Welcome to spotify.");
let songIndex = 0;
let audioElement = new Audio('../static/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "Tu aaka dekh la", filepath: "../static/songs/1.mp3", coverpath: "../static/covers/1.jpg" },
    { songName: "Some time i think about you", filepath: "../static/songs/2.mp3", coverpath: "../static/covers/2.jpg" },
    { songName: "One dance", filepath: "../static/songs/3.mp3", coverpath: "../static/covers/3.jpg" },
    { songName: "Gangsta's Paradise - Coolio", filepath: "../static/songs/4.mp3", coverpath: "../static/covers/4.jpg" },
    { songName: "Justin Bieber - Intentions", filepath: "../static/songs/5.mp3", coverpath: "../static/covers/5.jpg" },
    { songName: "Eminem - Mockingbird ", filepath: "../static/songs/6.mp3", coverpath: "../static/covers/6.jpg" },
    { songName: "Brodha V - Aathma Raama ", filepath: "../static/songs/7.mp3", coverpath: "../static/covers/7.jpg" },
    { songName: "R. City - Locked Away ", filepath: "../static/songs/8.mp3", coverpath: "../static/covers/8.jpg" },
    { songName: "Ali Gatie - It's You", filepath: "../static/songs/9.mp3", coverpath: "../static/covers/9.jpg" },
    { songName: "Zaalima", filepath: "../static/songs/10.mp3", coverpath: "../static/covers/10.jpg" },
];
songItems.forEach((element, i) => {
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
// audioElement.play();
//Handelling play/pause audio
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

})
const makePlay = () => {
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
};

Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makePlay();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        songIndex = parseInt(e.target.id)
        audioElement.src = `../static/songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})
document.getElementById('next').addEventListener('click', (e) => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `../static/songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', (e) => {
    if (songIndex <= 0) {
        songIndex = 9;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `../static/songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})