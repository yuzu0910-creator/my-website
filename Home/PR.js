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

button_About.addEventListener("click", () => {
    about.scrollIntoView({
        behavior: "smooth"
    });
});

const AboutShowh1 = document.getElementById("About-h1");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1400) {
    AboutShowh1.classList.add("show");
  } else {
    AboutShowh1.classList.remove("show");
  }
});

const AboutShowp = document.getElementById("About-p");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1550) {
    AboutShowp.classList.add("show");
  } else {
    AboutShowp.classList.remove("show");
  }
});

const AboutShowul = document.getElementById("About-ul");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1650) {
    AboutShowul.classList.add("show");
  } else {
    AboutShowul.classList.remove("show");
  }
});

const buttons_Interests = document.querySelectorAll(".InterestsButton");
const Interests = document.getElementById("Interests");

buttons_Interests.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();

        Interests.scrollIntoView({
            behavior: "smooth"
        });
    });
});

const interestsTitle = document.getElementById("titleInterests");

window.addEventListener("scroll", () => {
  console.log(guitarContents);
    if (window.scrollY > 3350) {
        interestsTitle.classList.add("show");
    } else {
        interestsTitle.classList.remove("show");
    }
});

const interestsContents = document.querySelector(".contentsI");

window.addEventListener("scroll", () => {
  console.log(guitarContents);
    if (window.scrollY > 3500) {
        interestsContents.classList.add("show");
        interestsTitle.classList.add("sizeDown");
    } else {
        interestsContents.classList.remove("show");
        interestsTitle.classList.remove("sizeDown");
    }
});

const guitarTitle = document.getElementById("titleGuitar");

window.addEventListener("scroll", () => {
  console.log(guitarContents);
    if (window.scrollY > 5250) {
        guitarTitle.classList.add("show");
    } else {
        guitarTitle.classList.remove("show");
    }
});

const guitarContents = document.querySelector(".contentsG");

window.addEventListener("scroll", () => {
  console.log(guitarContents);
    if (window.scrollY > 5450) {
        guitarContents.classList.add("show");
        guitarTitle.classList.add("sizeDown");
    } else {
        guitarContents.classList.remove("show");
        guitarTitle.classList.remove("sizeDown");
    }
});

const composingTitle = document.getElementById("titleComposing");

window.addEventListener("scroll", () => {
  console.log(guitarContents);
    if (window.scrollY > 7150) {
        composingTitle.classList.add("show");
    } else {
        composingTitle.classList.remove("show");
    }
});

const composingContents = document.querySelector(".contentsC");

window.addEventListener("scroll", () => {
  console.log(guitarContents);
    if (window.scrollY > 7400) {
        composingContents.classList.add("show");
        composingTitle.classList.add("sizeDown");
    } else {
        composingContents.classList.remove("show");
        composingTitle.classList.remove("sizeDown");
    }
});