let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI OWNER* ´ˎ˗
│ ✎ _Nama_ : lemon
│ ✎ _Sekolah_ : ga skolah
│ ✎ _Umur_ : 17
│ ✎ _Asal_ : Jawa timur
│ ✎ _Status_ : Turu deck
│ ✎ _Official Grup_ :
│    https://chat.whatsapp.com/BcVGEUc1gHR78CpYQPM2ic
│ ✎ _Official Grup_ :
│    https://chat.whatsapp.com/BcVGEUc1gHR78CpYQPM2ic
│ ✎ _Youtube _:
│    vakum
│ ✎ _Instagram_ : 
│    https://instagram.com/anton_krinj_
│ ✎ _WhatsApp_ :
│    wa.me/6281252232882
╰───────────────────
`.trim(), m)
}

handler.help = ['infojarot']
handler.tags = ['main', 'utama']
handler.command = /^(infojarot)$/i

handler.exp = 150

module.exports = handler
