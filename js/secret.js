/*==================================================
    FOR MOU ❤️
    Secret Lock
==================================================*/

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
"🐻",
"🐱",
"🍓",
"🌷",
"✨",
"🫶"
];

if(!heart || !popup || !text || !grid){

    console.error("Secret elements missing.");

    return;

}

heart.addEventListener("click",openLock);

function openLock(){

    popup.classList.remove("hidden");

    grid.innerHTML="";

    text.innerHTML="Scanning... 0%";

    let progress=0;

    const timer=setInterval(()=>{

        progress+=10;

        text.innerHTML="Scanning... "+progress+"%";

        if(progress>=100){

            clearInterval(timer);

            text.innerHTML="🤭 Find the little troublemaker...";

            buildGrid();

        }

    },120);

}
    /*==========================================
    Build Emoji Grid
==========================================*/

function buildGrid(){

    grid.innerHTML="";

    let list=[];

    while(list.length<5){

        const emoji=emojis[Math.floor(Math.random()*emojis.length)];

        if(!list.includes(emoji)){

            list.push(emoji);

        }

    }

    list.push("🪳");

    shuffle(list);

    list.forEach(item=>{

        const box=document.createElement("div");

        box.className="emoji";

        box.textContent=item;

        box.addEventListener("click",()=>{

            if(item==="🪳"){

                unlock();

            }else{

                wrong(box);

            }

        });

        grid.appendChild(box);

    });

}

/*==========================================
    Shuffle Array
==========================================*/

function shuffle(array){

    for(let i=array.length-1;i>0;i--){

        const j=Math.floor(Math.random()*(i+1));

        [array[i],array[j]]=[array[j],array[i]];

    }

    return array;

}
