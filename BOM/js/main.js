window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  if (this.window.scrollY > 200) {
    navbar.setAttribute(
      "class",
      "navbar navbar-expand-lg navbar-dark bg-success"
    );
  } else {
    navbar.setAttribute(
      "class",
      " navbar navbar-expand-lg navbar-light bg-light"
    );
  }
});

var mouse = setInterval(myTimer, 1000);
function myTimer() {
  var d = new Date();
  document.querySelector(".date").innerHTML = d;
}
