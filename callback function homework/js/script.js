
//question 1

function Name()
{
    alert("My name is Ameer");
}
function cools(callback)
{
    callback();
}
cools(Name);
//----------------------------------------------------------------

//question 2

function Random()  // Returns a random integer from 0 to 100
{
    alert(Math.floor(Math.random() * 101)); 
}

function cool(callback)   // הפונקציה נתונה בשאלה
{
    callback();
}
cool(Random);

//----------------------------------------------------------------

//question 3

function nice(callback) {
	callback(42);
}

function Num(num)
{
    alert("The number is "+ num);
}
nice(Num);


//----------------------------------------------------------------


//question 4
function amazing(callback) {
	const num = callback(42, 128, 37, 81, 66);
	document.write("Num: " + num);
}
function random (x1, x2, x3, x4, x5)
{
    const Array=[x1, x2, x3, x4, x5];
    return(Array[Math.floor(Math.random() * Array.length)]);

}
amazing(random);


