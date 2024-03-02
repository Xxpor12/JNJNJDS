let handler = async (m, {conn, command}) => {
  let url = pack[Math.floor(Math.random() * pack.length)];
    await conn.sendFile( 
     m.chat, 
     url, 
     "gimage.jpg", 
     ` 
𝗖𝗵𝗶𝗰𝗮𝘀 𝗛𝗼𝘁`.trim(), m)
};
handler.help = ["PackMixto"];
handler.tags = ["internet"];
handler.command = /^(PackMixto)$/i;
export default handler;

global.pack = [
  "https://telegra.ph/file/c0da7289bee2d97048feb.jpg",
  "https://telegra.ph/file/b8564166f9cac4d843db3.jpg",
  "https://telegra.ph/file/fdefd621a17712be15e0e.jpg",
  "https://telegra.ph/file/6e1a6dcf1c91bf62d3945.jpg",
  "https://telegra.ph/file/0224c1ecf6b676dda3ac0.jpg",
  "https://telegra.ph/file/b71b8f04772f1b30355f1.jpg",
  "https://telegra.ph/file/6561840400444d2d27d0c.jpg",
  "https://telegra.ph/file/37e445df144e1dfcdb744.jpg",
  "https://telegra.ph/file/155b6ac6757bdd9cd05f9.jpg",
  "https://telegra.ph/file/2255a8a013540c2820a2b.jpg",
  "https://telegra.ph/file/450e901ac153765f095c5.jpg",
  "https://telegra.ph/file/f18e421a70810015be505.jpg",
  "https://telegra.ph/file/d3d190691ec399431434e.jpg",
  "https://telegra.ph/file/1fd2b897a1dbc3fdc2a70.jpg",
  "https://telegra.ph/file/607d54a909035bca7444f.jpg",
  "https://telegra.ph/file/818ba7c0ae82876b190b6.jpg",
  "https://telegra.ph/file/0f2bb426951b4a8fe1e5a.jpg",
  "https://telegra.ph/file/7e895b5b933226a07558a.jpg",
  "https://telegra.ph/file/f9d9f0da337512a1b1882.jpg",
  "https://telegra.ph/file/09ff5bfce02f1f78e3861.jpg",
  "https://telegra.ph/file/4ad840d401ab1f90444df.jpg",
  "https://telegra.ph/file/7b4bdcad3dde870355c94.jpg",
  "https://telegra.ph/file/f69a5beaca50fc52a4a71.jpg",
  "https://telegra.ph/file/411d7cdee24669e167adb.jpg",
  "https://telegra.ph/file/36a63288e27e88e2f8e10.jpg",
  "https://telegra.ph/file/1ac7657a5e7b354cd9991.jpg",
  "https://telegra.ph/file/14161eab0c1d919dc3218.jpg",
  "https://telegra.ph/file/810411b9128fe11dd639a.jpg",
  "https://telegra.ph/file/5fe7e98533754b007e7a1.jpg",
  "https://telegra.ph/file/bf303b19b9834f90e9617.jpg",
  "https://telegra.ph/file/36ef2b807251dfccd17c2.jpg",
  "https://telegra.ph/file/bcc34403d16de829ea5d2.jpg",
  "https://telegra.ph/file/5c6b7615662fb53a39e53.jpg",
  "https://telegra.ph/file/1a8183eff48671ea265c2.jpg",
  "https://telegra.ph/file/f9745dcd22f67cbc62e08.jpg",
  "https://telegra.ph/file/02219f503317b0596e101.jpg",
  "https://telegra.ph/file/470c8ec30400a73d03207.jpg",
  "https://telegra.ph/file/c94fa8ed20f2c0cf16786.jpg",
  "https://telegra.ph/file/1b02a1ca6a39e741faec7.jpg",
  "https://telegra.ph/file/eea58bf7043fd697cdb43.jpg",
  "https://telegra.ph/file/ee3db7facdfe73c8df05a.jpg",
  "https://telegra.ph/file/d45b4e4af4f2139507f8c.jpg",
  "https://telegra.ph/file/d176e7fc8720f98f6b182.jpg",
  "https://telegra.ph/file/ce1e072829d1fa5d99f5f.jpg",
  "https://telegra.ph/file/a947933701be6d579c958.jpg",
  "https://telegra.ph/file/9027e5a464ec88e8ab5c1.jpg",
  "https://telegra.ph/file/049a8c611a838ea2f6daa.jpg",
  "https://telegra.ph/file/37b35fbc7e2ee73482ee1.jpg",
  "https://telegra.ph/file/9bcfade24ae85cd417f06.jpg",
  "https://telegra.ph/file/ac0c711585f4300c54355.jpg",
];

handler.limit = 50;
