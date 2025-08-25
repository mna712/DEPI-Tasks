function convertDollar() {
  var dollar = document.getElementById("dollar").value;
  var result = document.getElementById("result");

  if (dollar >= 0) {
    result.innerHTML = dollar * 50;
  } else if (dollar < 0) {
    document.getElementById("result").innerHTML = "Enter a positive number";
  } else {
    document.getElementById("result").innerHTML = "NaN";
  }

  return false;
}
