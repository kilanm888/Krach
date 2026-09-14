
const fs = require("fs");
const chalk = require("chalk")

global.BOT_TOKEN = "8842668310:AAHa9RR16aTiRmj0K8wIdLiP01EcOPpCiyM" // create bot here https://t.me/Botfather and get bot token
global.BOT_NAME = "Medtari" //your bot name
global.OWNER_NAME = "https://t.me/VikingTY" //your name with sign @
global.OWNER = ["https://t.me/VIPMEDTAR", "https://t.me/VIPMEDTAR"] // Make sure the username is correct so that the special owner features can be used.
global.DEVELOPER = ["7265562347"] //developer telegram id to operate addprem delprem and listprem
global.pp = 'https://files.catbox.moe/ztcirt.png' //your bot pp


//approval
global.GROUP_ID = -1003379098410; // Replace with your group ID
global.CHANNEL_ID =  -1003854721549; // Replace with your channel ID
global.GROUP_LINK = "https://t.me/VikingYT12"; // Replace with your group link
global.CHANNEL_INVITE_LINK = "https://t.me/VikingTY"; // Replace with your private channel invite link
global.WHATSAPP_LINK = "https://wa.me/380675002394"; // Replace with your group link
global.YOUTUBE_LINK = "https://youtube.com/@faviking1?si=1JL_949aipe9Nq5h"; // Replace with your youtube link
global.INSTAGRAM_LINK = "https://whatsapp.com/channel/0029VbCPAfL6RGJDDSAoSr1h"; // Replace with your ig link

global.owner = global.owner = ['+380675002394'] //owner whatsapp

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
})