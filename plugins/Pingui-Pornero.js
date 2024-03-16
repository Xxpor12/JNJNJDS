let handler = async (m, {conn, command}) => {
  let url = pack[Math.floor(Math.random() * pack.length)];
    await conn.sendFile( 
     m.chat, 
     url, 
     "gimage.jpg", 
     ` 
𝗠𝗮𝗻𝘂𝗲𝗹𝗮 𝗤𝗺 𝗢𝗻𝗹𝘆`.trim(), m)
};
handler.help = ["Manuelaqm"];
handler.tags = ["internet"];
handler.command = /^(Manuelaqm)$/i;
export default handler;

global.Manuelaqm = [
  "https://telegra.ph/file/fcf61b400da70a341f8a9.mp4",
  "https://telegra.ph/file/d8a48d5f2861de12c7e08.mp4",
  "https://telegra.ph/file/0d5ae9f9a64e3ce6d249f.mp4",
  "https://telegra.ph/file/f32bf32901d46d2997986.mp4",
  "https://telegra.ph/file/508e4d637ef80477530d6.mp4",
];

handler.limit = 5;
