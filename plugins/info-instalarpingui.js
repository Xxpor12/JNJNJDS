const handler = async (m, {conn, isROwner, text}) => {
  const delay = (time) => new Promise((res) => setTimeout(res, time));
  const getGroups = await conn.groupFetchAllParticipating();
  const groups = Object.entries(getGroups).slice(0).map((entry) => entry[1]);
  const anu = groups.map((v) => v.id);
const handler = async (m, {conn}) => {
  m.reply(global.instalarbot);
};
handler.command = /^(instalarbot|instalarbot|instalarbot)$/i;
export default handler;

global.instalarbot = `
🐧 𝗣𝗶𝗻𝗴𝘂𝗶 𝗜𝗻𝘀𝘁𝗮𝗹𝗮𝗿 🐧

𝗛𝗼𝗹𝗮 𝗦𝗶 𝗗𝗲𝘀𝗲𝗮𝘀 𝗜𝗻𝘀𝘁𝗮𝗹𝗮𝗿 𝗘𝗹 𝗕𝗼𝘁 𝟭𝗿𝗼 𝗟𝗼 𝗧𝗶𝗲𝗻𝗲𝘀 𝗤𝘂𝗲 𝗖𝗼𝗺𝗽𝗿𝗮𝗿 𝗬 𝗘𝗹 𝗡𝘂𝗺𝗲𝗿𝗼 𝗘𝘀 +𝟱𝟭 𝟵𝟯𝟲 𝟵𝟵𝟰 𝟭𝟱𝟱
`