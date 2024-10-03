function fatorial(N) {
    let fatorial = 1;
    for (let i = N; i > 0; i--) {
        fatorial *= i;
    }
    return fatorial;
}

console.log(fatorial(5));
