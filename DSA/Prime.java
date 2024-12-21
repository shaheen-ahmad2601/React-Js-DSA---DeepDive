class Prime {

    public boolean isPrime(int num) {
        if (num <= 1) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(num); i++) { 
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        Prime primeChecker = new Prime();
        int num = 13;
        boolean primeNum = primeChecker.isPrime(num); // Call isPrime method
        System.out.println("Is " + num + " a prime number? " + primeNum);
    }
}
