import { gsap } from "https://esm.sh/gsap@3.13.0"

const bubbelPop = document.getElementById("bubbelPop");
const remainingHeight = window.innerHeight - bubbelPop.getBoundingClientRect().top

bubbelPop.style.height = `${remainingHeight - 50}px`;
const containerRect = bubbelPop.getBoundingClientRect();

function createFirstBubbles() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    const size = 70 + Math.random() * 70;
  
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    const startLeft = 30 + Math.random() * (containerRect.width - size - 60);
    const startTop = containerRect.height - 2 * size;

    bubble.style.left = `${startLeft}px`;
    bubble.style.top = `${startTop}px`;
  
    bubbelPop.appendChild(bubble);
  
    animateBubble(bubble, Math.random());
    bubble.addEventListener('click', () => popBubble(bubble));
}

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    const size = 70 + Math.random() * 70;
  
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    const startLeft = 30 + Math.random() * (containerRect.width - size - 60);
    const startTop = containerRect.height - 2 * size;

    bubble.style.left = `${startLeft}px`;
    bubble.style.top = `${startTop}px`;
  
    bubbelPop.appendChild(bubble);
  
    animateBubble(bubble, 0);
    bubble.addEventListener('click', () => popBubble(bubble));
}
  
function animateBubble(bubble, progress) {
    const size = parseFloat(bubble.style.width);
    const duration = 15 + Math.random() * 15

    gsap.fromTo(bubble, {
        opacity: 0
    }, {
        opacity: 0.7,
        duration: 2,
        ease: "none"
    });

    const bubbleTl = gsap.timeline()
    
    bubbleTl.to(bubble, {
        duration: duration,
        top: -3,
        onComplete: () => popBubble(bubble),
        ease: "none"
    })

    bubbleTl.progress(progress)

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
}

function sideMovement(bubble){
    let pos = parseFloat(bubble.style.left) + (0.5 - Math.random()) * 200
    const size = parseFloat(bubble.style.width);

    if (pos < 10){
        return 10
    }
    else if (pos > containerRect.width - size - 20){
        return containerRect.width - size - 20
    }
    return pos
}



function popBubble(bubble) {
    gsap.to(bubble, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        onComplete: () => {bubble.remove(), createBubble()}
    });
}

for (let i = 0; i < 20; i++) {
    createFirstBubbles();
}