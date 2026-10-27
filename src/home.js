import chickenInasal from './images/chicken-inasal.png';

const header = document.querySelector('header');

function loadHomePage() {
    const homeDiv = document.createElement('div');

    const heroDiv = document.createElement('div');
    heroDiv.className = 'hero-div';

    const heroTextDiv = document.createElement('div');
    heroTextDiv.className = 'hero-text-div';

    const contentCardsContainerDiv = document.createElement('div');
    contentCardsContainerDiv.className = 'content-cards-container-div';
    homeDiv.appendChild(contentCardsContainerDiv);

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

    const heroSubheadlineText = document.createElement('p');
    heroSubheadlineText.textContent = `
        Welcome to Salo-Salo Grill, your home for authentic, charcoal-grilled Filipino cuisine 
        that warms the heart. We bring you the smoked perfection, irresistible marinades, and 
        beloved comfort foods inspired by the rich street food culture of the Philippines. 
        Experience juicy chicken, hearty meals, and the spirit of gathering that defines our 
        “Salo-Salo” tradition, all with fresh ingredients and undeniable flavor that keeps you 
        coming back for more.
    `;
    heroTextDiv.appendChild(heroSubheadlineText);
    heroDiv.appendChild(heroTextDiv);
    homeDiv.appendChild(heroDiv);

    return homeDiv;
}

export default loadHomePage;