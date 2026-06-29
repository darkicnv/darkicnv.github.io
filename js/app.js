/*==========================================
  FOR MOU ❤️
  app.js
  Part 1
==========================================*/

// Wait until page loads

document.addEventListener("DOMContentLoaded",()=>{

/*==================================
  Floating Hearts
==================================*/

const heartContainer=document.querySelector(".hearts")||
document.querySelector(".floating-hearts");

if(heartContainer){

setInterval(()=>{

const heart=document.createElement("span");

heart.className="heart";

const hearts=["❤️","💖","💕","🌸","✨"];

heart.innerHTML=hearts[Math.floor(Math.random()*hearts.length)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(16+Math.random()*18)+"px";

heart.style.animationDuration=(4+Math.random()*5)+"s";

heartContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

},450);

}

/*==================================
  Sparkles
==================================*/

const sparkleContainer=document.querySelector(".sparkles");

if(sparkleContainer){

for(let i=0;i<35;i++){

const star=document.createElement("span");

star.className="sparkle";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*3+"s";

sparkleContainer.appendChild(star);

}

}

/*==================================
  Music Button
==================================*/

const music=document.getElementById("bgMusic");

const musicBtn=document.getElementById("musicBtn");

if(music && musicBtn){

musicBtn.onclick=()=>{

if(music.paused){

music.play();

musicBtn.innerHTML="🔊";

}else{

music.pause();

musicBtn.innerHTML="🎵";

}

};

}

/*==================================
  Fade Animation
==================================*/

document.body.classList.add("fade");

/*==================================
  Vibration Helper
==================================*/

window.vibrate=function(ms=80){

if(navigator.vibrate){

navigator.vibrate(ms);

}

};

});
/*==========================================
  app.js
  Part 2
==========================================*/

/*==============================
 Loading Screen
==============================*/

const progressBar=document.getElementById("progressBar");
const percent=document.getElementById("percent");
const loadingText=document.getElementById("loadingText");

if(progressBar){

const messages=[

"Loading a little surprise... 💕",

"Preparing hugs... 🫂",

"Collecting hearts... ❤️",

"Adding cute moments... 🌸",

"Almost there, Mou... ✨",

"Welcome, Bachha ❤️"

];

let progress=0;
let messageIndex=0;

const loader=setInterval(()=>{

progress++;

progressBar.style.width=progress+"%";

if(percent){

percent.innerHTML=progress+"%";

}

if(progress%20===0 && loadingText){

loadingText.innerHTML=messages[messageIndex];

messageIndex++;

}

if(progress>=100){

clearInterval(loader);

if(loadingText){

loadingText.innerHTML="Opening your little world... ❤️";

}

setTimeout(()=>{

window.location.href="welcome.html";

},1500);

}

},50);

}

/*==============================
 Secret Page Unlock
==============================*/

const hero=document.querySelector(".hero-img");

if(hero){

let taps=0;

hero.addEventListener("click",()=>{

taps++;

if(taps>=7){

window.location.href="pages/secret.html";

}

});

}

/*==============================
 Heart Explosion
==============================*/

function heartExplosion(){

for(let i=0;i<25;i++){

const heart=document.createElement("span");

heart.className="heart";

heart.innerHTML=["❤️","💖","💕","✨"][Math.floor(Math.random()*4)];

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(2+Math.random()*2)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},4000);

}

}

/*==============================
 Buttons
==============================*/

document.querySelectorAll(".love-btn,.start-btn,.next-btn")

.forEach(button=>{

button.addEventListener("click",()=>{

heartExplosion();

vibrate(60);

});

});

/*==============================
 Gift Animation
==============================*/

const gift=document.getElementById("gift");

if(gift){

gift.addEventListener("click",()=>{

gift.classList.add("open");

heartExplosion();

});

}

/*==============================
 Scroll Reveal
==============================*/

const reveal=document.querySelectorAll(

".glass-card,.photo,.reason-card,.care-card"

);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

reveal.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

observer.observe(card);

});

/*==========================================
  app.js
  Part 3
==========================================*/

/*==============================
 Typewriter Effect
==============================*/

const typeTarget=document.querySelector(".typewriter");

if(typeTarget){

const text=typeTarget.innerHTML;

typeTarget.innerHTML="";

let i=0;

function type(){

if(i<text.length){

typeTarget.innerHTML+=text.charAt(i);

i++;

setTimeout(type,35);

}

}

type();

}

/*==============================
 Music Record Rotation
==============================*/

const song=document.getElementById("song");
const playBtn=document.getElementById("playBtn");
const record=document.querySelector(".record");

if(song && playBtn){

playBtn.addEventListener("click",()=>{

if(song.paused){

song.play();

playBtn.innerHTML="⏸ Pause";

if(record){

record.classList.add("playing");

}

}else{

song.pause();

playBtn.innerHTML="▶ Play Our Song";

if(record){

record.classList.remove("playing");

}

}

});

}

/*==============================
 Gallery Popup
==============================*/

document.querySelectorAll(".photo img").forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.inset="0";
overlay.style.background="rgba(0,0,0,.85)";
overlay.style.display="flex";
overlay.style.alignItems="center";
overlay.style.justifyContent="center";
overlay.style.zIndex="9999";

const image=document.createElement("img");

image.src=img.src;

image.style.maxWidth="90%";
image.style.maxHeight="85%";
image.style.borderRadius="20px";
image.style.boxShadow="0 20px 50px rgba(0,0,0,.5)";

overlay.appendChild(image);

overlay.onclick=()=>overlay.remove();

document.body.appendChild(overlay);

});

});

/*==============================
 Good Morning / Night
==============================*/

const greeting=document.getElementById("greeting");

if(greeting){

const hour=new Date().getHours();

if(hour<12){

greeting.innerHTML="☀️ Good Morning, Mou!";

}else if(hour<18){

greeting.innerHTML="🌸 Good Afternoon, Mou!";

}else{

greeting.innerHTML="🌙 Good Evening, Mou!";

}

}

/*==============================
 Surprise Popup
==============================*/

setTimeout(()=>{

const popup=document.getElementById("secretPopup");

if(popup){

popup.classList.remove("hidden");

}

},15000);

/*==============================
 Restart Button
==============================*/

const restart=document.getElementById("restart");

if(restart){

restart.onclick=()=>{

window.location.href="../welcome.html";

};

}
const heart=document.getElementById("secretHeart");
const lock=document.getElementById("emojiLock");
const grid=document.getElementById("emojiGrid");

const emojis=[
"🐼","🌸","🎀","💖","🧸","🐱","🌷","✨","🍓","🫶","🐻","🎁"
];

heart.onclick=()=>{

lock.classList.remove("hidden");

grid.innerHTML="";

let selected=[];

while(selected.length<4){

let e=emojis[Math.floor(Math.random()*emojis.length)];

if(!selected.includes(e)){

selected.push(e);

}

}

// Always add cockroach
selected.push("🪳");

// Shuffle
selected.sort(()=>Math.random()-0.5);

selected.forEach(e=>{

let div=document.createElement("div");

div.className="emoji";

div.innerHTML=e;

div.onclick=()=>{

if(e==="🪳"){

lock.innerHTML="<h2>✨ Access Granted ❤️</h2>";

setTimeout(()=>{

location.href="pages/secret.html";

},1200);

}else{

div.style.opacity=".3";

div.style.pointerEvents="none";

}

};

grid.appendChild(div);

});

};
/*==============================
 Console Easter Egg
==============================*/

console.log(

"%c❤️ Hi Mou! ❤️",

"font-size:28px;color:#ff4d8d;font-weight:bold;"

);

console.log(

"%cIf you found this... you're adorable 🌸",

"font-size:16px;color:#666;"

);

/*==================================
 End
==================================*/
