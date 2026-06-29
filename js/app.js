/*=========================================
    FOR MOU ❤️
    app.js
    Part 1
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    console.log("❤️ Welcome, Mou!");

    /*=================================
        Floating Hearts
    =================================*/

    const heartContainer =
        document.querySelector(".hearts") ||
        document.querySelector(".floating-hearts");

    function createHeart() {

        if (!heartContainer) return;

        const heart = document.createElement("span");

        const emojis = [
            "❤️",
            "💖",
            "💕",
            "🌸",
            "✨"
        ];

        heart.className = "heart";

        heart.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize =
            (18 + Math.random() * 18) + "px";

        heart.style.animationDuration =
            (4 + Math.random() * 4) + "s";

        heartContainer.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 8000);

    }

    setInterval(createHeart, 450);

    /*=================================
        Sparkles
    =================================*/

    const sparkleContainer =
        document.querySelector(".sparkles");

    function createSparkles() {

        if (!sparkleContainer) return;

        for (let i = 0; i < 30; i++) {

            const sparkle = document.createElement("span");

            sparkle.className = "sparkle";

            sparkle.style.left =
                Math.random() * 100 + "vw";

            sparkle.style.top =
                Math.random() * 100 + "vh";

            sparkle.style.animationDelay =
                Math.random() * 3 + "s";

            sparkleContainer.appendChild(sparkle);

        }

    }

    createSparkles();

    /*=================================
        Music Button
    =================================*/

    const music =
        document.getElementById("bgMusic");

    const musicBtn =
        document.getElementById("musicBtn");

    if (music && musicBtn) {

        musicBtn.addEventListener("click", () => {

            if (music.paused) {

                music.play();

                musicBtn.innerHTML = "🔊";

            } else {

                music.pause();

                musicBtn.innerHTML = "🎵";

            }

        });

    }

    /*=================================
        Fade Animation
    =================================*/

    document.body.classList.add("fade");

    /*=================================
        Vibrate Helper
    =================================*/

    window.vibrate = function (ms = 60) {

        if (navigator.vibrate) {

            navigator.vibrate(ms);

        }

    };
/*=================================
        Loading Screen
    =================================*/

    const progressBar = document.getElementById("progressBar");
    const loadingText = document.getElementById("loadingText");
    const percent = document.getElementById("percent");

    if (progressBar) {

        const messages = [

            "Loading a little surprise... 💕",

            "Preparing hugs... 🫂",

            "Collecting hearts... ❤️",

            "Adding cute moments... 🌸",

            "Almost there, Mou... ✨",

            "Welcome, Bachha ❤️"

        ];

        let progress = 0;
        let message = 0;

        const loader = setInterval(() => {

            progress++;

            progressBar.style.width = progress + "%";

            if (percent) {

                percent.textContent = progress + "%";

            }

            if (
                progress % 20 === 0 &&
                loadingText &&
                message < messages.length
            ) {

                loadingText.textContent = messages[message];

                message++;

            }

            if (progress >= 100) {

                clearInterval(loader);

                if (loadingText) {

                    loadingText.textContent =
                        "Opening your little world... ❤️";

                }

                setTimeout(() => {

                    window.location.href = "welcome.html";

                }, 1200);

            }

        }, 40);

    }

    /*=================================
        Heart Explosion
    =================================*/

    function heartExplosion(count = 25) {

        for (let i = 0; i < count; i++) {

            const heart = document.createElement("span");

            heart.className = "heart";

            heart.textContent = "❤️";

            heart.style.left = Math.random() * 100 + "vw";

            heart.style.fontSize =
                (18 + Math.random() * 18) + "px";

            heart.style.animationDuration =
                (2 + Math.random() * 2) + "s";

            document.body.appendChild(heart);

            setTimeout(() => {

                heart.remove();

            }, 4000);

        }

    }

    /*=================================
        Button Effects
    =================================*/

    document.querySelectorAll(

        ".start-btn,.next-btn,.love-btn,.back-btn"

    ).forEach(button => {

        button.addEventListener("click", () => {

            heartExplosion(15);

            vibrate(40);

        });

    });

    /*=================================
        Gift Animation
    =================================*/

    const gift = document.getElementById("gift");

    if (gift) {

        gift.addEventListener("click", () => {

            gift.classList.add("open");

            heartExplosion(30);

            vibrate(120);

        });

    }

    /*=================================
        Scroll Reveal
    =================================*/

    const cards = document.querySelectorAll(

        ".glass-card,.photo,.reason-card,.care-card,.reward"

    );

    if (cards.length > 0) {

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        });

        cards.forEach(card => {

            card.style.opacity = "0";

            card.style.transform =
                "translateY(40px)";

            observer.observe(card);

        });

    }
  /*=================================
        Hold For Hug ❤️
    =================================*/

    const hugBtn = document.getElementById("hugBtn");
    const hugText = document.getElementById("hugText");

    if (hugBtn) {

        let holdTimer = null;

        function sendHug() {

            heartExplosion(40);

            vibrate([100,100,100]);

            if (hugText) {

                hugText.classList.remove("hidden");

                hugText.innerHTML =
                "🫂 Hug Delivered Successfully ❤️";

            }

        }

        function startHold() {

            holdTimer = setTimeout(sendHug, 2000);

        }

        function cancelHold() {

            clearTimeout(holdTimer);

        }

        hugBtn.addEventListener("touchstart", startHold);

        hugBtn.addEventListener("touchend", cancelHold);

        hugBtn.addEventListener("touchcancel", cancelHold);

        hugBtn.addEventListener("mousedown", startHold);

        hugBtn.addEventListener("mouseup", cancelHold);

        hugBtn.addEventListener("mouseleave", cancelHold);

    }

    /*=================================
        Music Record
    =================================*/

    const song = document.getElementById("song");
    const playBtn = document.getElementById("playBtn");
    const record = document.querySelector(".record");

    if (song && playBtn) {

        playBtn.addEventListener("click", () => {

            if (song.paused) {

                song.play();

                playBtn.innerHTML = "⏸ Pause";

                if(record){

                    record.classList.add("playing");

                }

            }

            else{

                song.pause();

                playBtn.innerHTML = "▶ Play";

                if(record){

                    record.classList.remove("playing");

                }

            }

        });

    }

    /*=================================
        Gallery Popup
    =================================*/

    document.querySelectorAll(".photo img")

    .forEach(image => {

        image.addEventListener("click", () => {

            const overlay = document.createElement("div");

            overlay.className = "gallery-overlay";

            const preview = document.createElement("img");

            preview.src = image.src;

            overlay.appendChild(preview);

            overlay.onclick = () => {

                overlay.remove();

            };

            document.body.appendChild(overlay);

        });

    });

    /*=================================
        Typewriter
    =================================*/

    const typewriter = document.querySelector(".typewriter");

    if(typewriter){

        const message = typewriter.innerHTML;

        typewriter.innerHTML="";

        let index=0;

        function typing(){

            if(index < message.length){

                typewriter.innerHTML += message.charAt(index);

                index++;

                setTimeout(typing,35);

            }

        }

        typing();

    }

    /*=================================
        Greeting
    =================================*/

    const greeting=document.getElementById("greeting");

    if(greeting){

        const hour=new Date().getHours();

        if(hour<12){

            greeting.innerHTML="☀️ Good Morning, Mou!";

        }

        else if(hour<18){

            greeting.innerHTML="🌸 Good Afternoon, Mou!";

        }

        else{

            greeting.innerHTML="🌙 Good Evening, Mou!";

        }

    }

    /*=================================
        Restart Button
    =================================*/

    const restart=document.getElementById("restart");

    if(restart){

        restart.addEventListener("click",()=>{

            window.location.href="../welcome.html";

        });

    }
  /*=================================
        Secret Heart Lock
    =================================*/

    const secretHeart = document.getElementById("secretHeart");
    const emojiLock = document.getElementById("emojiLock");
    const emojiGrid = document.getElementById("emojiGrid");

    if(secretHeart && emojiLock && emojiGrid){

        const emojiList = [
            "🐼","🧸","🌸","💖","🐱","🎀",
            "🌷","✨","🍓","🐻","🎁","🫶"
        ];

        secretHeart.addEventListener("click",()=>{

            emojiLock.classList.remove("hidden");

            emojiGrid.innerHTML="";

            let selected=[];

            while(selected.length<4){

                let random =
                emojiList[Math.floor(Math.random()*emojiList.length)];

                if(!selected.includes(random)){

                    selected.push(random);

                }

            }

            selected.push("🪳");

            selected.sort(()=>Math.random()-0.5);

            selected.forEach(emoji=>{

                const item=document.createElement("div");

                item.className="emoji";

                item.innerHTML=emoji;

                item.onclick=()=>{

                    if(emoji==="🪳"){

                        emojiLock.innerHTML=`

                        <div class="lock-box">

                        <h2>✨ Access Granted ❤️</h2>

                        <p>Opening Secret Page...</p>

                        </div>

                        `;

                        heartExplosion(50);

                        vibrate([80,80,80]);

                        setTimeout(()=>{

                            window.location.href="pages/secret.html";

                        },1500);

                    }

                    else{

                        item.style.opacity=".25";

                        item.style.transform="scale(.8)";

                        item.style.pointerEvents="none";

                        vibrate(40);

                    }

                };

                emojiGrid.appendChild(item);

            });

        });

    }

    /*=================================
        Random Love Messages
    =================================*/

    const loveMessages=[

        "You're amazing 🌸",

        "Smile, Bachha ❤️",

        "I'm proud of you 💖",

        "Drink some water 💧",

        "You deserve the world 🌍",

        "You're my favorite notification 📱",

        "Never stop smiling 😊",

        "You matter ❤️"

    ];

    function randomLoveMessage(){

        const popup=document.createElement("div");

        popup.className="love-popup";

        popup.innerHTML=

        loveMessages[Math.floor(Math.random()*loveMessages.length)];

        document.body.appendChild(popup);

        setTimeout(()=>{

            popup.classList.add("show");

        },100);

        setTimeout(()=>{

            popup.remove();

        },4000);

    }

    setInterval(randomLoveMessage,30000);

    /*=================================
        Keyboard Easter Egg
    =================================*/

    let code="";

    document.addEventListener("keydown",(e)=>{

        code+=e.key.toLowerCase();

        if(code.length>10){

            code=code.slice(-10);

        }

        if(code.includes("mou")){

            heartExplosion(60);

            randomLoveMessage();

            code="";

        }

    });

    /*=================================
        Console Message
    =================================*/

    console.log("%c❤️ For Mou ❤️",

    "font-size:28px;color:#ff4d8d;font-weight:bold;");

    console.log(

    "%cIf you found this... you're adorable 🌸",

    "font-size:16px;color:#666;"

    );

});
});
