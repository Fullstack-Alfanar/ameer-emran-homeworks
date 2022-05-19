$(document).ready(() => {
  $("#btn").click(() => {
    let First = $("#first");
    let Second = $("#second");
    if (First.val() == "" || First.val() == null) {
      alert("please choose the first number");
    } else if (Second.val() == "" || Second.val() == null) {
      alert("please choose the second number");
    } else if (First.val() <= Second.val()) {
      for (let i = First.val(); i <= Second.val(); i++) {
        $("#selectbox").append($(`<option value="${i}">${i}</option>`));
      }
    } else if (First.val() >= Second.val()) {
      for (let i = Second.val(); i <= First.val(); i++) {
        $("#selectbox").append($(`<option value="${i}">${i}</option>`));
      }
    }
  });
});
