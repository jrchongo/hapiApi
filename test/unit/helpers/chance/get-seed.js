
function getRandomSeed() {
    return Math.trunc(Math.random() * Number.MAX_SAFE_INTEGER);
}

export function getSeed() {
    return getRandomSeed();
}