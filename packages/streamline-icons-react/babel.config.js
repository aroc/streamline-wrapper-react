module.exports = function (api) {
  api.cache(true);
  const presets = [
    "@babel/preset-env",
    ["react-app", { absoluteRuntime: false }]
  ];
  const plugins = [];
  const env = {};

  return {
    presets,
    plugins,
    env,
  };
};
