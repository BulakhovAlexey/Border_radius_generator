function generateBorderRadius() {
  let top_left = document.getElementById("top_left").value;
  let top_right = document.getElementById("top_right").value;
  let bottom_left = document.getElementById("bottom_left").value;
  let bottom_right = document.getElementById("bottom_right").value;
  let result = document.getElementById("result");
  let textarea = document.getElementById("codeCss");
  let str = ` ${top_left}px ${top_right}px ${bottom_right}px ${bottom_left}px`;
  textarea.value = `border-radius:` + str;
  result.style.borderRadius = str;
}
let inputs = document.querySelectorAll("input");
for (let input of inputs) {
  input.addEventListener("input", generateBorderRadius);
}
generateBorderRadius();
