(function () {
  const cfg = window.SITE_CONFIG || {};
  const cats = window.PLAYLISTS || [];
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };

  $('year').textContent = new Date().getFullYear();

  // IMDb
  const imdb = $('imdbLink');
  if (cfg.imdb) imdb.href = cfg.imdb;
  else imdb.hidden = true;

  // Spotify profile
  const spotify = $('spotifyLink');
  if (cfg.spotifyUser) spotify.href = 'https://open.spotify.com/user/' + encodeURIComponent(cfg.spotifyUser);
  else spotify.hidden = true;

  // ── Playlists: one shared player + every list as a chip ──
  const player = $('player');
  const embed = (id) => 'https://open.spotify.com/embed/playlist/' + id + '?theme=0';
  let activeChip = null;

  function play(id, chip, scroll) {
    player.src = embed(id);
    if (activeChip) activeChip.setAttribute('aria-pressed', 'false');
    activeChip = chip || null;
    if (activeChip) activeChip.setAttribute('aria-pressed', 'true');
    if (scroll) {
      const r = player.getBoundingClientRect();
      if (r.top < 0 || r.bottom > window.innerHeight) {
        player.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  const total = cats.reduce((n, c) => n + c.groups.reduce((m, g) => m + g.items.length, 0), 0);
  $('plCount').textContent = total;

  const tabs = $('plTabs');
  const panels = $('plPanels');
  const tabBtns = [];
  let firstChip = null;

  cats.forEach((cat, ci) => {
    const count = cat.groups.reduce((m, g) => m + g.items.length, 0);
    const btn = el('button', 'plTab');
    btn.type = 'button';
    btn.id = 'tab-' + cat.key;
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-controls', 'panel-' + cat.key);
    btn.append(el('span', cat.short ? 'plTabLong' : null, cat.label));
    if (cat.short) btn.append(el('span', 'plTabShort', cat.short));
    btn.append(el('span', 'plTabCount', String(count)));
    tabs.appendChild(btn);
    tabBtns.push(btn);

    const panel = el('div', 'plPanel');
    panel.id = 'panel-' + cat.key;
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', btn.id);

    cat.groups.forEach((g) => {
      const row = el('div', 'plGroup');
      row.appendChild(el('h3', 'plGroupTitle', g.title));
      const chips = el('div', 'plChips');
      g.items.forEach(([id, name]) => {
        const chip = el('button', 'plChip', name);
        chip.type = 'button';
        chip.setAttribute('aria-pressed', 'false');
        chip.title = (cat.key === 'mixes' ? name : g.title + ' · ' + name) + ' — play';
        chip.addEventListener('click', () => play(id, chip, true));
        chips.appendChild(chip);
        if (id === cfg.firstPlaylist) firstChip = chip;
      });
      row.appendChild(chips);
      panel.appendChild(row);
    });
    panels.appendChild(panel);

    btn.addEventListener('click', () => select(ci));
  });

  function select(i) {
    tabBtns.forEach((b, j) => b.setAttribute('aria-selected', String(i === j)));
    [...panels.children].forEach((p, j) => (p.hidden = i !== j));
  }
  // Arrow keys move between tabs.
  tabs.addEventListener('keydown', (e) => {
    const i = tabBtns.indexOf(document.activeElement);
    if (i < 0 || (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft')) return;
    const n = (i + (e.key === 'ArrowRight' ? 1 : -1) + tabBtns.length) % tabBtns.length;
    tabBtns[n].focus();
    select(n);
  });

  if (cats.length) {
    select(0);
    const firstId = cfg.firstPlaylist || cats[0].groups[0].items[0][0];
    play(firstId, firstChip, false);
  }

  // ── IMDb: favourite titles (posters) + lists ──
  const img = (id, w) => 'https://m.media-amazon.com/images/M/' + id + '._V1_QL75_UX' + w + '_.jpg';
  const poster = (id, alt, w) => {
    const i = el('img');
    i.src = img(id, w);
    i.alt = alt;
    i.loading = 'lazy';
    i.decoding = 'async';
    return i;
  };

  const favs = $('favs');
  (cfg.favorites || []).forEach((f) => {
    const a = el('a', 'poster');
    a.href = 'https://www.imdb.com/title/' + f.id + '/';
    const frame = el('span', 'posterFrame');
    frame.appendChild(poster(f.poster, f.title + ' poster', 300));
    frame.appendChild(el('span', 'posterType', f.type));
    a.append(frame, el('span', 'posterTitle', f.title), el('span', 'posterMeta', f.years));
    favs.appendChild(a);
  });
  favs.previousElementSibling.hidden = favs.hidden = !favs.children.length;

  const lists = $('imdbLists');
  (cfg.lists || []).forEach((l) => {
    const a = el('a', 'imdbList');
    a.href = 'https://www.imdb.com/list/' + l.id + '/';
    const stack = el('span', 'coverStack');
    l.covers.slice(0, 3).forEach((c) => stack.appendChild(poster(c, '', 200)));
    const info = el('span', 'listInfo');
    info.append(el('span', 'listTitle', l.title), el('span', 'listCount', l.count));
    a.append(stack, info, el('span', 'listArrow', '↗'));
    lists.appendChild(a);
  });
  lists.previousElementSibling.hidden = lists.hidden = !lists.children.length;

  // Every outside link opens in a new tab (in-page #anchors stay put)
  document.querySelectorAll('a[href^="http"]').forEach((a) => {
    a.target = '_blank';
    a.rel = 'noopener';
  });
})();
