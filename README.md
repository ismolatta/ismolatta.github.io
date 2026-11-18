# İsmail Okutucu — kişisel sayfa

Yayında: https://ismolatta.github.io

Düz HTML/CSS/JS, derleme yok. `main` dalına push'lanan her şey 1–2 dakika içinde GitHub Pages'te yayına girer.

## Dosyalar
| Dosya | İçerik |
|---|---|
| `index.html` | Sayfa iskeleti, WFJ kartı, Career zaman çizelgesi, Contact, meta / paylaşım etiketleri |
| `config.js` | IMDb profil linki, favori filmler/diziler, IMDb listeleri, Spotify kullanıcısı, ilk çalan liste |
| `playlists.js` | Spotify listeleri (sekme → grup → `[id, ad]`) |
| `main.js` | Film & TV ve Music bölümlerini `config.js` / `playlists.js`'ten çizer |
| `style.css` | Tüm stiller |
| `assets/` | `io-icon.svg` (sekme ikonu, İO monogramı), `apple-touch-icon.png` (ana ekran ikonu, aynı monogram), WFJ amblemi `wfj-emblem.svg`, paylaşım görseli `og.png` (1200×630), `career/` altında okul ve şirket logoları |

## Sık güncellemeler
- **Yeni Spotify listesi:** `playlists.js`'te ilgili gruba `['<playlist id>', 'Ad']` satırı ekle. ID, liste linkindeki `open.spotify.com/playlist/<id>` kısmı.
- **Favori film/dizi ya da IMDb listesi:** `config.js` → `favorites` / `lists`. Poster ID'si, IMDb resim adresindeki `m.media-amazon.com/images/M/<id>._V1_…` kısmı.
- **Career:** `index.html` → `#career` içindeki `<li class="step">` blokları. Logo `assets/career/`'a; etiket `stepTag edu` (Education) ya da `stepTag work` (Experience).
- **Contact:** e-posta adresi `index.html` → `#contact` içinde iki yerde: `mailto:` linki ve Copy butonunun `data-mail` değeri.
- **WFJ istatistikleri** (7,000+, 500+, 24 hikâye): `index.html` içinde elle yazılı.

## Yerelde bakmak
`index.html`'i tarayıcıda çift tıklayarak aç.

## Kendi alan adı
Settings → Pages → Custom domain'den bağlanabilir. Bağlarsan `index.html`'deki `canonical`, `og:url` ve `og:image` adreslerini yeni alan adına göre güncelle.
