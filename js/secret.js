/*==========================================
    Secret Lock - Part 1
==========================================*/

document.addEventListener("DOMContentLoaded",()=>{

const heart=document.getElementById("secretHeart");

const popup=document.getElementById("emojiLock");

if(!heart){

    console.error("❌ #secretHeart not found");

    return;

}

if(!popup){

    console.error("❌ #emojiLock not found");

    return;

}

console.log("✅ Secret system loaded");

heart.addEventListener("click",()=>{

    popup.classList.remove("hidden");

});

});
/*==========================================
    Secret Lock - Part 2
==========================================*/

document.addEventListener("DOMContentLoaded",()=>{

const heart=document.getElementById("secretHeart");
const popup=document.getElementById("emojiLock");
const text=document.getElementById("lockText");
const grid=document.getElementById("emojiGrid");

if(!heart || !popup || !text || !grid){

    console.error("Secret elements missing");

    return;

}

heart.addEventListener("click",()=>{

    popup.classList.remove("hidden");

    grid.innerHTML="";

    text.innerHTML="Scanning... 0%";

    let progress=0;

    const scan=setInterval(()=>{

        progress+=10;

        text.innerHTML="Scanning... "+progress+"%";

        if(progress>=100){

            clearInterval(scan);

            text.innerHTML="🤭 Find the little troublemaker...";

            // Part 3 will generate the emojis here.

        }

    },120);

});

/* Close popup when tapping outside */

popup.addEventListener("click",(e)=>{

    if(e.target===popup){

        popup.classList.add("hidden");

    }

});

});

/*==========================================
    Secret Lock - Part 3
==========================================*/

document.addEventListener("DOMContentLoaded",()=>{

const heart=document.getElementById("secretHeart");
const popup=document.getElementById("emojiLock");
const text=document.getElementById("lockText");
const grid=document.getElementById("emojiGrid");

const emojis=[

"🐼",
"🌸",
"🧸",
"💖",
"🎀",
"🐱",
"🐻",
"🌷",
"🍓",
"🫶",
"✨"

];

if(!heart || !popup || !text || !grid){

    console.error("Secret elements missing");

    return;

}

heart.addEventListener("click",()=>{

    popup.classList.remove("hidden");

    grid.innerHTML="";

    text.innerHTML="Scanning... 0%";

    let progress=0;

    const scan=setInterval(()=>{

        progress+=10;

        text.innerHTML="Scanning... "+progress+"%";

        if(progress>=100){

            clearInterval(scan);

            text.innerHTML="🤭 Find the little troublemaker...";

            showEmojis();

        }

    },120);

});

function showEmojis(){

    grid.innerHTML="";

    let list=[];

    while(list.length<5){

        const e=emojis[Math.floor(Math.random()*emojis.length)];

        if(!list.includes(e)){

            list.push(e);

        }

    }

    list.push("🪳");

    list.sort(()=>Math.random()-0.5);

    list.forEach(item=>{

        const box=document.createElement("div");

        box.className="emoji";

        box.innerHTML=item;

        box.onclick=()=>{

            if(item==="🪳"){

                unlock();

            }else{

                wrong(box);

            }

        };

        grid.appendChild(box);

    });

}

function wrong(box){

    if(navigator.vibrate){

        navigator.vibrate(80);

    }

    box.style.background="#FFD6D6";

    box.style.transform="scale(.9)";

    setTimeout(()=>{

        box.style.background="";

        box.style.transform="";

    },250);

}

function unlock(){

    text.innerHTML="❤️ Access Granted";

    grid.innerHTML="";

    setTimeout(()=>{

        window.location.href="pages/secret.html";

    },1200);

}

popup.addEventListener("click",(e)=>{

    if(e.target===popup){

        popup.classList.add("hidden");

    }

});

});
