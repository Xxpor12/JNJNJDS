const handler = async (m, {conn}) => {
  m.reply(global.Formulario);
};
handler.command = /^(Formulario)$/i;
export default handler;
global.Formulario = `
♡𝅼  ͡   *REQUISITOS TEAM :* ۟   ָ֢    ֹ  

*⎯★⃞💭 ﾞ Nombre:*
*⎯★⃞💭 ﾞ Ig:*
*⎯★⃞💭 ﾞ Nick del juego:*
*⎯★⃞💭 ﾞ Edad:*
*⎯★⃞💭 ﾞ Cuentas con cambio de nombre?:*
*⎯★⃞💭 ﾞ En que destacas más?:*
*⎯★⃞💭 ﾞ Cuentas con sala?:*
*⎯★⃞💭 ﾞ Experiencia en vv2,500 y mapa?:*

*ᜊ 1 Vez Hayas Terminado @ A Cualquier Administrador*
`;
