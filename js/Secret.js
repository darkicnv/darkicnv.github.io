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
            div.addEventListener("click",()=>{

                if(emoji==="🪳"){

                    div.style.transform="scale(1.3)";

                    div.style.background="#d4ffd4";

                    popup.querySelector("h2").textContent="✨ Access Granted ❤️";

                    popup.querySelector("p").textContent="Opening your secret page...";

                    if(navigator.vibrate){

                        navigator.vibrate([100,80,100]);

                    }

                    setTimeout(()=>{

                        window.location.href="pages/secret.html";

                    },1500);

                }

                else{

                    if(navigator.vibrate){

                        navigator.vibrate(60);

                    }

                    div.animate([

                        {transform:"translateX(0)"},
                        {transform:"translateX(-8px)"},
                        {transform:"translateX(8px)"},
                        {transform:"translateX(-8px)"},
                        {transform:"translateX(0)"}

                    ],{

                        duration:300

                    });

                    div.style.opacity=".35";

                    div.style.pointerEvents="none";

                }

            });

            grid.appendChild(div);

        });

    });

    /* Close popup when tapping outside */

    popup.addEventListener("click",(e)=>{

        if(e.target===popup){

            popup.classList.add("hidden");

        }

    });

});
