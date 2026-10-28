import "./style.css";
import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import loadContactPage from "./contact.js";

const content = document.querySelector("#content");
const pages = { home: loadHomePage, menu: loadMenuPage, contact: loadContactPage };

document.querySelector("nav").addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") return;
    document.querySelector('nav [aria-current="page"]')?.removeAttribute("aria-current");
    event.target.setAttribute("aria-current", "page");
    content.replaceChildren(pages[event.target.dataset.go]());
});

content.replaceChildren(loadHomePage());