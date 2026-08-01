// ==========================
// PREMIUM GIRLFRIEND'S DAY
// ==========================

// -------------------------
// LOADER
// -------------------------

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.transition = "1s";

        setTimeout(() => {

            loader.style.display = "none";

        },1000);

    },1800);

});

// -------------------------
// LOVE LETTER
// -------------------------

const openBtn=document.getElementById("openBtn");

const letter=document.getElementById("letter");

const music=document.getElementById("music");

letter.style.display="none";

openBtn.onclick=function(){

letter.style.display="flex";

letter.scrollIntoView({

behavior:"smooth"

});

music.play().catch(()=>{});

};

// -------------------------
// LOVE TIMER
// -------------------------

const anniversary=new Date("September 1, 2022 00:00:00");

function updateLoveTimer(){

const now=new Date();

let diff=now-anniversary;

const days=Math.floor(diff/(1000*60*60*24));

diff%=1000*60*60*24;

const hours=Math.floor(diff/(1000*60*60));

diff%=1000*60*60;

const minutes=Math.floor(diff/(1000*60));

diff%=1000*60;

const seconds=Math.floor(diff/1000);

document.getElementById("timer").innerHTML=`

<div>❤️ ${days} Days</div>

<div>🕒 ${hours} Hours</div>

<div>💖 ${minutes} Minutes</div>

<div>✨ ${seconds} Seconds</div>

`;

}

updateLoveTimer();

setInterval(updateLoveTimer,1000);

// -------------------------
// REASONS
// -------------------------

const reasons=[

"Your smile is my favorite sunrise. ❤️",

"You make every ordinary day extraordinary.",

"You believe in me when I doubt myself.",

"You make my heart feel at home.",

"You are my safest place.",

"I love your cute smile.",

"You make me laugh without trying.",

"You understand me like nobody else.",

"You make my life beautiful.",

"I'd still choose you in every lifetime.",

"Every selfie with you becomes my favorite picture.",

"You're the first person I want to tell everything to.",

"You make my future feel exciting.",

"You are my peace.",

"I love everything about you."

];

document.getElementById("reasonBtn").onclick=function(){

const random=Math.floor(Math.random()*reasons.length);

document.getElementById("reasonText").innerHTML=reasons[random];

};

// -------------------------
// SURPRISE
// -------------------------

document.getElementById("surprise").onclick=function(){

alert(

"❤️ Happy Girlfriend's Day ❤️\n\nDear Tulasi,\n\nThank you for making every day beautiful.\n\nI Love You Forever.\n\n❤️ Siddharth"

);

};

// -------------------------
// FLOATING HEARTS
// -------------------------

const heartContainer=document.getElementById("hearts");

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*30)+"px";

heart.style.animationDuration=(6+Math.random()*5)+"s";

heartContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,350);

// -------------------------
// PHOTO EFFECT
// -------------------------

const photos=document.querySelectorAll(".photo");

photos.forEach(photo=>{

photo.addEventListener("mouseenter",()=>{

photo.style.transform="translateY(-12px) scale(1.03)";

});

photo.addEventListener("mouseleave",()=>{

photo.style.transform="translateY(0px) scale(1)";

});

});

// -------------------------
// BUTTON GLOW
// -------------------------

const buttons=document.querySelectorAll("button");

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.boxShadow="0 0 35px #ff4d88";

});

button.addEventListener("mouseleave",()=>{

button.style.boxShadow="";

});

});

// -------------------------
// LOVE TITLE EFFECT
// -------------------------

const heroTitle=document.querySelector(".glass h1");

setInterval(()=>{

heroTitle.style.textShadow=

"0 0 "+(20+Math.random()*25)+"px #ff4d88";

},700);