function containsThree(sum) {
    while (sum > 0) {
        if (sum % 10 == 3) {
            return true;
        }
        sum = sum/10;
    }
    return false;
}

function compareNumbers(firsNumber, secondNumber) {
    let sum = firsNumber + secondNumber;
    if ((firsNumber == 3 || secondNumber == 3) && containsThree(sum)) { 
        return true;
    } else {
        return false;
    }
}

console.log(compareNumbers(3,3));
