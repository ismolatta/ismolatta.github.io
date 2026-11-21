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
  // Inactive tab panel: stays in the layout (keeps the height) but is invisible and unreachable
  const setOff = (p, off) => {
    p.classList.toggle('off', off);
    p.inert = off;
  };
  // Left/right arrow keys move between the tabs of a tab row
  const arrowKeys = (list, btns, select) =>
    list.addEventListener('keydown', (e) => {
      const i = btns.indexOf(document.activeElement);
      if (i < 0 || (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft')) return;
      const n = (i + (e.key === 'ArrowRight' ? 1 : -1) + btns.length) % btns.length;
      btns[n].focus();
      select(n);
    });

  $('year').textContent = new Date().getFullYear();

  // IMDb
  const imdb = $('imdbLink');
  if (cfg.imdb) imdb.href = cfg.imdb;
  else imdb.hidden = true;

  // Spotify profile
  const spotify = $('spotifyLink');
  if (cfg.spotifyUser) spotify.href = 'https://open.spotify.com/user/' + encodeURIComponent(cfg.spotifyUser);
  else spotify.hidden = true;

  // LinkedIn
  const linkedin = $('linkedinLink');
  if (cfg.linkedin) linkedin.href = cfg.linkedin;
  else linkedin.hidden = true;

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
  panels.classList.add('tabStack');
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

    // Groups (decades, moods…) are a second row of tabs; only one group's chips show at a time
    const subTabs = el('div', 'plSubTabs');
    subTabs.setAttribute('role', 'tablist');
    subTabs.setAttribute('aria-label', cat.label + ' groups');
    const groups = el('div', 'tabStack');
    const subBtns = [];
    let startGroup = 0;

    cat.groups.forEach((g, gi) => {
      const sb = el('button', 'plSubTab');
      sb.type = 'button';
      sb.id = 'tab-' + cat.key + '-' + gi;
      sb.setAttribute('role', 'tab');
      sb.setAttribute('aria-controls', 'panel-' + cat.key + '-' + gi);
      sb.append(el('span', null, g.title), el('span', 'plTabCount', String(g.items.length)));
      subTabs.appendChild(sb);
      subBtns.push(sb);

      const chips = el('div', 'plChips');
      chips.id = 'panel-' + cat.key + '-' + gi;
      chips.setAttribute('role', 'tabpanel');
      chips.setAttribute('aria-labelledby', sb.id);
      g.items.forEach(([id, name]) => {
        const chip = el('button', 'plChip', name);
        chip.type = 'button';
        chip.setAttribute('aria-pressed', 'false');
        chip.title = (cat.key === 'mixes' ? name : g.title + ' · ' + name) + ' — play';
        chip.addEventListener('click', () => play(id, chip, true));
        chips.appendChild(chip);
        if (id === cfg.firstPlaylist) {
          firstChip = chip;
          startGroup = gi;
        }
      });
      groups.appendChild(chips);
    });

    const selectGroup = (i) => {
      subBtns.forEach((b, j) => b.setAttribute('aria-selected', String(i === j)));
      [...groups.children].forEach((p, j) => setOff(p, i !== j));
    };
    subBtns.forEach((b, i) => b.addEventListener('click', () => selectGroup(i)));
    arrowKeys(subTabs, subBtns, selectGroup);
    selectGroup(startGroup);

    panel.append(subTabs, groups);
    panels.appendChild(panel);

    btn.addEventListener('click', () => select(ci));
  });

  function select(i) {
    tabBtns.forEach((b, j) => b.setAttribute('aria-selected', String(i === j)));
    [...panels.children].forEach((p, j) => setOff(p, i !== j));
  }
  arrowKeys(tabs, tabBtns, select);

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
    a.dataset.type = f.type; // phones: films on the top row, TV on the bottom
    const frame = el('span', 'posterFrame');
    frame.appendChild(poster(f.poster, f.title + ' poster', 300));
    frame.appendChild(el('span', 'posterType', f.type));
    a.append(frame, el('span', 'posterTitle', f.title), el('span', 'posterMeta', f.years));
    favs.appendChild(a);
  });

  const people = $('people');
  (cfg.people || []).forEach((p) => {
    const a = el('a', 'person');
    a.href = 'https://www.imdb.com/name/' + p.id + '/';
    const frame = el('span', 'personFrame');
    frame.appendChild(poster(p.photo, p.name, 200));
    const name = el('span', 'personName', p.name);
    if (/[ıİğĞşŞ]/.test(p.name)) name.lang = 'tr';
    a.append(frame, name);
    people.appendChild(a);
  });

  const lists = $('imdbLists');
  (cfg.lists || []).forEach((l) => {
    const a = el('a', 'imdbList');
    a.href = 'https://www.imdb.com/list/' + l.id + '/';
    const stack = el('span', 'coverStack');
    l.covers.slice(0, 3).forEach((c) => stack.appendChild(poster(c, '', 200)));
    const info = el('span', 'listInfo');
    const title = el('span', 'listTitle', l.title);
    if (l.lang) title.lang = a.dataset.lang = l.lang; // 'tr': uppercase gives İ, not I; also sorts last on mobile
    info.append(title);
    a.append(stack, info, el('span', 'listArrow', '↗'));
    lists.appendChild(a);
  });

  // Titles / People / Lists as tabs, same look as the playlist tabs; empty ones are skipped
  const imdbTabs = $('imdbTabs');
  const imdbPanels = [favs, people, lists].filter((p) => p.children.length);
  // Stack the panels in one box so switching tabs doesn't change the section's height
  const imdbStack = el('div', 'tabStack');
  favs.before(imdbStack);
  imdbStack.append(favs, people, lists);
  const imdbBtns = imdbPanels.map((panel) => {
    const b = el('button', 'plTab');
    b.type = 'button';
    b.id = 'tab-' + panel.id;
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-controls', panel.id);
    b.append(el('span', null, panel.dataset.tab), el('span', 'plTabCount', String(panel.children.length)));
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', b.id);
    imdbTabs.appendChild(b);
    return b;
  });
  [favs, people, lists].forEach((p) => (p.hidden = !imdbPanels.includes(p)));
  const showImdb = (i) => {
    imdbBtns.forEach((b, j) => b.setAttribute('aria-selected', String(i === j)));
    imdbPanels.forEach((p, j) => setOff(p, i !== j));
  };
  imdbBtns.forEach((b, i) => b.addEventListener('click', () => showImdb(i)));
  arrowKeys(imdbTabs, imdbBtns, showImdb);
  imdbTabs.hidden = !imdbBtns.length;
  if (imdbBtns.length) showImdb(0);

  // Back to top: fixed bottom-right, shows once you scroll; clears #section / ?params from the URL
  const toTop = $('toTop');
  const showTop = () => (toTop.hidden = window.scrollY < 400);
  window.addEventListener('scroll', showTop, { passive: true });
  showTop();
  toTop.addEventListener('click', () => {
    history.replaceState(null, '', location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Every outside link opens in a new tab (in-page #anchors stay put)
  document.querySelectorAll('a[href^="http"]').forEach((a) => {
    a.target = '_blank';
    a.rel = 'noopener';
  });
})();
