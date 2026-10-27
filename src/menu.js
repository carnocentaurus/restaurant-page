function loadMenuPage() {
    const menuDiv = document.createElement("div");

    const heading = document.createElement("h1");
    heading.textContent = "Menu";
    menuDiv.appendChild(heading);

    return menuDiv;
}

export default loadMenuPage;