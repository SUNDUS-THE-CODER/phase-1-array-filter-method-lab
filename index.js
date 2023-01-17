// Code your solution here
function findMatching(array, search) {
   return array.filter((key) => key.toLowerCase() === search.toLowerCase());
}

function fuzzyMatch(array, search) {
    return array.filter((key) => key.startsWith(search));
}

function matchName(array, search) {
    return array.filter((key) => key.name === search);
}