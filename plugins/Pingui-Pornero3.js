let handler = async (m, {conn, command}) => {
  let url = pack[Math.floor(Math.random() * pack.length)];
    await conn.sendFile( 
     m.chat, 
     url, 
     "gimage.jpg", 
     ` 
𝗖𝗵𝗶𝗰𝗮𝘀 𝗛𝗼𝘁`.trim(), m)
};
handler.help = ["Booty"];
handler.tags = ["internet"];
handler.command = /^(Booty)$/i;
export default handler;

global.pack = [
"https://telegra.ph/file/82ec174077c4748073936.jpg",
"https://telegra.ph/file/6687386fe10ed920fc80d.jpg",
"https://telegra.ph/file/3250f58e0fb188b714054.jpg",
"https://telegra.ph/file/e59120aece01990a68847.jpg",
"https://telegra.ph/file/d716c80a6669a375b7041.jpg",
"https://telegra.ph/file/51fe1e7c35a0715c535e4.jpg",
"https://telegra.ph/file/6c484e93ca7dfe6024a79.jpg",
"https://telegra.ph/file/703bcf30d133bce65d9a2.jpg",
"https://telegra.ph/file/0445f3e22dc0110e5bb27.jpg",
"https://telegra.ph/file/32029e78b7b9b19629856.jpg",
"https://telegra.ph/file/e19759bffd9fe97955c37.jpg",
"https://telegra.ph/file/d23507e26317aac3cd7ae.jpg",
"https://telegra.ph/file/20761b8974f4259ba11a6.jpg",
"https://telegra.ph/file/e61e8a0aa914de19c44d0.jpg",
"https://telegra.ph/file/c0b9f892edce1868e10f5.jpg",
"https://telegra.ph/file/dac98ed33cb5ab92e6b08.jpg",
"https://telegra.ph/file/90237577c5a42219e9b81.jpg",
"https://telegra.ph/file/b3186f94ca97400e31884.jpg"
];

handler.limit = 18;