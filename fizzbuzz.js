
function checknumber(limit) {
    

    for (let num = 1; num <= limit; num++){
if (num % 3 == 0 && num % 5 == 0 && num <= 100){
    console.log("FizzBuzz")
}
else if (num % 3 == 0 && num <= 100)
    console.log("Fizz")
else if ( num % 5 == 0 && num <= 100){
    console.log("Buzz")
}
else{
    console.log(num)
}
}
}
checknumber(20)
