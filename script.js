// ====================
// Part 1: Basics
// ====================
function checkAge() {
  let age = prompt("Enter your age:");
  if (age >= 18) {
    document.getElementById("ageResult").innerText = "You are an adult.";
  } else {
    document.getElementById("ageResult").innerText = "You are a minor.";
  }
}

// ====================
// Part 2: Functions
// ====================

// Function 1: Greeting
function showGreeting(name) {
  let message = "Hello, " + name + "! Welcome to JavaScript.";
  document.getElementById("greeting").innerText = message;
}

// Function 2: Calculate Total
function calculateTotal(price, quantity) {
  return price * quantity;
}
console.log("Total cost (5 items @ 100):", calculateTotal(100, 5));

// ====================
// Part 3: Loops
// ====================

// Loop 1: Countdown
function showCountdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear list
  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.innerText = i;
    list.appendChild(li);
  }
}

// Loop 2: Array iteration
let fruits = ["Apple", "Banana", "Mango"];
fruits.forEach(fruit => console.log("I like:", fruit));

// ====================
// Part 4: DOM Manipulation
// ====================
function toggleHighlight() {
  let text = document.getElementById("domText");
  text.classList.toggle("highlight");
}
