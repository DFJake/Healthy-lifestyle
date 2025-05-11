// sign in/up

var guestList = ["Ibra", "User1"];
var guestPassList = ["Ibrapass","12345"];
var guestName;
var guestPass;



// Login button - обработчик кнопки логина
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
        document.getElementById("pass").value="";
      };

    } else {
      alert("Пользователь " + document.getElementById("username").value + " не зарегистрирован");
      document.getElementById("username").value="";
      document.getElementById("pass").value="";
  }

}

// Sign-in button
document.querySelectorAll("button")[1].addEventListener("click", handleClickSignin);

function handleClickSignin(){
    guestName = document.getElementById("username").value;
    guestPass = document.getElementById("pass").value;

    if (guestList.includes(guestName) === false) {
        guestList.push(guestName);
        guestPassList.push(guestPass);
        alert(guestName + " успешно зарегистрировался!")
    } else {
      alert("Пользователь с таким именем уже занят.");
    }   

}