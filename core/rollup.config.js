import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const entries = ["index", "components/index", "hooks/index", "utils/index", "constants/index", "context-providers/index"];

const configs = entries.map((entry) => ({
  input: `src/${entry}.ts`,
  output: [
    {
      file: `dist/${entry}.js`,
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      file: `dist/${entry}.esm.js`,
      format: "esm",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      browser: true,
    }),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      // declaration: true,
      // declarationDir: "dist",
    }),
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      extensions: [".css"],
      minimize: true,
      inject: {
        insertAt: "top",
      },
    }),
  ],
  watch: {
    include: "src/**",
  },
  external: ["react", "react-dom"],
}));
export default configs;
