let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");

let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressbar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    { songName: "Millionare", filePath: "songs/1.mp3", coverPath: "covers/image1.jpg" },
    { songName: "Angrezi-Beat", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "BrownRang", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Dope-Shope", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Blue-Eyes", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Jatt-Mehkma", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
];

// Master Play/Pause Button
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
});

// Progress Bar Update
audioElement.addEventListener("timeupdate", () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

// Seek Audio
myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

// Reset All
function makeAllNormal() {
    document.querySelectorAll(".songItemPlay").forEach((el) => {
        el.classList.remove("fa-pause-circle");
        el.classList.add("fa-play-circle");
    });
    document.querySelectorAll(".songItem").forEach((item) => {
        item.classList.remove("song-playing");
    });
}

// Play Selected Song from List
songItems.forEach((element, index) => {
    let playBtn = element.querySelector(".songItemPlay");
    playBtn.addEventListener("click", () => {
        makeAllNormal();

        songIndex = index;
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();

        playBtn.classList.remove("fa-play-circle");
        playBtn.classList.add("fa-pause-circle");

        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        masterSongName.innerText = songs[songIndex].songName;
        gif.style.opacity = 1;
        element.classList.add("song-playing");
    });
});

// Next Song
document.getElementById("forwardPlay").addEventListener("click", () => {
    songIndex = (songIndex + 1) % songs.length;
    playSelectedSong();
});

// Previous Song
document.getElementById("previousPlay").addEventListener("click", () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    playSelectedSong();
});

// Auto Play Next
audioElement.addEventListener("ended", () => {
    songIndex = (songIndex + 1) % songs.length;
    playSelectedSong();
});

// Core function for loading and playing current song
function playSelectedSong() {
    makeAllNormal();
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();

    masterSongName.innerText = songs[songIndex].songName;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;

    // Update current list item
    let currentSongItem = songItems[songIndex];
    currentSongItem.classList.add("song-playing");
    let currentBtn = currentSongItem.querySelector(".songItemPlay");
    currentBtn.classList.remove("fa-play-circle");
    currentBtn.classList.add("fa-pause-circle");
}
