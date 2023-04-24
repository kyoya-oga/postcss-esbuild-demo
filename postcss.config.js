const autoprefixer = require("autoprefixer");
const postcssImport = require("postcss-import");
const postcssMixins = require("postcss-mixins");
const postcssNested = require("postcss-nested");
const postcssExtendRule = require("postcss-extend-rule");
const postcssReporter = require("postcss-reporter");
const cssnano = require("cssnano");

module.exports = {
  plugins: [
    autoprefixer,
    postcssImport,
    postcssMixins,
    postcssNested,
    postcssExtendRule,
    postcssReporter({ clearReportedMessages: true }),
    cssnano({ preset: "default" }),
    // ビルド時にのみ走らせたい場合
    // ...(process.env.NODE_ENV === "production"
    //   ? [cssnano({ preset: "default" })]
    //   : []),
  ],
};
