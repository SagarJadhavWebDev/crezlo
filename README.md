<!-- // to install package always install in root (crezlo folder) npm i <package-name> --workspace=<workspacename> -->

<!-- BUILD AND COMMIT START -->

1. Run Command "npm run core-dev" in root folder
2. commit with commit message by follwing pattern "release: v1.0.40"
3. can consume this library "npm install github:SagarJadhavWebDev/crezlo#release/v1.0.40"
Note: Rollup is skipped hence no use of rollup
<!-- BUILD AND COMMIT END -->

<!-- STEPS WHILE CONSUMING START-->

1. Add below in tsconfig
<!-- {
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "baseUrl": ".",
    "noImplicitAny": false,
    "downlevelIteration": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"],
      "@builder/*": ["./builder/*"],
      // "crezlo-core/*": ["./node_modules/crezlo-core/src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
} -->

2. Add in next.config.ts/js
<!-- transpilePackages: ['crezlo-core'], -->

3. Create tailwind.config.ts/js as compiling css code in library is overwritten while consuming
<!-- export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/crezlo-core/**/*.{js,ts,jsx,tsx}",
  ],
} -->

4. Create app/global.css file
<!-- @config '../tailwind.config.ts';
@import "tailwindcss";
@import "crezlo-core/styles.css";  -->

5. import global.css in layout file

<!-- STEPS WHILE CONSUMING END-->
