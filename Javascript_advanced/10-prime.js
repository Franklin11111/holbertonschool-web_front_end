function countPrimeNumbers() {
    let start = 2;
    let end = 100;
    function isPrime(num) {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    const primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes.length;
}
const t0 = performance.now();

for (let i = 0; i < 100; i++) {
    console.log(countPrimeNumbers());
}

const t1 = performance.now();
const timing = t1 - t0;
console.log(`Execution time of calculating prime numbers 100 times was ${timing} milliseconds`);
