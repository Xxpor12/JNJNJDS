const handler = async (m, {conn}) => {
  m.reply(global.VsMasc);
};
handler.command = /^(VsMasc|VsMasc)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.VsMasc = `
╭┈┈ ๑❀๑ •  *MASC* • ๑❀๑ ••:
│
│      ෆ _Encargadx:_  
│      ෆ _Horario:_ (  )🇵🇪 (  )🇦🇷
│      ෆ _Mod:_ 
│
│ㅤㅤ_ʚ 𝘑𝘶𝘨𝘢𝘥𝘰𝘳𝘦𝘴:_
│ㅤ🥷🏻• 
│ㅤ🥷🏻• 
│ㅤ🥷🏻• 
│ㅤ🥷🏻• 
│
│ㅤㅤ_ʚ 𝘚𝘶𝘱𝘭𝘦𝘯𝘵𝘦𝘴:_ 
│ㅤ🥷🏻• 
│ㅤ🥷🏻• 
│
│   _⊹ ִֶָ Donador/Donadora De Sala:_ 
│
╰───────────────๑❀๑ 
`;
