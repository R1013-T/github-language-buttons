let text = document.querySelector("text");
text.setAttribute("font-weight", "400");

let percents = {};

for (let integer = 0; integer <= 100; integer++) {
  for (let decimal = 0; decimal < 10; decimal++) {
    let percent = `${integer}.${decimal}%`;
    text.innerHTML = percent;
    percents[percent] = Math.round(text.getBBox().width);

    if (integer === 100) {
      break;
    }
  }
}

document.body.innerHTML = `let percents = ${JSON.stringify(
  percents,
  null,
  " "
)}; export { percents }`;
