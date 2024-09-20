
var headerElement = document.getElementById("header");
var colors = ["red", "green", "purple", "orange"];

headerElement.addEventListener("click", function() {
    var randomIndex = Math.floor(Math.random() * colors.length);
    headerElement.style.backgroundColor = colors[randomIndex];
});
var headerButton = document.getElementById("header");
var colors = ["red", "green", "purple", "orange"];

headerButton.addEventListener("click", function () {
    var randomIndex = Math.floor(Math.random() * colors.length);
    headerButton.style.backgroundColor = colors[randomIndex];
});
var backgroundbutton = document.getElementById("background");
var colors = ["red", "green", "purple", "orange"];

backgroundbutton.addEventListener("click", function () {
    var randomIndex = Math.floor(Math.random() * colors.length);
    backgroundbutton.style.backgroundColor = colors[randomIndex];
});