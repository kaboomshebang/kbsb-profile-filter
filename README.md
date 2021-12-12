# kbsb Profile Filter

A profile webpage with filter functionality using Typescript, Vite and PNPM.

- Uses `pnpm`
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
```

## Typescript version

The Vite scaffold project uses Typescript 4.4.4. This project uses: `"typescript": "^4.5.3"`.

```js
// "typescript": "^4.4.4",
```

## Vite tsconfig.json settings

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
- [ ] Add methods and logic for the filter states
- [ ] Create the filter and developer DOM elements
- [ ] Add styling and basic animations
- [ ] Optional: add Vite
