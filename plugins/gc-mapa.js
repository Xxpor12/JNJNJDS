const handler = async (m, {conn}) => {
  m.reply(global.mapa);
};
handler.command = /^(Mapa|mapa)$/i;
export default handler;

global.mapa = `
*Reglas Mapa : Pngui Bot*

*Caida*  ' Cambia Pingui X Tu Team'
_Pingui 1ra Sala Lado Derecho_
_Pingui 2da Sala Lado Izquierdo_

*Prohibido*

_Bombas Explosivas_
_Franco Execpto Los De Movil_
_Minas , Garitas , Granadas , Cegadoras_
_Autos , Cr7 , Wukon , Skyler , Dimitri_

*Nota*

_Equipo Que Incumpla Alguna Regla Automaticamente Gana El Equipo Contrario_
_Cualquier Reclamo Con Videos Claeos O Fotos_
_Si Cae Lado Contrario Se Tiene Q Eliminar_

*Aclaraciones*

_10 Min De Tolerancia Despues De Pasar Id Y Contraseña_
_Se Mata Al Marcar 1ra Zona_
_Max 1 Espec Por Equipo La Cual Solo Debera Ver A Su Equipo_
_Si Es Team 2/4 - 3/6   - 4/8 - 6/12 Con Tag_
_Clan Todos En El Mismo_

*Vestimenta*

_Pingui : Negro_
_Rival : Blanco_

*Creacion*

_1ra Sala : Rival_
_2da Sala : Pingui_
_3ra Sala : Perdedor De 1ra_


*🐧 𝗣𝗶𝗻𝗴𝘂𝗶𝗕𝗼𝘁-𝗠𝗗 🐧*
`;
