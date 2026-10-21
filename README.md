# 67sixseven.xyz

One-page site for Six Seven Ltd, a New Zealand company that builds fan rewards apps for sports clubs.

Built with Vite and React. Animated pieces come from [React Bits](https://reactbits.dev) by David Haz (MIT + Commons Clause): Aurora, DecryptedText, ShinyText and ClickSpark, in `src/components/`.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in dist/
```

Every push to `main` builds and deploys to GitHub Pages (`.github/workflows/deploy.yml`). The custom domain is set by `public/CNAME`.
