// ============================
// ELEMENTS
// ============================
 
const intro = document.getElementById("intro");
const lettersPage = document.getElementById("lettersPage");
const aryanPage = document.getElementById("aryanPage");
const button = document.getElementById("openButton");
const toAryanBtn = document.getElementById("toAryanBtn");
const backFromAryanBtn = document.getElementById("backFromAryanBtn");
const music = document.getElementById("bgMusic");
const slideshow = document.getElementById("slideshow");
const slideshowAryan = document.getElementById("slideshowAryan");
const musicToggle = document.getElementById("musicToggle");
const musicMenu = document.getElementById("musicMenu");
const musicToggleAryan = document.getElementById("musicToggleAryan");
const musicMenuAryan = document.getElementById("musicMenuAryan");
 
 
musicToggle.addEventListener("click",()=>{
 
    musicMenu.classList.toggle("show");
 
});
 
musicToggleAryan.addEventListener("click",()=>{
 
    musicMenuAryan.classList.toggle("show");
 
});
 
music.addEventListener("play",()=>{
 
    musicToggle.innerHTML="🎶❤️";
    musicToggleAryan.innerHTML="🎶❤️";
 
});
 
 
music.addEventListener("pause",()=>{
 
    musicToggle.innerHTML="🎵❤️";
    musicToggleAryan.innerHTML="🎵❤️";
 
});
 
// ============================
// MUSIC PLAYLISTS
// ============================
 
const songs = [
    "music/GehraHua.mp3",
    "music/BadheAcheLagteHai.mp3",
    "music/YehRatein.mp3",
    "music/PalPalDilKePaas.mp3",
    "music/Barbaad.mp3",
    "music/Dhun.mp3",
    "music/FinallyFoundyou.mp3",
    "music/LikheJoKhatTujhe.mp3",
    "music/TumSeHi.mp3"
];
 
// Replace these with Aryan's own playlist filenames
const aryanSongs = [
    "music/TujhMeinRabDikhtaHai.mp3",
    "music/FinallyFoundyou.mp3",
    "music/IThinkTheyCallThisLove.mp3",
    "music/FalakTakTashan.mp3",
    "music/Guzarish.mp3",
    "music/MainYahaanHoon.mp3",
    "music/TeraHoneLagaHoon.mp3",
    "music/Teriore.mp3"
];
 
let currentSong = songs[0];
 
music.src = currentSong;
 
 
// ============================
// SONG SWITCHER
// ============================
 
const songButtons = document.querySelectorAll(".song-btn");
const shuffleBtn = document.getElementById("shuffleBtn");
const shuffleBtnAryan = document.getElementById("shuffleBtnAryan");
 
 
function updateActiveSongButton() {
 
    songButtons.forEach(btn => {
 
        btn.classList.toggle(
            "active",
            btn.dataset.song === currentSong
        );
 
    });
 
}
 
 
songButtons.forEach(btn => {
 
    btn.addEventListener("click", () => {
 
        if(btn.id === "shuffleBtn" || btn.id === "shuffleBtnAryan") return;
 
        currentSong = btn.dataset.song;
 
        music.src = currentSong;
 
        music.load();
 
        music.play()
        .catch(error => {
            console.log("Music error:", error);
        });
 
        updateActiveSongButton();
 
    });
 
});
 
 
function playRandomFrom(playlist){
 
    let nextSong;
 
    do{
        nextSong = playlist[Math.floor(Math.random()*playlist.length)];
    }
    while(nextSong === currentSong && playlist.length > 1);
 
    currentSong = nextSong;
 
    music.src = currentSong;
 
    music.load();
 
    music.play()
    .catch(error => {
        console.log("Music error:", error);
    });
 
    updateActiveSongButton();
 
}
 
 
if(shuffleBtn){
 
    shuffleBtn.addEventListener("click",()=>{
 
        playRandomFrom(songs);
 
    });
 
}
 
if(shuffleBtnAryan){
 
    shuffleBtnAryan.addEventListener("click",()=>{
 
        playRandomFrom(aryanSongs);
 
    });
 
}
 
 
// Auto next song — picks from whichever page's playlist is currently showing
 
music.addEventListener("ended",()=>{
 
    const activePlaylist = aryanPage.style.display === "block" ? aryanSongs : songs;
 
    playRandomFrom(activePlaylist);
 
});
 
// ============================
// BACKGROUND IMAGES
// ============================
 
const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",
    "images/image6.jpg",
    "images/image7.jpg",
    "images/image8.jpg",
    "images/image9.jpg",
    "images/image10.jpg",
    "images/image11.jpg",
    "images/image12.jpg",
    "images/image14.jpg",
    "images/image15.jpg",
    "images/image16.jpg",
    "images/image17.jpg",
    "images/image19.jpg",
    "images/image21.jpg",
    "images/image22.jpeg",
    "images/image23.jpg",
    "images/image24.jpeg",
    "images/image25.jpeg",
    "images/image26.jpeg",
    "images/image27.jpeg",
    "images/image28.jpeg",
    "images/image29.jpeg",
    "images/image30.jpeg",
    "images/image31.jpeg",
];
 
// Replace these with the photos you want just for Aryan's page
const aryanImages = [
    "images/aryan1.jpeg",
    "images/aryan2.jpeg",
    "images/aryan3.jpeg",
    "images/aryan4.jpeg",
    "images/aryan5.jpeg"
];
 
let currentImage = 0;
let currentAryanImage = 0;
 
// ============================
// OPEN WEBSITE
// ============================
 
button.addEventListener("click", () => {
 
    // Play the selected song
    music.play().catch(error => {
        console.log("Music couldn't start:", error);
    });
 
    updateActiveSongButton();
 
    // Fade out intro
    intro.style.opacity = "0";
 
    setTimeout(() => {
 
        intro.style.display = "none";
        lettersPage.style.display = "block";
 
        // Start slideshow
        slideshow.style.backgroundImage = `url('${images[0]}')`;
 
    }, 800);
 
});
 
// ============================
// GO TO ARYAN'S PAGE
// ============================
 
toAryanBtn.addEventListener("click", () => {
 
    lettersPage.style.opacity = "0";
 
    setTimeout(() => {
 
        lettersPage.style.display = "none";
        lettersPage.style.opacity = "1";
 
        aryanPage.style.display = "block";
 
        // Switch to Aryan's own slideshow
        slideshowAryan.style.backgroundImage = `url('${aryanImages[currentAryanImage]}')`;
 
        // Switch to Aryan's own playlist
        currentSong = aryanSongs[0];
        music.src = currentSong;
        music.load();
        music.play().catch(error => {
            console.log("Music couldn't start:", error);
        });
        updateActiveSongButton();
 
    }, 800);
 
});
 
// ============================
// BACK TO LETTERS PAGE
// ============================
 
backFromAryanBtn.addEventListener("click", () => {
 
    aryanPage.style.opacity = "0";
 
    setTimeout(() => {
 
        aryanPage.style.display = "none";
        aryanPage.style.opacity = "1";
 
        lettersPage.style.display = "block";
 
        // Switch back to the main slideshow
        slideshow.style.backgroundImage = `url('${images[currentImage]}')`;
 
        // Switch back to the main playlist
        currentSong = songs[0];
        music.src = currentSong;
        music.load();
        music.play().catch(error => {
            console.log("Music couldn't start:", error);
        });
        updateActiveSongButton();
 
    }, 800);
 
});
 
// ============================
// SLIDESHOW
// ============================
 
setInterval(() => {
 
    if (lettersPage.style.display === "block") {
 
        currentImage++;
 
        if (currentImage >= images.length) {
            currentImage = 0;
        }
 
        slideshow.style.backgroundImage = `url('${images[currentImage]}')`;
 
    }
 
    if (aryanPage.style.display === "block") {
 
        currentAryanImage++;
 
        if (currentAryanImage >= aryanImages.length) {
            currentAryanImage = 0;
        }
 
        slideshowAryan.style.backgroundImage = `url('${aryanImages[currentAryanImage]}')`;
 
    }
 
}, 4000);
 
// ============================
// OPEN LETTER
// ============================
 
function openLetter(letterID){
 
    document.getElementById(letterID).style.display = "flex";
 
}
 
// ============================
// CLOSE LETTER
// ============================
 
function closeLetter(letterID){
 
    document.getElementById(letterID).style.display = "none";
 
}
 
// ============================
// CLOSE WHEN CLICKING OUTSIDE
// ============================
 
window.onclick = function(event){
 
    const popups = document.querySelectorAll(".letterPopup");
 
    popups.forEach(popup => {
 
        if(event.target === popup){
 
            popup.style.display = "none";
 
        }
 
    });
 
}
const letterForm = document.getElementById('letterForm');
 
letterForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const status = document.getElementById('submitStatus');
    status.textContent = "Sending...";
 
    try {
        const response = await fetch("https://formspree.io/f/mjgnznjg", {
            method: "POST",
            headers: { "Accept": "application/json" },
            body: new FormData(letterForm)
        });
 
        if (response.ok) {
            status.textContent = "Sent! ❤️ It's on its way to her.";
            letterForm.reset();
        } else {
            status.textContent = "Something went wrong. Try again.";
        }
    } catch (err) {
        status.textContent = "Something went wrong. Try again.";
    }
});
 
