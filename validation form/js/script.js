function validate_func() {
  var x1 = document.getElementById("fname").value;
  var x2 = document.getElementById("age").value;
  var x3 = document.getElementById("email").value;
  var x4 = document.getElementById("fid").value;
  Validatefname(x1);
  Validateage(x2);
  ValidateEmail(x3);
  validateid(x4);

}

function Validatefname(name) {
  if (String(name).length >= 2 && String(name).length < 8) {
    alert("The name is valid");
  } 
  else {
    alert("The name is invalid");
  }
}

function Validateage(age) {
  if (age > 0 && age <= 100) {
    alert("The age is valid");
  } 
  else {
    alert("The age is invalid");
  }
}

function ValidateEmail(email) {
  const mailformat =/^[a-zA-Z0-9" ".!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (mailformat.test(String(email).toLowerCase())) {
    alert("The email is valid");
  }
   else {
    alert("The email is invalid");
  }
}

function validateid(id)
 {
    while (id.length <9 || id.length>9) {        //checking the ID length//
        if (id.length == 0 || isNaN(id)) {   //if we don't enter any number//   
            var NUMID = prompt("Enter your id number");
            id += NUMID;
        }
        else {   // if the user enter id number less than 9 digits
            var NUMID = prompt("Enter an ID with 9 digits");
            id += NUMID;

        }
    }
  const Arr = [1, 2, 1, 2, 1, 2, 1, 2, 1]; 
  var ar1 = [];  //An aray which contains all digits after Multiplication oepration with its weight 
  for (let i = 0; i < id.length; i++) {
    ar1[i] = Number(Arr[i]) * Number(id[i]);
  }
  var ar2 = [];     //An array which contains the same numbers of array 1 and the sum of digits of a number consisting more than one digit
  for (let j = 0; j < ar1.length; j++) {
    if (ar1[j] <= 9) {
        ar2[j] = ar1[j];
    } else {
        ar2[j] = parseInt(ar1[j] / 10) + (ar1[j] % 10);
    }
  }
  var sum = 0;
  for (let x = 0; x < ar2.length - 1; x++) {
    sum = sum + ar2[x];    // The sum of all the (8) elements in array 2.
  }
  var TestID = sum + ar2[ar2.length - 1]; //The sum of all the (8) elements in array2 +the nineth digit
  if (TestID % 10 == 0) {
    alert("This ID is valid ");
  } 
  else {
    alert("This ID is invalid ");
  }
}
