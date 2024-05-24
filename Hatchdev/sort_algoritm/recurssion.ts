const fatctorial = (n: number ): number => {
    if (n <= 0) return 1;
    return n * fatctorial(n-1);
}

console.log(fatctorial(4));

const fibonisi = (n: number): number =>{
    if (n <= 2) return 1;

    return fibonisi(n-2) + fibonisi(n-1);
}
console.log(fibonisi(4));