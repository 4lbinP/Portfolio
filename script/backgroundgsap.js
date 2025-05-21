import { gsap } from "https://esm.sh/gsap@3.13.0"


let tl = gsap.timeline({
    repeat: -1,
})

tl.fromTo("body", 
    {
        background: "linear-gradient(135deg, oklch(20.8% 0.042 265.755), oklch(55.4% 0.042 265.755) 100%, oklch(55.4% 0.042 265.755))"
    },
    {
        duration: 5,
        background: "linear-gradient(135deg, oklch(55.4% 0.042 265.755), oklch(55.4% 0.042 265.755) 0%, oklch(20.8% 0.042 265.755))",
        ease: "none",
    })
.fromTo("body",
    {
        background: "linear-gradient(135deg, oklch(55.4% 0.042 265.755), oklch(20.8% 0.042 265.755) 100%, oklch(20.8% 0.042 265.755))",
    },
    {
        duration: 5,
        background: "linear-gradient(135deg, oklch(20.8% 0.042 265.755), oklch(20.8% 0.042 265.755) 0%, oklch(55.4% 0.042 265.755))",
        ease: "none",
    })

document.querySelectorAll(".header a").forEach(link => {
console.log(link)
});