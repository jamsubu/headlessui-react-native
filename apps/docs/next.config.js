import nextra from "nextra";
import path from "path";
import remakrCodeImport from "remark-code-import";

const currentDir = process.cwd();

const isDev = process.env.NODE_ENV === "development";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  mdxOptions: {
    remarkPlugins: [
      [
        remakrCodeImport,
        {
          allowImportingFromOutside: true,
          rootDir: isDev ? path.resolve(currentDir, "..", "..") : currentDir,
        },
      ],
    ],
  },
});

export default withNextra();
