import "./style.css";
import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import loadContactPage from "./contact.js";

const content = document.querySelector("#content");

function showHomePage() {
    content.replaceChildren(loadHomePage());
}

function showMenuPage() {
    content.replaceChildren(loadMenuPage());
}

function showContactPage() {
    content.replaceChildren(loadContactPage());
}

document.querySelector("#home-button").addEventListener("click", showHomePage);
document.querySelector("#menu-button").addEventListener("click", showMenuPage);
document.querySelector("#contact-button").addEventListener("click", showContactPage);

showHomePage();