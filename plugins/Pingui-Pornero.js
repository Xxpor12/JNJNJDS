let handler = async (m, {conn, command}) => {
  let url = pack[Math.floor(Math.random() * pack.length)];
    await conn.sendFile( 
     m.chat, 
     url, 
     "gimage.jpg", 
     ` 
𝗩𝗶𝗱𝗲𝗼𝘀 𝗗𝗲 𝗖𝗵𝗶𝗰𝗮𝘀 𝗛𝗼𝘁`.trim(), m)
};
handler.help = ["ChicasVideos"];
handler.tags = ["internet"];
handler.command = /^(ChicasVideos)$/i;
export default handler;

global.pack = [
  "https://telegra.ph/file/4a270d9945ac46f42d95c.mp4",
  "https://telegra.ph/file/958c11e84d271e783ea3f.mp4",
  "https://telegra.ph/file/f753759342337c4012b3f.mp4",
  "https://telegra.ph/file/379cee56c908dd536dd33.mp4",
  "https://telegra.ph/file/411d8f59a5cefc2a1d227.mp4",
  "https://telegra.ph/file/ee2cf1b359d6eef50d7b7.mp4",
  "https://telegra.ph/file/1e316b25c787f94a0f8fd.mp4",
  "https://telegra.ph/file/c229d33edce798cde0ca4.mp4",
  "https://telegra.ph/file/b44223e72dd7e80e415f2.mp4",
  "https://telegra.ph/file/61486d45a8a3ea95a7c86.mp4",
  "https://telegra.ph/file/76ba0dc2a07f491756377.mp4",
  "https://telegra.ph/file/831bb88f562bef3f1a15d.mp4",
  "https://telegra.ph/file/ee2cf1b359d6eef50d7b7.mp4",
  "https://telegra.ph/file/598857924f3a29ffd37ae.mp4",
  "https://telegra.ph/file/528caef6ea950ec45aeef.mp4",
  "https://telegra.ph/file/4a270d9945ac46f42d95c.mp4",
  "https://telegra.ph/file/958c11e84d271e783ea3f.mp4",
  "https://telegra.ph/file/f753759342337c4012b3f.mp4",
  "https://telegra.ph/file/379cee56c908dd536dd33.mp4",
  "https://telegra.ph/file/411d8f59a5cefc2a1d227.mp4",
  "https://telegra.ph/file/76ba0dc2a07f491756377.mp4",
  "https://telegra.ph/file/831bb88f562bef3f1a15d.mp4",
];

handler.limit = 22;