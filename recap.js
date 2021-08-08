// largest element of  an array 
function largestElement(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element > max) {
            max = element;
        }
    }
    return max;
}
var ArrayElements = [4, 5, 65, 41, 22, 46];
var maxValue = largestElement(ArrayElements);
console.log(maxValue);


// smallest element  of an array
function smallestElement(numbers) {
    let min = numbers[0];
    for (i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < min) {
            min = element;
        }
    }
    return min;
}
var ArrayElements = [4, 5, 65, 41, 22, 46];
var minValue = smallestElement(ArrayElements);
console.log(minValue);