/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

/*const multi = `Once upon a time,
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
*/
const greenbtn = document.querySelector(".green");

greenbtn.addEventListener("click", () => alert("Thanks! You're okay too"));



const bluebtn = document.querySelector(".blue");

bluebtn.addEventListener("click", () => {
    let readMoreDiv = document.querySelector("#readmore");
    if (readMoreDiv.style.display === "block") {
      readMoreDiv.style.display = "none";
    } else {
      readMoreDiv.style.display = "block";
    }
});


const redbtn = document.querySelector(".red");

redbtn.addEventListener("click", () => {
  let username = prompt("What's your name?");
  let welcomeUserDiv = document.querySelector("#welcomeuser");
  welcomeUserDiv.style.display = "block";
  document.querySelector("#welcomeuser").innerHTML 
    = `<p> Hello, ${username}, looking forward to hearing your playlists!.</p>
    <p> Click this message to close it.</p>`;
  welcomeUserDiv.style.cursor = "pointer";


  
  
});

welcomeUserDiv.addEventListener("click", () => {welcomeuserDiv.style.display = "none"
                                               
});