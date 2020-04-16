module.exports = function (api) {
  api.cache(true);
  const presets = [
    "@babel/preset-env",
    ["react-app", { absoluteRuntime: false }]
  ];
  const plugins = [];

  return {
    presets,
    plugins
  };
};
