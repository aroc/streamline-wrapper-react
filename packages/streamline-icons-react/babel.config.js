module.exports = function (api) {
  api.cache(true);
  const presets = [
    "@babel/preset-env",
    ["react-app", { absoluteRuntime: false }]
  ];
  const plugins = [];
  const env = {};
  const ignore = ["src/**/*.test.js", "src/**/*.spec.js", "src/**/*.test.js.snap", "src/**/*.spec.js.snap", "src/setupTests.js"];

  return {
    presets,
    plugins,
    env,
    ignore
  };
};
