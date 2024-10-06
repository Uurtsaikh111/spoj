

function small(n) {
    let digits = n.toString().split('').map(Number);
    let sorted = digits.sort((a, b) => a - b);

    if (sorted[0] === 0) {
        for (let i = 1; i < sorted.length; i++) {
            if (sorted[i] !== 0) {
                // Swap the first non-zero with the first position
                [sorted[0], sorted[i]] = [sorted[i], sorted[0]];
                break;
            }
        }
    }

    let result = sorted.join('');
    return result; 
}

console.log(small(34032)); 




