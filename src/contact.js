function loadContactPage() {
    const contactDiv = document.createElement("div");

    const heading = document.createElement("h1");
    heading.textContent = "Contact";
    contactDiv.appendChild(heading);

    return contactDiv;
}

export default loadContactPage;