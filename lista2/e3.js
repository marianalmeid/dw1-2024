function pares(N) {
    for (let i = N; i >= 1; i--) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

pares(10);