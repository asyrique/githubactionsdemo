export function generatePrimes(n: number): number[] {
  const primes: number[] = [];
  let num = 2; // Start checking for primes from 2

  while (primes.length < n) {
      if (isPrime(num)) {
          primes.push(num);
      }
      num++;
  }

  return primes;
}

export function isPrime(num: number): boolean {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}