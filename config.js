const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_52_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDY0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUwLFxuICAgICAgICAzOCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg4LFxuICAgICAgICAxODUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExLFxuICAgICAgICAxMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDU5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTA3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY0LFxuICAgICAgICA0MixcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDc2LFxuICAgICAgICAwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDczLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUyLFxuICAgICAgICA2NCxcbiAgICAgICAgODYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAzLFxuICAgICAgICAyMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDUzLFxuICAgICAgICA0MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMsXG4gICAgICAgIDg4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTUsXG4gICAgICAgIDU1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDc2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDc3LFxuICAgICAgICA2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDU5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWFlVNEJRRm1PcENtWTQrZlM0ZGMxWGxyTjR4RWUvOGpLK0hDNjRiMGFDND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNzQ1OTkwODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlDNUMyM0E1RTREMEQwNTdFOUQ2MDUzRUQxODc5NjI4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDk2ODcyNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI3NDU5OTA4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQkRFMjI3NTUzNERBOUIyODc2MzkzRjVCQ0U0NjBGRjJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwOTY4NzI1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlNBM1ZId04xUm5XcEwtTnA2S3NCdUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmFiMDlkMWEtYWRjOS00YjdjLTlhYWYtZWVmY2JmNTI5MjgzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMixcbiAgICAgIDE2MCxcbiAgICAgIDQ5LFxuICAgICAgOTQsXG4gICAgICAyNCxcbiAgICAgIDE5MyxcbiAgICAgIDE5MixcbiAgICAgIDEzOSxcbiAgICAgIDIzOSxcbiAgICAgIDQ1LFxuICAgICAgMjU1LFxuICAgICAgMTI3LFxuICAgICAgNTMsXG4gICAgICAxNzEsXG4gICAgICA5MCxcbiAgICAgIDI5LFxuICAgICAgODEsXG4gICAgICA4MCxcbiAgICAgIDE4MyxcbiAgICAgIDI0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODksXG4gICAgICAxMTAsXG4gICAgICAxMjUsXG4gICAgICAxODEsXG4gICAgICAxMDksXG4gICAgICAyMTEsXG4gICAgICAxNTksXG4gICAgICA3LFxuICAgICAgODIsXG4gICAgICAxNjAsXG4gICAgICAxMixcbiAgICAgIDk4LFxuICAgICAgMTczLFxuICAgICAgMzcsXG4gICAgICAxNyxcbiAgICAgIDUwLFxuICAgICAgNzksXG4gICAgICAxOTYsXG4gICAgICAxMyxcbiAgICAgIDEzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWV05KS00yMlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjc0NTk5MDg4OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2Yj/CdmLbwnZi78J2YovCdmKrwnZin8J2YoiDwnZiW8J2Yp/CdmKfwnZiq8J2YpPCdmKrwnZii8J2YrVwiLFxuICAgIFwibGlkXCI6IFwiODc1MTg5MTc2OTc3NDg6MjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSjZPbDRFRUVJL016N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUVU1YcnZMN3Rxa2hhQ2VOUmpyU3RxTC9tVUdMVzBZNnA5WU5sdGlab1RZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImlWV0szK2FkNWEzQ1Q1eHZ1Q0xiQ3FWcWNIWmkrRnZFcE9PSGhjZmlGUTE2NWRyMkp6SURpcjg0SE51YllUWElGSVZjQnoyQ2VncVIvVkgzaGczK0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjVTc0tTZU43TEtUb3Nzejc3TG5Sa2xDRTBsR1RYaitFVHdkMlJ3cEZVZ1Bndk9SQ0FNOUFwT1VXalFtbC9CS2xVdTdUOXNuY3dmZG5Zb0sxTHU2TGhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI3NDU5OTA4ODoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwOTY4NzIxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTEpOXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMSk4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI0VWlnbHAzVzlMK3FmWGl5M3M4Q2gxQkRnc2x5UXEvUTEvTkJFa2gxUGhvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNzYyMTc2MzAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDk2ODcyNDMyNFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
