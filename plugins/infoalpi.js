let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI Alpi* ´ˎ˗
│ ✎ _Nama_ : Riel 
│ ✎ _Sekolah_ : SMK 3 TENGGARONG
│ ✎ _Umur_ : 16
│ ✎ _Asal_ :KALTIM
│ ✎ _Status_ : Pelajar SMK
│ ✎ _WhatsApp_ :
│    wa.me/6282146218274
╰──────────────
`.trim(), m)
}

handler.help = ['infoalpi']
handler.tags = ['main', 'utama']
handler.command = /^(infoalpi)$/i

handler.exp = 150

module.exports = handler
