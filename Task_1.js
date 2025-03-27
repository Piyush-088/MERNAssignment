function reverseNumber(num) {
    const reversedString = num.toString().split('').reverse().join('');
    const reversedNumber = parseInt(reversedString);
    return reversedNumber;
}

const x = 32243;
const reversed = reverseNumber(x);
console.log(`Original number: ${x}`);
console.log(`Reversed number: ${reversed}`);