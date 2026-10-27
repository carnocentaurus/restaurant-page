import chickenInasal from './images/chicken-inasal.png';

const header = document.querySelector('header');

function loadHomePage() {
    const homeDiv = document.createElement('div');

    const heroDiv = document.createElement('div');
    heroDiv.className = 'hero-div';

    const heading = document.createElement('h1');
    heading.textContent = 'SALO-SALO GRILL';
    header.prepend(heading);
    homeDiv.appendChild(header);

    const image = document.createElement('img');
    image.src = chickenInasal;
    image.alt = 'Chicken inasal';
    heroDiv.appendChild(image);

    homeDiv.appendChild(heroDiv);

    return homeDiv;
}

export default loadHomePage;