const greetings = 'Hello,how are you?';
function reverseString(text) {
    let reverse = '';
    for (const letter of text) {
        // console.log(letter);
        // reverse = reverse + letter;
        reverse = letter + reverse;
    }
    return reverse;
}
const reversed = reverseString(greetings);
console.log(reversed);