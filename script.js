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
// LETTER CONTENT DATA
// ============================

const mainLetters = [

    {
        id: "letter1",
        emoji: "❤️",
        title: "The Beginning ❤️",
        date: "23-07-2026",
        body: `
            <p>My dearest Aryan,</p>
            <p>If you're reading this, you've officially opened the very first
            letter in a collection that means more to me than words can explain.</p>
            <p>I wanted to create something that would last.
            Something that you could return to years from now and still feel
            the same warmth.</p>
            <p>This website isn't just made of HTML, CSS and JavaScript.
            It's made from memories, dreams, hope, and every little piece
            of my heart that I wanted to leave with you.
            I still remember meeting you for the first time in CODM, hearing your voice for the first time , first call , first meet up.
            There are 7 billion people in this world and still I found you in this lifetime. I have kissed you, held you and call me human but I wanna live it all with you.
            I don't know what the future gonna be.
            I don't care what it holds.
            All I  care about is I have held you, known you, loved you and thats my lifetime.</p>
            <p>Thank you for existing.
            Thank you for loving me.
            Thank you for becoming one of the most beautiful chapters of my life.</p>
            <p>This is only the first letter.
            There are many more waiting for you.</p>
            <p>Love you always,<br>Ankita ❤️</p>
        `
    },

    {
        id: "letter2",
        emoji: "😊",
        title: "These days 😊",
        date: "28-07-2026",
        body: `
            <p>My dearest Aryan,</p>
            <p>Let roll back time a little for this one. My parents are one big joke. Education and career wise
            okay my life has been good there. Love life has been a roller coaster always. I have always been
            this big sucker for love. I always wanted someone who could see me and hold me when I was broke. But lately I
            realised it's wrong of me to totally depend on my partner to make it all okay for me. I mean come on we all have
            our stories and struggle so yes me putting all my trauma out in open and asking it to be solved thats too much to ask for.</p>
            <p>Back few days I was so low. I mean I wanted answers to questions like why I was given such set of parents
            who didn't care. Why was I given this scenario where I had to be so much away from you. Who do I complain to
            about my life so that maybe I can feel a little better? People just expect out right,left,front and center from me to
            behave and magically bring out the cat out the bag but do they see that Ankita, man Ankita, is so deep in shit
            yet her smile never fades. I am mature and calm with all of my life at this point because I know those are the
            only parameter I can control that would give me a little breatheable space. If it was for me I would have never
            choosen this misery. I feel like running away sometimes from all of this but I know that too wouldn't solve it.
            I thought of whining out it all to you but at this point but I have become so self aware that I know I can't let you
            get burden with these things because your shoulders are having a little space. Our relationship shouldn't handle this
            shit because it is all insignificant. Uh god I wanna just sit and cry my heart out till I feel no emotion sometimes.
            I mean sometimes I feel so helpless within me that "Dam what more do I do so that the heavens could see that this person
            needs a little rest who do I talk to all about that I wanna be a stupid 25 year who does stupid stuff and take pride in it
            hihi being mature and responsible sucksssssss". I was partially also mad at you that can't you see that I need you the most
            at this point, my mind constantly kept asking me ' You sure it is this guy he isn't even here'. I was soooo soo sad. I wanted
            so much more then love at that point . I mean I wanted a space to let out my heart, to be heard , to be be held , to feel that
            its okay to feel all of this. In this chaos I was so blinded by the worldly things that I forgot that I had held you and kissed you
            and that peace was right there in front of me.</p>
            <p>It became so chaotic then all of sudden I realised that I am pinpointing it all to me. I mean about my parents it's there behaviour
            that has caused all of this mess not me. My job as well I am not the one to be blamed as it was the other things. About us as well you
            are already doing so much more then you can hihi you are also a 24 year old and you also have a life and family. I am so sad because of
            my own expectations. I expect because I know I would have helped the other person if I ever had friend who was going through what I am going through.
            I am bleeding myself over my own mind games. I know I had this dream that I would be all settled and happy by 25, have a great happy family, a guy
            that would I want to marry and all of it but its okay life happens and I can't punish myself over my own expectations. I have bleed a lot and I don't want
            myself to bleed more over the ghost of the past and future.</p>
            <p>I wanna be living in this present where I have you. I know it's all so risky, that what if all of this still fails and what not but it would still be okay
            because in this entire arc I still have held you and felt that its gonna be all okay. I know my life is mess but I also know, nobody but only me has the capacity
            to live this all and nobody can fix this for me till I myself from within get up wear the armour and go out on my wars. The world has ruined love with shitty ass
            expectations that the guy is always gonna come in the white horse and save the girl from the bad guy but lets change that and be a team who knocks the bad guys togethere.
            Also I realised in situations like these we can easily be blinded by the sadness and think that the other person is not doing enough to get through this. But love isn't about
            the other person solving your problems for you hihi if it was psychologist would never be divorced but no hihi they are also going to same shit. So what it is really about it is:
            You gonna go through this life with all dark and whites but in all of this I am gonna be your constant point. A point that always gonna remind you of, that none of this matter and
            all of this would pass with time whats gonna stay is this fraction where our heart where right next to each other beating in peace and rythm, this second were I was one with you. Hihi
            I can take all of this misery right now because I know at the end when I close my eyes our memories are the only thing that I would play on repeat and relive all of those.</p>
            <p>I didn't said any of this out front because I was scared that I would lose you but I am not afraid anymore. Our love makes me fierce and I have faith that no matter how bitter times
            gonna be we would still be in it together. I am gonna live my all and not think about who should I talk to make it all okay. Following the Nike motto , 'Just do it!'. So this
            entire arc has been lately happening with me these days. I hope you are okay and health and all smiling and dreaming about us these days.</p>
            <p>Love you always,<br>Ankita Pi Pikaaa❤️</p>
        `
    },

    {
        id: "letter3",
        emoji: "💜",
        title: "You",
        date: "31-07-2026",
        body: `
            <p>I still remember the first time I met you at the airport. You had this very handsome smile on your face. I didn't had any expectations from you to be honest.
            As I was in my own world the least I expected was for you to not give me hope. But to my surprise you never said unrealistic things to win my heart over like
            other stupid guys. I have had "I love you's" and what not. But this was something different.</p>
            <p>You always held my hand when I wanted you to. You said things which you wanted and my heart needed. It was never fake but so real.I never asked you
            for things because I was so disappointed in the world but you held me. I never expected us to be an us because seeing you I could see that you had
            your MBBS, family and all of your life and I never thought I would fit in. So I geuinely felt ki Aryan you would move on as soon as I left which is why my heart
            was prepared for worst. But you never left me. You held me because you could feel that Ankita wanted someone who was her home.</p>
            <p>People always have used me, yes I know used is a brutually odd word but it is that. So I was actually prepared for anything but you let it soft and slow. You
            took me in and showed me what you are. Initially you weren't that expressive but then as time passed you started speaking your heart and you weren't afraid to
            hold my hand even when the world said you can't. You never gave me promises to bring me the moon but you made my life a moonland.</p>
            <p>I didn't talk to you after I went back mumbai because I wanted to see if you make any effort. It was a test for our things from my side. I was walking away from you
            . You were walking right behind me. You called me, texted me , took care of me. I wanted to end it all but you wanted to even go against the god to save it. I then
            sat and saw you. You who genuiely wanted me irrespective of all odds and conditions. You weren't afraid to say out your heart and you trusted me with it. I could do
            all of what I did because I always know you are gonna be right beside me. So yes I'd never question you, have faith in you, believe you and always be calling you pandu.
            You are this warm person like the first sunrays which are warm coming out from the window uhhh the breeze that brushes across my cheeks makes me smile. You are all of I wanted
            You are all of I prayed for. And all of your things no matter how normal all of it is important to me okay. Because you are my home and I'll fuck everything if anything was
            to ever happen to you.</p>
            <p>Each day with you no matter even if we are in long distance its so peaceful.I love taking care of you. I love you and I don't care about anything but you just be here.
            Aryan panduuu you are my world kabhi bhi kisi bhi situation never think that what would I think as long as you are happy and want it I'll always be along with you.</p>
            <p>The time when I am with you uhh only 5 days of my life but I remember each second of those 5 days..kissing, loving, fucking.. all of it.All of our memories have had all
            of the shades happy, sad , roller coaster all of it. I am happy that I met you and I wish nothing more or nothing less. Whatever time fraction we will have together all
            of it would be great no matter sad,happy I love you and thats simple and thats breathing.</p>
            <p>Love you always,<br>Ankita ❤️</p>
        `
    },

    {
        id: "letter4",
        emoji: "🔮",
        title: "Future Letter",
        date: "",
        body: `<p>Coming soon</p>`
    }

];


const aryanLetters = [

    {
        id: "aryanLetter1",
        emoji: "♥️",
        title: "2 Cute souls ♥️",
        date: "30-07-2026",
        body: `
            <p>My Cutu ankita,</p>
            <p>Hihi….my first time writing feelings…..thoda nervous ho….dont knw …..where to start…..</p>
            <p>First of all yess<br>I miss u alot….. and I love that feeling of missing actually. And u know jab aapne first time hold kiya tha arm bus mei….
            That was the first time I felt peace.</p>
            <p>I felt something….mere chehre mei automatically smile aagyi …..<br>Hihi u always say ki tu mast smile krta rehta jab dekho jaisi situation hai….</p>
            <p>I wanna say ….its all bcoz of u…<br>I just feel ki yess this is what life to be<br>Haan yahi hai zindagi….yahi chahiye….all perfect…wow heart beat mast chalti…..</p>
            <p>Hihi….<br>Yes I know u…..not being overconfident but yes….I know the peace ur heart wants…(bolege kisi din)<br>Yaha pe love ka topic aata hai….
            <br>Pyaar ….I say love bohat pandu cheez hai….koi logic nahi dekhta…….<br>With u i felt<br>Love can be calm peaceful…..crying is also love….sadness is also love….
            <br>The all rollercoaster of diff emotions is love….choosing each other is love yess….we both choose each other…i say thats the best thing I literally wanna thank you and all the worldy forces which let this happen what we are today…..</p>
            <p>Hihi i dont wanna be emotional….<br>Kyuki u will say now<br>Jaake padai krle 😂 hihi…true…</p>
            <p>"Yes Wanna hug u…. Wanna kiss u…wanna hold u….now now now now….hogya wait this all" - my heart says this every second…..</p>
            <p>Soo yahi end krte chotu sa letter and mera dil ka very tiny fraction…!!</p>
            <p>Love u so much meri ankita<br>Muaah..!!</p>
        `
    },

    {
        id: "aryanLetter2",
        emoji: "♥️",
        title: "Meri Ankita♥️",
        date: "01-08-2026",
        body: `
            <p>Hi Ankita,</p>
            <p>Hihi ek saal se zyada hogya hai hume saath mei ek doosre ko jaante huai…and ek doosre ko samjhte huai…..
            <br>U know… I just talked…replied to ur story…. Nd talked with u without having any thought in my mind…..
            <br>Hihi then we just start talking….. ek doosre ko dheere dheere…dekha smjha…. I wanna say its so natural….something seeing as a third person its really unrealistic ….hihi
            <br>Yes when I see world describing love…..I got so disappointed —-Ki bhai yeh log kar kya rahe hai….
            <br>Then I felt ur heart….bohat shaant dil hai aapka…like u know
            <br>Jaise tanjiro ka soul and calmness jaisa sab…hihi
            <br>When I learned about u….smjhaa apki side se …. Etna asaan nahi hai
            Kisi mei trust krna…etni bekaar duniya hai…haye raam true….
            <br>U know U r a very kind soul….u even wanna help the person even they r not doin justice with the connection…kyuki u understand their situation ….nd they fail to even try to understand ur things…
            <br>Yes…we talked, build the things….nd then u asked do u like me…hihi
            <br>If u really ask i never tried to see u in that way ….after u asked that ques na….
            <br>My feelings got suddenly pumped…..my heart felt like a racing horse…its so so diff feeling….. felt wow
            <br>And I just said yes….hihi….
            <br>First I wanna say arigato for opening up ur heart for me…..
            Which is a very very big thing in this bekar duniya
            <br>But really I wanna know ki how did u decided to open ur heart for me…bcoz its so so tough nd maybe impossible after what u have seen in ur life till now….
            <br>So
            <br>Yes Iv been to practical in the beginning…..bcoz people dont
            Value the feelings the other person sharing
            They just listen and throw it out somewhere……people used my feelings too….world just wanna use the person and they will go when their work is done…
            <br>But With u I opened up naturally…..we both have shared the space….we opened up….the best thing ki we didnt asked or like say ki bola
            "Tell me more abt that or u didnt share abt ur things"
            <br>We both naturally put our feelings to each other…
            I really loved that….
            Loved the pillars we r building in the intial phases of our love….
            <br>Then
            <br>When U said i will come to mysore….i felt so happy
            Im with a big smile all day…going with flow of my heart….
            <br>Srsly bolu mere mei itni himmat nahi thi
            Ki I will goo and meet u in person….
            <br>U have taken the step…thank you….Really…
            <br>I just wanna say wow…..
            <br>Many of the things in this letter u know… i hv said to u….already….
            <br>Wanna say A lot ….i should control myself….hihi otherwise I will write a novel right now😂😂
            <br>I love u alot ankita….And Im very proud of us what we have built ….. one day closer love…. My sweetest cutest and kind hearted soul…. Love and really reallly proud to say
            <br>"Meri ankita" "we are home"
            <br>Bcoz thats the truth….
            Thats our love …
            <br></p>
            <p>Muaah..love u</p>
        `
    },

    {
        id: "aryanLetter3",
        emoji: "♥️",
        title: "Pandi & Pandu ♥️",
        date: "05-08-2026",
        body: `
            <p>Hi Ankita,
            <br>This is ur Aryan….hihi thoda socha likhu……kabhi kabhi I love you se bohat zyada bolne ka mann krta hai…….</p>
            <p>So Yes…..kehne ko toh 5 din mile hai…..what we have spent together in our long distance too…its so so beautiful….
            <br>We learn to live each other a lot….communicating each other thoughts…..listening each other…. Every little moments itne special hai aapke saath…..</p>
            <p>Hihi aapko Good morning bolna daily itself is so special…..
            <br>Voh ek VIDEO CALL ek Voice call ….. The emotions we carry in each word is like explainable nahi hai….</p>
            <p>U know……..
            <br>When u smile laugh…..doo pandu expressions hihi….I love each and everything….. I love to be a cat for u…..love to be a pandu for u…..HIHI…
            <br>WE ARE HOMEE♥️
            <br>Yesss jald hi milege…..one day closerrr toh apna aa hi raha hai…
            <br>Panduuuuu loveeeeeeeeeee uuu alotttttt…….
            <br>Wifuuuuu….
            <br>I love see us growing together in this…..our love our happiness….dono ka pandu pana…..
            <br>Hihi U know today …..first time I felt my kid inside me is alive….
            <br>I thought I lost that kid…..I felt so so happy ankita…..
            <br>And I wanna say
            <br>Hihi Im a good 4 finger claw player🫣😛</p>
            <p>Meri Rasmalai meri Khushi…..
            Love you…
            Countless memories await us♥️</p>
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


        let previousPageBeforeOnePiece =
            null;


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
                    // REMEMBER + HIDE THE PAGE BEHIND US
                    // -----------------------------------------

                    previousPageBeforeOnePiece =
                        (
                            aryanPage &&
                            aryanPage.style.display === "block"
                        )
                            ? aryanPage
                            : lettersPage;


                    if (lettersPage) {

                        lettersPage.style.display =
                            "none";

                    }


                    if (aryanPage) {

                        aryanPage.style.display =
                            "none";

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


                    if (previousPageBeforeOnePiece) {

                        previousPageBeforeOnePiece.style.display =
                            "block";

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
