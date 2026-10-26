import chickenInasal from "./images/chicken-inasal.png";

function loadHomePage() {
    const content = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Our Restaurant";

    content.appendChild(heading);

    const image = document.createElement("img");
    image.src = chickenInasal;
    image.alt = "Chicken inasal";
    content.appendChild(image);
}

export default loadHomePage;