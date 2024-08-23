// primes.test.ts
import { generatePrimes, isPrime } from '../src/primes';

describe('generatePrimes', () => {
    test('generates the first 10 prime numbers', () => {
        expect(generatePrimes(10)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    });

    test('generates the first 5 prime numbers', () => {
        expect(generatePrimes(5)).toEqual([2, 3, 5, 7, 11]);
    });

    test('returns an empty array when n is 0', () => {
        expect(generatePrimes(0)).toEqual([]);
    });

    test('generates the first prime number', () => {
        expect(generatePrimes(1)).toEqual([2]);
    });
});

describe('isPrime', () => {
    test('returns true for prime numbers', () => {
        expect(isPrime(2)).toBe(true);
        expect(isPrime(3)).toBe(true);
        expect(isPrime(5)).toBe(true);
        expect(isPrime(7)).toBe(true);
    });

    test('returns false for non-prime numbers', () => {
        expect(isPrime(1)).toBe(false);
        expect(isPrime(4)).toBe(false);
        expect(isPrime(6)).toBe(false);
        expect(isPrime(8)).toBe(false);
    });

    test('returns false for negative numbers', () => {
        expect(isPrime(-1)).toBe(false);
        expect(isPrime(-5)).toBe(false);
    });

    test('returns true for large prime numbers', () => {
        expect(isPrime(101)).toBe(true);
        expect(isPrime(103)).toBe(true);
    });

    test('returns false for large non-prime numbers', () => {
        expect(isPrime(100)).toBe(false);
        expect(isPrime(102)).toBe(false);
    });
});