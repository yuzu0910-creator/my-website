history.scrollRestoration = "manual";

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight * 0.85) {
    header.classList.add("show");
  } else {
    header.classList.remove("show");
  }
});

const button_About = document.getElementById("aboutButton");
const about = document.getElementById("About");

button_About.addEventListener("click", (event) => {
    event.preventDefault();

    about.scrollIntoView({
        behavior: "smooth"
    });
});