//arrays homework
//question 1
var names = [];
for (var i = 0; i < 5; i++) {
  names[i] = prompt("enter a name");
}
console.log(names[(i = 0)], names[(i = 4)]); //השאם הראשון והאחרון
console.log(names[(i = 0)]);     //השאם הראשון
console.log(names[(i = 4)]);    // השאם האחרון
var reversed = names.reverse(); 
console.log(reversed);  // השמות בסדר הפוך

//---------------------------------------------------------------------------------//

//question 2
var fruits= [];
for (var i=0; i<4; i++){
    fruits[i]=prompt("enter the fruit name");
}
console.log(fruits[i=0]);
console.log(fruits[i=1]);
console.log(fruits[i=2]);
console.log(fruits[i=3]);
for(i=0; i<4; i++){
  console.log(fruits[i]);
}



//question 3
//---------------------------------------------------------------------------------//
var grades = [];
for (var i = 0; i < 10; i++) {
  grades[i] = +prompt("enter your grade");
  if (grades[i] >= 0 && grades[i] <= 100) {
    console.log("The valid grade is :" + grades[i]);
  } else if (grades[i] < 0 || grades[i] > 100) {
    console.log("The invalid grade is :" + grades[i]);
}
}

//---------------------------------------------------------------------------------//

//question 4

var numbers = [
  55, 99, 88, 56, 100, 87, 45, 67, 95, 69, 75, 82, 77, 91, 35, 52, 18, 29, 33,
  66,
];
var sum = 0;
var max = 0,
  min = 101;
for (var i = 20; i >= 0; i--) {
  if (numbers[i] >= 1 && numbers[i] <= 100) {
    console.log(numbers[i]);
  }
}

for (i = 0; i < numbers.length; i++) {
  sum = numbers[i] + sum;
  avg = sum / 20;
  if (numbers[i] > max) {
    max = numbers[i];
  } else if (numbers[i] < min) {
    min = numbers[i];
  }
}

console.log("the sum of the numbers is: "+ sum);
console.log("the average of the numbers is: "+ avg);
console.log("The max number is: "+ max);
console.log("the min number is: "+ min);

//---------------------------------------------------------------------------------//

//question 20

var n = +prompt("enter a number");
for (var i = 1; i <= n; i++) {
  for (var j = 1; j <= i; j++) {
    document.write(j + "");
  }
  document.write("<br>");
}


//---------------------------------------------------------------------------------//

//question 21

var n = +prompt("enter a number");
for (var i = 1; i <= n; i++) {
  for (var j = n; j >=1; j--) {
    document.write(j + "");
  }
  document.write("<br>");
}


//---------------------------------------------------------------------------------//

//question 22
var num = +prompt("enter a number");
while (num > 0) {
  for (i = num; i >= 1; i--) {
    alert(i);
  }
  var num = +prompt("enter a number");
}

//---------------------------------------------------------------------------------//

//questions  אתגר

//question 1
var n = +prompt("enter a number");
for (i = 1; i <= n; i++) {
  for (j = 1; j <= n; j++) {
    document.write("*");
  }
  document.write("<br>");
}

//---------------------------------------------------------------------------------//

//question 2
var num1 = +prompt("enter a hight");

var num2 = +prompt("enter a length");

for (i = 1; i <= num1; i++) {
  for (j = 1; j <= num2; j++) {
    document.write("*");
  }
  document.write("<br>");
}

//---------------------------------------------------------------------------------//

//question 7 אתגר

var n = +prompt("enter a number");
for(var i=0; i<=n; i++){
    document.write("</br>");
for( var j = n-i; j <= n; j++ )
{
document.write( "" );
}
for ( var j = 0; j < n-i; j++ )
{

document.write( "*" );
}
} 

//another solution for question 7
var n = +prompt("enter a number");
let y = "*";
for (let i = 0; i < n; i++) {
  console.log(y);
  y += "*";
}
//---------------------------------------------------------------------------------//

