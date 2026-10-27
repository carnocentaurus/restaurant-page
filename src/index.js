import "./style.css";
import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import loadContactPage from "./contact.js";

const content = document.querySelector("#content");

function showHomePage() {
  content.replaceChildren(loadHomePage());
}

showHomePage();