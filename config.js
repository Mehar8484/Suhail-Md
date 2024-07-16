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


global.SESSION_ID = process.env.SESSION_ID ||  " SUHAIL_03_45_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE4LFxuICAgICAgICA1NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDkwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODIsXG4gICAgICAgIDg0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDksXG4gICAgICAgIDgxLFxuICAgICAgICAyOCxcbiAgICAgICAgNDksXG4gICAgICAgIDE5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDk3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0MixcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNixcbiAgICAgICAgNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1LFxuICAgICAgICAxLFxuICAgICAgICAzMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDUwLFxuICAgICAgICA0NixcbiAgICAgICAgNjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDYwLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxODksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDMzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDQxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MixcbiAgICAgICAgNzEsXG4gICAgICAgIDE3LFxuICAgICAgICA5MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIxLFxuICAgICAgICA3NixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAxLFxuICAgICAgICA4NixcbiAgICAgICAgMjUwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICA1LFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDkzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDMyLFxuICAgICAgICA5NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDYwLFxuICAgICAgICA0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIxLFxuICAgICAgICA0LFxuICAgICAgICAyNyxcbiAgICAgICAgNjksXG4gICAgICAgIDc3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInZLWm91MUd6cmVvRU4xSWxZcmJSYTZzR3VkWW96U281L2l6MDArTlJqRG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjc0NTk5MDg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFNjlFMzg0NDM1NkQzODBFMzNEMUYxNjJCNjcxQUEzMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjExMDE1MTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNzQ1OTkwODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjBENjcyNjkyRTQ5NEJGRjU0QTRFRTRENjg0MjBCRjNEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTEwMTUxNFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJzUVBoTVJLMFFfdUZtZVdoaWVKY3ZRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY2Yzk4MmFjLThiNjMtNDgxOC1hNTYwLWFhNDQ0NTc1NGE5ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OCxcbiAgICAgIDUsXG4gICAgICAyMDgsXG4gICAgICA0LFxuICAgICAgNzQsXG4gICAgICA3MyxcbiAgICAgIDczLFxuICAgICAgMjM4LFxuICAgICAgMTUsXG4gICAgICA0MyxcbiAgICAgIDgwLFxuICAgICAgNDksXG4gICAgICAyNTEsXG4gICAgICA3MixcbiAgICAgIDEwNixcbiAgICAgIDExOSxcbiAgICAgIDIzNCxcbiAgICAgIDc0LFxuICAgICAgMTQ2LFxuICAgICAgMTc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYxLFxuICAgICAgMTAxLFxuICAgICAgMjYsXG4gICAgICAxODEsXG4gICAgICAxNDgsXG4gICAgICAxMjEsXG4gICAgICAxNDMsXG4gICAgICAxNyxcbiAgICAgIDc2LFxuICAgICAgMTcwLFxuICAgICAgMTIsXG4gICAgICAxMTgsXG4gICAgICAyMTAsXG4gICAgICAyMjUsXG4gICAgICAxLFxuICAgICAgMjQsXG4gICAgICA0LFxuICAgICAgMTQ0LFxuICAgICAgMTc5LFxuICAgICAgNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOVNCUEVOODhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI3NDU5OTA4ODoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmI/wnZi28J2Yu/CdmKLwnZiq8J2Yp/CdmKIg8J2YlvCdmKfwnZin8J2YqvCdmKTwnZiq8J2YovCdmK1cIixcbiAgICBcImxpZFwiOiBcIjg3NTE4OTE3Njk3NzQ4OjI0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tHT2w0RUVFTUxaMTdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVFVNWHJ2TDd0cWtoYUNlTlJqclN0cUwvbVVHTFcwWTZwOVlObHRpWm9UWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2YnQrN0tCa0NTYmpuTFgrTjVlWFZzalF5aXdQTCt6R0Z4eGVFczQyU2RQeEN6Q3hMRm5wMDBQR2ovT29KMFcvNm9HYUJpYnZGbmwzUFpsamYrQitDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJQcHl5UjBPWGVjQzJrY05yc1pHNC9yRVNjS0s5QmpRa043RDY2YW1ENjJRalQyWWkycHVsM2dxOVgvTnJMeU5QSGpRYlVlS0p1MFJRbEwzek01VTBoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNzQ1OTkwODg6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTEwMTUwOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9mdFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT2Z0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiRktaQWhwd3lZM1pCOTd5dTRmS3dnWno2cCsybnFtL0VkYmdib1hzZ2VUVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDc2MjE3NjMzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjExMDE1MTIxOTZcIn0iCn0="  // PUT your SESSION_ID 


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
