import { getSizes } from "./sizes.js";
import { languages } from "./languages.js";

async function createBar(barWidth) {
  let totalWidth = parseInt(barWidth);

  if (totalWidth <= 0) {
    throw new Error(`${barWidth} is not a valid width`);
  }

  let sizes = new Map(
    Object.entries(await getSizes()).sort(([_, a], [__, b]) => {
      return b - a;
    })
  );

  let totalSize = sizes.get("totalSize");
  sizes.delete("totalSize");
  let x = 0;
  let rects = "";

  for (let [languageName, size] of sizes) {
    let language = languages[languageName];

    if (!language) {
      throw new Error(`${languageName} is not supported`);
    }

    let width = Math.round((totalWidth * size) / totalSize);

    rects += `
      <rect x="${x}" y="0" width="${width}" height="8" fill="${language.color}"
            mask="url(#mask)"
      ></rect>
    `;

    x += width;
  }

  return `
    <svg width="${totalWidth}" height="8" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask">
        <rect x="0" y="0" width="${totalWidth}" height="8" rx="4" ry="4" fill="#ffffff"></rect>
      </mask>
      ${rects}
    </svg>
  `;
}

export { createBar };
