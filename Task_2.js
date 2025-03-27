function alphabetizeString(str) {
    return str.split('').sort().join('');
}

const exampleString = 'webmaster';
const sortedString = alphabetizeString(exampleString);
console.log(sortedString);
