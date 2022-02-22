document.querySelector("#check").addEventListener("click", check);
let h2 = document.getElementById("placeToSee");
function check() {
  let result;
  const day = document.querySelector("#day").value.toLowerCase();
  //Conditionals go here
  if (day === "sunday" || day === "saturday") {
    result = "Weekend";
  } else if (day == "monday" || day == "wednesday" || day == "friday") {
    result = "Boring day";
  } else if (day == "tuesday" || day == "thursday") {
    result = "Class day";
  } else if (day == "") {
    result = "Add a value";
  } else {
    result = "Not a day";
  }
  h2.innerHTML = result;
}
