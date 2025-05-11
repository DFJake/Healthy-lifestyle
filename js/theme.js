/* темная тема */


var page = document.querySelector(".body");
var themeButton = document.querySelector(".themeButton");

themeButton.onclick = function() {
page.classList.toggle("lightTheme");
page.classList.toggle("darkTheme");
};
