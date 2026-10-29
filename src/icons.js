const SVG_NS = 'http://www.w3.org/2000/svg';

function createFlameIcon() {
    const svg = document.createElementNS(SVG_NS, 'svg');
    svg.id = 'flame-svg';
    svg.setAttribute('viewBox', '0 0 50 56');
    svg.setAttribute('aria-hidden', 'true');

    const outerPath = document.createElementNS(SVG_NS, 'path');
    outerPath.setAttribute(
        'd',
        'M26 2c2 8 11 13 13 24 2 11-4 28-14 28S6 40 8 29c1-5 4-8 6-11 1 3 3 5 5 6 0-8 3-15 7-22z'
    );
    outerPath.setAttribute('fill', 'none');
    outerPath.setAttribute('stroke', '#e5592b');
    outerPath.setAttribute('stroke-width', '5');
    outerPath.setAttribute('stroke-linejoin', 'round');

    const innerPath = document.createElementNS(SVG_NS, 'path');
    innerPath.setAttribute(
        'd',
        'M26 30c1 4 5 6 5 11 0 4-2 7-6 7s-6-3-5-7c1-3 3-4 3-7 1 1 2 1 3-4z'
    );
    innerPath.setAttribute('fill', '#e5592b');

    svg.append(outerPath, innerPath);

    return svg;
}


function createGrillIcon() {
    const svg = document.createElementNS(SVG_NS, 'svg');
    svg.id = 'grill-svg';
    svg.setAttribute('viewBox', '0 0 50 56');
    svg.setAttribute('aria-hidden', 'true');

    const grillBody = document.createElementNS(SVG_NS, 'path');
    grillBody.setAttribute(
        'd',
        'M8 24h34l-4 15H12L8 24z'
    );
    grillBody.setAttribute('fill', 'none');
    grillBody.setAttribute('stroke', '#e5592b');
    grillBody.setAttribute('stroke-width', '3');
    grillBody.setAttribute('stroke-linejoin', 'round');

    const grillGrate = document.createElementNS(SVG_NS, 'path');
    grillGrate.setAttribute(
        'd',
        'M15 27l3 9M25 27v9M35 27l-3 9M7 24h36'
    );
    grillGrate.setAttribute('fill', 'none');
    grillGrate.setAttribute('stroke', '#e5592b');
    grillGrate.setAttribute('stroke-width', '2');
    grillGrate.setAttribute('stroke-linecap', 'round');

    const grillLegs = document.createElementNS(SVG_NS, 'path');
    grillLegs.setAttribute('d', 'M16 39l-3 9M34 39l3 9');
    grillLegs.setAttribute('fill', 'none');
    grillLegs.setAttribute('stroke', '#e5592b');
    grillLegs.setAttribute('stroke-width', '3');
    grillLegs.setAttribute('stroke-linecap', 'round');

    const smoke = document.createElementNS(SVG_NS, 'path');
    smoke.setAttribute(
        'd',
        'M17 19c-4-4 3-5 0-10M25 19c-4-4 3-5 0-10M33 19c-4-4 3-5 0-10'
    );
    smoke.setAttribute('fill', 'none');
    smoke.setAttribute('stroke', '#e5592b');
    smoke.setAttribute('stroke-width', '2.5');
    smoke.setAttribute('stroke-linecap', 'round');

    svg.append(grillBody, grillGrate, grillLegs, smoke);

    return svg;
}

export { createFlameIcon, createGrillIcon };