import { languages } from "./languages.js";
import { themes } from "./themes.js";
import { getSizes } from "./sizes.js";
import { percents } from "./percents.js";

async function createButton(languageName, themeName) {
  let language = languages[languageName];

  if (!language) {
    throw new Error(`${languageName} is not supported`);
  }

  let theme = themes[themeName.replaceAll("-", "_")];

  if (!theme) {
    throw new Error(`${themeName} is not a theme`);
  }

  let sizes = await getSizes();
  let percent = `${(((sizes[languageName] || 0) * 100) / sizes.totalSize).toFixed(1)}%`;
  let totalWidth = language.width + percents[percent] + 52;

  return `
    <svg width="${totalWidth}" height="28" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="${totalWidth}" height="28" rx="6" ry="6"
            fill="${theme.border_color}"
      ></rect>
      <rect x="1" y="1" width="${totalWidth - 2}" height="26" rx="5" ry="5"
            fill="${theme.background_color}"
      ></rect>
      <circle cx="20" cy="14" r="4" fill="${language.color}"></circle>
      <text x="32" y="18"
            font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica,
                        Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'
            "
            font-size="12" font-weight="600" fill="${theme.language_color}"
      >
        ${languageName}
      </text>
      <text x="${language.width + 36}" y="18"
            font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica,
                        Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'
            "
            font-size="12"
            fill="${theme.percent_color}"
      >
        ${percent}
      </text>
    </svg>
  `;
}

export { createButton };
