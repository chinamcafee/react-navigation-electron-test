const createExpoWebpackConfigAsync = require("@expo/webpack-config");
const { getPaths } = require("@expo/webpack-config/env");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require('path');


const root = path.resolve(__dirname, '.');
const node_modules = path.join(__dirname, 'node_modules');

module.exports = async function () {
  const projectRoot = process.cwd();
  const env = {
    platform: "web",
    projectRoot,
    locations: getPaths(projectRoot),
    mode: "development",
    https: false,
    pwa: false,
  };

  const config = await createExpoWebpackConfigAsync(env);


  config.output.path = __dirname + "/.webpack/renderer/";
  config.output.filename = "main_window/[name].js";
  config.mode = "none";
  config.target = "electron-renderer";

  config.externals = {
    realm: "commonjs realm",
    "@realm/react": "commonjs @realm/react",
    "react": "commonjs react",
    "nanoid/non-secure": "commonjs nanoid/non-secure",
  };
  config.module.rules.push({
    test: /\.node$/,
    use: [
      "node-loader",
      {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "addons",
          publicPath: "../../app.asar.unpacked/addons",
        },
      },
    ],
  });

  config.module.rules.push({
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  });

  const ttfLoaderConfiguration = {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    type: "asset/resource",
  };

  config.module.rules.push(ttfLoaderConfiguration);
  
  // Customize the config before returning it.
  config.plugins.push(new NodePolyfillPlugin());
  config.resolve.plugins = [
    new TsconfigPathsPlugin({ configFile: "./tsconfig.json" }),
  ];

  config.resolve.alias = {
    '~': path.resolve(__dirname, 'src'),
  }
  const configResult = JSON.stringify(config);
  console.log("expo config:", { configResult });
  return config;
};
