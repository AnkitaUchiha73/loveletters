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


// ============================
// MUSIC TOGGLE
// ============================

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
    "music/TumSeHi.mp3",
    "music/AajkalTereMerePyarKeCharche.mp3",
];


// Replace these with Aryan's own playlist filenames
const aryanSongs = [
    "music/TujhMeinRabDikhta.mp3",
    "music/FinallyFoundyou.mp3",
    "music/IThinkTheyCallThisLove.mp3",
    "music/FalakTakTashan.mp3",
    "music/Guzarish.mp3",
    "music/MainYahaanHoon.mp3",
    "music/TeraHoneLagaHoon.mp3",
    "music/Teriore.mp3",
    "music/UffTeriAdaa.mp3",
    "music/saazni.mp3",
    "music/Mitwaa.mp3",
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


// ============================
// AUTO NEXT SONG
// ============================

// Auto next song — picks from whichever page's playlist is currently showing

music.addEventListener("ended",()=>{

    const activePlaylist =
        aryanPage.style.display === "block"
        ? aryanSongs
        : songs;

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
    "images/image13.jpeg",
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
    "images/image32.jpeg",
    "images/image33.jpeg",
    "images/image34.jpeg"
];


// Replace these with the photos you want just for Aryan's page
const aryanImages = [
    "images/aryan1.jpeg",
    "images/aryan2.jpeg",
    "images/aryan3.jpeg",
    "images/aryan4.jpeg",
    "images/aryan5.jpeg",
    "images/aryan6.jpeg",
    "images/aryan7.jpeg",
    "images/aryan8.jpeg",
    "images/aryan9.jpeg",
    "images/aryan10.jpeg",
    "images/aryan11.jpeg",
    "images/aryan12.jpeg",
    "images/aryan13.jpeg",
    "images/aryan14.jpeg",
    "images/aryan15.jpeg",
    "images/aryan16.jpeg",
    "images/aryan17.jpeg",
    "images/aryan18.jpeg",
    "images/aryan19.jpeg",
    "images/aryan20.jpeg",
    "images/aryan21.jpeg",
    "images/aryan22.jpeg"
];


let currentImage = 0;
let currentAryanImage = 0;


// ============================
// JOURNEY INTRO ANIMATION + LIVE COUNTER
// ============================

// Set this to the date you two got together (YYYY-MM-DDTHH:MM:SS)
const startDate = new Date("2024-04-22T00:00:00");

let counterInterval = null;


function updateCounter() {

    const now = new Date();

    let diff = now - startDate; // milliseconds

    if (diff < 0) diff = 0;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    diff -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));

    diff -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));

    diff -= minutes * (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    const counterEl = document.getElementById("counter");

    if (counterEl) {

        counterEl.textContent =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;

    }

}


function runJourneyIntro() {

    const mainTitle = document.getElementById("mainTitle");
    const mainSubtitle = document.getElementById("mainSubtitle");
    const mainSubtitle2 = document.getElementById("mainSubtitle2");
    const gallery = document.getElementById("gallery");
    const journey = document.getElementById("journeyIntro");
    const title = document.getElementById("journeyTitle");
    const timer = document.getElementById("loveCounter");


    // Hide normal content while the intro animation plays

    if (mainTitle)
        mainTitle.style.opacity = "0";

    if (mainSubtitle)
        mainSubtitle.style.opacity = "0";

    if (mainSubtitle2)
        mainSubtitle2.style.opacity = "0";

    if (gallery)
        gallery.style.opacity = "0";


    journey.style.display = "flex";

    journey.style.opacity = "1";


    // Start the live counter right away and keep it ticking every second

    updateCounter();

    counterInterval = setInterval(updateCounter, 1000);


    // Story text fades in, then out

    setTimeout(() => {

        title.style.opacity = "1";

    }, 500);


    setTimeout(() => {

        title.style.opacity = "0";

    }, 2500);


    // Counter fades in, then out

    setTimeout(() => {

        timer.style.opacity = "1";

    }, 3500);


    setTimeout(() => {

        timer.style.opacity = "0";

    }, 8500);


    // Remove intro overlay and reveal the real page

    setTimeout(() => {

        journey.style.display = "none";

        clearInterval(counterInterval);

        if (mainTitle)
            mainTitle.style.opacity = "1";

        if (mainSubtitle)
            mainSubtitle.style.opacity = "1";

        if (mainSubtitle2)
            mainSubtitle2.style.opacity = "1";

        if (gallery)
            gallery.style.opacity = "1";

    }, 10000);

}


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

        slideshow.style.backgroundImage =
            `url('${images[0]}')`;


        // Play the journey intro animation + live counter now that the page is visible

        runJourneyIntro();

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


        // FIX:
        // Aryan's gallery was staying invisible because
        // .gallery has opacity: 0 in style.css.
        // The main page has runJourneyIntro() which changes
        // its gallery to opacity: 1, but Aryan's page doesn't.
        
        const aryanGallery = aryanPage.querySelector(".gallery");

        if (aryanGallery) {

            aryanGallery.style.opacity = "1";

        }


        // Switch to Aryan's own slideshow

        slideshowAryan.style.backgroundImage =
            `url('${aryanImages[currentAryanImage]}')`;


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

        slideshow.style.backgroundImage =
            `url('${images[currentImage]}')`;


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


        slideshow.style.backgroundImage =
            `url('${images[currentImage]}')`;

    }


    if (aryanPage.style.display === "block") {

        currentAryanImage++;


        if (currentAryanImage >= aryanImages.length) {

            currentAryanImage = 0;

        }


        slideshowAryan.style.backgroundImage =
            `url('${aryanImages[currentAryanImage]}')`;

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

    const popups =
        document.querySelectorAll(".letterPopup");


    popups.forEach(popup => {

        if(event.target === popup){

            popup.style.display = "none";

        }

    });

};


// ============================
// WRITE A LETTER FORM
// ============================

const letterForm =
    document.getElementById('letterForm');


letterForm.addEventListener('submit', async function (e) {

    e.preventDefault();


    const status =
        document.getElementById('submitStatus');


    status.textContent = "Sending...";


    try {

        const response = await fetch(
            "https://formspree.io/f/mjgnznjg",
            {
                method: "POST",
                headers: {
                    "Accept": "application/json"
                },
                body: new FormData(letterForm)
            }
        );


        if (response.ok) {

            status.textContent =
                "Sent! ❤️ It's on its way to her.";

            letterForm.reset();

        } else {

            status.textContent =
                "Something went wrong. Try again.";

        }

    } catch (err) {

        status.textContent =
            "Something went wrong. Try again.";

    }

});
