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
/*==========================================
    Wrong Emoji
==========================================*/

function wrong(box){

    if(navigator.vibrate){

        navigator.vibrate(80);

    }

    box.style.background="#FFD6D6";

    box.style.transform="scale(.90)";

    box.style.animation="shake .3s";

    setTimeout(()=>{

        box.style.background="";

        box.style.transform="";

        box.style.animation="";

    },300);

}

/*==========================================
    Unlock Secret
==========================================*/

function unlock(){

    text.innerHTML="❤️ Access Granted";

    grid.innerHTML="";

    const success=document.createElement("div");

    success.innerHTML="🎉";

    success.style.fontSize="60px";

    success.style.marginTop="15px";

    grid.appendChild(success);

    if(navigator.vibrate){

        navigator.vibrate([120,80,120]);

    }

    setTimeout(()=>{

        window.location.href="pages/secret.html";

    },1500);

}

/*==========================================
    Close Popup
==========================================*/

popup.addEventListener("click",(e)=>{

    if(e.target===popup){

        popup.classList.add("hidden");

        grid.innerHTML="";

        text.innerHTML="🤭 Find the little troublemaker...";

    }

});

/*==========================================
    ESC Key Support
==========================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        popup.classList.add("hidden");

    }

});

/*==========================================
    End
==========================================*/

});
