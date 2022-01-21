const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

reader.question("Please enter a passsword: ", function (input) {
    tokens = input.toLowerCase()
    password = tokens

    let valid = "Password is valid"
    let notValid = "Password not valid"

    // checks, password cannot be less than 10 chars
    if (password.length < 10) {
        console.log(`${notValid}, must be at least 10 characters in length`)
    }
    // checks, passsword cannot start with a number 
    else if (password[0] === "1" || password[0] === "2" || password[0] === "3" || password[0] === "4" || password[0] === "5" || password[0] === "6" || password[0] === "7" || password[0] === "8" || password[0] === "9" || password[0] === "0") {
        console.log(`${notValid}, cannot begin with a number`)
    }
    // checks, password cannot start with "password", outputs ASC11 Art
    else if (password[0] === "p" && password[1] === "a" && password[2] === "s" && password[3] === "s" && password[4] === "w" && password[5] === "o" && password[6] === "r" && password[7] === "d") {
        console.log(` ____  _____  _    _ _    _
|  _ \\|  __ \\| |  | | |  | |
| |_) | |__) | |  | | |__| |
|  _ <|  _  /| |  | |  __  |
| |_) | | \\ \\| |__| | |  | |
|____/|_|  \\_\\\\____/|_|  |_|`)
        console.log(`${notValid}, cannot begin with "password"`)
    } else {
        console.log(valid)
    }

    reader.close();
})