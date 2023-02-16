let n = 10;
primeNumbers:
    for (let i = 2; i <= n; i++) { // for each i...

        for (let j = 2; j < i; j++) { // look for a divisor..
            if (i % j == 0) continue primeNumbers; // not a prime, go next i
        }

        alert( i ); // a prime
    }