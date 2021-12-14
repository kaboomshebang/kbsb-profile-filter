# kbsb Profile Filter

A profile webpage with filter functionality. Built with Typescript, Vite, PNPM and vanilla Web Components.

- Install PNPM with `npm install -g pnpm`
- URL coming soon.

```bash
# install dependencies (Typescript, Vite)
pnpm install
# or, `npm install`

# run Vite with PNPM
pnpm run dev # or, `npm run dev` when using NPM

# or, you can also just run Vite
vite
# or, `vite dev`
# or, `vite serve`

# without Vite: just watch for source changes with the Typescript compiler
tsc --watch

# preview the production build locally
pnpm run preview # or, vite preview

# build
pnpm run build
```


## Vite tsconfig.json settings

Add `"moduleResolution": "node",` otherwise the TS compiler complains about a `module resolution strategy`. ~~Note: The Vite scaffold project uses Typescript 4.4.4. This project uses: `"typescript": "^4.5.3"`.~~

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ESNext", "DOM"],
    "moduleResolution": "Node",
    "strict": true,
    "sourceMap": true,
    "resolveJsonModule": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "noEmit": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true
  },
  "include": ["./src"]
}
```


## Todo

- [X] Scaffold project
- [X] Import data.ts
- [X] Setup the initial dev class
- [X] ~~Add error handling for fetch()~~
- [X] Create class for the dev skills
- [X] Add Typescript as dev-dep
- [X] Optional: add Vite
- [X] Scaffold some WebComponents
- [X] Add styling and basic animations
- [X] Create the filter and developer DOM elements
- [ ] Add methods and logic for the filter states
- [ ] Add project to Vercel: https://vitejs.dev/guide/static-deploy.html#vercel
