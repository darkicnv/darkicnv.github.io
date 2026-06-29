/*==================================================
    FOR MOU ❤️
    secret.js
==================================================*/
console.log("secret.js loaded");
document.addEventListener("DOMContentLoaded",()=>{

    const heart=document.getElementById("secretHeart");

    const popup=document.getElementById("emojiLock");

    const grid=document.getElementById("emojiGrid");

    const title=popup.querySelector("h2");

    const text=popup.querySelector("p");

    if(!heart || !popup || !grid){

        return;

    }

    const emojis=[

        "🐼",

        "🌸",

        "🧸",

        "💖",

        "🎀",

        "🐱",

        "✨",

        "🌷",

        "🍓",

        "🫶",

        "🐻",

        "🎁"

    ];

    function shuffle(array){

        for(let i=array.length-1;i>0;i--){

            const j=Math.floor(Math.random()*(i+1));

            [array[i],array[j]]=[array[j],array[i]];

        }

        return array;

    }

    function vibrate(ms=60){

        if(navigator.vibrate){

            navigator.vibrate(ms);

        }

    }

    heart.addEventListener("click",()=>{

        popup.classList.remove("hidden");

        grid.innerHTML="";

        title.innerHTML="🔒 Secret Lock";

        text.innerHTML="Scanning...";

        let progress=0;

        const scan=setInterval(()=>{

            progress+=10;

            text.innerHTML=

            "Scanning... "+progress+"%";

            if(progress>=100){

                clearInterval(scan);

                showEmojis();

            }

        },120);

    });
        function showEmojis(){

        title.innerHTML="✨ Find the Odd Emoji";

        text.innerHTML="One of these doesn't belong... 🤭";

        grid.innerHTML="";

        let selected=[];

        while(selected.length<5){

            let emoji=

            emojis[Math.floor(Math.random()*emojis.length)];

            if(!selected.includes(emoji)){

                selected.push(emoji);

            }

        }

        selected.push("🪳");

        shuffle(selected);

        selected.forEach((emoji,index)=>{

            const item=document.createElement("div");

            item.className="emoji";

            item.style.opacity="0";

            item.style.transform="scale(.3)";

            item.textContent=emoji;

            setTimeout(()=>{

                item.style.transition=".35s ease";

                item.style.opacity="1";

                item.style.transform="scale(1)";

            },index*120);

            item.addEventListener("click",()=>{

                if(emoji==="🪳"){

                    unlockSecret();

                }

                else{

                    wrongEmoji(item);

                }

            });

            grid.appendChild(item);

        });

    }

    function wrongEmoji(item){

        vibrate(60);

        item.animate([

            {transform:"translateX(0)"},
            {transform:"translateX(-8px)"},
            {transform:"translateX(8px)"},
            {transform:"translateX(-8px)"},
            {transform:"translateX(0)"}

        ],{

            duration:300

        });

        item.style.opacity=".35";

        item.style.pointerEvents="none";

    }

    function unlockSecret(){

        vibrate([100,80,100]);

        title.innerHTML="❤️ Access Granted";

        text.innerHTML="Opening your secret world...";

        grid.innerHTML="";

        createHearts();

        setTimeout(()=>{

            window.location.href="pages/secret.html";

        },1800);

    }

    function createHearts(){

        for(let i=0;i<40;i++){

            const heart=document.createElement("span");

            heart.innerHTML="❤️";

            heart.className="heart";

            heart.style.left=Math.random()*100+"vw";

            heart.style.fontSize=(18+Math.random()*18)+"px";

            heart.style.animationDuration=(2+Math.random()*2)+"s";

            document.body.appendChild(heart);

            setTimeout(()=>{

                heart.remove();

            },4000);

        }

                              }
        /*==============================
        Close Popup
    ==============================*/

    popup.addEventListener("click",(e)=>{

        if(e.target===popup){

            popup.classList.add("hidden");

            grid.innerHTML="";

        }

    });

    /*==============================
        ESC Key Support
    ==============================*/

    document.addEventListener("keydown",(e)=>{

        if(e.key==="Escape"){

            popup.classList.add("hidden");

            grid.innerHTML="";

        }

    });

    /*==============================
        Tiny Heart Animation
    ==============================*/

    setInterval(()=>{

        heart.animate([

            {
                transform:"scale(1)",
                opacity:.08
            },

            {
                transform:"scale(1.25)",
                opacity:.35
            },

            {
                transform:"scale(1)",
                opacity:.08
            }

        ],{

            duration:1800,

            easing:"ease-in-out"

        });

    },4000);

    /*==============================
        Console Message
    ==============================*/

    console.log(

        "%c🔒 Secret Module Loaded",

        "color:#E91E63;font-size:16px;font-weight:bold;"

    );

});    /*==============================
        Close Popup
    ==============================*/

    popup.addEventListener("click",(e)=>{

        if(e.target===popup){

            popup.classList.add("hidden");

            grid.innerHTML="";

        }

    });

    /*==============================
        ESC Key Support
    ==============================*/

    document.addEventListener("keydown",(e)=>{

        if(e.key==="Escape"){

            popup.classList.add("hidden");

            grid.innerHTML="";

        }

    });

    /*==============================
        Tiny Heart Animation
    ==============================*/

    setInterval(()=>{

        heart.animate([

            {
                transform:"scale(1)",
                opacity:.08
            },

            {
                transform:"scale(1.25)",
                opacity:.35
            },

            {
                transform:"scale(1)",
                opacity:.08
            }

        ],{

            duration:1800,

            easing:"ease-in-out"

        });

    },4000);

    /*==============================
        Console Message
    ==============================*/

    console.log(

        "%c🔒 Secret Module Loaded",

        "color:#E91E63;font-size:16px;font-weight:bold;"

    );

});
