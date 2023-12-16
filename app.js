let number = parseInt(prompt("Enter a number"));

if (isNaN(number) || number < 0) {
    console.log("Invalid input. Please enter a positive integer.");
    // document.write("Invalid input. Please enter a positive integer.");
} else {

    const factorial = (num) => {
        if (num === 0) {
            // alert("Please enter a valid number")
            console.log("Factorial of 0 is 1")
            return
        }
        let arr = Array.from(Array(num + 1).keys())
        console.log(arr.slice(1));

        for (let i = 1; i < arr.length; i++) {
            let ele = arr[i];
            // console.log(ele);
            document.write(ele);

            // Print '*' after the number except for the last number
            if (i < arr.length - 1) {
                document.write(' * ');
            } else {
                document.write(" = ")
            }
        }

        let result = arr.slice(1).reduce((a, b) => {
            // console.log(`${a} * ${b}`)
            return a * b
        })
        console.log(result);
        document.write(result);
    }
    factorial(number);
}

const factorialByForLoop = (num) => {
    let fac = 1;
    for (let index = 1; index <= num; index++) {
        fac = fac * index;
    }
    return fac;
}
console.log(factorialByForLoop(number));