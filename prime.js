const prime_text = document.getElementById("prime");
let prime=true
function Input() {
    let age = parseInt(prompt("Enter your age must be positive integer"));
    while (!Number.isInteger(age)) {
        age = parseInt(prompt("Enter your age must be a positive integer"));
    }
    isPrime(age)
    if(prime){
        prime_text.innerHTML=`your age is a prime number`

    }
    else{
        prime_text.innerHTML=`your age is not a prime number`
    }
}

function isPrime(age) {
    if (age > 1) {
        for (let i = 2; i < age; i++) {
            if (age % i == 0) {
                prime = false;
                break;
            }
        }

    }
}






Input()