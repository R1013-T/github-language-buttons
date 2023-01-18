import colors from "@primer/primitives/dist/js/colors";

let themes = {};

for (let theme in colors) {
  let border_color = colors[theme].btn.border;
  let background_color = colors[theme].btn.bg;

  if (border_color.startsWith("rgba")) {
    border_color = border_color.slice(5, -1).split(",");
    let alpha = parseFloat(border_color[3]);

    border_color = `#${(
      Math.round(parseInt(background_color.slice(1, 3), 16) * (1 - alpha)) +
      Math.round(parseInt(border_color[0]) * alpha)
    ).toString(16)}${(
      Math.round(parseInt(background_color.slice(3, 5), 16) * (1 - alpha)) +
      Math.round(parseInt(border_color[1]) * alpha)
    ).toString(16)}${(
      Math.round(parseInt(background_color.slice(5), 16) * (1 - alpha)) +
      Math.round(parseInt(border_color[2]) * alpha)
    ).toString(16)}`;
  }

  themes[theme] = {
    border_color: border_color,
    background_color: background_color,
    language_color: colors[theme].fg.default,
    percent_color: colors[theme].fg.muted,
  };
}

document.body.innerHTML = `let themes = ${JSON.stringify(themes, null, " ")}; export { themes };`;
