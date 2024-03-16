let handler = async (m, {conn, command}) => {
  let url = OnlyVip[Math.floor(Math.random() * OnlyVip.length)];
    await conn.sendFile( 
     m.chat, 
     url, 
     "gimage.jpg", 
     ` 
 𝗢𝗻𝗹𝘆𝗙𝗮𝗻𝗩𝗶𝗽`.trim(), m)
};
handler.help = ["OnlyVip"];
handler.tags = ["internet"];
handler.command = /^(OnlyVip)$/i;
export default handler;

global.OnlyVip = [
  "https://telegra.ph/file/692f94f8fde456320011c.mp4",
  "https://telegra.ph/file/1e070db0e2a3f4f93baec.mp4",
  "https://telegra.ph/file/456f8710e3f9e9bf70e00.mp4",
  "https://telegra.ph/file/28493cfa3922983599ec4.mp4",
  "https://telegra.ph/file/8098928d44b71812ac686.mp4",
  "https://telegra.ph/file/c4225602a098d9ca505f0.jpg",
  "https://telegra.ph/file/ddffee9e8e1b920e1d550.jpg",
  "https://telegra.ph/file/6ff656f4d8223c6a488a8.jpg",
  "https://telegra.ph/file/5b8ae3d4becea6285db18.jpg",
  "https://telegra.ph/file/9f13cd6338f01322b18d2.jpg",
  "https://telegra.ph/file/63630a445cf9ea8bc39c7.jpg",
  "https://telegra.ph/file/438d30acefed1363cc461.jpg",
  "https://telegra.ph/file/c854f9e382a307a40595b.jpg",
];

handler.limit = 13;
