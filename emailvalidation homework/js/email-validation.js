function ValidateEmail(Stremail) {
  const mailformat =
    /^([!#-\'*+\/-9=?A-Z^-~\\\\]{1,64}(\.[!#-\'*+\/-9=?A-Z^-~\\\\-]{1,64})*|"([\]!#-[^-~\ \t\@\\\\]|(\\[\t\ -~]))+")@([0-9A-Z]([0-9A-Z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Z]([0-9A-Z-]{0,61}[0-9A-Za-z])?))+$/i;
  if (Stremail.value.match(mailformat)) {
    alert("True-The email address is valid!");
    document.Form.mail.focus();
    return true;
  } else {
    alert("False-You have entered an invalid email address!");
    document.Form.mail.focus();
    return false;
  }
}
