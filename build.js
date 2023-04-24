const esbuild = require("esbuild");
const fs = require("fs");
const path = require("path");

async function bundle(isDevelopment) {
  const srcDir = "./src/js"; // エントリポイントがあるディレクトリを指定
  const entryPoints = fs
    .readdirSync(srcDir)
    .filter((file) => file.endsWith(".js"));

  for (const entryPoint of entryPoints) {
    await esbuild.build({
      entryPoints: [path.join(srcDir, entryPoint)],
      outfile: `dist/js/${entryPoint}`,
      bundle: true,
      minify: !isDevelopment,
      sourcemap: isDevelopment ? "inline" : false,
      target: "es2020",
    });
  }
}

const isDevelopment = process.argv.includes("--dev");
bundle(isDevelopment).catch((err) => {
  console.error(err);
  process.exit(1);
});

// --watchをどう設定するのか...
