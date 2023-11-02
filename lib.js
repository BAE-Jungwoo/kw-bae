function avg(numbers) 
{
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}

function prime(num)
{
    // TODO
    if(num === 1 || num === 0) {
        return false;
    }

    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false; // Match not prime number
        }
    }
    return true; // Match prime number
}

function fact(num)
{
    // TODO
    if (num <= 15 && num >= 1) {
        return num * fact(num - 1); // Multiply by recursive 
    }
    else if(num === 0) {
        return 1; // 0! === 1
    }
    else {
        return -1; // num > 15
    }
}

module.exports = {
    avg,
    prime,
    fact
}
