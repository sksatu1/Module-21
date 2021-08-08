function animalCount(miles) {
    if (miles <= 10) {
        const count = miles * 10;
        return count;
    }
}

const value = animalCount(7);
console.log(value);