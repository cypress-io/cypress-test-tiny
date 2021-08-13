// babel.config.js
module.exports = (api) => {
  let plugins = [];

  if (api.env() !== "production") {
    plugins = [...plugins];
  }

  return {
    sourceMaps: true,
    presets: ["@babel/preset-react", "@babel/preset-env"],
    plugins,
  };
};
