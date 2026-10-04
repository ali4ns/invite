const noBtn=document.getElementById("noBtn");
const yesBtn=document.getElementById("yesBtn");
const reply=document.getElementById("reply");
const success=document.getElementById("success");
const messages=["You sure, <strong>MOHANDES</strong>?","Hmm... that's not very convincing.","You're really making me work for this pizza, <strong>MOHANDES</strong>.","Okay... one last chance."];
let noClicks=0;
noBtn.addEventListener("click",()=>{
    reply.style.opacity="0";
    setTimeout(()=>{
        reply.innerHTML=messages[Math.min(noClicks,messages.length-1)];
        reply.style.opacity="1";
        noClicks++;
        if(noClicks>=messages.length){
            noBtn.textContent="OKAY, FINE";
            noBtn.classList.remove("secondary");
            noBtn.classList.add("primary");
            noBtn.onclick=accept;
        }
    },160);
});
yesBtn.addEventListener("click",accept);
function accept(){
    const question=document.querySelector(".question-section");
    question.style.display="none";
    success.classList.add("visible");
    success.setAttribute("aria-hidden","false");
    window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"});
}
const cursor=document.querySelector(".cursor-dot");
if(window.matchMedia("(pointer:fine)").matches){
    window.addEventListener("mousemove",event=>{
        cursor.style.left=event.clientX+"px";
        cursor.style.top=event.clientY+"px";
    });
}
const revealElements=document.querySelectorAll(".reveal-on-scroll");
const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting) entry.target.classList.add("is-visible");
    });
},{threshold:.18});
revealElements.forEach(element=>observer.observe(element));
