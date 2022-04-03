/// שאלה 1
/*
	צרו פונקציה שקולטת מהמשתמש שם פרטי ע"י תיבת promptאחת ואז 
שם משפחה ע"י תיבת promptשנייה ומציגה את השם, קיראו לה פעמיים.
*/

/// פתרון שאלה 1


var fname= prompt("enter your first name");
var lname= prompt("enter your last name");
function Name(fname,lname)
{
alert(fname + " " + lname);
}
Name(fname,lname);
Name(fname,lname);


//-----------------------------------------------------------//

/// שאלה 2
/*
	צרו פונקציה המקבלת שלושה ארגומנטים מספריים (לסוגריים)
 ומציגה את הסכום והממוצע שלהם.                          
קיראו לה שלוש פעמים:                                   
א.	קריאה ראשונה – שליחת ערכי Hard-Coded.              
ב.	קריאה שנייה – שליחת שלושה מספרים רנדומליים.       
ג.	קריאה שלישית – שליחת שלושה מספרים מהמשתמש.        
*/

/// פתרון שאלה 2
// סעיף א

function Numbers(a,b,c)
{
    let sum=a+b+c;
    avg= sum/3;
    console.log("The sum is: " + sum);
    console.log("The average is: " + avg);
}

Numbers(5,4,6);  //סעיף א

//סעיף ב
var a=Math.random()*10;
var b=Math.random()*10;
var c=Math.random()*10;
Numbers(a,b,c);


//סעיף ג
var a= +prompt("enter the first number");
var b= +prompt("enter the second number");
var c= +prompt("enter the third number");
Numbers(a,b,c)


//-----------------------------------------------------------//

/// שאלה 3
/*
	קילטו מהמשתמש מספר n, הציגו ריבוע מלא כוכביות בגודל nעל n.
יש לחלק את התוכנית לפונקציות:                               
א.	פונקציה המקבלת ארגומנט לסוגריים (len)                          
המייצג מספר כוכביות להצגה בשורה אחת ומציגה כוכביות בשורה אחת.
ב.	פונקציה המקבלת ארגומנט לסוגריים (size) המייצג את גודל הריבוע 
ומציגה את כל הריבוע אך ע"י שימוש בפונקציה הקודמת.             
בסקריפט הראשי, יש לקלוט מהמשתמש מספר nולשלוח לפונקציה השנייה להצגת הריבוע.
*/


/// פתרון שאלה 3
var n = +prompt("enter a number");
function len(n) {
  for (var i = 0; i < n; i++) {
    document.write("*");
  }
}
function size(n) {
  for (var i = 0; i < n; i++) {
    len(n);
    document.write("<br>");
  }
}
size(n);

//-----------------------------------------------------------//

/// שאלה 4
/*
	קילטו מהמשתמש מספר n, הציגו משולש מספרים כתלות ב-n.               
אם נקלט לדוגמה 4, יש להציג:                                        
1
1 2
1 2 3
1 2 3 4
	יש לחלק את התוכנית לשתי פונקציות:                                   
	פונקציה ראשונה מקבלת מספר limitומציגה שורה של מספרים מ-1ועד limit.
	פונקציה שנייה מקבלת מספר sizeומציגה את כל המשולש                   
   בגודל sizeע"י שימוש בפונקציה הראשונה.                               
	בסקריפט הראשי יש לקלוט את גודל המשולש מהמשתמש ולקרוא לפונקציה השנייה. 

*/


/// פתרון שאלה 4
function limit(n) {
  for (var i =1 ; i <=n ; i++) {
    document.write(i);
  }
}

function size(n) {
  for (var i = 1; i <= n; i++) {
    limit(i);
    document.write("<br>");
  }
}
size(prompt("enter a number"));
//-----------------------------------------------------------//

/// שאלה 5
/*
	קילטו מהמשתמש מספר nוהציגו משולש כוכביות מלא הפוך. אם נקלט לדוגמה 4, יש להציג: 
* * * *
* * *
* *
*
     יש לחלק לשתי פונקציות:                                                             
א.	הצגת שורת כוכביות.                                                             
ב.	הצגת כל המשולש.                                                                 
*/

/// פתרון שאלה 5

function row(n) {
  for (var i =0 ; i <n ; i++) {
    document.write("*");
  }
}

function size(n) {
  for (var i = n; i >= 1; i--) {
    row(i);
    document.write("<br>");
  }
}
size(prompt("enter a number"));

//-----------------------------------------------------------//

/// שאלה 6
/*
	קילטו מהמשתמש מספר n, הציגו את הצורה הבאה כתלות ב-n, לדוגמה עבור 4יש להציג:
1 2 3 4 * * * *
1 2 3 * * *
1 2 * *
1 *
	חלקו את התוכנית לפונקציות מתאימות.                                            

*/

/// פתרון שאלה 6

var n = +prompt("enter a number");
function len(n) {
  for (var i = 1; i <= n; i++) {
    document.write(i);
  }
  for (var i = 1; i <= n; i++){
    document.write("*");
  }

}
function size(n) {
  for (var i = n; i >= 1; i--) {
    len(i);
    document.write("<br>");
  }
}
size(n);

//-----------------------------------------------------------//

/// שאלה 7
/*
	קילטו מהמשתמש מספר n, הציגו את שני המשולשים הבאים כתלות ב-n, לדוגמה עבור 4יש להציג: 
* * * *
* * *
* *
*
*
* *
* * *
* * * *

*/

/// פתרון שאלה 7
function row1(n) {
  for (var i =0 ; i <n ; i++) {
    document.write("*");
  }
}
function row2(n) {
  for (var i =0 ; i <n ; i++) {
    document.write("*");
  }
}

function size(n) {
  for (var i = n; i >= 0; i--) {
    row1(i);
    document.write("<br>");
  }
  for (var i = 0; i <=n ; i++) {
    row2(i);
    document.write("<br>");
  }
}

size(prompt("enter a number"));

