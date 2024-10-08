const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347054658422";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_10_16_09_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAsXG4gICAgICAgIDczLFxuICAgICAgICA5MixcbiAgICAgICAgNDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDg0LFxuICAgICAgICA2NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMixcbiAgICAgICAgMTIxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDgzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIsXG4gICAgICAgIDQ2LFxuICAgICAgICA3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMixcbiAgICAgICAgNzIsXG4gICAgICAgIDYyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA5NixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTkxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDUxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTYzLFxuICAgICAgICA0MixcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NSxcbiAgICAgICAgMzksXG4gICAgICAgIDU0LFxuICAgICAgICA0NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzksXG4gICAgICAgIDY4LFxuICAgICAgICAwLFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NixcbiAgICAgICAgNjUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjksXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICA0MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1LFxuICAgICAgICA0LFxuICAgICAgICAxODgsXG4gICAgICAgIDEsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQxLFxuICAgICAgICA2NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTA2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc4LFxuICAgICAgICA5NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDksXG4gICAgICAgIDEzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDg0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4LFxuICAgICAgICAzNSxcbiAgICAgICAgODgsXG4gICAgICAgIDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNSxcbiAgICAgICAgODMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDY4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDcwLFxuICAgICAgICA4MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODAsXG4gICAgICAgIDY2LFxuICAgICAgICAxODMsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkI5RHpnTDlTN2k5dWg2S2FBVUtuYTJpNlhVMEtGSEJoTDVDWURNVWFJS2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInJWTm5VajJPU0RDMTcxX05EVEJGdHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWJlYmUxZDYtZjA0ZC00MDRhLThhMWItZDkwZGU2MjdmMzY1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg5LFxuICAgICAgODUsXG4gICAgICAyNTMsXG4gICAgICAxOTEsXG4gICAgICAyMDMsXG4gICAgICAyNTIsXG4gICAgICAzNixcbiAgICAgIDE2NSxcbiAgICAgIDEzOSxcbiAgICAgIDkwLFxuICAgICAgMjAsXG4gICAgICAxNDAsXG4gICAgICAxNTIsXG4gICAgICAxNDIsXG4gICAgICAyMzAsXG4gICAgICA1LFxuICAgICAgMzMsXG4gICAgICAxNDgsXG4gICAgICA0OCxcbiAgICAgIDU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk1LFxuICAgICAgMTcyLFxuICAgICAgMTE4LFxuICAgICAgODIsXG4gICAgICAxNjMsXG4gICAgICA0OCxcbiAgICAgIDI3LFxuICAgICAgMTE4LFxuICAgICAgNDksXG4gICAgICAyMzMsXG4gICAgICAxMjIsXG4gICAgICAyNDQsXG4gICAgICAxNzMsXG4gICAgICAxNzEsXG4gICAgICAyMixcbiAgICAgIDIxMixcbiAgICAgIDIxMCxcbiAgICAgIDIzNSxcbiAgICAgIDIwMyxcbiAgICAgIDE0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxUzJQTlc3SlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA1NDY1ODQyMjoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc0MjU5NzAwMTQyMTYwOjIwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0x6Rm9Ea1FpOGJQdHdZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiczNjbkFMazFkNDRpalcyekIyODVUTEtlLzNqSjdrK2JaRmptb1lQbUJXQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNNXNCZS9QS2JQd0orY2pWSGdLbDdBVlhieUxlVjI3Qkk1WnJ2S2dXVXVVU0ZiR0g4WSswUUdKczdjTG1zMVFnVk0wMUpDekdDcEd1WkQxelNjbEhEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4MTFpaU91Rmx0eGh5MTFuUVcvTUxSUUgzaVlLWVUwa1EyRFprMzIvcVJVQjFyRHF5bk9YYUdqVTU1QXU4S3IxTDlnVVhsamR4d3VxTFVUS3hRY1ZCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDU0NjU4NDIyOjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzI1OTQwOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5SWFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTlJYLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQnpPZGJOMW93Z3BMM1UwdlhzK0YrYzRFOGgxd3l6dFloOEt5Y0Q3cHZyND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjAwNzA4NDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNzI1NjQ5MTk1NVwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
