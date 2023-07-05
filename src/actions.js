let button = document.querySelector(".nowChanging");
button.addEventListener("click", letsGoDarkBaby);

function letsGoDarkBaby() {
  let body = document.querySelector("body");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}
