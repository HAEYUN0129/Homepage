
const list = document.querySelector(".subMenu");
const a = document.getElementById("border");

list.addEventListener("mouseover", function() {
  a.classList.add("highlight");
});

list.addEventListener("mouseout", function() {
  a.classList.remove("highlight");
});
