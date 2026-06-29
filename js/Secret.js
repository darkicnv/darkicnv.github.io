/*=========================================
    Secret Lock
    For Mou ❤️
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const heart = document.getElementById("secretHeart");
    const popup = document.getElementById("emojiLock");
    const grid = document.getElementById("emojiGrid");

    if (!heart || !popup || !grid) return;

    const emojis = [
        "🐼","🌸","🧸","🎀","💖","✨",
        "🍓","🌷","🐱","🫶","🐻","🎈"
    ];

    function shuffle(array){

        for(let i=array.length-1;i>0;i--){

            const j=Math.floor(Math.random()*(i+1));

            [array[i],array[j]]=[array[j],array[i]];

        }

        return array;

    }

    heart.addEventListener("click", () => {

        popup.classList.remove("hidden");

        grid.innerHTML = "";

        const list = [];

        while(list.length < 4){

            const emoji =
                emojis[Math.floor(Math.random()*emojis.length)];

            if(!list.includes(emoji)){

                list.push(emoji);

            }

        }

        list.push("🪳");

        shuffle(list);

        list.forEach((emoji)=>{

            const div=document.createElement("div");

            div.className="emoji";

            div.textContent=
