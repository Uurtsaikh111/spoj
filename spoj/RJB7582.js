
function math(a, b, c, d, e) {
    let one = { number: 1, value: a };
    let two = { number: 2, value: b };
    let three = { number: 3, value: c };
    let four = { number: 4, value: d };
    let five = { number: 5, value: e };

    let arr = [one, two, three, four, five];
    arr.sort((x, y) => y.value - x.value);
    let sortedNumbers = arr.map(item => item.number);

    console.log(sortedNumbers);
}

// Example usage
math(40, 50, 92, 50, 40);

