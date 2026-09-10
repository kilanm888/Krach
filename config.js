global.ownernomer = "201032935369"
global.dev = ["201060028549","201119252467","201032935369", "201550882115","201271574077","201040575564"]
global.ownername = "HXTEAM-𝐕9"
global.ytname = "HXTEAM"
global.socialm = "GitHub: DGXeon"
global.location = "Egypt, menofia, Ashmoun"

global.ownernumber = '22248682208'  //creator number
global.ownername = 'HXTEAM' //owner name
global.botname = 'HXTEAM V9' //name of the bot

//sticker details
global.packname = '\n\n\n\n\n\n\nSticker By'
global.author = 'FLIXUXW ⚉\n\nContact: 201014508636'

//console view/theme
global.themeemoji = '🪀'
global.wm = "HXTEAM."

//theme link
global.link = 'https://whatsapp.com/channel/0029Vb2QAwr17EmtV7jvyh1q'
global.idch = '120363386423395618@newsletter'

global.baileysDB = 'baileysDB.json'
global.botDb = 'database.json'

//prefix
global.prefa = ['','!','.',',','🐤','🗿'] 

global.limitawal = {
    premium: "Infinity",
    free: 20
}

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

// Global Respon
global.mess = {
    success: 'Done✓',
    admin: `\`[ # ]\` This Command Can Only Be Used By Group Admins !`,
    botAdmin: `\`[ # ]\` This Command Can Only Be Used When Bot Becomes Group Admin !`,
    OnlyOwner: `\`[ # ]\` This Command Can Only Be Used By Premium User ! \n\nWant Premium? Chat Developer.\nTelegram: @Modycrash6\nWhatsApp: +201558797062`,
    OnlyGrup: `\`[ # ]\` This Command Can Only Be Used In Group Chat !`,
    private: `\`[ # ]\` This Command Can Only Be Used In Private Chat !`,
    wait: `\`[ # ]\` Wait Wait a minute`,
    notregist: `\`[ # ]\` You are not registered in the Bot Database. Please register first.`,
    premium: `\`[ # ]\` This Command Can Only Be Used By Premium User ! \n\nWant Premium? Chat Developer.\nYouTube: @ModyOffc\nTelegram: @Modycrash6\nWhatsApp: +201558797062`,
}

module.exports = {

    banner: [

        "201014508636@s.whatsapp.net",

        "201032935369@s.whatsapp.net",

        "201126699326@s.whatsapp.net",

        "919366316018@s.whatsapp.net",

        "919485490229@s.whatsapp.net",

        "919402104403@s.whatsapp.net"

    ]

};

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})