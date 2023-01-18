const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    "languages-generator": path.resolve(__dirname, "tools/languages-generator/script.js"),
    "percents-generator": path.resolve(__dirname, "tools/percents-generator/script.js"),
    "themes-generator": path.resolve(__dirname, "tools/themes-generator/script.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]/bundle.js",
  },
};
