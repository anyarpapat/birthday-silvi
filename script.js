/* ===================================
STARS GENERATOR
=================================== */

const starsContainer = document.getElementById("stars");

for(let i=0; i<120; i++){

const star = document.createElement("div");

star.classList.add("star");

const size = Math.random() * 3;

star.style.width = size + "px";
star.style.height = size + "px";

star.style.left = Math.random() * 100 + "%";

star.style.top = Math.random() * 100 + "%";

star.style.animationDelay =
    Math.random() * 3 + "s";

starsContainer.appendChild(star);

}

/* ===================================
SCROLL REVEAL
=================================== */

const hiddenElements =
document.querySelectorAll(".hidden");

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

    if(entry.isIntersecting){

        entry.target.classList.add("show");

    }

});

},{
threshold:0.15
});

hiddenElements.forEach(el=>{

observer.observe(el);

});

/* ===================================
START BUTTON
=================================== */

const startBtn =
document.getElementById("startBtn");

if(startBtn){

startBtn.addEventListener("click",()=>{

    document
    .querySelector(".opening")
    .scrollIntoView({
        behavior:"smooth"
    });

});

}

/* ===================================
RELATIONSHIP COUNTER
=================================== */

function updateCounter(){

const startDate =
new Date("2026-03-24T00:00:00");

const now = new Date();

const diff =
now.getTime() -
startDate.getTime();

const days =
Math.floor(
    diff /
    (1000*60*60*24)
);

const hours =
Math.floor(
    (diff %
    (1000*60*60*24))
    /
    (1000*60*60)
);

const minutes =
Math.floor(
    (diff %
    (1000*60*60))
    /
    (1000*60)
);

const seconds =
Math.floor(
    (diff %
    (1000*60))
    /
    1000
);

const counter =
document.getElementById("counter");

if(counter){

    counter.innerHTML =

    days + " Hari<br>" +

    hours + " Jam<br>" +

    minutes + " Menit<br>" +

    seconds + " Detik";

}

}

setInterval(
updateCounter,
1000
);

updateCounter();

/* ===================================
SAKURA FALLING
=================================== */

const sakuraContainer =
document.getElementById(
"sakura-container"
);

function createPetal(){

const petal =
document.createElement("div");

petal.innerHTML = "🌸";

petal.style.position =
"fixed";

petal.style.left =
Math.random()*100 +
"vw";

petal.style.top =
"-20px";

petal.style.fontSize =
(Math.random()*10+15)
+ "px";

petal.style.opacity =
Math.random();

petal.style.pointerEvents =
"none";

petal.style.zIndex = "-1";

const duration =
Math.random()*8+6;

petal.animate([

    {
        transform:
        "translateY(0px) rotate(0deg)"
    },

    {
        transform:
        "translateY(110vh) rotate(360deg)"
    }

],{

    duration:
    duration * 1000,

    easing:
    "linear"

});

sakuraContainer
.appendChild(petal);

setTimeout(()=>{

    petal.remove();

},duration*1000);

}

setInterval(
createPetal,
400
);

/* ===================================
TYPEWRITER EFFECT
=================================== */

const letter =
document.querySelector(
".letter-content p"
);

if(letter){

const original =
letter.innerHTML;

letter.innerHTML = "";

let i = 0;

function type(){

    if(i < original.length){

        letter.innerHTML +=
        original.charAt(i);

        i++;

        setTimeout(
            type,
            20
        );

    }

}

setTimeout(
    type,
    1500
);

}
