// ============================
// ELEMENTS
// ============================

const intro = document.getElementById("intro");
const lettersPage = document.getElementById("lettersPage");
const button = document.getElementById("openButton");
const music = document.getElementById("bgMusic");
const slideshow = document.getElementById("slideshow");

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
    "images/image13.jpg",
    "images/image14.jpg",
    "images/image15.jpg",
    "images/image16.jpg",
    "images/image17.jpg",
    "images/image19.jpg",
    "images/image20.jpg",
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

let currentImage = 0;

// ============================
// OPEN WEBSITE
// ============================

button.addEventListener("click", () => {

    // Start music
    music.play().catch(error => {
        console.log("Music couldn't start:", error);
    });

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