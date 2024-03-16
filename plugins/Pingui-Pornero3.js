let handler = async (m, {conn, command}) => {
  let url = pack[Math.floor(Math.random() * pack.length)];
    await conn.sendFile( 
     m.chat, 
     url, 
     "gimage.jpg", 
     ` 
 𝗢𝗻𝗹𝘆𝗙𝗮𝗻𝗩𝗶𝗽 𝟮`.trim(), m)
};
handler.help = ["OnlyVip2"];
handler.tags = ["internet"];
handler.command = /^(OnlyVip2)$/i;
export default handler;

global.OnlyVip2 = [
  "https://telegra.ph/file/40dd19183973b5ec44921.mp4",
  "https://telegra.ph/file/1a2962b6ca67cf28a8ded.mp4",
  "https://telegra.ph/file/c316bcd774f0e14d3b5d3.mp4",
  "https://telegra.ph/file/d7281f6e606a9c860b21d.mp4",
  "https://telegra.ph/file/2323d48475adc6f6b1508.mp4",
  "https://telegra.ph/file/ad5b78778357a91b7174a.jpg",
  "https://telegra.ph/file/8687aa2c9758537208b94.jpg",
  "https://telegra.ph/file/76e82280e5423ad539ae6.jpg",
];

handler.limit = 8;
