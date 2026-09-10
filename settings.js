const fs = require("fs");

const chalk = require("chalk")

global.BOT_TOKEN = "8968164820:AAEiq4O9i7TBqicxvsEflbEDrIzN__b0ITQ" // create bot here https://t.me/Botfather and get bot token

global.BOT_NAME = "mrmedtarbot" //your bot name

global.OWNER_NAME = "https://t.me/flashaudio" //your name with sign @

global.OWNER = ["https://t.me/med_tar", "https://www.youtube.com/@flixkill"] // Make sure the username is correct so that the special owner features can be used.

global.DEVELOPER = ["22242203253"] //developer telegram id to operate addprem delprem and listprem

global.ppp = 'https://files.catbox.moe/o2n84k.mp4' //your bot pp

global.pp = 'https://files.catbox.moe/sniw9v.jpg'

//approval

global.GROUP_ID = -1002835668192; // Replace with your group ID

global.CHANNEL_ID =  -1002835668192; // Replace with your channel ID

global.GROUP_LINK = "https://t.me/flashaudio"; // Replace with your group link

global.CHANNEL_INVITE_LINK = "https://t.me/flashaudio"; // Replace with your private channel invite link

global.WHATSAPP_LINK = "https://whatsapp.com/channel/0029Vb2QAwr17EmtV7jvyh1q"; // Replace with your group link

global.YOUTUBE_LINK = "https://www.youtube.com/@flixkill"; // Replace with your youtube link

global.INSTAGRAM_LINK = "https://www.tiktok.com/@.flix39?_r=1&_t=ZS-91V8J6IZRZa"; // Replace with your ig link

global.owner = global.owner = ['22248682208'] //owner whatsapp

const {

   english

} = require("./lib");

global.language = english

global.lang = language

let file = require.resolve(__filename)

fs.watchFile(file, () => {

fs.unwatchFile(file)

console.log(chalk.redBright(`Update ${__filename}`))

delete require.cache[file]

require(file)

})})re(file)

})