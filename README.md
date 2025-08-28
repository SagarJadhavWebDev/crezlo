# Crezlo Core – Build, Commit & Consumption Guide

---

## 🚀 Build & Commit Process

> **Note:** Always install packages in root (`crezlo` folder).  
> Example:  
> ```bash
> npm i <package-name> --workspace=<workspacename>
> ```

1. Run the build command:
   ```bash
   npm run core-dev
   ```

2. Commit with the following pattern:
   ```bash
   release: v1.0.40
   ```

3. Consume the library by installing from GitHub:
   ```bash
   npm install github:SagarJadhavWebDev/crezlo#release/v1.0.40
   ```

> ⚠️ Rollup is skipped, hence no use of rollup here.

---

## 📦 Steps While Consuming

### 1. Update `tsconfig.json`

```json
{
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
      "@builder/*": ["./builder/*"]
      // "crezlo-core/*": ["./node_modules/crezlo-core/src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

### 2. Add `transpilePackages` in `next.config.ts/js`

```ts
transpilePackages: ['crezlo-core'],
```

---

### 3. Create `tailwind.config.ts/js`

```ts
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/crezlo-core/**/*.{js,ts,jsx,tsx}",
  ],
}
```

---

### 4. Create `app/global.css`

```css
@config '../tailwind.config.ts';
@import "tailwindcss";
@import "crezlo-core/styles.css";
```

---

### 5. Import `global.css` in your root `layout.tsx/jsx`

---

## ⚡ Using `useSWR`

If you want to use `useSWR` hook, wrap it with the following code in the root layout:

```tsx
<SWRConfig
  value={{
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    fetcher: (url: string) => ApiInstance.CORE.get(url),
  }}
>
  {/* Your App Components */}
</SWRConfig>
```

---

## 🔒 Protecting Routes (middleware)

To protect routes in sub-projects, add the following code in `middleware.ts/js`:

```ts
const token = request.cookies.get("token")?.value;

if (!token) {
  // Redirect to external domain login page
  const loginUrl = new URL(envConstants.APP_URL.ACCOUNT + "/login");
  loginUrl.searchParams.set("redirect_url", envConstants.APP_URL.WEBSITE);
  
  return NextResponse.redirect(loginUrl);
}
```

---

✅ That’s it! You’re ready to **build, commit, consume, and protect routes** in Crezlo Core.
