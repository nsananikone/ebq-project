const btn = document.querySelectorAll(".btn").length;
const background = document.querySelector(".hero");
const footer = document.querySelector("footer");

let index = 0;

const colors = ["salmon", "green", "blue", "purple"];

for (let i = 0; i < btn; i++) {
  document
    .querySelectorAll(".btn")
    [i].addEventListener("click", function onClick() {
      background.style.backgroundColor = colors[index];
      footer.style.backgroundColor = colors[index];

      index = index >= colors.length - 1 ? 0 : index + 1;
    });
}
