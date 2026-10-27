import chickenInasal from "./images/chicken-inasal.png";

const header = document.querySelector('header');

function loadHomePage() {
    const homeDiv = document.createElement("div");

    const heading = document.createElement("h1");
    heading.textContent = "SALO-SALO GRILL";
    
    header.prepend(heading);
    homeDiv.appendChild(header);

    const image = document.createElement("img");
    image.src = chickenInasal;
    image.alt = "Chicken inasal";
    homeDiv.appendChild(image);

    return homeDiv;
}

export default loadHomePage;