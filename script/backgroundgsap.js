import { gsap } from "https://esm.sh/gsap@3.13.0"

let bright = "hsl(221.19 15% 48%)";
let dark = "hsl(222.34 49% 11%)";

// ${dark}


let tl = gsap.timeline({
    repeat: -1,
})

tl.fromTo("#bg", 
    {
        background: `linear-gradient(135deg, ${dark}, ${bright} 100%, ${bright})`
    },
    {
        duration: 5,
        background: `linear-gradient(135deg, ${bright}, ${bright} 0%, ${dark})`,
        ease: "none",
    })
.fromTo("#bg",
    {
        background: `linear-gradient(135deg, ${bright}, ${dark} 100%, ${dark})`,
    },
    {
        duration: 5,
        background: `linear-gradient(135deg, ${dark}, ${dark} 0%, ${bright})`,
        ease: "none",
    })

document.querySelectorAll(".header a").forEach(link => {
console.log(link)
});