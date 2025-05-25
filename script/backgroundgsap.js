import { gsap } from "https://esm.sh/gsap@3.13.0"

let bright = "rgb(100, 116, 139)";
let dark = "rgb(15, 23, 42)";

let savedProgress = parseFloat(localStorage.getItem("bgProgress")) || 0;

let tl = gsap.timeline({
  repeat: -1,
  onUpdate: () => {
    localStorage.setItem("bgProgress", tl.progress());
  }
});

tl.fromTo("#bg", 
  {
    background: `linear-gradient(135deg, ${dark}, ${bright} 100%, ${bright})`
  },
  {
    duration: 15,
    background: `linear-gradient(135deg, ${bright}, ${bright} 0%, ${dark})`,
    ease: "none",
  })
.fromTo("#bg",
  {
    background: `linear-gradient(135deg, ${bright}, ${dark} 100%, ${dark})`,
  },
  {
    duration: 15,
    background: `linear-gradient(135deg, ${dark}, ${dark} 0%, ${bright})`,
    ease: "none",
  });

tl.progress(savedProgress);