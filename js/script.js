
// calculator

document.getElementById("calc-ugl").addEventListener("click", handleClickCalcugl);

function handleClickCalcugl(){
  var v_weight = document.getElementById("weight-ugl").value;
  document.getElementById("labcalc").innerHTML = (v_weight * 3).toFixed(1) + " г/д";
}

document.getElementById("calc-fat").addEventListener("click", handleClickCalcfat);

function handleClickCalcfat(){
  var v_weight_fat = document.getElementById("weight-fat").value;
  document.getElementById("labcalc-fat").innerHTML = (v_weight_fat * 1).toFixed(1) + " г/д";
}

document.getElementById("calc-bel").addEventListener("click", handleClickCalcbel);

function handleClickCalcbel(){
  var v_weight_bel = document.getElementById("weight-bel").value;
  document.getElementById("labcalc-bel").innerHTML = (v_weight_bel * 0.8).toFixed(1) + " г/д";
  
}



// sign in/up

var guestList = ["Angela", "User1"];
var guestPassList = ["Angelapass","12345"];
var guestName;
var guestPass;



// Войти - обработчик кнопки логина
document.querySelectorAll("button")[0].addEventListener("click", handleClickLogin);

function handleClickLogin(){
  guestName = document.getElementById("username").value;

  if (guestList.includes(guestName))  {

      var gNameNumber = guestList.indexOf(guestName);
      guestPass = document.getElementById("pass").value;

      if (guestPass == guestPassList[guestList.indexOf(guestName)]) {
        alert("Добро пожаловать, "+guestName+"!");

      } else {
        alert("Неверный пароль!");
      };

    } else {
      alert("Пользователь " + document.getElementById("username").value + " не зарегистрирован");
      document.getElementById("username").value="";
      document.getElementById("pass").value="";
  }

}

// зарегистрироваться
document.querySelectorAll("button")[1].addEventListener("click", handleClickSignin);

function handleClickSignin(){
    guestName = document.getElementById("username").value;
    guestPass = document.getElementById("pass").value;

    if (guestList.includes(guestName) == false) {
        guestList.push(document.getElementById("username").value);
        guestPassList.push(document.getElementById("pass").value);
    } else {
      alert("Пользователь с таким именем уже существует.");
    }

}



// Слайдер

var width = 312;
var list = document.querySelector("ul");
var pictures = document.querySelectorAll("li");  
var position = 0; 

document.querySelector(".prev").onclick = function() {
    position += width;
    position = Math.min(position, 0)
    list.style.marginLeft = position + "px";
};

document.querySelector(".next").onclick = function() {
    position -= width;
    position = Math.max(position, -width * (pictures.length - 1));
    list.style.marginLeft = position + "px";
};