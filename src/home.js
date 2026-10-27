import chickenInasal from './images/chicken-inasal.png';

const header = document.querySelector('header');

function loadHomePage() {
    const homeDiv = document.createElement('div');

    const heroDiv = document.createElement('div');
    heroDiv.className = 'hero-div';

    const heroTextDiv = document.createElement('div');
    heroTextDiv.className = 'hero-text-div';

    const heading = document.createElement('h1');
    heading.textContent = 'SALO-SALO GRILL';
    header.prepend(heading);
    homeDiv.appendChild(header);

    const image = document.createElement('img');
    image.src = chickenInasal;
    image.alt = 'Chicken inasal';
    heroDiv.appendChild(image);

    const heroHeadlineText = document.createElement('h1');
    heroHeadlineText.textContent = 'FEEL THE HEAT OF TRUE FILIPINO GRILLED FLAVORS';
    heroTextDiv.appendChild(heroHeadlineText);
    heroDiv.appendChild(heroTextDiv);

    homeDiv.appendChild(heroDiv);

    return homeDiv;
}

export default loadHomePage;