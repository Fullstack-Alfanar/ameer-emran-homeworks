//question 1

var elemnt1 = document.getElementById("savee");
var elemnt2 = document.getElementById("email");
var elemnt3 = document.getElementById("loadd");
elemnt1.addEventListener("click", myFunction1);
elemnt3.addEventListener("click", myFunction2);

function myFunction1() {
  cookievalue = elemnt2.value;
  document.cookie = "EMAIL=" + cookievalue;
  console.log(document.cookie);
}
function myFunction2() {
  alert(cookievalue);
}

//----------------------------------------------------------------

//question 2

var x1 = document.getElementById("savee");
var x2 = document.getElementById("phone");
var x3 = document.getElementById("loadd");
x1.addEventListener("click", myFunction3);
x3.addEventListener("click", myFunction4);

function myFunction3() {
  cookievalues = x2.value;
  document.cookie = "PHONE=" + cookievalues;
  console.log(document.cookie);
}
function myFunction4() {
  alert(cookievalues);
}

//----------------------------------------------------------------

//question 3

var num1 = document.getElementById("fnamelname");
var num2 = document.getElementById("Phone");
var num3 = document.getElementById("Email");
var num4 = document.getElementById("btn");
num4.addEventListener("click", Func);

var arr1; // an array for saving all the inputs in localstorage
var Name;
var phone;
if (localStorage.getItem("DataStore") != null) {
  arr1 = JSON.parse(localStorage.getItem("DataStore"));
}
// IN IF (FOR OLD DATA)
else {
  arr1 = [];
}

function Func() {
  if (
    num1.value.length > 2 &&
    num1.value.length < 30 &&
    num2.value.length > 2 &&
    num2.value.length < 30 &&
    num3.value.length > 2 &&
    num3.value.length < 30
  ) {
    let y = {
      Name: num1.value,
      Phone: num2.value,
      Email: num3.value,
    };
    arr1.push(y);

    localStorage.setItem("Name", JSON.stringify(num1.value));
    localStorage.setItem("phone", JSON.stringify(num2.value));
    localStorage.setItem("DataStore", JSON.stringify(arr1));
    console.log("The Name is " + num1.value);
    console.log("The phone number is " + num2.value);
    console.log(arr1);
  } else {
    alert("All the inputs must be between 2 to 30 charecters");
  }
}

//----------------------------------------------------------------

// etgar question
let ele1 = document.getElementById("txt");
let ele2 = document.getElementById("btn1");
let ele3 = document.getElementById("btn2");
ele2.addEventListener("click", Savetolocal);
ele3.addEventListener("click", Searchfunc);
let arrsearch = [];

function Savetolocal() {
  if (!(ele1.value == "" || ele1.value == null)) {
    arrsearch.push(ele1.value);
  }
  localStorage.setItem("localstore", JSON.stringify(arrsearch));
}
function Searchfunc() {
  if (!(ele1.value == "" || ele1.value == null)) {
    let localstore = JSON.parse(localStorage.getItem("localstore"));
    for (let i of localstore) {
      if (i == ele1.value) {
        return alert(i);
      } else {
        alert("The input content not exist");
      }
    }
  }
}
