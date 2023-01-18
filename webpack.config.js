const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    "themes-generator": path.resolve(__dirname, "tools/themes-generator/script.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]/bundle.js",
  },
};
