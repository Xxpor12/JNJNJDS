const handler = async (m, {conn}) => {
  m.reply(global.Ficha);
};
handler.command = /^(Ficha)$/i;
export default handler;
global.Ficha = `
*LLENAR FORMULARIO*

*NICK FF :*
*NICK PERSONAL :*
*EDAD :*
*DISPONIBILIDAD DE TIEMPO :*
*EXP EN VV2 :*
*EXP EN MAPA :*
*JUGADOR DE PC O MOVIL :*
*EN QUE MODO DESTACAS MAS:*

*Nota : 1 Vez Hayas Pasado El Formulario Manda Cap De Tu Perfil En Br Y Decla Mencionando A Cualquier Admin Menos El Bot*
`;
