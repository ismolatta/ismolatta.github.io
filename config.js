// Sayfanın değişen bilgileri burada. Spotify listeleri ayrı dosyada: playlists.js
// IMDb verisi 2026-11-20'de profilden okundu; IMDb'de değişirse burayı güncelle.
// poster / covers: m.media-amazon.com/images/M/<id>._V1_… resminin <id> kısmı.
window.SITE_CONFIG = {
  imdb: 'https://www.imdb.com/user/p.glvdjq2lhknwihwqka3c6ugyl4/',

  // LinkedIn profil linki (boşsa Career'daki buton gizlenir).
  linkedin: 'https://www.linkedin.com/in/ismailokutucu/',

  // Pinterest profil linki (boşsa Design'daki buton gizlenir).
  pinterest: 'https://tr.pinterest.com/macrotus/_profile/',

  // Spotify kullanıcı kimliği (profil linkindeki /user/… kısmı).
  spotifyUser: 'iokutucu92',

  // Player ilk açıldığında çalınacak liste (playlists.js'teki id).
  firstPlaylist: '6Sumz33nIhv0j72U7fGDIz', // 😎 Car

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

  // IMDb → Favorite people, ada göre alfabetik.
  people: [
    { id: 'nm1676221', name: 'Andy Samberg', photo: 'MV5BNDg3NDk3ODI0Ml5BMl5BanBnXkFtZTgwOTE3MTE4NTM@' },
    { id: 'nm0122987', name: 'Bill Burr', photo: 'MV5BMTQwNDgwODg3NV5BMl5BanBnXkFtZTcwMTY5OTM3MQ@@' },
    { id: 'nm3102998', name: 'Bo Burnham', photo: 'MV5BNmJiNzA4ZGEtZDc5YS00MjhiLWEwNzUtMTk0YWM4NmQ3MTMzXkEyXkFqcGc@' },
    { id: 'nm0186505', name: 'Bryan Cranston', photo: 'MV5BMTA2NjEyMTY4MTVeQTJeQWpwZ15BbWU3MDQ5NDAzNDc@' },
    { id: 'nm0948000', name: 'Cem Yılmaz', photo: 'MV5BMTU5NzYxMDM3N15BMl5BanBnXkFtZTgwMDEzMTE4MTE@' },
    { id: 'nm0000288', name: 'Christian Bale', photo: 'MV5BMTkxMzk4MjQ4MF5BMl5BanBnXkFtZTcwMzExODQxOA@@' },
    { id: 'nm0634240', name: 'Christopher Nolan', photo: 'MV5BNjE3NDQyOTYyMV5BMl5BanBnXkFtZTcwODcyODU2Mw@@' },
    { id: 'nm0005277', name: "Conan O'Brien", photo: 'MV5BMTMyMTAwMzQ0NF5BMl5BanBnXkFtZTcwNzM5MTU5MQ@@' },
    { id: 'nm0000197', name: 'Jack Nicholson', photo: 'MV5BMTQ3OTY0ODk0M15BMl5BanBnXkFtZTYwNzE4Njc4' },
    { id: 'nm0000206', name: 'Keanu Reeves', photo: 'MV5BNDEzOTdhNDUtY2EyMy00YTNmLWE5MjItZmRjMmQzYTRlMGRkXkEyXkFqcGc@' },
    { id: 'nm0000138', name: 'Leonardo DiCaprio', photo: 'MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@' },
    { id: 'nm0000190', name: 'Matthew McConaughey', photo: 'MV5BMTg0MDc3ODUwOV5BMl5BanBnXkFtZTcwMTk2NjY4Nw@@' },
    { id: 'nm0315041', name: 'Ricky Gervais', photo: 'MV5BMjQzOTEzMTk1M15BMl5BanBnXkFtZTgwODI1Mzc0MDI@' },
    { id: 'nm0000375', name: 'Robert Downey Jr.', photo: 'MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@' },
    { id: 'nm1500155', name: 'Robert Pattinson', photo: 'MV5BNzk0MDQ5OTUxMV5BMl5BanBnXkFtZTcwMDM5ODk5Mg@@' },
    { id: 'nm1258970', name: 'Russell Brand', photo: 'MV5BMTUxMzA2Nzk0N15BMl5BanBnXkFtZTcwMDgwMTEwNQ@@' },
    { id: 'nm0331516', name: 'Ryan Gosling', photo: 'MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@' },
    { id: 'nm0005351', name: 'Ryan Reynolds', photo: 'MV5BMzRiNDhiMDQtYWZkMS00ZjU5LTg5NzUtOTc4NzE2Yzc0ZWUwXkEyXkFqcGc@' },
    { id: 'nm0532235', name: 'Seth MacFarlane', photo: 'MV5BMTgyNDk3OTI2NF5BMl5BanBnXkFtZTcwMDA4NjU5OA@@' },
    { id: 'nm0302108', name: 'Zach Galifianakis', photo: 'MV5BMTQwNzI3NjIwMV5BMl5BanBnXkFtZTcwMzA1OTIwMw@@' },
  ],

  // IMDb → Lists. covers = listenin ilk üç öğesinin resmi.
  lists: [
    {
      id: 'ls548417842', title: 'Best Movie of the Year',
      covers: ['MV5BOWNjYWM3NWItOGE0ZS00MWRjLThiZWEtYjc4ZmNmMmU5ZTVmXkEyXkFqcGc@', 'MV5BYzc1NWUwMDgtNGZlMS00ZmYzLWIzMzktNmMxMmY1MTUzNWExXkEyXkFqcGc@', 'MV5BZTk5ODY0MmQtMzA3Ni00NGY1LThiYzItZThiNjFiNDM4MTM3XkEyXkFqcGc@'],
    },
    {
      id: 'ls548413366', title: 'Yılın En İyi Filmi', lang: 'tr',
      covers: ['MV5BM2I2NmQ1ZTItZGY1Ny00N2I0LThmYmItOTYyNTdmYzQ2NTA2XkEyXkFqcGc@', 'MV5BNTExMzUyZjctZDViNS00NzA3LWJiNTctNzE1ZWJiYmZjNmM4XkEyXkFqcGc@', 'MV5BZmM4NzZiMzctM2M3OS00MWNhLWFiYzQtODRjMTEzYWVmMTc4XkEyXkFqcGc@'],
    },
    {
      id: 'ls548427357', title: 'Best Music Video of the Year',
      covers: ['MV5BODA5ZjY2NzctOWQ1MS00YjhkLTkwOTItNjcxNjVkNjFkN2MwXkEyXkFqcGc@', 'MV5BNTI2NTE3NjktODhiNi00ZDlhLTliM2UtMDY2NTNmNTliNjhkXkEyXkFqcGc@', 'MV5BYzU3ZTFkZDctYmNlNi00ZjMxLTgwNGItYTI1YjdmOWJiNTQzXkEyXkFqcGc@'],
    },
    {
      id: 'ls548424940', title: 'Yılın En İyi Müzik Videosu', lang: 'tr',
      covers: ['MV5BNTdhMDRlMTctNzc4MC00OTMxLWI5YWEtM2I4OGVmYjE5ZGVlXkEyXkFqcGc@', 'MV5BYWU0ZWEwZDgtZjBmMC00YjY1LThiZjgtM2U2ZTNhMWViNjdhXkEyXkFqcGc@', 'MV5BYTQxNmEwYjgtZjI5Mi00MDNiLThmNWQtNDkxYTBiZGRiYmQ3XkEyXkFqcGc@'],
    },
    {
      id: 'ls4114976423', title: 'Batman Movies From Best to Worst',
      covers: ['MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@', 'MV5BMzA2NDQzZDEtNDU5Ni00YTlkLTg2OWEtYmQwM2Y1YTBjMjFjXkEyXkFqcGc@', 'MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@'],
    },
    {
      id: 'ls4114287130', title: 'MCU Movies From Best to Worst',
      covers: ['MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@', 'MV5BZTk5ODY0MmQtMzA3Ni00NGY1LThiYzItZThiNjFiNDM4MTM3XkEyXkFqcGc@', 'MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@'],
    },
  ],
};
