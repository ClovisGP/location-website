/**
 * Shuffles the given array
 * @param {*} array The given array
 */
export default function shuffleArray(array) {
    const newArray = [...array]; // Create a shallow copy
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}
