import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
      {
        file: "dist/index.esm.js",
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
        declaration: true,
        declarationDir: "dist",
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
  },
  // {
  //   input: "src/styles/index.css", // add the `main.css` file input
  //   output: [{ file: "dist/index.css", format: "es" }],
  //   plugins: [
  //     postcss({
  //       extract: true,
  //       minimize: true,
  //       modules: false,
  //       extensions: [".css"],
  //       config: {
  //         path: "./postcss.config.js",
  //       },
  //       plugins: ["tailwindcss"],
  //     }),
  //   ],

  // },
];
