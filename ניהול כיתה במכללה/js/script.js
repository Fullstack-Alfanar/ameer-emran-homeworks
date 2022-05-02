document.getElementById("btn").addEventListener("click", stam_func);

var sum = 0;
var arr;
if (localStorage.getItem("storedata") != null) {
  arr = JSON.parse(localStorage.getItem("storedata"));
}
// IN IF (FOR OLD DATA)
else {
  arr = [];
}
function stam_func() {
  let elemnts = [];
  elemnts[0] = document.getElementById("student");
  elemnts[1] = document.getElementById("score");
  elemnts[2] = document.getElementById("times");
  elemnts[3] = document.getElementById("img");
  elemnts[4] = document.getElementById("mytable");

  if (elemnts[0].value == "") {
    alert("please enter a student name");
  } else if (elemnts[1].value == "") {
    alert("please enter a student score");
  } else if (isNaN(elemnts[1].value)) {
    alert("please enter a number for score");
  } else {
    let ele1 = document.createElement("label");
    let ele2 = document.createElement("label");
    let ele3 = document.createElement("img");
    ele3.className = "str";
    let ele4 = document.createElement("label");

    let ele5 = document.createElement("td");
    let ele6 = document.createElement("td");
    let ele7 = document.createElement("td");
    let ele8 = document.createElement("td");

    let ele9 = document.createElement("tr");
    ele1.textContent = elemnts[0].value;
    ele2.textContent = elemnts[1].value;
    ele3.src = elemnts[3].value;
    ele4.textContent = elemnts[2].value;
    ele5.appendChild(ele1);
    ele6.appendChild(ele2);
    ele7.appendChild(ele3);
    ele8.appendChild(ele4);
    ele9.appendChild(ele5);
    ele9.appendChild(ele6);
    ele9.appendChild(ele7);
    ele9.appendChild(ele8);

    elemnts[4].appendChild(ele9);

    sum += Number(elemnts[1].value);
    var lines = elemnts[4].getElementsByTagName("tr");
    let x1 = document.getElementById("num");
    x1.textContent = lines.length;
    let x2 = document.getElementById("avg");
    x2.textContent = sum / lines.length;

    let y = {
      studentname: elemnts[0].value,
      studentscore: elemnts[1].value,
      studentnumber: lines.length,
      studentaverage: x2.textContent,
    };

    arr.push(y);
    elemnts[0].value = "";
    elemnts[1].value = "";
    elemnts[2].value = "";
    elemnts[3].value = "";
    localStorage.setItem("storedata", JSON.stringify(arr));
  }
}
