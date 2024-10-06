function smallNum(a, b, c) {
    const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));
    const lcm = (x, y) => (x * y) / gcd(x, y);
    
    const result = lcm(lcm(a, b), c);
    console.log(result);
}

smallNum(4, 6, 18);

