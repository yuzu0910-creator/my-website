history.scrollRestoration = "manual";



window.addEventListener("load", () => {

    window.scrollTo(0, 0);

});



function getScale() {

    return Math.min(
        Math.max(window.innerWidth / 1920, 1280 / 1920),
        1
    );

}



const header =
    document.getElementById("header");


window.addEventListener("scroll", () => {

   
    if (
        window.scrollY >
        window.innerHeight * 0.85
    ) {

        header.classList.add("show");

    } else {

        header.classList.remove("show");

    }

});



const button_About =
    document.getElementById("aboutButton");

const about =
    document.getElementById("About");


button_About.addEventListener("click", () => {

    about.scrollIntoView({
        behavior: "smooth"
    });

});



const AboutShowh1 =
    document.getElementById("About-h1");

const AboutShowp =
    document.getElementById("About-p");

const AboutShowul =
    document.getElementById("About-ul");


window.addEventListener("scroll", () => {

    const scale = getScale();


    if (
        window.scrollY >
        1400 * scale
    ) {

        AboutShowh1.classList.add("show");

    } else {

        AboutShowh1.classList.remove("show");

    }


    if (
        window.scrollY >
        1550 * scale
    ) {

        AboutShowp.classList.add("show");

    } else {

        AboutShowp.classList.remove("show");

    }


    if (
        window.scrollY >
        1650 * scale
    ) {

        AboutShowul.classList.add("show");

    } else {

        AboutShowul.classList.remove("show");

    }

});



const buttons_Interests =
    document.querySelectorAll(".InterestsButton");

const Interests =
    document.getElementById("Interests");


buttons_Interests.forEach((button) => {

    button.addEventListener("click", (event) => {

        event.preventDefault();

        Interests.scrollIntoView({
            behavior: "smooth"
        });

    });

});


const interestsTitle =
    document.getElementById("titleInterests");

const interestsContents =
    document.querySelector(".contentsI");



const guitarTitle =
    document.getElementById("titleGuitar");

const guitarContents =
    document.querySelector(".contentsG");



const composingTitle =
    document.getElementById("titleComposing");

const composingContents =
    document.querySelector(".contentsC");



window.addEventListener("scroll", () => {

    const scale = getScale();


    
    if (
        window.scrollY >
        3350 * scale
    ) {

        interestsTitle.classList.add("show");

    } else {

        interestsTitle.classList.remove("show");

    }


    
    if (
        window.scrollY >
        3500 * scale
    ) {

        interestsContents.classList.add("show");

        interestsTitle.classList.add("sizeDown");

    } else {

        interestsContents.classList.remove("show");

        interestsTitle.classList.remove("sizeDown");

    }


    
    if (
        window.scrollY >
        5200 * scale
    ) {

        guitarTitle.classList.add("show");

    } else {

        guitarTitle.classList.remove("show");

    }


    
    if (
        window.scrollY >
        5450 * scale
    ) {

        guitarContents.classList.add("show");

        guitarTitle.classList.add("sizeDown");

    } else {

        guitarContents.classList.remove("show");

        guitarTitle.classList.remove("sizeDown");

    }


    
    if (
        window.scrollY >
        7150 * scale
    ) {

        composingTitle.classList.add("show");

    } else {

        composingTitle.classList.remove("show");

    }


    
    if (
        window.scrollY >
        7400 * scale
    ) {

        composingContents.classList.add("show");

        composingTitle.classList.add("sizeDown");

    } else {

        composingContents.classList.remove("show");

        composingTitle.classList.remove("sizeDown");

    }

});
