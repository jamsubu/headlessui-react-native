import nextra from "nextra";
import remakrCodeImport from "remark-code-import";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  mdxOptions: {
    remarkPlugins: [[remakrCodeImport, { allowImportingFromOutside: true }]],
  },
});

export default withNextra();
