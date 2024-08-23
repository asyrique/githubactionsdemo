package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// Function to check if a number is prime
func isPrime(n int) bool {
	if n <= 1 {
		return false
	}
	for i := 2; i*i <= n; i++ {
		if n%i == 0 {
			return false
		}
	}
	return true
}

// Function to generate the first N prime numbers
func generatePrimes(count int) []int {
	primes := []int{}
	num := 2
	for len(primes) < count {
		if isPrime(num) {
			primes = append(primes, num)
		}
		num++
	}
	return primes
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	fmt.Print("Enter the number of primes to generate: ")
	input, _ := reader.ReadString('\n')
	input = strings.TrimSpace(input)
	count, err := strconv.Atoi(input)
	if err != nil {
		fmt.Println("Invalid input. Please enter a valid number.")
		return
	}

	primes := generatePrimes(count)
	fmt.Println("First", count, "prime numbers:")
	for _, prime := range primes {
		fmt.Print(prime, " ")
	}
	fmt.Println()
}
