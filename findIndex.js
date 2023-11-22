const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrayCopyan = [...array]

console.log(array.findIndex(
    arrayItem =>  arrayItem === 100
));

console.log({
    array,
    arrayCopyan
})
