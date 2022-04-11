function ValidateEmail(x) 
{
  let x = document.getElementById("email").value;
  let mailformat =/^[a-zA-Z0-9" ".!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (x.match(mailformat)) {
    alert("The Email is valid :" + " " + "True");
    return true;
  } 
  else {
    alert("The Email is invalid :" + " " + "False");
    return false;
  }
}
