/*==================================================
    FOR MOU ❤️
    app.js v2.0
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

"use strict";

/*==========================================
    Selectors
==========================================*/

const $=(e)=>document.querySelector(e);

const $$=(e)=>document.querySelectorAll(e);

/*==========================================
    Helpers
==========================================*/

function vibrate(time=50){

    if(navigator.vibrate){

        navigator.vibrate(time);

    }

}

function random(min,max){

    return Math.random()*(max-min)+min;

}

/*==========================================
    Floating Hearts
==========================================*/

const heartContainer=$(".hearts");

const heartIcons=[

"❤️",

"💖",

"💕",

"🌸",

"✨"

];

function createHeart(){

    if(!heartContainer) return;

    if(heartContainer.children.length>8) return;

    const heart=document.createElement("span");

    heart.className="heart";

    heart.innerHTML=

    heartIcons[Math.floor(Math.random()*heartIcons.length)];

    heart.style.left=random(5,95)+"vw";

    heart.style.fontSize=random(18,28)+"px";

    heart.style.animationDuration=

    random(6,9)+"s";

    heartContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,1000);

/*==========================================
    Sparkles
==========================================*/

const sparkleContainer=$(".sparkles");

if(sparkleContainer){

    for(let i=0;i<18;i++){

        const star=document.createElement("span");

        star.className="spark
            /*==========================================
    Loading Screen
==========================================*/

const progressFill=$(".progress-fill");

const progressText=$(".progress-percent");

const loadingStatus=$(".loading-status");

if(progressFill && progressText){

    const messages=[

        "Preparing something special...",

        "Collecting hugs... 🫂",

        "Picking flowers... 🌸",

        "Writing your letter... 💌",

        "Wrapping your surprise... 🎁",

        "Ready, Mou ❤️"

    ];

    let percent=0;

    const loader=setInterval(()=>{

        percent++;

        progressFill.style.width=percent+"%";

        progressText.innerHTML=percent+"%";

        if(percent<20){

            loadingStatus.innerHTML=messages[0];

        }

        else if(percent<40){

            loadingStatus.innerHTML=messages[1];

        }

        else if(percent<60){

            loadingStatus.innerHTML=messages[2];

        }

        else if(percent<80){

            loadingStatus.innerHTML=messages[3];

        }

        else if(percent<100){

            loadingStatus.innerHTML=messages[4];

        }

        else{

            loadingStatus.innerHTML=messages[5];

            clearInterval(loader);

            setTimeout(()=>{

                window.location.href="welcome.html";

            },900);

        }

    },45);

}

/*==========================================
    Music Player
==========================================*/

const song=$("#song");

const playBtn=$("#playBtn");

const record=$("#record");

function playSong(){

    if(!song) return;

    song.play();

    if(record){

        record.classList.add("playing");

    }

    if(playBtn){

        playBtn.innerHTML="⏸ Pause";

    }

}

function pauseSong(){

    if(!song) return;

    song.pause();

    if(record){

        record.classList.remove("playing");

    }

    if(playBtn){

        playBtn.innerHTML="▶ Play Our Song";

    }

}

if(playBtn){

    playBtn.addEventListener("click",()=>{

        song.paused ?

        playSong()

        :

        pauseSong();

    });

}

if(record){

    record.addEventListener("click",()=>{

        song.paused ?

        playSong()

        :

        pauseSong();

    });

}

if(song){

    song.addEventListener("ended",()=>{

        record.classList.remove("playing");

        if(playBtn){

            playBtn.innerHTML="▶ Play Again";

        }

    });

}

/*==========================================
    Welcome Animation
==========================================*/

const hero=$(".hero-img");

const title=$("h1");

const paragraphs=$$("main p");

const button=$(".start-btn");

if(hero){

    hero.animate([

        {

            opacity:0,

            transform:"translateY(-25px)"

        },

        {

            opacity:1,

            transform:"translateY(0)"

        }

    ],{

        duration:700,

        easing:"ease-out",

        fill:"forwards"

    });

}

if(title){

    title.animate([

        {

            opacity:0,

            transform:"translateY(20px)"

        },

        {

            opacity:1,

            transform:"translateY(0)"

        }

    ],{

        delay:300,

        duration:600,

        fill:"forwards"

    });

}

paragraphs.forEach((p,index)=>{

    p.animate([

        {

            opacity:0,

            transform:"translateY(15px)"

        },

        {

            opacity:1,

            transform:"translateY(0)"

        }

    ],{

        delay:700+(index*180),

        duration:500,

        fill:"forwards"

    });

});

if(button){

    button.animate([

        {

            opacity:0,

            transform:"scale(.9)"

        },

        {

            opacity:1,

            transform:"scale(1)"

        }

    ],{

        delay:1500,

        duration:500,

        fill:"forwards"

    });

}
        /*==========================================
    Hold To Hug
==========================================*/

const hugBtn=$("#hugBtn");
const hugText=$("#hugText");

if(hugBtn){

    let holdTimer=null;

    function completeHug(){

        vibrate([100,80,100]);

        createHeartBurst(25);

        if(hugText){

            hugText.innerHTML="🫂 Hug Delivered Successfully ❤️";

            hugText.classList.remove("hidden");

        }

    }

    function startHold(){

        holdTimer=setTimeout(completeHug,2000);

    }

    function stopHold(){

        clearTimeout(holdTimer);

    }

    hugBtn.addEventListener("mousedown",startHold);
    hugBtn.addEventListener("mouseup",stopHold);
    hugBtn.addEventListener("mouseleave",stopHold);

    hugBtn.addEventListener("touchstart",startHold,{passive:true});
    hugBtn.addEventListener("touchend",stopHold);
    hugBtn.addEventListener("touchcancel",stopHold);

}

/*==========================================
    Heart Burst
==========================================*/

function createHeartBurst(total=20){

    for(let i=0;i<total;i++){

        const heart=document.createElement("span");

        heart.className="heart";

        heart.innerHTML=

        heartIcons[Math.floor(Math.random()*heartIcons.length)];

        heart.style.left=random(15,85)+"vw";

        heart.style.fontSize=random(18,28)+"px";

        heart.style.animationDuration=random(2,4)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },4000);

    }

}

/*==========================================
    Gallery Viewer
==========================================*/

$$(".photo img").forEach(photo=>{

    photo.addEventListener("click",()=>{

        const overlay=document.createElement("div");

        overlay.className="gallery-overlay";

        overlay.innerHTML=

        `<img src="${photo.src}" alt="">`;

        overlay.addEventListener("click",()=>{

            overlay.remove();

        });

        document.body.appendChild(overlay);

    });

});

/*==========================================
    Gift Surprise
==========================================*/

const gift=$("#gift");

if(gift){

    gift.addEventListener("click",()=>{

        createHeartBurst(40);

        vibrate(120);

        gift.style.transform="scale(1.1) rotate(-8deg)";

        setTimeout(()=>{

            gift.style.transform="";

        },300);

    });

}

/
        /*==========================================
    Typewriter
==========================================*/

const typeWriter=$(".typewriter");

if(typeWriter){

    const message=typeWriter.textContent.trim();

    typeWriter.textContent="";

    let i=0;

    function write(){

        if(i<message.length){

            typeWriter.textContent+=message.charAt(i);

            i++;

            setTimeout(write,35);

        }

    }

    write();

}

/*==========================================
    Love Popup Messages
==========================================*/

const loveMessages=[

"🌸 You're my favourite person.",

"❤️ Smile, Bachha.",

"💖 I'm proud of you.",

"🤍 Don't forget to drink water.",

"🌷 You make every day brighter.",

"✨ Thank you for being you."

];

function showLoveMessage(){

    const popup=document.createElement("div");

    popup.className="love-popup";

    popup.innerHTML=

    loveMessages[Math.floor(Math.random()*loveMessages.length)];

    document.body.appendChild(popup);

    setTimeout(()=>{

        popup.classList.add("show");

    },50);

    setTimeout(()=>{

        popup.remove();

    },3500);

}

setInterval(showLoveMessage,45000);

/*==========================================
    Greeting
==========================================*/

const greeting=$("#greeting");

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

/*==========================================
    Restart Button
==========================================*/

const restart=$("#restart");

if(restart){

    restart.addEventListener("click",()=>{

        window.location.href="../welcome.html";

    });

}

/*==========================================
    Button Feedback
==========================================*/

$$("button,.start-btn,.next-btn,.back-btn,.love-btn")

.forEach(btn=>{

    btn.addEventListener("click",()=>{

        vibrate(30);

    });

});

/*==========================================
    Console
==========================================*/

console.log(

"%c❤️ FOR MOU ❤️",

"color:#E91E63;font-size:28px;font-weight:bold;"

);

console.log(

"%cMade with love, smiles and lots of hugs 🌸",

"color:#777;font-size:14px;"

);

});
