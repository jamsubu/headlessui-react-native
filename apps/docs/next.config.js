const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

module.exports = withNextra({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      include: /packages\/headlessui-react-native-example-ui\/src/,
      use: "raw-loader",
    });

    return config;
  },
});
