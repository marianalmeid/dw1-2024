function ehPrimo(N) {
    if (N < 2) return false;
    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(ehPrimo(7)); 
