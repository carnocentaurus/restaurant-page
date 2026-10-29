import chickenInasal from './images/chicken-inasal.png';

function loadHomePage() {
    // 1. Create the root container and main section containers
    const homeDiv = document.createElement('div');

    const heroDiv = document.createElement('div');
    heroDiv.className = 'hero-div';

    const heroTextDiv = document.createElement('div');
    heroTextDiv.className = 'hero-text-div';

    const contentCardsContainerDiv = document.createElement('div');
    contentCardsContainerDiv.className = 'content-cards-container-div';

    // 2. Create and initialize the hero image
    const image = document.createElement('img');
    image.className = 'hero-img';
    image.src = chickenInasal;
    image.alt = 'Chicken inasal';

    // 3. Create and initialize hero text
    const heroHeadlineText = document.createElement('h1');
    heroHeadlineText.className = 'hero-headline-text';
    heroHeadlineText.textContent = 'FEEL THE HEAT OF TRUE FILIPINO GRILLED FLAVORS';

    const heroSubheadlineText = document.createElement('p');
    heroSubheadlineText.className = 'hero-subheadline-text';
    heroSubheadlineText.textContent = `
        Welcome to Salo-Salo Grill, your home for authentic, charcoal-grilled Filipino cuisine 
        that warms the heart. We bring you the smoked perfection, irresistible marinades, and 
        beloved comfort foods inspired by the rich street food culture of the Philippines. 
        Experience juicy chicken, hearty meals, and the spirit of gathering that defines our 
        “Salo-Salo” tradition, all with fresh ingredients and undeniable flavor that keeps you 
        coming back for more.
    `;

    // 4. Create and initialize the content cards
    const contentCardLeftDiv = document.createElement('div');
    contentCardLeftDiv.className = 'green-content-card';

    const contentCardLeftHeadline = document.createElement('h3');
    contentCardLeftHeadline.textContent = 'REAL CHARCOAL GRILL';

    const contentCardLeftSubheadline = document.createElement('p');
    contentCardLeftSubheadline.textContent =
        'Every order is cooked over live coals for that smoky bite.';

    const contentCardMiddleDiv = document.createElement('div');
    contentCardMiddleDiv.className = 'yellow-content-card';

    const contentCardMiddleHeadline = document.createElement('h3');
    contentCardMiddleHeadline.textContent = 'GRILLED FRESH TO ORDER';

    const contentCardMiddleSubheadline = document.createElement('p');
    contentCardMiddleSubheadline.textContent =
        'Chicken, pork and seafood marinated daily and served hot.';

    const contentCardRightDiv = document.createElement('div');
    contentCardRightDiv.className = 'yellow-content-card';

    const contentCardRightHeadline = document.createElement('h3');
    contentCardRightHeadline.textContent = 'CONTACT FOR CATERING';

    const contentCardRightSubheadline = document.createElement('p');
    contentCardRightSubheadline.textContent =
        'Planning a salo-salo gathering? Send us the details.';

    // 5. Append children to their immediate parent containers
    heroDiv.appendChild(image);

    heroTextDiv.appendChild(heroHeadlineText);
    heroTextDiv.appendChild(heroSubheadlineText);

    contentCardLeftDiv.appendChild(contentCardLeftHeadline);
    contentCardLeftDiv.appendChild(contentCardLeftSubheadline);

    contentCardMiddleDiv.appendChild(contentCardMiddleHeadline);
    contentCardMiddleDiv.appendChild(contentCardMiddleSubheadline);

    contentCardRightDiv.appendChild(contentCardRightHeadline);
    contentCardRightDiv.appendChild(contentCardRightSubheadline);

    // 6. Append completed cards to their container
    contentCardsContainerDiv.appendChild(contentCardLeftDiv);
    contentCardsContainerDiv.appendChild(contentCardMiddleDiv);
    contentCardsContainerDiv.appendChild(contentCardRightDiv);

    // 7. Append completed sections to the root container
    heroDiv.appendChild(heroTextDiv);

    homeDiv.appendChild(heroDiv);
    homeDiv.appendChild(contentCardsContainerDiv);

    return homeDiv;
}

export default loadHomePage;