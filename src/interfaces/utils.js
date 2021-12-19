/* See
 * https://stackoverflow.com/a/51536142/12691545
 * For a detailed explanation. 
*/

// Helper to figure out if the given key is a number.
const stringIsNumber = value => isNaN(Number(value)) === false;

// Turn enums into string arrays for
// autocomplete in storybook controls.
export function enumToArray(enumme) {
    return Object.keys(enumme)
        .filter(stringIsNumber)
        .map(key => enumme[key]);
}