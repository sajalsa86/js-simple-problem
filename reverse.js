//Explore string nature and reverse a string
let dialog = 'Hello How Are You?';

function reverseString(text) {
    let reverse = '';
    for (const letter of text) {
        reverse = letter + reverse;
    }
    return reverse;
}

const viewReverseOfLetter = reverseString(dialog);
console.log(viewReverseOfLetter);