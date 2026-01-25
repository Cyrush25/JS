let firstName = "John";
let lastName = "Doe";

firstName = 42;
lastName = true;

console.log("First Name:", firstName, typeof firstName);
console.log("Last Name:", lastName, typeof lastName);


// Accepting user input using window.prompt

// let username = window.prompt("Enter your username:");
// console.log("Username:", username, typeof username);

// Accepting user input using html input element

document.getElementById("mySubmit").onclick = function() {
    let username = document.getElementById("myText").value;
    console.log("Username:", username, typeof username);
    document.getElementById("myh1").textContent = `Welcome, ${username}!`;
}