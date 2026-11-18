// Sayfanın değişen bilgileri burada. Spotify listeleri ayrı dosyada: playlists.js
// IMDb verisi 2026-11-18'de profilden okundu; IMDb'de değişirse burayı güncelle.
// poster / covers: m.media-amazon.com/images/M/<id>._V1_… resminin <id> kısmı.
window.SITE_CONFIG = {
  imdb: 'https://www.imdb.com/user/p.glvdjq2lhknwihwqka3c6ugyl4/',

  // Spotify kullanıcı kimliği (profil linkindeki /user/… kısmı).
  spotifyUser: 'iokutucu92',

  // Player ilk açıldığında çalınacak liste (playlists.js'teki id).
  firstPlaylist: '51oosqaCVPMOhAtEG6ibaF', // ⚽️ Football

  // IMDb → Favorite titles, profildeki sırayla.
  favorites: [
    { id: 'tt1375666', title: 'Inception', years: '2010', type: 'Film', poster: 'MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@' },
    { id: 'tt0816692', title: 'Interstellar', years: '2014', type: 'Film', poster: 'MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@' },
    { id: 'tt0133093', title: 'The Matrix', years: '1999', type: 'Film', poster: 'MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@' },
    { id: 'tt0468569', title: 'The Dark Knight', years: '2008', type: 'Film', poster: 'MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@' },
    { id: 'tt0372784', title: 'Batman Begins', years: '2005', type: 'Film', poster: 'MV5BMzA2NDQzZDEtNDU5Ni00YTlkLTg2OWEtYmQwM2Y1YTBjMjFjXkEyXkFqcGc@' },
    { id: 'tt0421384', title: 'Kurtlar Vadisi', years: '2003–2005', type: 'TV', poster: 'MV5BMGE1ZWIwNWItNzU3My00M2Q1LWE1YWMtZGEwNWVlM2E1MmI4XkEyXkFqcGc@' },
    { id: 'tt2085059', title: 'Black Mirror', years: '2011–', type: 'TV', poster: 'MV5BODcxMWI2NDMtYTc3NC00OTZjLWFmNmUtM2NmY2I1ODkxYzczXkEyXkFqcGc@' },
    { id: 'tt1119644', title: 'Fringe', years: '2008–2013', type: 'TV', poster: 'MV5BMWVlMmE1MmEtNjhjMC00MDdmLWIzZGMtNjc1YTZmNDc2MWExXkEyXkFqcGc@' },
    { id: 'tt0182576', title: 'Family Guy', years: '1999–', type: 'TV', poster: 'MV5BNTZlMGQ1YjEtMzVlNC00ZmMxLTk0MzgtZjdkYTU1NmUxNTQ0XkEyXkFqcGc@' },
    { id: 'tt6524350', title: 'Big Mouth', years: '2017–2025', type: 'TV', poster: 'MV5BMTU0YjUyNDctYmM0OC00OWU5LWJmNTMtODY5Njc4MzVlMWE2XkEyXkFqcGc@' },
  ],

  // IMDb → Lists. covers = listenin ilk üç öğesinin resmi.
  lists: [
    {
      id: 'ls548417842', title: 'Best Movie Of Year', count: '67 titles',
      covers: ['MV5BOWNjYWM3NWItOGE0ZS00MWRjLThiZWEtYjc4ZmNmMmU5ZTVmXkEyXkFqcGc@', 'MV5BYzc1NWUwMDgtNGZlMS00ZmYzLWIzMzktNmMxMmY1MTUzNWExXkEyXkFqcGc@', 'MV5BZTk5ODY0MmQtMzA3Ni00NGY1LThiYzItZThiNjFiNDM4MTM3XkEyXkFqcGc@'],
    },
    {
      id: 'ls548413366', title: 'Yılın En İyi Filmi', count: '59 titles',
      covers: ['MV5BM2I2NmQ1ZTItZGY1Ny00N2I0LThmYmItOTYyNTdmYzQ2NTA2XkEyXkFqcGc@', 'MV5BNTExMzUyZjctZDViNS00NzA3LWJiNTctNzE1ZWJiYmZjNmM4XkEyXkFqcGc@', 'MV5BZmM4NzZiMzctM2M3OS00MWNhLWFiYzQtODRjMTEzYWVmMTc4XkEyXkFqcGc@'],
    },
    {
      id: 'ls548427357', title: 'Best Music Video Of Year', count: '41 titles',
      covers: ['MV5BODA5ZjY2NzctOWQ1MS00YjhkLTkwOTItNjcxNjVkNjFkN2MwXkEyXkFqcGc@', 'MV5BNTI2NTE3NjktODhiNi00ZDlhLTliM2UtMDY2NTNmNTliNjhkXkEyXkFqcGc@', 'MV5BYzU3ZTFkZDctYmNlNi00ZjMxLTgwNGItYTI1YjdmOWJiNTQzXkEyXkFqcGc@'],
    },
    {
      id: 'ls548424940', title: 'Yılın En İyi Müzik Videosu', count: '31 titles',
      covers: ['MV5BNTdhMDRlMTctNzc4MC00OTMxLWI5YWEtM2I4OGVmYjE5ZGVlXkEyXkFqcGc@', 'MV5BYWU0ZWEwZDgtZjBmMC00YjY1LThiZjgtM2U2ZTNhMWViNjdhXkEyXkFqcGc@', 'MV5BYTQxNmEwYjgtZjI5Mi00MDNiLThmNWQtNDkxYTBiZGRiYmQ3XkEyXkFqcGc@'],
    },
    {
      id: 'ls548429564', title: 'Smartest Movie Characters', count: '3 people',
      covers: ['MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@', 'MV5BZmRhZDY0OGMtZWYxYi00ZmZhLWE3NjEtZTZkOWYwNGM2ZjY5XkEyXkFqcGc@', 'MV5BMTI2NTY0NzA4MF5BMl5BanBnXkFtZTYwMjE1MDE0'],
    },
  ],
};
