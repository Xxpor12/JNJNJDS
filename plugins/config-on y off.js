const handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {
  const optionsFull = `*Opción:* ✨ | WELCOME
*Comando:* ${usedPrefix + command} welcome
*Descripción:* Activa o desactiva la bienvenida en el grupo.

--------------------------------

*Opción:* 🌎 | MODO PUBLICO
*Comando:* ${usedPrefix + command} public
*Descripción:* El Bot se vuelve de uso publico y/o privado.
*Nota:* Este comando solo podrá ser usado por owners del Bot.

--------------------------------

*Opción:* 🥵 | MODO HORNY
*Comando:* ${usedPrefix + command} modohorny
*Descripción:* Activa o desactiva los comandos +18 en el grupo.

--------------------------------

*Opción:* 🔗 | ANTILINK
*Comando:* ${usedPrefix + command} antilink
*Descripción:* Activa o desactiva el anti-enlaces de WhatsApp.
*Nota:* Se necesita tener activo el restrict.

--------------------------------

*Opción:* 🔗 | ANTILINK 2
*Comando:* ${usedPrefix + command} antilink2
*Descripción:* Activa o desactiva el anti-enlaces que inician en HTTPS.
*Nota:* Se necesita tener activo el restrict.

--------------------------------

*Opción:* 🔎 | DETECT
*Comando:* ${usedPrefix + command} detect
*Descripción:* Activa o desacriva las notificaciones de cambios en el grupo.

--------------------------------

*Opción:* 🔎 | DETECT 2
*Comando:* ${usedPrefix + command} detect2
*Descripción:* Detecta modificaciones en el grupo y mantiene una mejor gestion.

--------------------------------

*Opción:* ❗ | RESTRICT
*Comando:* ${usedPrefix + command} restrict
*Descripción:* Activa o desactiva las restricciones del Bot, como la de sacar o agregar personas a un grupo.
*Nota:* Este comando solo podrá ser usado por owners del Bot.

--------------------------------

*Opción:* ☑️ | AUTOREAD
*Comando:* ${usedPrefix + command} autoread
*Descripción:* Marca como leido los mensajes y los estados automáticamente.
*Nota:* Este comando solo podrá ser usado por owners del Bot.

--------------------------------

*Opción:* 🔊 | AUDIOS
*Comando:* ${usedPrefix + command} audios
*Descripción:* Activa o desactiva los comandos de audios sin prefijos, en el grupo.

--------------------------------

*Opción:* 👾 | AUTOSTICKER
*Comando:* ${usedPrefix + command} autosticker 
*Descripción:* Todas las imagenes o videos enviados en el grupo se convierten en stickers. 

--------------------------------

*Opción:* 💬 | PCONLY
*Comando:* ${usedPrefix + command} pconly
*Descripción:* El Bot solo responderá a los comandos si es un chat privado.
*Nota:* Este comando solo podrá ser usado por owners del Bot.

--------------------------------

*Opción:* 🏢 | GCONLY
*Comando:* ${usedPrefix + command} gconly
*Descripción:* El Bot solo respondera a los comandos si es un grupo. 
*Nota:* Este comando solo podrá ser usado por owners del Bot.

--------------------------------

*Opción:* ❌ | ANTIVIEWONCE 
*Comando:* ${usedPrefix + command} antiviewonce
*Descripción:* Las imagenes enviadas para ver solo una vez, son reenviadas normal por el Bot. 

--------------------------------

*Opción:* 📵 | ANTILLAMADAS
*Comando:* ${usedPrefix + command} anticall
*Descripción:* El Bot bloquerá a las personas que llamen al Bot. 
*Nota:* Este comando solo podra ser usado por owners del Bot.

--------------------------------

*Opción:* 💬 | ANTIPRIVADO
*Comando:* ${usedPrefix + command} antiprivado
*Descripción:* El Bot bloquerá a las personas que escriban al privado del Bot. 
*Nota:* Este comando solo podrá ser usado por owners del Bot.

--------------------------------

*Opción:* 🤬 | ANTITOXIC
*Comando:* ${usedPrefix + command} antitoxic
*Descripción:* Detecta la malas palabras y advierte al participante del grupo, antes de ser eliminado.
*Nota:* Se necesita tener activo el restrict.

--------------------------------

*Opción:* 🕸️ | ANTITRABAS
*Comando:* ${usedPrefix + command} antitraba
*Descripción:* El Bot detecta textos largos que podrian ser virus y causar lag en el chat y elimina al usuario.
        throw false;
      }
      bot.antiCall = isEnable;
      break;
    case 'antiprivado':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antiPrivate = isEnable;
      break;
    case 'modejadibot':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.modejadibot = isEnable;
      break;
    case 'antispam':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antispam = isEnable;
      break;
    case 'antitoxic':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiToxic = isEnable;
      break;
    case 'antitraba':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiTraba = isEnable;
      break;
    case 'antiarabes':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn); 
          throw false;
        }
      }
      chat.antiArab = isEnable;
      break;
    case 'antiarabes2':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiArab2 = isEnable;
      break;
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, {text: optionsFull}, {quoted: m});
      throw false;
  }
  conn.sendMessage(m.chat, {text: `𝐂𝐨𝐦𝐚𝐧𝐝𝐨 ${isEnable ? '𝐀𝐜𝐭𝐢𝐯𝐚𝐝𝐨' : '𝐃𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨 '} 𝐂𝐨𝐧 𝐄𝐱𝐢𝐭𝐨 𝐋𝐨𝐧𝐠 𝐓𝐢𝐦𝐞 ${isAll ? '𝐁𝐨𝐭' : isUser ? '' : '𝗚𝗿𝘂𝗽𝗼'}`}, {quoted: m});
};
handler.help = ['en', 'dis'].map((v) => v + 'able <option>');
handler.tags = ['group', 'owner'];
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?[01])$/i;
export default handler;
