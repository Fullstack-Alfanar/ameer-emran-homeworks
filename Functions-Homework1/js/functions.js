/* 	שאלה 1
.צרו פונקציה המקבלת לסוגריים ארגומנט אחד שהינו מערך מספרים
על הפונקציה לחשב ולהחזיראת ממוצע ערכי המערך
קיראו לה 3 פעמים, בכל פעם שילחו לה מערך אחר. בכל פעם קבלו את התוצאה והציגו אותה. */

//פתרון שאלה 1

let para = [];
function withreturn(para) {
  let sum = 0;
  let avg = 0;
  for (i = 0; i < para.length; i++) {
    sum = para[i] + sum;
  }
  avg = sum / para.length;
  return avg;
}

let arr1 = [2, 4, 6, 8];
let arr2 = [3, 5, 7, 3, 2];
let arr3 = [2, 10, 3, 6, 9];
console.log(withreturn(arr1));
console.log(withreturn(arr2));
console.log(withreturn(arr3));


//------------------------------------------------//

// 	שאלה 2
/*
	.צרו פונקציה המקבלת לסוגריים ארגומנט אחד שהינו מערך מספרים. 
על הפונקציה לחשב ולהחזיראת הערך המינימלי שבמערך
 קיראו לה 3 פעמים, בכל פעם שילחו לה מערך אחר. בכל פעם קבלו את התוצאה והציגו אותה
*/

//פתרון שאלה 2

let numbers = [];
function withreturn(numbers) {
  let min = 11;
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

let arr4 = [2, 4, 6, 8];
let arr5 = [3, 5, 7, 8, 1];
let arr6 = [5, 10, 4, 6, 9];
console.log(withreturn(arr4));
console.log(withreturn(arr5));
console.log(withreturn(arr6));

//------------------------------------------------//

// 	שאלה 3
/*
	צרו פונקציה המקבלת לסוגריים ארגומנט אחד שהינו מערך מחרוזות 
על הפונקציה לחשב ולהחזיר את אורך המחרוזת הארוכה ביותר שבמערך (כלומר מחזירה מספר) 
קיראו לה 3 פעמים, בכל פעם שילחו לה מערך אחר. בכל פעם קבלו את התוצאה והציגו אותה
*/

//פתרון שאלה 3

let Text = [""];
function withreturn(Text) {
  let max = 0;
  for (i = 0; i < Text.length; i++) {
    if (Text[i].length > max) {
      max = Text[i].length;
    }
  }

  return max;
}

let arr7 = ["ameer", "abc", "td"];
let arr8 = ["titanic", "ready", "banana"];
let arr9 = ["bye", "mathematics", "java"];
console.log(withreturn(arr7));
console.log(withreturn(arr8));
console.log(withreturn(arr9));


//------------------------------------------------//

/*	 שאלה 4
	צרו פונקציה המקבלת לסוגריים ארגומנט אחד שהינו מערך מחרוזות.
 על הפונקציה לחשב ולהחזיראת המחרוזת הארוכה ביותר שבמערך (כלומר מחזירה מחרוזת)
  קיראו לה 3 פעמים, בכל פעם שילחו לה מערך אחר. בכל פעם קבלו את התוצאה והציגו אותה
*/

//פתרון שאלה 4

let TexT = [""];
function withreturn(TexT) {
  let max =0;
  let longest;
  for (i = 0; i < TexT.length; i++) {
    if (TexT[i].length > max) {
      max = TexT[i].length;
      longest=TexT[i];
    }
    
  }

  return longest;
}

let arrr1 = ["ameer", "abc", "td"];
let arrr2 = ["titanic", "ready", "banana"];
let arrr3 = ["bye", "mathematics", "java"];
console.log(withreturn(arrr1));
console.log(withreturn(arrr2));
console.log(withreturn(arrr3));


//------------------------------------------------//

/*	 שאלה 5
 	צרו פונקציה המקבלת לסוגריים ארגומנט אחד שהינו מערך מספרים 
 על הפונקציה לחשב ולהחזיר כמה מספרים גדולים או שווים לממוצע ערכי המערך. קיראו לה 3 פעמים, בכל פעם שילחו מערך אחר.
  בכל פעם קבלו את התוצאה והציגו אותה
  */

//פתרון שאלה 5

let para1 = [];
function withreturn(para1) {
  let sum = 0;
  let avg = 0;

  for (i = 0; i < para1.length; i++) {
    sum = para1[i] + sum;
  }
  let equalAndBigger = [];
  avg = sum / para1.length;
  for (i = 0; i < para1.length; i++)
    if (para1[i] >= avg) {
      equalAndBigger.push(para1[i]);
    }

  return equalAndBigger;
}

let aRR1 = [2, 4, 6, 8];
let aRR2 = [3, 5, 7, 3, 2];
let aRR3 = [2, 10, 3, 6, 9];
console.log(withreturn(aRR1));
console.log(withreturn(aRR2));
console.log(withreturn(aRR3));


//------------------------------------------------//


/*	 שאלה 6
	צרו פונקציה המקבלת מספר.
על הפונקציה להחזירtrue אם המספר שקיבלה הינו מספר ראשוני (מתחלק בעצמו וב-1 בלבד) או false אם המספר שקיבלה אינו ראשוני. 
בידקו אותה
*/

//פתרון שאלה 6

function primeNumber(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}
console.log(primeNumber(35));    //בדיקה 
console.log(primeNumber(17));    //בדיקה 
console.log(primeNumber(23));    //בדיקה 
console.log(primeNumber(50));    //בדיקה 


//------------------------------------------------//

//שאלה 7

/*
	צרו פונקציה המקבלת מערך מספרים. על הפונקציה להחזיר
    . אם כל המספרים במערך הינם ראשוניים true  
  false  אם לא תחזיר 
על הפונקציה להשתמש בפונקציה שכתבתם בסעיף הקודם. בידקו אותה
*/

//פתרון שאלה 7

function ArrayNumbers([n]) {
  for (let i = 0; i < n.length; i++) {
    if (n[i] === 1) {
      return false;
    } else if (n[i] === 2) {
      return true;
    } else {
      for (var j = 2; j < n[i]; j++) {
        if (n[i] % j === 0) {
          return false;
        }
      }

      return true;
    }
  }
}

let n1 = [2, 13, 11, 19];
let n2 = [8, 9, 90, 45];
let n3 = [1, 23, 19];
let n4 = [2, 29, 39];
let n5 = [14, 36, 80, 99, 75,2];

console.log(ArrayNumbers([n1]));     //בדיקה
console.log(ArrayNumbers([n2]));    //בדיקה
console.log(ArrayNumbers([n3]));    //בדיקה
console.log(ArrayNumbers([n4]));    //בדיקה
console.log(ArrayNumbers([n5]));    //בדיקה

//------------------------------------------------//
