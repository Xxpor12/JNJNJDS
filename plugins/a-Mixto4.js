const handler = async (m, {conn}) => {
  m.reply(global.VsMixto);
};
handler.command = /^(VsMixto|VsMixto)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.VsMixto = `
╭┈┈ ๑❀๑ •  *MIXTO* • ๑❀๑ ••:
│
│      ෆ _Encargadx:_  
│      ෆ _Horario:_ (  )🇵🇪 (  )🇦🇷
│      ෆ _Mod:_ 
│
│ㅤㅤ_ʚ Jugadorxs:_
│ㅤ🌸• 
│ㅤ🌸• 
│ㅤ🥷🏻• 
│ㅤ🥷🏻• 
│
│ㅤㅤ_ʚ Suplentes:_ 
│ㅤ🌸•  
│ㅤ🥷🏻• 
│
│   _⊹ ִֶָ Donador/Donadora De Sala:_ 
│
╰───────────────๑❀๑ 
`;
