/*==================================================
    FOR MOU ❤️
    app.js
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    console.log("❤️ Welcome, Mou!");

    /*==============================
        Helpers
    ==============================*/

    const $=(selector)=>document.querySelector(selector);

    const $$=(selector)=>document.querySelectorAll(selector);

    function vibrate(ms=60){

        if(navigator.vibrate){

            navigator.vibrate(ms);

        }

    }

    /*==============================
        Fade Body
    ==============================*/

    document.body.classList.add("fade");

    /*==============================
        Floating Hearts
    ==============================*/

    const heartContainer=$(".hearts");

    function createHeart(){

        if(!heartContainer) return;

        const heart=document.createElement("span");

        const hearts=[
            "❤️",
            "💖",
            "💕",
            "🌸",
            "✨"
        ];

        heart.className="heart";

        heart.textContent=
        hearts[Math.floor(Math.random()*hearts.length)];

        heart.style.left=
        Math.random()*100+"vw";

        heart.style.fontSize=
        (18+Math.random()*16)+"px";

        heart.style.animationDuration=
        (4+Math.random()*4)+"s";

        heartContainer.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },8000);

    }

    setInterval(createHeart,450);

    /*==============================
        Sparkles
    ==============================*/

    const sparkleContainer=$(".sparkles");

    if(sparkleContainer){

        for(let i=0;i<35;i++){

            const star=document.createElement("span");

            star.className="sparkle";

            star.style.left=
            Math.random()*100+"vw";

            star.style.top=
            Math.random()*100+"vh";

            star.style.animationDelay=
            Math.random()*3+"s";

            sparkleContainer.appendChild(star);

        }

    }

    /*==============================
        Music Button
    ==============================*/

    const music=$("#bgMusic");

    const musicBtn=$("#musicBtn");

    if(music && musicBtn){

        musicBtn.addEventListener("click",()=>{

            if(music.paused){

                music.play();

                musicBtn.innerHTML="🔊";

            }

            else{

                music.pause();

                musicBtn.innerHTML="🎵";

            }

        });

    }
        /*==============================
        Welcome Animation
    ==============================*/

    const hero = $(".hero-img");
    const title = $("h1");
    const paragraphs = $$("main p");
    const startBtn = $(".start-btn");

    if(hero){

        hero.style.opacity="0";
        hero.style.transform="translateY(-30px)";

        setTimeout(()=>{

            hero.style.transition=".8s ease";

            hero.style.opacity="1";
            hero.style.transform="translateY(0)";

        },200);

    }

    if(title){

        title.style.opacity="0";
        title.style.transform="translateY(20px)";

        setTimeout(()=>{

            title.style.transition=".7s ease";

            title.style.opacity="1";
            title.style.transform="translateY(0)";

        },700);

    }

    paragraphs.forEach((p,index)=>{

        p.style.opacity="0";
        p.style.transform="translateY(20px)";

        setTimeout(()=>{

            p.style.transition=".6s ease";

            p.style.opacity="1";
            p.style.transform="translateY(0)";

        },1100+(index*250));

    });

    if(startBtn){

        startBtn.style.opacity="0";
        startBtn.style.transform="scale(.9)";

        setTimeout(()=>{

            startBtn.style.transition=".5s ease";

            startBtn.style.opacity="1";
            startBtn.style.transform="scale(1)";

        },2100);

    }

    /*==============================
        Button Effects
    ==============================*/

    function heartExplosion(count=18){

        for(let i=0;i<count;i++){

            const heart=document.createElement("span");

            heart.className="heart";

            heart.textContent=["❤️","💖","💕","✨"]
            [Math.floor(Math.random()*4)];

            heart.style.left=Math.random()*100+"vw";

            heart.style.fontSize=
            (16+Math.random()*18)+"px";

            heart.style.animationDuration=
            (2+Math.random()*2)+"s";

            document.body.appendChild(heart);

            setTimeout(()=>{

                heart.remove();

            },4000);

        }

    }

    $$("button,.start-btn,.next-btn,.back-btn,.love-btn")

    .forEach(button=>{

        button.addEventListener("click",()=>{

            heartExplosion();

            vibrate(40);

        });

    });

    /*==============================
        Scroll Reveal
    ==============================*/

    const revealItems=$$(
        ".glass-card,.photo,.reason-card,.care-card,.reward"
    );

    if(revealItems.length){

        const observer=new IntersectionObserver(entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.style.opacity="1";

                    entry.target.style.transform="translateY(0)";

                }

            });

        });

        revealItems.forEach(item=>{

            item.style.opacity="0";

            item.style.transform="translateY(35px)";

            observer.observe(item);

        });

    }
        /*==============================
        Hold To Hug
    ==============================*/

    const hugBtn=$("#hugBtn");
    const hugText=$("#hugText");

    if(hugBtn){

        let holdTimer;

        function deliverHug(){

            heartExplosion(35);

            vibrate([100,80,100]);

            if(hugText){

                hugText.classList.remove("hidden");

                hugText.innerHTML=
                "🫂 Hug Delivered Successfully ❤️";

            }

        }

        function startHold(){

            holdTimer=setTimeout(deliverHug,2000);

        }

        function stopHold(){

            clearTimeout(holdTimer);

        }

        hugBtn.addEventListener("touchstart",startHold);

        hugBtn.addEventListener("touchend",stopHold);

        hugBtn.addEventListener("touchcancel",stopHold);

        hugBtn.addEventListener("mousedown",startHold);

        hugBtn.addEventListener("mouseup",stopHold);

        hugBtn.addEventListener("mouseleave",stopHold);

    }

    /*==============================
        Gallery Viewer
    ==============================*/

    $$(".photo img").forEach(image=>{

        image.addEventListener("click",()=>{

            const overlay=document.createElement("div");

            overlay.className="gallery-overlay";

            const preview=document.createElement("img");

            preview.src=image.src;

            preview.alt=image.alt;

            overlay.appendChild(preview);

            overlay.addEventListener("click",()=>{

                overlay.remove();

            });

            document.body.appendChild(overlay);

        });

    });

    /*==============================
        Music Record
    ==============================*/

    const song=$("#song");
    const playBtn=$("#playBtn");
    const record=$(".record");

    if(song && playBtn){

        playBtn.addEventListener("click",()=>{

            if(song.paused){

                song.play();

                playBtn.innerHTML="⏸ Pause";

                if(record){

                    record.classList.add("playing");

                }

            }

            else{

                song.pause();

                playBtn.innerHTML="▶ Play";

                if(record){

                    record.classList.remove("playing");

                }

            }

        });

    }

    /*==============================
        Typewriter
    ==============================*/

    const typewriter=$(".typewriter");

    if(typewriter){

        const text=typewriter.textContent;

        typewriter.textContent="";

        let index=0;

        function typing(){

            if(index<text.length){

                typewriter.textContent+=text.charAt(index);

                index++;

                setTimeout(typing,35);

            }

        }

        typing();

    }

    /*==============================
        Greeting
    ==============================*/

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

    /*==============================
        Restart Button
    ==============================*/

    const restart=$("#restart");

    if(restart){

        restart.addEventListener("click",()=>{

            window.location.href="../welcome.html";

        });

                }
    /*==============================
        Floating Love Messages
    ==============================*/

    const messages=[

        "You're amazing 🌸",

        "Smile, Bachha ❤️",

        "I'm proud of you 💖",

        "Drink some water 💧",

        "Never forget how special you are ✨",

        "You make my world brighter ☀️",

        "You deserve every happiness 🤍"

    ];

    function showLoveMessage(){

        const popup=document.createElement("div");

        popup.className="love-popup";

        popup.textContent=

        messages[Math.floor(Math.random()*messages.length)];

        document.body.appendChild(popup);

        setTimeout(()=>{

            popup.classList.add("show");

        },100);

        setTimeout(()=>{

            popup.remove();

        },4000);

    }

    setInterval(showLoveMessage,30000);

    /*==============================
        Console Message
    ==============================*/

    console.log(

        "%c❤️ FOR MOU ❤️",

        "font-size:28px;color:#E91E63;font-weight:bold;"

    );

    console.log(

        "%cMade with lots of love 🌸",

        "font-size:16px;color:#666;"

    );

});
