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

    const contentCardLeftDiv = document.createElement('div');
    contentCardLeftDiv.className = 'green-content-card';
    contentCardsContainerDiv.appendChild(contentCardLeftDiv);

    const contentCardLeftHeadline = document.createElement('h3');
    contentCardLeftHeadline.textContent = 'REAL CHARCOAL GRILL';
    contentCardLeftDiv.appendChild(contentCardLeftHeadline);

    const contentCardLeftSubheadline = document.createElement('p');
    contentCardLeftSubheadline.textContent = 
        'Every order is cooked over live coals for that smoky bite.';
    contentCardLeftDiv.appendChild(contentCardLeftSubheadline);

    const contentCardMiddleDiv = document.createElement('div');
    contentCardMiddleDiv.className = 'yellow-content-card';
    contentCardsContainerDiv.appendChild(contentCardMiddleDiv);

    const contentCardMiddleHeadline = document.createElement('h3');
    contentCardMiddleHeadline.textContent = 'GRILLED FRESH TO ORDER';
    contentCardMiddleDiv.appendChild(contentCardMiddleHeadline);

    const contentCardMiddleSubheadline = document.createElement('p');
    contentCardMiddleSubheadline.textContent = 
        'Chicken, pork and seafood marinated daily and served hot.';
    contentCardMiddleDiv.appendChild(contentCardMiddleSubheadline);

    const contentCardRightDiv = document.createElement('div');
    contentCardRightDiv.className = 'yellow-content-card';
    contentCardsContainerDiv.appendChild(contentCardRightDiv);

    const contentCardRightHeadline = document.createElement('h3');
    contentCardRightHeadline.textContent = 'CONTACT FOR CATERING';
    contentCardRightDiv.appendChild(contentCardRightHeadline);

    const contentCardRightSubheadline = document.createElement('p');
    contentCardRightSubheadline.textContent = 
        'Planning a salo-salo gathering? Send us the details.';
    contentCardRightDiv.appendChild(contentCardRightSubheadline);

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
    homeDiv.appendChild(contentCardsContainerDiv);

    return homeDiv;
}

export default loadHomePage;