# İsmail Okutucu — kişisel sayfa

Düz HTML/CSS/JS, derleme yok. Değişen bilgiler (IMDb linki, Spotify listeleri, filmler) `config.js` içinde.

## Yerelde bakmak
`index.html`'i tarayıcıda çift tıklayarak aç.

## GitHub Pages'e koymak
1. GitHub'da `<kullanıcıadın>.github.io` adında **public** bir repo aç (boş, README'siz).
2. Bu klasörde:
   ```
   git add .
   git commit -m "First version"
   git remote add origin https://github.com/<kullanıcıadın>/<kullanıcıadın>.github.io.git
   git push -u origin main
   ```
3. Repo → Settings → Pages → Source: "Deploy from a branch", Branch: `main` / `(root)` → Save.
4. 1–2 dakika sonra `https://<kullanıcıadın>.github.io` açılır.

İstersen sonra kendi alan adını (örn. ismailokutucu.com) Settings → Pages → Custom domain'den bağlayabilirsin.
