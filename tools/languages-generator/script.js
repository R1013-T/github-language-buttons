import axios from "axios";
import yaml from "js-yaml";

let text = document.querySelector("text");

axios({
  method: "get",
  url: "https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml",
}).then((response) => {
  let linguist = yaml.load(response.data);
  let languages = {};
  let longest = { name: "", width: 0, color: "" };

  for (let name in linguist) {
    if (!/[ -~]/.test(name)) {
      console.log(name);
      continue;
    }

    let color = linguist[name].color;

    if (!color) {
      continue;
    }

    text.innerHTML = name;
    let width = Math.round(text.getBBox().width);
    color = color.toLowerCase();
    languages[name] = { width: width, color: color };

    if (width > longest.width) {
      longest = { name: name, width: width, color: color };
    }
  }

  document.body.innerHTML = `let languages = ${JSON.stringify(
    languages,
    null,
    " "
  )}; export { languages };`;
  alert(`let longest = ${JSON.stringify(longest)};`);
});
