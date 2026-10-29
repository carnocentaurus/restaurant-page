const SVG_NS = 'http://www.w3.org/2000/svg';

function createFlameIcon() {
    const svg = document.createElementNS(SVG_NS, 'svg');
    svg.id = 'flame-icon';
    svg.setAttribute('viewBox', '0 0 50 56');
    svg.setAttribute('aria-hidden', 'true');

    const outerPath = document.createElementNS(SVG_NS, 'path');
    outerPath.setAttribute(
        'd',
        'M26 2c2 8 11 13 13 24 2 11-4 28-14 28S6 40 8 29c1-5 4-8 6-11 1 3 3 5 5 6 0-8 3-15 7-22z'
    );
    outerPath.setAttribute('fill', 'none');
    outerPath.setAttribute('stroke', '#f4b731');
    outerPath.setAttribute('stroke-width', '5');
    outerPath.setAttribute('stroke-linejoin', 'round');

    const innerPath = document.createElementNS(SVG_NS, 'path');
    innerPath.setAttribute(
        'd',
        'M26 30c1 4 5 6 5 11 0 4-2 7-6 7s-6-3-5-7c1-3 3-4 3-7 1 1 2 1 3-4z'
    );
    innerPath.setAttribute('fill', '#f4b731');

    svg.append(outerPath, innerPath);

    return svg;
}

export { createFlameIcon };