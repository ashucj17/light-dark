let dayLight = document.querySelector(".dayNight");
let banner = document.querySelector(".banner");

dayLight.addEventListener("click", () => {
  banner.classList.toggle("night");
});

let typingEffect = new Typed("#agniDev", {
  strings: ["AgniDev", "Frontend Developer", "Code Enthusiast"],
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1500,
  loop: true,
});
