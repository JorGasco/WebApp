/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

const multi = `Once upon a time,
In a land far far away,
there lived a witch,
who could change night into day`
console.log(multi)


let a = prompt("first number");
let b = prompt("second number");

function multiply(a, b) {
  return a * b
}

let answer = multiply(a, b)
console.log(answer)

document.write("you answer is " + answer + " ! <br>");