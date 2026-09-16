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

if (musicToggle) {
    musicToggle.addEventListener("click", () => {
        if (musicMenu) {
            musicMenu.classList.toggle("show");
        }
    });
}

if (musicToggleAryan) {
    musicToggleAryan.addEventListener("click", () => {
        if (musicMenuAryan) {
            musicMenuAryan.classList.toggle("show");
        }
    });
}

if (music) {
    music.addEventListener("play", () => {
        if (musicToggle) musicToggle.innerHTML = "🎶❤️";
        if (musicToggleAryan) musicToggleAryan.innerHTML = "🎶❤️";
    });

    music.addEventListener("pause", () => {
        if (musicToggle) musicToggle.innerHTML = "🎵❤️";
        if (musicToggleAryan) musicToggleAryan.innerHTML = "🎵❤️";
    });
}

// ============================
// MUSIC PLAYLISTS
// ============================

const songs = [
    "music/GehraHua.mp3",
    "music/AajkalTereMerePyarKeCharche.mp3",
    "music/BadheAcheLagteHai.mp3",
    "music/Barbaad.mp3",
    "music/Dhun.mp3",
    "music/KyaMujhePyaarHai.mp3",
    "music/LikheJoKhatTujhe.mp3",
    "music/PalPalDilKePass.mp3",
    "music/TumSeHi.mp3",
    "music/YeTuneKyaKiya.mp3",
    "music/YehRatein.mp3"
];

const aryanSongs = [
    "music/TujhMeinRabDikhta.mp3",
    "music/AaoNaa.mp3",
    "music/Aayat.mp3",
    "music/Afeemi.mp3",
    "music/AyeUdiUdiUdi.mp3",
    "music/Birdsoffeather.mp3",
    "music/DilKyunYehMera.mp3",
    "music/FalakTak.mp3",
    "music/FinallyFoundyou.mp3",
    "music/Guzarish.mp3",
    "music/ILoveYou.mp3",
    "music/IThinkTheyCallThisLove.mp3",
    "music/IWannaBeYours.mp3",
    "music/IshqBina.mp3",
    "music/JagGhoomeya.mp3",
    "music/MainYahaanHoon.mp3",
    "music/MeriChunarUddUddJaye.mp3",
    "music/Mitwa.mp3",
    "music/NahiSamneTu.mp3",
    "music/OReyChhori.mp3",
    "music/TeraHoneLagaHoon.mp3",
    "music/Teriore.mp3",
    "music/TumJoAayeJindagi.mp3",
    "music/UffTeriAdaa.mp3",
    "music/saazni.mp3"
];

let currentSong = songs[0];

if (music) {
    music.src = currentSong;
}

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

        if (
            btn.id === "shuffleBtn" ||
            btn.id === "shuffleBtnAryan"
        ) {
            return;
        }

        currentSong = btn.dataset.song;

        if (!music) return;

        music.src = currentSong;
        music.load();

        music.play().catch(error => {
            console.log("Music error:", error);
        });

        updateActiveSongButton();
    });
});

function playRandomFrom(playlist) {

    if (!playlist || !playlist.length || !music) return;

    let nextSong;

    do {
        nextSong =
            playlist[
                Math.floor(Math.random() * playlist.length)
            ];
    } while (
        nextSong === currentSong &&
        playlist.length > 1
    );

    currentSong = nextSong;

    music.src = currentSong;
    music.load();

    music.play().catch(error => {
        console.log("Music error:", error);
    });

    updateActiveSongButton();
}

if (shuffleBtn) {
    shuffleBtn.addEventListener("click", () => {
        playRandomFrom(songs);
    });
}

if (shuffleBtnAryan) {
    shuffleBtnAryan.addEventListener("click", () => {
        playRandomFrom(aryanSongs);
    });
}

// ============================
// AUTO NEXT SONG
// ============================

if (music) {
    music.addEventListener("ended", () => {

        const activePlaylist =
            aryanPage &&
            aryanPage.style.display === "block"
                ? aryanSongs
                : songs;

        playRandomFrom(activePlaylist);
    });
}

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
    "images/image32.jpeg",
    "images/image33.jpeg",
    "images/image34.jpeg"
];

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
// JOURNEY INTRO + LIVE COUNTER
// ============================

const startDate =
    new Date("2024-04-22T00:00:00");

let counterInterval = null;

function updateCounter() {

    const now = new Date();

    let diff = now - startDate;

    if (diff < 0) diff = 0;

    const days =
        Math.floor(
            diff / (1000 * 60 * 60 * 24)
        );

    diff -=
        days *
        (1000 * 60 * 60 * 24);

    const hours =
        Math.floor(
            diff / (1000 * 60 * 60)
        );

    diff -=
        hours *
        (1000 * 60 * 60);

    const minutes =
        Math.floor(
            diff / (1000 * 60)
        );

    diff -=
        minutes *
        (1000 * 60);

    const seconds =
        Math.floor(diff / 1000);

    const counterEl =
        document.getElementById("counter");

    if (counterEl) {

        counterEl.textContent =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

function runJourneyIntro() {

    const mainTitle =
        document.getElementById("mainTitle");

    const mainSubtitle =
        document.getElementById("mainSubtitle");

    const mainSubtitle2 =
        document.getElementById("mainSubtitle2");

    const gallery =
        document.getElementById("gallery");

    const journey =
        document.getElementById("journeyIntro");

    const title =
        document.getElementById("journeyTitle");

    const timer =
        document.getElementById("loveCounter");

    if (
        !journey ||
        !title ||
        !timer
    ) {
        return;
    }

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

    updateCounter();

    clearInterval(counterInterval);

    counterInterval =
        setInterval(
            updateCounter,
            1000
        );

    setTimeout(() => {

        title.style.opacity = "1";

    }, 500);

    setTimeout(() => {

        title.style.opacity = "0";

    }, 2500);

    setTimeout(() => {

        timer.style.opacity = "1";

    }, 3500);

    setTimeout(() => {

        timer.style.opacity = "0";

    }, 8500);

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

if (button) {

    button.addEventListener("click", () => {

        if (music) {

            music.play().catch(error => {

                console.log(
                    "Music couldn't start:",
                    error
                );

            });

            updateActiveSongButton();
        }

        if (intro) {
            intro.style.opacity = "0";
        }

        setTimeout(() => {

            if (intro)
                intro.style.display = "none";

            if (lettersPage)
                lettersPage.style.display = "block";

            if (
                slideshow &&
                images.length
            ) {

                slideshow.style.backgroundImage =
                    `url('${images[0]}')`;
            }

            runJourneyIntro();

        }, 800);

    });

}

// ============================
// GO TO ARYAN'S PAGE
// ============================

if (toAryanBtn) {

    toAryanBtn.addEventListener("click", () => {

        if (lettersPage) {
            lettersPage.style.opacity = "0";
        }

        setTimeout(() => {

            if (lettersPage) {

                lettersPage.style.display = "none";
                lettersPage.style.opacity = "1";

            }

            if (aryanPage) {
                aryanPage.style.display = "block";
            }

            const aryanGallery =
                aryanPage
                    ? aryanPage.querySelector(".gallery")
                    : null;

            if (aryanGallery) {
                aryanGallery.style.opacity = "1";
            }

            if (
                slideshowAryan &&
                aryanImages.length
            ) {

                slideshowAryan.style.backgroundImage =
                    `url('${aryanImages[currentAryanImage]}')`;
            }

            // =====================================================
            // IMPORTANT ARYAN MUSIC FIX
            // =====================================================
            // Start Aryan's playlist immediately from the user's click.
            // Keeping play() inside the click handler avoids browser
            // autoplay blocking caused by the old 800ms setTimeout.

            currentSong = aryanSongs[0];

            if (music) {

                music.src = currentSong;
                music.load();

                music.play().then(() => {

                    if (musicToggleAryan) {
                        musicToggleAryan.innerHTML = "🎶❤️";
                    }

                }).catch(error => {

                    console.log(
                        "Aryan music couldn't start:",
                        error
                    );

                });
            }

            updateActiveSongButton();

        }, 800);

    });

}

// ============================
// BACK TO LETTERS PAGE
// ============================

if (backFromAryanBtn) {

    backFromAryanBtn.addEventListener("click", () => {

        if (aryanPage) {
            aryanPage.style.opacity = "0";
        }

        setTimeout(() => {

            if (aryanPage) {

                aryanPage.style.display = "none";
                aryanPage.style.opacity = "1";

            }

            if (lettersPage) {
                lettersPage.style.display = "block";
            }

            if (
                slideshow &&
                images.length
            ) {

                slideshow.style.backgroundImage =
                    `url('${images[currentImage]}')`;
            }

            currentSong =
                songs[0];

            if (music) {

                music.src =
                    currentSong;

                music.load();

                music.play().catch(error => {

                    console.log(
                        "Music couldn't start:",
                        error
                    );

                });

            }

            updateActiveSongButton();

        }, 800);

    });

}

// ============================
// BACKGROUND SLIDESHOW
// ============================

setInterval(() => {

    if (
        lettersPage &&
        lettersPage.style.display === "block" &&
        slideshow &&
        images.length
    ) {

        currentImage++;

        if (
            currentImage >=
            images.length
        ) {

            currentImage = 0;
        }

        slideshow.style.backgroundImage =
            `url('${images[currentImage]}')`;
    }

    if (
        aryanPage &&
        aryanPage.style.display === "block" &&
        slideshowAryan &&
        aryanImages.length
    ) {

        currentAryanImage++;

        if (
            currentAryanImage >=
            aryanImages.length
        ) {

            currentAryanImage = 0;
        }

        slideshowAryan.style.backgroundImage =
            `url('${aryanImages[currentAryanImage]}')`;
    }

}, 4000);
// ============================
// LETTER DATA
// ============================

const mainLetters = [
    {
        emoji: "💌",
        title: "The Beginning",
        date: "22 April 2024",
        body: `
            <p>Somewhere between a game of CODM and countless conversations,
            something beautiful began.</p>

            <p>I never knew that meeting you would become one of the
            most important moments of my life.</p>

            <p>And somehow, here we are. ❤️</p>
        `
    },

    {
        emoji: "🎧",
        title: "The First Voice",
        date: "",
        body: `
            <p>I still remember the first time I heard your voice.</p>

            <p>It was such a simple moment, but somehow it stayed with me.
            There was something about hearing you that made everything
            feel a little more real.</p>

            <p>And I think that's when I started getting attached to you. ❤️</p>
        `
    },

    {
        emoji: "📞",
        title: "Our First Call",
        date: "",
        body: `
            <p>Our first call became one of those little memories that
            I never wanted to forget.</p>

            <p>We talked, laughed, and somehow made hours disappear.</p>

            <p>I could have stayed there listening to you forever.</p>
        `
    },

    {
        emoji: "🌹",
        title: "Our First Meetup",
        date: "",
        body: `
            <p>After all those messages and calls, finally seeing you
            in front of me felt unreal.</p>

            <p>It was the moment when everything we had built through
            screens suddenly existed in the real world.</p>

            <p>And I wouldn't trade that memory for anything.</p>
        `
    },

    {
        emoji: "🫶",
        title: "Holding You",
        date: "",
        body: `
            <p>There are moments that don't need words.</p>

            <p>Holding you was one of them.</p>

            <p>For a little while, everything else disappeared and
            it was just us.</p>
        `
    },

    {
        emoji: "💋",
        title: "That Kiss",
        date: "",
        body: `
            <p>Some memories stay with you forever.</p>

            <p>That moment was one of ours.</p>

            <p>A tiny moment in time that somehow became a permanent
            part of our story. ❤️</p>
        `
    },

    {
        emoji: "❤️",
        title: "Us",
        date: "",
        body: `
            <p>We have already collected so many memories together,
            and somehow I still feel like our story is only beginning.</p>

            <p>There are so many places to see, things to do,
            conversations to have and memories to make.</p>

            <p>And I want to experience them with you.</p>

            <p>Always. ❤️</p>
        `
    }
];


// ============================
// ARYAN LETTER DATA
// ============================

const aryanLetters = [
    {
        emoji: "❤️",
        title: "To My Favourite Person",
        date: "",
        body: `
            <p>Dear Aryan,</p>

            <p>If I had to describe what you mean to me,
            I don't think words would ever be enough.</p>

            <p>You became a part of my everyday life without me
            even realizing how important you had become.</p>

            <p>And now I cannot imagine my story without you in it.</p>
        `
    },

    {
        emoji: "🌙",
        title: "For The Nights We Talked",
        date: "",
        body: `
            <p>Some nights became special simply because I got to
            spend them talking to you.</p>

            <p>It didn't matter what we were talking about.</p>

            <p>As long as it was you on the other side,
            I was happy.</p>
        `
    },

    {
        emoji: "💫",
        title: "You Feel Like Home",
        date: "",
        body: `
            <p>Home isn't always a place.</p>

            <p>Sometimes it's a person.</p>

            <p>And somehow, you became that person for me.</p>

            <p>Being with you feels like being exactly where
            I'm supposed to be.</p>
        `
    },

    {
        emoji: "🥺",
        title: "Things I Don't Say Enough",
        date: "",
        body: `
            <p>I don't always say it, but I appreciate you more
            than you probably realize.</p>

            <p>I appreciate your presence, your patience,
            your silly moments, your serious moments,
            and everything that makes you you.</p>

            <p>Thank you for being part of my life.</p>
        `
    },

    {
        emoji: "💌",
        title: "A Little Promise",
        date: "",
        body: `
            <p>I can't promise that every day will be perfect.</p>

            <p>But I can promise that I will keep choosing
            the memories we create together.</p>

            <p>I'll keep laughing with you, annoying you,
            supporting you and loving you.</p>

            <p>One day at a time. ❤️</p>
        `
    }
];


// ============================
// LETTER CARD SYSTEM
// ============================

function makeLetterCard(letters, els) {

    if (!letters || !letters.length) {
        return;
    }

    let index = 0;
    let expanded = false;
    let isAnimating = false;


    // ============================
    // RENDER EXPAND STATE
    // ============================

    function renderExpandState() {

        if (!els.card) {
            return;
        }

        els.card.classList.toggle(
            "expanded",
            expanded
        );

        if (els.toggle) {

            els.toggle.textContent =
                expanded
                    ? "Close letter"
                    : "Tap to read";

        }
    }


    // ============================
    // RENDER LETTER
    // ============================

    function renderContent() {

        const letter =
            letters[index];

        if (!letter) {
            return;
        }


        if (els.emoji) {
            els.emoji.textContent =
                letter.emoji || "";
        }


        if (els.title) {
            els.title.textContent =
                letter.title || "";
        }


        if (els.date) {

            els.date.textContent =
                letter.date;

            els.date.style.display =
                letter.date
                    ? "block"
                    : "none";
        }


        if (els.body) {

            els.body.innerHTML =
                letter.body;
        }


        if (els.position) {

            els.position.textContent =
                `${index + 1} / ${letters.length}`;
        }


        if (els.prevBtn) {

            els.prevBtn.disabled =
                index === 0;
        }


        if (els.nextBtn) {

            els.nextBtn.disabled =
                index === letters.length - 1;
        }


        expanded = false;

        renderExpandState();
    }


    // ============================
    // LETTER SLIDE ANIMATION
    // ============================

    function slideTo(newIndex, direction) {

        if (isAnimating) return;


        if (
            newIndex < 0 ||
            newIndex > letters.length - 1
        ) {
            return;
        }


        if (!els.card) {

            index = newIndex;

            renderContent();

            return;
        }


        isAnimating = true;


        const outClass =
            direction === "next"
                ? "slide-out-left"
                : "slide-out-right";


        const inClass =
            direction === "next"
                ? "slide-in-right"
                : "slide-in-left";


        els.card.classList.remove(
            "slide-in-right",
            "slide-in-left"
        );


        els.card.classList.add(
            outClass
        );


        const onOutEnd = () => {

            els.card.removeEventListener(
                "animationend",
                onOutEnd
            );


            els.card.classList.remove(
                outClass
            );


            index = newIndex;

            renderContent();


            els.card.classList.add(
                inClass
            );


            const onInEnd = () => {

                els.card.removeEventListener(
                    "animationend",
                    onInEnd
                );


                els.card.classList.remove(
                    inClass
                );


                isAnimating = false;
            };


            els.card.addEventListener(
                "animationend",
                onInEnd
            );

        };


        els.card.addEventListener(
            "animationend",
            onOutEnd
        );

    }


    // ============================
    // NEXT
    // ============================

    function goNext() {

        if (
            index <
            letters.length - 1
        ) {

            slideTo(
                index + 1,
                "next"
            );

        }
    }


    // ============================
    // PREVIOUS
    // ============================

    function goPrev() {

        if (index > 0) {

            slideTo(
                index - 1,
                "prev"
            );

        }
    }


    // ============================
    // TAP TO READ
    // ============================

    if (els.toggle) {

        els.toggle.addEventListener(
            "click",
            () => {

                expanded = !expanded;

                renderExpandState();

            }
        );

    }


    // ============================
    // SWIPE / DRAG SUPPORT
    // ============================

    if (els.card) {

        let startX = 0;
        let startY = 0;
        let dragging = false;
        let lockedAxis = null;

        const SWIPE_THRESHOLD = 45;


        function onDragStart(x, y) {

            if (expanded) return;

            if (isAnimating) return;


            dragging = true;
            lockedAxis = null;

            startX = x;
            startY = y;
        }


        function onDragMove(x, y) {

            if (!dragging) return;


            const dx =
                x - startX;

            const dy =
                y - startY;


            if (lockedAxis === null) {

                if (
                    Math.abs(dx) > 8 ||
                    Math.abs(dy) > 8
                ) {

                    lockedAxis =
                        Math.abs(dx) >
                        Math.abs(dy)
                            ? "x"
                            : "y";

                }

            }


            if (
                lockedAxis === "x"
            ) {

                els.card.style.transform =
                    `translateX(${dx}px)`;

            }

        }


        function onDragEnd(x) {

            if (!dragging) return;


            dragging = false;


            const dx =
                x - startX;


            els.card.style.transform =
                "";


            if (
                lockedAxis === "x"
            ) {

                if (
                    dx <=
                    -SWIPE_THRESHOLD
                ) {

                    goNext();

                } else if (
                    dx >= SWIPE_THRESHOLD
                ) {

                    goPrev();

                }

            }


            lockedAxis = null;

        }


        els.card.addEventListener(
            "touchstart",
            e => {

                const t =
                    e.touches[0];

                onDragStart(
                    t.clientX,
                    t.clientY
                );

            },
            { passive: true }
        );


        els.card.addEventListener(
            "touchmove",
            e => {

                const t =
                    e.touches[0];

                onDragMove(
                    t.clientX,
                    t.clientY
                );

            },
            { passive: true }
        );


        els.card.addEventListener(
            "touchend",
            e => {

                const t =
                    e.changedTouches[0];

                onDragEnd(
                    t.clientX
                );

            }
        );


        els.card.addEventListener(
            "mousedown",
            e => {

                onDragStart(
                    e.clientX,
                    e.clientY
                );

            }
        );


        window.addEventListener(
            "mousemove",
            e => {

                if (dragging) {

                    onDragMove(
                        e.clientX,
                        e.clientY
                    );

                }

            }
        );


        window.addEventListener(
            "mouseup",
            e => {

                if (dragging) {

                    onDragEnd(
                        e.clientX
                    );

                }

            }
        );

    }


    renderContent();


    return {
        render: renderContent
    };

}


// ============================
// MAIN LETTER CARD
// ============================

makeLetterCard(
    mainLetters,
    {
        card:
            document.getElementById(
                "mainLetterCard"
            ),

        emoji:
            document.getElementById(
                "viewerEmoji"
            ),

        title:
            document.getElementById(
                "viewerTitle"
            ),

        date:
            document.getElementById(
                "viewerDate"
            ),

        toggle:
            document.getElementById(
                "letterToggle"
            ),

        body:
            document.getElementById(
                "viewerBody"
            ),

        position:
            document.getElementById(
                "letterPosition"
            )
    }
);


// ============================
// ARYAN LETTER CARD
// ============================

makeLetterCard(
    aryanLetters,
    {
        card:
            document.getElementById(
                "aryanLetterCard"
            ),

        emoji:
            document.getElementById(
                "viewerEmojiAryan"
            ),

        title:
            document.getElementById(
                "viewerTitleAryan"
            ),

        date:
            document.getElementById(
                "viewerDateAryan"
            ),

        toggle:
            document.getElementById(
                "letterToggleAryan"
            ),

        body:
            document.getElementById(
                "viewerBodyAryan"
            ),

        position:
            document.getElementById(
                "letterPositionAryan"
            )
    }
);


// ============================
// OPEN / CLOSE GENERIC LETTER POPUP
// ============================

function openLetter(letterID) {

    const letter =
        document.getElementById(
            letterID
        );


    if (letter) {

        letter.style.display =
            "flex";

    }

}


function closeLetter(letterID) {

    const letter =
        document.getElementById(
            letterID
        );


    if (letter) {

        letter.style.display =
            "none";

    }

}


// ============================
// CLOSE POPUPS WHEN CLICKING OUTSIDE
// ============================

window.addEventListener(
    "click",
    event => {

        const popups =
            document.querySelectorAll(
                ".letterPopup"
            );


        popups.forEach(
            popup => {

                if (
                    event.target === popup
                ) {

                    popup.style.display =
                        "none";

                }

            }
        );

    }
);


// ============================
// WRITE A LETTER FORM
// ============================

const letterForm =
    document.getElementById(
        "letterForm"
    );


if (letterForm) {

    letterForm.addEventListener(
        "submit",
        async function (e) {

            e.preventDefault();


            const status =
                document.getElementById(
                    "submitStatus"
                );


            if (status) {

                status.textContent =
                    "Sending...";

            }


            try {

                const response =
                    await fetch(
                        "https://formspree.io/f/mjgnznjg",
                        {
                            method: "POST",

                            headers: {
                                "Accept":
                                    "application/json"
                            },

                            body:
                                new FormData(
                                    letterForm
                                )
                        }
                    );


                if (response.ok) {

                    if (status) {

                        status.textContent =
                            "Sent! ❤️ It's on its way to her.";

                    }


                    letterForm.reset();

                } else {

                    if (status) {

                        status.textContent =
                            "Something went wrong. Try again.";

                    }

                }

            } catch (err) {

                if (status) {

                    status.textContent =
                        "Something went wrong. Try again.";

                }

            }

        }
    );

}


// =========================================================
// CINEMATIC IDLE MODE
// =========================================================

(function () {

    const IDLE_TIME =
        10000;


    const lettersPage =
        document.getElementById(
            "lettersPage"
        );


    const aryanPage =
        document.getElementById(
            "aryanPage"
        );


    let idleTimer = null;


    function getActivePage() {

        if (
            lettersPage &&
            getComputedStyle(
                lettersPage
            ).display !== "none"
        ) {

            return lettersPage;

        }


        if (
            aryanPage &&
            getComputedStyle(
                aryanPage
            ).display !== "none"
        ) {

            return aryanPage;

        }


        return null;

    }


    function enterIdleMode() {

        const activePage =
            getActivePage();


        if (!activePage) return;


        const writePopup =
            document.getElementById(
                "writeLetter"
            );


        const quiz =
            document.getElementById(
                "quizSurprise"
            );


        if (
            (
                writePopup &&
                getComputedStyle(
                    writePopup
                ).display !== "none"
            )
            ||
            (
                quiz &&
                getComputedStyle(
                    quiz
                ).display !== "none"
            )
        ) {

            resetIdleTimer();

            return;

        }


        activePage.classList.add(
            "idle-mode"
        );

    }


    function exitIdleMode() {

        if (lettersPage) {

            lettersPage.classList.remove(
                "idle-mode"
            );

        }


        if (aryanPage) {

            aryanPage.classList.remove(
                "idle-mode"
            );

        }

    }


    function resetIdleTimer() {

        exitIdleMode();


        clearTimeout(
            idleTimer
        );


        idleTimer =
            setTimeout(
                enterIdleMode,
                IDLE_TIME
            );

    }


    const activityEvents = [
        "mousemove",
        "mousedown",
        "click",
        "touchstart",
        "touchmove",
        "keydown",
        "scroll"
    ];


    activityEvents.forEach(
        eventName => {

            document.addEventListener(
                eventName,
                resetIdleTimer,
                { passive: true }
            );

        }
    );


    resetIdleTimer();

})();


// =========================================================
// ONE PIECE — OUR GRAND LINE
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        // =====================================================
        // ELEMENTS
        // =====================================================

        const onePiecePage =
            document.getElementById(
                "onePiecePage"
            );


        const opening =
            document.getElementById(
                "opOpening"
            );


        const grandLine =
            document.getElementById(
                "grandLineContent"
            );


        const startButton =
            document.getElementById(
                "startGrandLine"
            );


        const backButton =
            document.getElementById(
                "backFromOnePiece"
            );


        const musicButton =
            document.getElementById(
                "opMusicButton"
            );


        const opMusicMenu =
            document.getElementById(
                "opMusicMenu"
            );


        const onePieceMusic =
            document.getElementById(
                "onePieceMusic"
            );


        const onePieceButton =
            document.getElementById(
                "onePieceButton"
            );


        // =====================================================
        // ONE PIECE PLAYLIST
        // =====================================================

        const onePiecePlaylist = [

            {
                name: "One Piece Theme",
                src: "music/one_piece.mp3"
            },

            {
                name: "Binks' Sake",
                src: "music/BinksSake.mp3"
            },

            {
                name: "Brand New World",
                src: "music/BrandNewWorld.mp3"
            },

            {
                name: "Fight Together",
                src: "music/FightTogether.mp3"
            },

            {
                name: "Marvelous Battle",
                src: "music/MarvelousBattle.mp3"
            }

        ];


        // =====================================================
        // ONE PIECE MUSIC STATE
        // =====================================================

        let opPlaylistIndex = 0;
        let opMusicPlaying = false;


        // =====================================================
        // UPDATE ACTIVE PLAYLIST BUTTON
        // =====================================================

        function updateOpSongButton() {

            if (!opMusicMenu) return;


            const buttons =
                opMusicMenu.querySelectorAll(
                    ".op-song-btn"
                );


            buttons.forEach(button => {

                const isActive =
                    button.dataset.opSong ===
                    onePiecePlaylist[
                        opPlaylistIndex
                    ]?.src;


                button.classList.toggle(
                    "active",
                    isActive
                );

            });

        }


        // =====================================================
        // PLAY ONE PIECE SONG
        // =====================================================

        function playOpSong(index) {

            if (
                !onePiecePlaylist[index] ||
                !onePieceMusic
            ) {
                return;
            }


            // Keep playlist index synchronized
            opPlaylistIndex = index;


            const song =
                onePiecePlaylist[
                    opPlaylistIndex
                ];


            // Change audio source
            onePieceMusic.src =
                song.src;


            onePieceMusic.load();


            // Update active menu button
            updateOpSongButton();


            // Play
            onePieceMusic
                .play()
                .then(() => {

                    opMusicPlaying = true;


                    if (musicButton) {

                        musicButton.textContent =
                            "🎶";

                    }

                })
                .catch(error => {

                    console.log(
                        "Grand Line music could not autoplay:",
                        error
                    );

                });

        }


        // =====================================================
        // OPEN ONE PIECE PAGE
        // =====================================================

        if (onePieceButton) {

            onePieceButton.addEventListener(
                "click",
                () => {

                    if (!onePiecePage) {
                        return;
                    }


                    // -----------------------------------------
                    // STOP NORMAL MUSIC
                    // -----------------------------------------

                    if (music) {

                        music.pause();

                        music.currentTime = 0;

                    }


                    // Reset normal music icons

                    if (musicToggle) {

                        musicToggle.innerHTML =
                            "🎵❤️";

                    }


                    if (musicToggleAryan) {

                        musicToggleAryan.innerHTML =
                            "🎵❤️";

                    }


                    // -----------------------------------------
                    // SHOW ONE PIECE PAGE
                    // -----------------------------------------

                    onePiecePage.style.display =
                        "block";


                    document.body.classList.add(
                        "one-piece-active"
                    );


                    document.body.style.overflow =
                        "hidden";


                    // -----------------------------------------
                    // SHOW OPENING SCREEN
                    // -----------------------------------------

                    if (opening) {

                        opening.style.display =
                            "grid";


                        opening.classList.remove(
                            "hide"
                        );

                    }


                    // -----------------------------------------
                    // RESET GRAND LINE
                    // -----------------------------------------

                    if (grandLine) {

                        grandLine.style.display =
                            "block";


                        grandLine.classList.remove(
                            "op-grand-line-visible"
                        );


                        grandLine.classList.remove(
                            "op-destination-open"
                        );

                    }


                    // -----------------------------------------
                    // RESET ONE PIECE MUSIC
                    // -----------------------------------------

                    if (onePieceMusic) {

                        onePieceMusic.pause();

                        onePieceMusic.currentTime =
                            0;

                    }


                    opPlaylistIndex = 0;
                    opMusicPlaying = false;


                    if (musicButton) {

                        musicButton.textContent =
                            "🎵";

                    }


                    updateOpSongButton();


                    // -----------------------------------------
                    // RESET PAGE SCROLL
                    // -----------------------------------------

                    onePiecePage.scrollTop =
                        0;

                }

            );

        }


        // =====================================================
        // START GRAND LINE
        // =====================================================

        if (startButton) {

            startButton.addEventListener(
                "click",
                () => {


                    // -----------------------------------------
                    // STOP MAIN / ARYAN MUSIC
                    // -----------------------------------------

                    if (music) {

                        music.pause();

                        music.currentTime =
                            0;

                    }


                    // Reset normal music icons

                    if (musicToggle) {

                        musicToggle.innerHTML =
                            "🎵❤️";

                    }


                    if (musicToggleAryan) {

                        musicToggleAryan.innerHTML =
                            "🎵❤️";

                    }


                    // -----------------------------------------
                    // HIDE OPENING
                    // -----------------------------------------

                    if (opening) {

                        opening.style.display =
                            "none";

                    }


                    // -----------------------------------------
                    // SHOW GRAND LINE
                    // -----------------------------------------

                    setTimeout(
                        () => {

                            if (grandLine) {

                                grandLine.classList.add(
                                    "op-grand-line-visible"
                                );

                            }

                        },
                        850
                    );


                    // -----------------------------------------
                    // START FIRST ONE PIECE SONG
                    // -----------------------------------------

                    playOpSong(0);

                }

            );

        }


        // =====================================================
        // BACK BUTTON
        // =====================================================

        if (backButton) {

            backButton.addEventListener(
                "click",
                () => {


                    // -----------------------------------------
                    // STOP ONE PIECE MUSIC
                    // -----------------------------------------

                    if (onePieceMusic) {

                        onePieceMusic.pause();

                        onePieceMusic.currentTime =
                            0;

                    }


                    opMusicPlaying =
                        false;


                    opPlaylistIndex =
                        0;


                    // -----------------------------------------
                    // RESET MUSIC BUTTON
                    // -----------------------------------------

                    if (musicButton) {

                        musicButton.textContent =
                            "🎵";

                    }


                    // -----------------------------------------
                    // CLOSE MUSIC MENU
                    // -----------------------------------------

                    if (opMusicMenu) {

                        opMusicMenu.classList.remove(
                            "show"
                        );

                    }


                    // -----------------------------------------
                    // HIDE ONE PIECE PAGE
                    // -----------------------------------------

                    if (onePiecePage) {

                        onePiecePage.style.display =
                            "none";

                    }


                    if (grandLine) {

                        grandLine.classList.remove(
                            "op-grand-line-visible"
                        );


                        grandLine.classList.remove(
                            "op-destination-open"
                        );

                    }


                    document.body.classList.remove(
                        "one-piece-active"
                    );


                    document.body.style.overflow =
                        "";


                    // -----------------------------------------
                    // RESUME NORMAL MUSIC
                    // -----------------------------------------

                    if (music) {

                        music.play()
                            .catch(() => {});

                    }

                }

            );

        }


        // =====================================================
        // ONE PIECE MUSIC BUTTON
        // =====================================================

        if (musicButton) {

            musicButton.addEventListener(
                "click",
                event => {

                    event.preventDefault();
                    event.stopPropagation();


                    if (!onePieceMusic) {
                        return;
                    }


                    // -----------------------------------------
                    // PLAY / PAUSE
                    // -----------------------------------------

                    if (opMusicPlaying) {

                        onePieceMusic.pause();

                        opMusicPlaying =
                            false;


                        musicButton.textContent =
                            "🎵";

                    } else {

                        playOpSong(
                            opPlaylistIndex
                        );

                    }


                    // -----------------------------------------
                    // OPEN / CLOSE PLAYLIST
                    // -----------------------------------------

                    if (opMusicMenu) {

                        opMusicMenu.classList.toggle(
                            "show"
                        );

                    }

                }

            );

        }


        // =====================================================
        // CLOSE PLAYLIST WHEN CLICKING ELSEWHERE
        // =====================================================

        document.addEventListener(
            "click",
            event => {

                if (
                    !opMusicMenu ||
                    !musicButton
                ) {
                    return;
                }


                if (
                    !opMusicMenu.contains(
                        event.target
                    ) &&
                    event.target !==
                        musicButton
                ) {

                    opMusicMenu.classList.remove(
                        "show"
                    );

                }

            }
        );


        // =====================================================
        // ONE PIECE MUSIC MENU
        // =====================================================

        if (opMusicMenu) {

            opMusicMenu.addEventListener(
                "click",
                event => {

                    event.stopPropagation();


                    const songButton =
                        event.target.closest(
                            ".op-song-btn"
                        );


                    if (!songButton) {
                        return;
                    }


                    const index =
                        onePiecePlaylist.findIndex(
                            song =>
                                song.src ===
                                songButton.dataset.opSong
                        );


                    if (index === -1) {
                        return;
                    }


                    playOpSong(index);


                    // Keep menu open after selecting

                    opMusicMenu.classList.add(
                        "show"
                    );

                }
            );

        }


        // =====================================================
        // AUTOMATIC NEXT ONE PIECE SONG
        // =====================================================

        if (onePieceMusic) {

            onePieceMusic.addEventListener(
                "ended",
                () => {

                    const nextIndex =
                        (
                            opPlaylistIndex + 1
                        ) %
                        onePiecePlaylist.length;


                    playOpSong(
                        nextIndex
                    );

                }
            );

        }


        // =====================================================
        // GRAND LINE DESTINATION NAVIGATION
        // =====================================================

        const destinationButtons =
            document.querySelectorAll(
                ".op-destination-button"
            );


        const destinationPanels =
            document.querySelectorAll(
                ".op-destination-panel"
            );


        function showGrandLineHome() {

            destinationPanels.forEach(
                panel => {

                    panel.classList.remove(
                        "op-panel-active"
                    );

                }
            );


            if (grandLine) {

                grandLine.classList.remove(
                    "op-destination-open"
                );


                grandLine.scrollTop =
                    0;

            }

        }


        function showGrandLinePanel(id) {

            const panel =
                document.getElementById(
                    id
                );


            if (!panel) {
                return;
            }


            destinationPanels.forEach(
                otherPanel => {

                    otherPanel.classList.remove(
                        "op-panel-active"
                    );

                }
            );


            if (grandLine) {

                grandLine.classList.add(
                    "op-destination-open"
                );

            }


            panel.classList.add(
                "op-panel-active"
            );


            panel.scrollTop =
                0;

        }


        destinationButtons.forEach(
            destinationButton => {

                destinationButton.addEventListener(
                    "click",
                    () => {

                        destinationButton.classList.remove(
                            "button-pop"
                        );


                        void destinationButton.offsetWidth;


                        destinationButton.classList.add(
                            "button-pop"
                        );


                        const target =
                            destinationButton.dataset
                                .opSection;


                        if (target) {

                            setTimeout(
                                () => {

                                    showGrandLinePanel(
                                        target
                                    );

                                },
                                260
                            );

                        }

                    }
                );

            }
        );


        document
            .querySelectorAll(
                "[data-op-home]"
            )
            .forEach(
                homeButton => {

                    homeButton.addEventListener(
                        "click",
                        showGrandLineHome
                    );

                }
            );


        showGrandLineHome();


        // =====================================================
        // GRAND LINE MEMORY POLAROIDS
        // =====================================================

        const memories = {

            codm: {

                icon: "🎮",

                chapter: "CHAPTER I",

                title: "Where It All Began",

                text:
                    "Our story began somewhere between a game of CODM and two people who had no idea what was coming next.",

                photos: [
                    "images/codm1.jpeg",
                    "images/codm2.jpeg",
                    "images/codm3.jpeg"
                ],

                captions: [
                    "The beginning of our adventure 🎮",
                    "Two players. One story.",
                    "And somehow, we found each other ❤️"
                ]

            },


            videocall: {

                icon: "📞",

                chapter: "CHAPTER II",

                title: "Across The Distance",

                text:
                    "From messages to calls, somehow the distance never felt quite so far when you were on the other side.",

                photos: [
                    "images/videocall1.jpeg",
                    "images/videocall2.jpeg",
                    "images/videocall3.jpeg"
                ],

                captions: [
                    "Hours that never felt long 📞",
                    "Your face became my favourite notification.",
                    "A little closer, every call ❤️"
                ]

            },


            Mysore: {

                icon: "🏰✨",

                chapter: "CHAPTER III",

                title: "Mysore",

                text:
                    "Another chapter, another place, and another collection of memories that became ours.",

                photos: [
                    "images/aryan1.jpeg",
                    "images/aryan16.jpeg",
                    "images/aryan17.jpeg",
                    "images/aryan4.jpeg",
                    "images/aryan5.jpeg",
                    "images/image1.jpg",
                    "images/image2.jpg",
                    "images/image22.jpeg",
                    "images/image24.jpeg",
                    "images/image25.jpeg",
                    "images/image26.jpeg",
                    "images/image27.jpeg",
                    "images/image28.jpeg",
                    "images/image29.jpeg",
                    "images/image3.jpg",
                    "images/image30.jpeg",
                    "images/image31.jpeg",
                    "images/image32.jpeg",
                    "images/image33.jpeg",
                    "images/image34.jpeg",
                ],

                captions: [
                    "A place became a memory.",
                    "One more adventure together ✨",
                    "Mysore, but make it ours ❤️"
                ]

            },


            Banglore: {

                icon: "🏰",

                chapter: "CHAPTER IV",

                title: "Banglore",

                text:
                    "Some places are special because of where they are. Others become special because of who you were with.",

                photos: [
                    "images/Banglore1.jpeg",
                    "images/Banglore2.jpeg",
                    "images/Banglore3.jpeg"
                ],

                captions: [
                    "Another stop on our Grand Line.",
                    "Another memory with you.",
                    "Another chapter of us ❤️"
                ]

            },


            Mumbai: {

                icon: "🌊",

                chapter: "CHAPTER V",

                title: "Mumbai",

                text:
                    "A city full of lights, chaos and endless stories — and somehow, one of my favourite stories here is ours.",

                photos: [
                    "images/Mumbai1.jpeg",
                    "images/Mumbai2.jpeg",
                    "images/Mumbai3.jpeg"
                ],

                captions: [
                    "Mumbai nights 🌊",
                    "Our little adventure in the city.",
                    "A memory worth keeping forever ❤️"
                ]

            }

        };


        // =====================================================
        // MEMORY DOM ELEMENTS
        // =====================================================

        const memoryModal =
            document.getElementById(
                "memoryModal"
            );


        const closeMemory =
            document.getElementById(
                "closeMemory"
            );


        const memoryIcon =
            document.getElementById(
                "memoryIcon"
            );


        const memoryChapter =
            document.getElementById(
                "memoryChapter"
            );


        const memoryTitle =
            document.getElementById(
                "memoryTitle"
            );


        const memoryText =
            document.getElementById(
                "memoryText"
            );


        const memoryPhoto =
            document.getElementById(
                "memoryPhoto"
            );


        const memoryPhotoCaption =
            document.getElementById(
                "memoryPhotoCaption"
            );


        const memoryPhotoCounter =
            document.getElementById(
                "memoryPhotoCounter"
            );


        const memoryPhotoPrev =
            document.getElementById(
                "memoryPhotoPrev"
            );


        const memoryPhotoNext =
            document.getElementById(
                "memoryPhotoNext"
            );


        let currentMemory = null;

        let currentPhotoIndex = 0;

        let memoryPhotoTimer = null;


        // =====================================================
        // SHOW MEMORY PHOTO
        // =====================================================

        function showMemoryPhoto(index) {

            if (!currentMemory) {
                return;
            }


            const photos =
                currentMemory.photos || [];


            if (!photos.length) {
                return;
            }


            currentPhotoIndex =
                (
                    index +
                    photos.length
                ) %
                photos.length;


            const photo =
                photos[
                    currentPhotoIndex
                ];


            if (memoryPhoto) {

                memoryPhoto.classList.remove(
                    "photo-changing"
                );


                void memoryPhoto.offsetWidth;


                memoryPhoto.classList.add(
                    "photo-changing"
                );


                                memoryPhoto.src =
                    photo;


                memoryPhoto.onload =
                    function () {

                        memoryPhoto.classList.remove(
                            "photo-changing"
                        );

                    };


                memoryPhoto.onerror =
                    function () {

                        memoryPhoto.classList.remove(
                            "photo-changing"
                        );

                        console.warn(
                            "Could not load memory photo:",
                            photo
                        );

                    };

            }


            if (memoryPhotoCaption) {

                const captions =
                    currentMemory.captions ||
                    [];


                memoryPhotoCaption.textContent =
                    captions[
                        currentPhotoIndex
                    ] || "";

            }


            if (memoryPhotoCounter) {

                memoryPhotoCounter.textContent =
                    `${currentPhotoIndex + 1} / ${photos.length}`;

            }


            if (memoryPhotoPrev) {

                memoryPhotoPrev.style.display =
                    photos.length > 1
                        ? "flex"
                        : "none";

            }


            if (memoryPhotoNext) {

                memoryPhotoNext.style.display =
                    photos.length > 1
                        ? "flex"
                        : "none";

            }

        }


        // =====================================================
        // AUTOMATIC MEMORY SLIDESHOW
        // =====================================================

        function startMemoryPhotoSlideshow() {

            clearInterval(
                memoryPhotoTimer
            );


            if (!currentMemory) {
                return;
            }


            if (
                !currentMemory.photos ||
                currentMemory.photos.length <= 1
            ) {
                return;
            }


            memoryPhotoTimer =
                setInterval(
                    () => {

                        showMemoryPhoto(
                            currentPhotoIndex + 1
                        );

                    },
                    5000
                );

        }


        // =====================================================
        // OPEN MEMORY
        // =====================================================

        function openMemory(memoryKey) {

            const memory =
                memories[memoryKey];


            if (
                !memory ||
                !memoryModal
            ) {
                return;
            }


            currentMemory =
                memory;


            currentPhotoIndex =
                0;


            if (memoryIcon) {

                memoryIcon.textContent =
                    memory.icon;

            }


            if (memoryChapter) {

                memoryChapter.textContent =
                    memory.chapter;

            }


            if (memoryTitle) {

                memoryTitle.textContent =
                    memory.title;

            }


            if (memoryText) {

                memoryText.textContent =
                    memory.text;

            }


            showMemoryPhoto(0);


            memoryModal.style.display =
                "flex";


            memoryModal.classList.add(
                "active"
            );


            document.body.classList.add(
                "memory-open"
            );


            startMemoryPhotoSlideshow();

        }


        // =====================================================
        // CLOSE MEMORY
        // =====================================================

        function closeMemoryModal() {

            clearInterval(
                memoryPhotoTimer
            );


            memoryPhotoTimer =
                null;


            currentMemory =
                null;


            currentPhotoIndex =
                0;


            if (!memoryModal) {
                return;
            }


            memoryModal.classList.remove(
                "active"
            );


            memoryModal.style.display =
                "none";


            document.body.classList.remove(
                "memory-open"
            );

        }


        // =====================================================
        // MEMORY ISLAND CLICK
        // =====================================================

        document
            .querySelectorAll(
                ".memory-island"
            )
            .forEach(
                island => {

                    island.addEventListener(
                        "click",
                        event => {

                            event.preventDefault();
                            event.stopPropagation();


                            const memoryKey =
                                island.dataset.memory;


                            openMemory(
                                memoryKey
                            );

                        }
                    );

                }
            );


        // =====================================================
        // CLOSE MEMORY BUTTON
        // =====================================================

        if (closeMemory) {

            closeMemory.addEventListener(
                "click",
                event => {

                    event.preventDefault();
                    event.stopPropagation();


                    closeMemoryModal();

                }
            );

        }


        // =====================================================
        // NEXT MEMORY PHOTO
        // =====================================================

        if (memoryPhotoNext) {

            memoryPhotoNext.addEventListener(
                "click",
                event => {

                    event.preventDefault();
                    event.stopPropagation();


                    if (!currentMemory) {
                        return;
                    }


                    showMemoryPhoto(
                        currentPhotoIndex + 1
                    );


                    startMemoryPhotoSlideshow();

                }
            );

        }


        // =====================================================
        // PREVIOUS MEMORY PHOTO
        // =====================================================

        if (memoryPhotoPrev) {

            memoryPhotoPrev.addEventListener(
                "click",
                event => {

                    event.preventDefault();
                    event.stopPropagation();


                    if (!currentMemory) {
                        return;
                    }


                    showMemoryPhoto(
                        currentPhotoIndex - 1
                    );


                    startMemoryPhotoSlideshow();

                }
            );

        }


        // =====================================================
        // CLICK OUTSIDE MEMORY MODAL
        // =====================================================

        if (memoryModal) {

            memoryModal.addEventListener(
                "click",
                event => {

                    if (
                        event.target ===
                        memoryModal
                    ) {

                        closeMemoryModal();

                    }

                }
            );

        }


        // =====================================================
        // TREASURE CHEST
        // =====================================================

        const treasureChest =
            document.getElementById(
                "treasureChest"
            );


        const treasureMessage =
            document.getElementById(
                "treasureMessage"
            );


        const closeTreasure =
            document.getElementById(
                "closeTreasure"
            );


        if (treasureChest) {

            treasureChest.addEventListener(
                "click",
                () => {

                    treasureChest.style.transform =
                        "scale(0.9) rotate(-4deg)";


                    setTimeout(
                        () => {

                            if (
                                treasureMessage
                            ) {

                                treasureMessage.classList.add(
                                    "active",
                                    "open"
                                );

                            }


                            treasureChest.style.transform =
                                "";

                        },
                        350
                    );

                }
            );

        }


        if (closeTreasure) {

            closeTreasure.addEventListener(
                "click",
                () => {

                    if (
                        treasureMessage
                    ) {

                        treasureMessage.classList.remove(
                            "active",
                            "open"
                        );

                    }

                }
            );

        }


        // =====================================================
        // ESCAPE KEY
        // =====================================================

        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key !==
                    "Escape"
                ) {
                    return;
                }


                // -----------------------------------------
                // MEMORY POPUP
                // -----------------------------------------

                if (
                    memoryModal &&
                    memoryModal.classList.contains(
                        "active"
                    )
                ) {

                    closeMemoryModal();

                    return;

                }


                // -----------------------------------------
                // TREASURE POPUP
                // -----------------------------------------

                if (
                    treasureMessage &&
                    (
                        treasureMessage.classList.contains(
                            "active"
                        ) ||
                        treasureMessage.classList.contains(
                            "open"
                        )
                    )
                ) {

                    treasureMessage.classList.remove(
                        "active",
                        "open"
                    );

                    return;

                }


                // -----------------------------------------
                // LEAVE GRAND LINE
                // -----------------------------------------

                if (
                    onePiecePage &&
                    onePiecePage.style.display !==
                        "none"
                ) {

                    if (backButton) {

                        backButton.click();

                    }

                }

            }
        );


        // =====================================================
        // STOP ONE PIECE MUSIC BEFORE PAGE UNLOAD
        // =====================================================

        window.addEventListener(
            "beforeunload",
            () => {

                if (onePieceMusic) {

                    onePieceMusic.pause();

                }

            }
        );

    }
);
