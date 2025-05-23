/**
 * Format the date to display it
 * @param {string} baseStr The base string
 * @param {boolean} withTime OPTIONAL Is the time displayed to. By default, yes.
 * @returns ${seconds}:${minutes}:${hours} ${day}/${month}/${year}
 */
export default function displayDate(baseStr, withTime = true) {
    const dateObj = new Date(baseStr);

    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    
    if (!withTime)
        return `${year}/${month}/${day}`;

    const hours = String(dateObj.getHours()).padStart(2, '0');
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');
    const seconds = String(dateObj.getSeconds()).padStart(2, '0');

    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
}