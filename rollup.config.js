import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import {visualizer} from 'rollup-plugin-visualizer';
import { terser } from 'rollup-plugin-terser';
import preserveUseClientDirective from 'rollup-plugin-preserve-use-client';

import pkg from "./package.json" with { type: "json" };

const entries = ["index", "context-providers/index","components/index", "hooks/index", "utils/index", "constants/index", "types/index"];

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
      declaration: false,
      noEmit: true,
      // declarationDir: "dist",
    }),
    terser({compress:{directives:false}}),
    preserveUseClientDirective(),
    visualizer({
      filename: `visualiser/'${entry}.html'`,
      open: false,
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
    // chokidar: false
  },
  external: [...Object.keys(pkg.dependencies),...Object.keys(pkg.peerDependencies),...Object.keys(pkg.devDependencies),/^@radix-ui\/.*/],
}));
export default configs;
