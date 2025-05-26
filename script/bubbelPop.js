import { gsap } from "https://esm.sh/gsap@3.13.0";

const bubbelPop = document.getElementById("bubbelPop");
const remainingHeight = window.innerHeight - bubbelPop.getBoundingClientRect().top;

bubbelPop.style.height = `${remainingHeight - 50}px`;
const containerRect = bubbelPop.getBoundingClientRect();

const pictures = ["newCap.jpg"];

function createBubble(progress) {
    const bubble = document.createElement('img');
    bubble.classList.add('bubble');
    bubble.src = "/Portfolio/pictures/bubble.webp";
    
    const size = 70 + Math.random() * 70;
  
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    const startLeft = 30 + Math.random() * (containerRect.width - size - 60);
    const startTop = containerRect.height;

    bubble.style.left = `${startLeft}px`;
    bubble.style.top = `${startTop}px`;
  
    bubbelPop.appendChild(bubble);
  
    animateBubble(bubble, progress);
    bubble.addEventListener('click', () => popBubble(bubble, true));
};
  
function animateBubble(bubble, progress) {
    const duration = 15 + Math.random() * 15;

    gsap.fromTo(bubble, {
        opacity: 0
    }, {
        opacity: 0.7,
        duration: 2,
        ease: "none"
    });

    const bubbleTl = gsap.timeline();
    
    bubbleTl.to(bubble, {
        duration: duration,
        top: -3,
        onComplete: () => popBubble(bubble, false),
        ease: "none"
    });

    bubbleTl.progress(progress);

    gsap.to(bubble, {
        scale: 1.1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: () => 1 + Math.random()
    });

    gsap.to(bubble, {
        repeat: -1,
        duration: () => 3 + Math.random() * 3,
        left: () => sideMovement(bubble),
        repeatRefresh: true,
        ease: "power1.inOut"
    });
};

function sideMovement(bubble){
    let pos = parseFloat(bubble.style.left) + (0.5 - Math.random()) * 200
    const size = parseFloat(bubble.style.width);

    if (pos < 10){
        return 10;
    }
    else if (pos > containerRect.width - size - 20){
        return containerRect.width - size - 20;
    };
    return pos;
};



function popBubble(bubble, manualPop) {
    if (bubble.dataset.popped === "true") return;
    bubble.dataset.popped = "true";

    gsap.killTweensOf(bubble);

    const popTl = gsap.timeline({
        onComplete: () => popOrPicture(bubble, manualPop)
    });

    popTl.to(bubble, {
        scale: 1.25,
        duration: 0.03
    })
    .to(bubble, {
        scale: 0,
        opacity: 0,
        duration: 0.09,
    });

    function popOrPicture(bubble, manualPop){
        if (Math.random() > 0.8 && manualPop){
            const size = parseFloat(bubble.style.width);
            bubble.style.borderRadius = 0;
            bubble.style.zIndex = 1
            bubble.src = "/Portfolio/pictures/me/" + pictures[Math.floor(Math.random()) * pictures.length];

            bubble.onload = () => {
                bubble.style.width = bubble.naturalWidth
                bubble.style.height = bubble.naturalHeight
                
                gsap.timeline({
                    onComplete: () => {bubble.remove(), createBubble(0)}
                }).to(bubble, {
                    top: (containerRect.height - parseFloat(bubble.style.height)) / 2,
                    left: (containerRect.width - parseFloat(bubble.style.width)) / 2,
                    duration: 2,
                    scale: () => scale(bubble),
                    opacity: 1
                }).to(bubble, {
                    duration: 2,
                    opacity: 0,
                    delay: 5,
                    ease: "power3.in"
                });
            };
        } else {
            bubble.remove();
            createBubble(0);
        };
    };
};

function scale(bubble) {
    const bubbleHeight = parseFloat(bubble.style.height)
    const bubbleWidht = parseFloat(bubble.style.width)
    if (containerRect.height / bubbleHeight <= containerRect.width / bubbleWidht) {
        return containerRect.height / bubbleHeight;
    };
    return containerRect.width / bubbleWidht;
};

for (let i = 0; i < 24; i++) {
    createBubble(Math.random());
};