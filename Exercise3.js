var isPrime = 1;
var integer = 2;
var input = 125;
var numbersDown = 100;
var howMany = 0

var checkPrime = function(input) {
    integer  = 2; // start dividing at 2 then ascend to knock out non primes quicker
    isPrime = 1 // Set to true before we start the while loop
    while (isPrime && integer < input) {
        if (input % integer === 0) { //If it divides by a number without a remainder we set isPrime to false and stop the loop
            isPrime = 0;
        }
        integer++;
    }
    if (isPrime) {
        console.log(input)
        howMany ++; //an ascending number to calculate the number of primes found
    }
}


//for (numbersDown =10000; numbersDown >1; numbersDown --) { //Primes between 1 and 1000
//    checkPrime(numbersDown);
//}
//console.log(howMany);
//howMany = 0

numbersDown = 6008514  //Largest number script can handle without crashing
while (howMany < 40) {
    checkPrime(numbersDown);
    numbersDown --;
}

console.log(howMany);
