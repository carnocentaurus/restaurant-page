import chickenInasal from "./images/chicken-inasal.png";

function loadHomePage() {
    const homeDiv = document.createElement("div");

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Our Restaurant";
    homeDiv.appendChild(heading);

    const image = document.createElement("img");
    image.src = chickenInasal;
    image.alt = "Chicken inasal";
    homeDiv.appendChild(image);

    return homeDiv;
}

export default loadHomePage;