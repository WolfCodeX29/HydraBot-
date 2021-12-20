/*
Jangan Hapus Wm
Menu Catalog No Enc
Spcial 150 Subrek
Nanti Gua Up Base Pribadi
Jangan Lupa Subrek
*/
/*
Thanks To
Allah SWT
Kedua Orang Tua
KirBotz
Ndyie Bot
*/
const {
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
} = require('@adiwajshing/baileys')
const axios = require('axios')
const speed = require('performance-now')
const request = require('request')
const fs = require('fs')
const ffmpeg = require('fluent-ffmpeg')
const crypto = require('crypto')  
const moment = require('moment-timezone')
const yts = require( 'yt-search')
const { exec, spawn, execSync } = require('child_process')


//━━━━━━━━━━━━━━━[ Lib  ]━━━━━━━━━━━━━━━\\
const { color, bgcolor } = require('./lib/color')
const { fetchJson, fetchText, runtime } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { TiktokDownloader } = require('./lib/gif.js')
const {
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start,
  info,
  success,
  close,
} = require("./lib/functions");
//━━━━━━━━━━━━━━━[ DATABASE  ]━━━━━━━━━━━━━━━\\
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
//━━━━━━━━━━━━━━━[ POTO  ]━━━━━━━━━━━━━━━\\
tamnel = fs.readFileSync('./itsuki.jpg')
kirtod = fs.readFileSync('./akirtod.jpg')
//━━━━━━━━━━━━━━━[ SETTING  ]━━━━━━━━━━━━━━━\\
 ownerNumber = ["@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net"]
 BotNumber = '62857785356308'
 botName = "HydraBOT"
 ownerName = '𝑾𝒐𝒍𝒇𝑪𝒐𝒅𝒆𝑿☹︎'
 lolkeyyy = 'foxycodex'
//━━━━━━━━━━━━━━━[ Public Self ]━━━━━━━━━━━━━━━\\
isSelf = false
isPublic = false
autorespon = false
//━━━━━━━━━━━━━━━[ Jam ]━━━━━━━━━━━━━━━\\
function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);
            return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
            }
        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
          if(time2 < "23:59:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦🌌'
}
          if(time2 < "19:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐞𝐭𝐚𝐧𝐠🌆'
}
          if(time2 < "18:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞🌇'
}
          if(time2 < "15:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠🏞'
}
          if(time2 < "11:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢🌅'
}
          if(time2 < "05:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦🏙'
}
const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};  
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
//━━━━━━━━━━━━━━━[ MODULE EXPORTS ]━━━━━━━━━━━━━━━\\
            module.exports = Rendy = async (Rendy, kir) => {
	       try {
            if (!kir.hasNewMessage) return
            kir = kir.messages.all()[0]
			if (!kir.message) return
			if (kir.key && kir.key.remoteJid == 'status@broadcast') return
			if (kir.key.fromMe) return
			global.prefix
			global.blocked		
		    kir.message = (Object.keys(kir.message)[0] === 'ephemeralMessage') ? kir.message.ephemeralMessage.message : kir.message
			const content = JSON.stringify(kir.message)
			const from = kir.key.remoteJid
	        const type = Object.keys(kir.message)[0]
			const { text, extendedText, contact, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
            const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
            const hour_now = moment().format('HH:mm:ss')
            const cmd = (type === 'conversation' && kir.message.conversation) ? kir.message.conversation : (type == 'imageMessage') && kir.message.imageMessage.caption ? kir.message.imageMessage.caption : (type == 'videoMessage') && kir.message.videoMessage.caption ? kir.message.videoMessage.caption : (type == 'extendedTextMessage') && kir.message.extendedTextMessage.text ? kir.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            const prefix = /^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*@,;]/.test(cmd) ? cmd.match(/^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*,;]/gi) : '-'          	
			body = (type === 'conversation' && kir.message.conversation.startsWith(prefix)) ? kir.message.conversation : (type == 'imageMessage') && kir.message[type].caption.startsWith(prefix) ? kir.message[type].caption : (type == 'videoMessage') && kir.message[type].caption.startsWith(prefix) ? kir.message[type].caption : (type == 'extendedTextMessage') && kir.message[type].text.startsWith(prefix) ? kir.message[type].text : (type == 'listResponseMessage') && kir.message[type].singleSelectReply.selectedRowId ? kir.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && kir.message[type].selectedButtonId ? kir.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(kir.message[type].fileSha256.toString('base64')) !== null && getCmd(kir.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(kir.message[type].fileSha256.toString('base64')) : ""
		    budy = (type === 'conversation') ? kir.message.conversation : (type === 'extendedTextMessage') ? kir.message.extendedTextMessage.text : ''
	     	selectedButton = (type == 'buttonsResponseMessage') ? kir.message.buttonsResponseMessage.selectedButtonId : ''
            responseButton = (type == 'listResponseMessage') ? kir.message.listResponseMessage.title : ''
		    button = (type == 'buttonsResponseMessage') ? kir.message.buttonsResponseMessage.selectedDisplayText : ''
	    	isImage = (type === 'imageMessage')
	    	const isVideo = (type === 'videoMessage')
		    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
	      	const args = body.trim().split(/ +/).slice(1)
	    	const isCmd = body.startsWith(prefix)
	       	const q = args.join(' ')
		    const botNumber = Rendy.user.jid
		    const botNumberss = Rendy.user.jid + '@c.us'
		    const isGroup = from.endsWith('@g.us')
		    let sender = isGroup ? kir.participant : kir.key.remoteJid
		    const isOwner = ownerNumber.includes(sender)
	     	const totalchat = await Rendy.chats.all()
		    const groupMetadata = isGroup ? await Rendy.groupMetadata(from) : ''
		    const groupName = isGroup ? groupMetadata.subject : ''
	     	const groupId = isGroup ? groupMetadata.jid : ''
		    const groupMembers = isGroup ? groupMetadata.participants : ''
		    const groupDesc = isGroup ? groupMetadata.desc : ''
	     	const groupOwner = isGroup ? groupMetadata.owner : ''
		    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
	     	const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		    const isGroupAdmins = groupAdmins.includes(sender) || false        
		    const isWelkom = isGroup ? welkom.includes(from) : false
		    const isAntiLink = isGroup ? antilink.includes(from) : false
            const conts = kir.key.fromMe ? Rendy.user.jid : Rendy.contacts[sender] || { notify: jid.replace(/@.+/, '') }
            const pushname = kir.key.fromMe ? Rendy.user.name : conts.notify || conts.vname || conts.name || '-'
            
            const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${wib} *𝑾𝒊𝒃*\n       ${wita} *𝑾𝒊𝒕𝒂*\n       ${wit} *𝑾𝒊𝒕*`,
                 "h": `${wib} *𝑾𝒊𝒃*\n       ${wita} *𝑾𝒊𝒕𝒂*\n       ${wit} *𝑾𝒊𝒕*`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${wib} *𝑾𝒊𝒃*\n       ${wita} *𝑾𝒊𝒕𝒂*\n       ${wit} *𝑾𝒊𝒕*`,
                 'jpegThumbnail': fs.readFileSync('./itsuki.jpg')
                        }
                       }
	                  } 
let d = new Date
let locale = 'en'
let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
//━━━━━━━━━━━━━━━[ CONNECTION 1 ]━━━━━━━━━━━━━━━\\            
		mess = {
			wait: 'Wait For Minute',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Khusus Group Ya Bang',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

//
if (!isGroup && !isCmd && !command && !kir.key.fromMe && !autorespon) {
numd = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${sender}`, {method: 'get'})
	simi = await fetchJson(`https://api.simsimi.net/v2/?text=${cmd}&lc=id`)
                     sami = simi.success
                        Rendy.sendMessage(from, `_${sami}_`, text, {thumbnail: tamnel, sendEphemeral: true, quoted:kir, contextInfo : {forwardingScore: 508, isForwarded: true}})
                      }
//

const hideTag = async function(from, text){
	       let anu = await Rendy.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       Rendy.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('./akirtod.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  

             

        const listmsg = (from, title, desc, list) => { 
            let po = Rendy.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "SELECT","footerText": "_*©KirBotz*_","listType": "SINGLE_SELECT","sections": list}}, {})
            return Rendy.relayWAMessage(po, {waitForAck: true})
        }
        
        const reply = (teks) => {
            Rendy.sendMessage(from, teks, text, {quoted:fgi})
        }

        const replly = (teks) => {
			Rendy.sendMessage(from, teks, text, { thumbnail: tamnel, sendEphemeral: true, quoted: fgi, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${date}`,body:"SELECT",previewType:"PHOTO",thumbnail:tamnel,sourceUrl:`https://wa.me/p/62857785356307`}}})
		}
        
        const sendMess = (hehe, teks) => {
            Rendy.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? Rendy.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Rendy.sendMessage(from, teks.trim(), extendedText, { quoted: kir, contextInfo: { "mentionedJid": memberr } })
        }            
            
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
let kma = gam1
let mhan = await Rendy.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
Rendy.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
Rendy.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await Rendy.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
Rendy.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButloc = (from, title, text, desc, button, sen, men, file) => {
return Rendy.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: kir, contextInfo: {"mentionedJid": men ? men : []}})
}
//Runtime
		const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                         //WAKTU UCAPAN                      
case 0: jamss = "Jangan gadang kak"; break;
  case 1: jamss = "Jangan gadang kak"; break;
     case 2: jamss = "Jangan gadang kak"; break;
        case 3: jamss = "Jangan gadang kak"; break;
            case 4: jamss = "Sholat subuh kak"; break;
               case 5: jamss = "Selamat pagi"; break;
                 case 6: jamss = "Selamat pagi"; break;
                    case 7: jamss = "Selamat pagi"; break;
                       case 8: jamss = "Selamat pagi"; break;
                          case 9: jamss = "Selamat pagi"; break;
                             case 10: jamss = "Selamat pagi"; break;
                               case 11: jamss = "Selamat siang"; break;
                                 case 12: jamss = "sholat Zuhur kak"; break;//GABUT🗿
                              case 13: jamss = "Selamat siang"; break;
                           case 14: jamss = "Selamat sore"; break;
                        case 15: jamss = "sholat Ashar kak"; break;
                     case 16: jamss = "Selamat sore"; break;
                  case 17: jamss = "Selamat sore"; break;
               case 18: jamss = "Selamat malam"; break;
            case 19: jamss = "sholat Isya kak"; break;
         case 20: jamss = "Selamat malam"; break;
      case 21: jamss = "Selamat malam"; break;
   case 22: jamss = "Selamat malam"; break;
case 23: jamss = "Selamat malam"; break;
}
var tampilUcapan = "" + jamss;
//━━━━━━━━━━━━━━━[ Register ]━━━━━━━━━━━━━━━━━//
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

//BUTTON DAFTAR/VERIFY
const isRegistered = checkRegisteredUser(sender)

const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
Rendy.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `Hai kak  ${pushname} ${tampilUcapan} \n\nSebeum Menggunakan Bot ${botName} Harap Daftarkan Diri dengan klik Button Verify di bawah ini!`
const daftar2 = 'SUBSCRIBE LINK DI BAWAH INI❕\nhttps://youtube.com/c/ItzMeHydra'
const daftar3 = [{buttonId: `${prefix}verify`,buttonText: {displayText: `DAFTAR`,},type: 1,},]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
//━━━━━━━━━━━━━━━[ Fake Fakean ]━━━━━━━━━━━━━━━\\
        const fakestatus = (teks) => {
            Rendy.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fteks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": tamnel,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        Rendy.updatePresence(from, Presence.composing)
        Rendy.chatRead(from, "read")
        const fakegroup = (teks) => {
            Rendy.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fteks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": tamnel,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 169,
                            status: 1,
                            surface : 1,
                            message: `𝑾𝒐𝒍𝒇𝑪𝒐𝒅𝒆𝑿☹︎`, 
                            orderTitle: `𝑾𝒐𝒍𝒇𝑪𝒐𝒅𝒆𝑿☹︎`,
                            thumbnail: tamnel, //thumb
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }           
const floc = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
liveLocationMessage: {
caption: `${tampilUcapan} ${pushname}`,
jpegThumbnail: tamnel
}
}
}
//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━\\

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Rendy.sendMessage(to, media, MessageType.sticker,{quoted:kir})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Rendy.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }              
//━━━━━━━━━━━━━━━[ CONNECTION 3 ]━━━━━━━━━━━━━━━\\

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
        if (!kir.key.fromMe && isSelf === true) return
///Antilink
if (isGroup && !kir.key.fromMe && isAntiLink) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return replly('Your is Admin!! Bot not Found kick You :D')
console.log(color('[KICK]', 'red'), color('Received a link!', 'yellow'))
replly(`「 *LINK GRUP TERDETEKSI* 」\n\n_Kamu Akan Di Kick Dari Group!!_`)
setTimeout(() => {
Rendy.groupRemove(from, [sender])
}, 2000);
}
}
//━━━━━━━━━━━━━━━[ WELCOME TO MENU ]━━━━━━━━━━━━━━━\\
switch (command) {             
//
case 'ssweb':
case 'ss':
                if (args.length < 1) return replly('Urlnya mana om')
					teks = q
					anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
					buff = await getBuffer(anu.screenshot)
					Rendy.sendMessage(from, buff, image, {quoted: fgi, caption : teks})
					break
//
case 'menu':
case 'help':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
thu = await Rendy.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split("@")[0]}`
Rendy.sendMessage(from, { contentText: `${menuh}`, footerText: `
*──────" 𝕭𝖔𝖙 𝕴𝖓𝖋𝖔 "──────*
 👤OWNER : *https://wa.me/62857785356307*
 🔎YT : *bit.ly/MyChamnel*
 🪀GROUP : *bit.ly/HydraBotGroup*
    ${wib} *𝑾𝒊𝒃*
    ${wita} *𝑾𝒊𝒕𝒂*
    ${wit} *𝑾𝒊𝒕*
    
Selamat Menggunakan Bot\nIngat! Jangan Pernah Spam Bot , Merusak Bot\nMaka Owner Tidak AkanSegan" Mengeban Mu🗿

*𝑾𝒐𝒍𝒇𝑪𝒐𝒅𝒆𝑿☹︎*
̵`, buttons: [{ buttonId: `${prefix}allmenu`, buttonText: { displayText: 'メ MENU' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'メ OWNER' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: kirtod, contextInfo: {mentionedJid: [sender, ownerNumber]}}}, 'buttonsMessage')
break
case 'allmenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
	menunyai = `Hai Kak *${pushname}* ${ucapanWaktu}
	
*──────" INFORMASI "──────*
Nama Owner : *${ownerName}*
Nama Bot : *${botName}*
Runtime : ${runtime(process.uptime())}
Total Chat : *${totalchat.length}*
    ${wib} *𝑾𝒊𝒃*
    ${wita} *𝑾𝒊𝒕𝒂*
    ${wit} *𝑾𝒊𝒕*

*──────" OWNER MENU "──────*
➛ ${prefix}owner
➛ ${prefix}runtime
➛ ${prefix}bc
➛ ${prefix}bc2
➛ ${prefix}tobc
➛ ${prefix}upswtext
➛ ${prefix}upswtexs
➛ ${prefix}upswsticker
➛ ${prefix}upswgif
➛ ${prefix}upswlokasi
➛ ${prefix}upswimage
➛ ${prefix}upswvideo
➛ ${prefix}upswaudio
➛ ${prefix}upswvn
➛ ${prefix}report

*──────" GROUP MENU "──────*
➛ ${prefix}welcome
➛ ${prefix}antilink
➛ ${prefix}tagall
➛ ${prefix}hidetag
➛ ${prefix}totag

*──────" SOUND MENU "──────*
➛ ${prefix}sound1
➛ ${prefix}sound2
➛ ${prefix}sound3
➛ ${prefix}sound4
➛ ${prefix}sound5
➛ ${prefix}sound6
➛ ${prefix}sound7
➛ ${prefix}sound8
➛ ${prefix}sound9
➛ ${prefix}sound10

*──────" FUN MENU "──────*
➛ ${prefix}faktaunik
➛ ${prefix}katabijak
➛ ${prefix}bucin
➛ ${prefix}fitnah
➛ ${prefix}cekganteng
➛ ${prefix}cekcatik
➛ ${prefix}apakah
➛ ${prefix}bisakah
➛ ${prefix}kapankah
➛ ${prefix}watak
➛ ${prefix}hobby
➛ ${prefix}persengay
➛ ${prefix}persenbucin
➛ ${prefix}rate
➛ ${prefix}quotes
➛ ${prefix}katailham
➛ ${prefix}bacotandilan
➛ ${prefix}bucin
➛ ${prefix}hekerbucin
➛ ${prefix}truth
➛ ${prefix}dare
➛ ${prefix}tebakgambar
➛ ${prefix}caklontong
➛ ${prefix}family100

*──────" CONVERT MENU "──────*
➛ ${prefix}sticker
➛ ${prefix}toimg
➛ ${prefix}tourl

*──────" 18+ MENU "──────*
➛ ${prefix}xnxxsearch
➛ ${prefix}xnxx
➛ ${prefix}kodenuklir
➛ ${prefix}bokep1
➛ ${prefix}bokep2
➛ ${prefix}bokep3
➛ ${prefix}bokep4
➛ ${prefix}bokep5
➛ ${prefix}bokep6
➛ ${prefix}bokep7
➛ ${prefix}bokep8
➛ ${prefix}bokep9
➛ ${prefix}bokep10
➛ ${prefix}bokep11
➛ ${prefix}bokep12
➛ ${prefix}bokep13
➛ ${prefix}bokep14
➛ ${prefix}bokep15

*──────" ASUPAN MENU "──────*
➛ ${prefix}cecanjapan
➛ ${prefix}cecanindonesia
➛ ${prefix}ukhti
➛ ${prefix}bocil
➛ ${prefix}ghea
➛ ${prefix}rika
➛ ${prefix}cecanmalaysia
➛ ${prefix}cecankorea
➛ ${prefix}cecanthailand
➛ ${prefix}cogan
➛ ${prefix}cecan
➛ ${prefix}cecanvietnam
➛ ${prefix}cecanrandom
➛ ${prefix}hijaber
➛ ${prefix}santuy

*──────" DOWNLOAD MENU "──────*
➛ ${prefix}ytmp3
➛ ${prefix}ytmp4
➛ ${prefix}play
➛ ${prefix}tiktok
➛ ${prefix}tiktokaudio
➛ ${prefix}ttaudio
➛ ${prefix}pinterest

*──────" RANDOM MENU "──────*
➛ ${prefix}ssweb
➛ ${prefix}detikvn
➛ ${prefix}detikvideo
➛ ${prefix}randomdarkjokes
➛ ${prefix}randommemeindo
➛ ${prefix}memeindo
➛ ${prefix}randomnama
➛ ${prefix}asmaulhusna
➛ ${prefix}jadwalsholat
➛ ${prefix}quotesanime
➛ ${prefix}quotesdilan
➛ ${prefix}quotes
➛ ${prefix}quotesimage
➛ ${prefix}nulis
➛ ${prefix}nuliskanan
➛ ${prefix}nuliskiri
➛ ${prefix}foliokanan
➛ ${prefix}foliokiri
➛ ${prefix}ssweb

*──────" ANIME MENU "──────*
➛ ${prefix}manga
➛ ${prefix}character
➛ ${prefix}anime
➛ ${prefix}kusoanimesearch
➛ ${prefix}otakudesusearch
➛ ${prefix}nekopoisearch

*──────" TQTO "──────*
𝑻𝒉𝒙 𝑻𝒐
- 𝑨𝒌𝒊𝒓𝒂
- 𝑭𝒐𝒙𝒚𝑪𝒐𝒅𝒆𝑿
-𝑾𝒐𝒍𝒇𝑪𝒐𝒅𝒆𝑿
	`
var imgs = await Rendy.prepareMessage('0@c.us', tamnel, image, { thumbnail: tamnel })
            var imgCatalog = imgs.message.imageMessage
            var ctlg = await Rendy.prepareMessageFromContent(from, {
                "productMessage": {
                    "product": {
                        "productImage": imgCatalog,
                        "productId": "4457725420906655",
                        "title": `ALL MENU`,
                        "description": menunyai,
                        "footerText": `𝑾𝒐𝒍𝒇𝑪𝒐𝒅𝒆𝑿☹︎`,
                        "currencyCode": "IDR",
                        "priceAmount1000": "Wolfpedia?",
                        "productImageCount": 1,
                        "firstImageId": 1,
                        "salePriceAmount1000": "*Hi Mangstah!*",
                        "retailerId": `𝑾𝒐𝒍𝒇𝑪𝒐𝒅𝒆𝑿☹︎`,
                        "url": "OWNER : https://wa.me/62857785356307\nYT : https://bit.ly/3BpBe1Z\nGROUP : https://bit.ly/3Ene2TO"
                    },
                    "businessOwnerJid": "62857785356307@s.whatsapp.net",
                }
            }, { quoted: fgi, mimetype: 'image/jpeg' })
            Rendy.relayWAMessage(ctlg)
            break
case 'rules':
thu = await Rendy.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split("@")[0]}
𒍮 𝙍𝙪𝙡𝙚𝙨 𝘽𝙤𝙩𝙯
❒͡ 1. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑺𝒑𝒂𝒎 𝑩𝒐𝒕𝒛
      *sᴀɴᴋsɪ : ᴡᴀʀɴ/sᴏғᴛ ʙʟᴏᴄᴋ*
❒͡ 2. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑻𝒆𝒍𝒆𝒑𝒐𝒏 𝑩𝒐𝒕𝒛
      *sᴀɴᴋsɪ : sᴏғᴛ ʙʟᴏᴄᴋ*
❒͡ 3. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑩𝒂𝒏𝒅𝒊𝒏𝒈 𝑩𝒐𝒕𝒛
      *sᴀɴᴋsɪ : ʙʟᴏᴄᴋ ᴘᴇʀᴍᴀɴᴇɴ*

𒍮 𝑶𝒘𝒏𝒆𝒓 𝑩𝒐𝒕𝒛 ↓↓
_*https://wa.me/62857785356307*_`
Rendy.sendMessage(from, { contentText: `${menuh}`, footerText: `
*──────" 𝕭𝖔𝖙 𝕴𝖓𝖋𝖔 "──────*
  👤OWNER : *https://wa.me/62857785356307*
 🔎YT : *bit.ly/MyChamnel*
 🪀GROUP : *bit.ly/HydraBotGroup*
Nama Bot : *${botName}*
Runtime : ${runtime(process.uptime())}
Total Chat : *${totalchat.length}*
    ${wib} *𝑾𝒊𝒃*
    ${wita} *𝑾𝒊𝒕𝒂*
    ${wit} *𝑾𝒊𝒕*

*Jika Sudah Paham Rules Nya Silahkan Pencet Di Bawah Jika Tidak Kelihatan Ketik .menu*
̵`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '📜 Menu' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender, ownerNumber]}}}, 'buttonsMessage')
break
//━━━━━━━━━━━━━━━[ FITUR ASUPAN ]━━━━━━━━━━━━━━━━━//
case 'cogan':
replly(`✍️Tunggu Sebentar....`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/cogan?apikey=KontoleBaperan`)
wmn = `𝑾𝒐𝒍𝒇𝑪𝒐𝒅𝒆𝑿☹︎`
trans = `Subrek YT : ItzMeHydra×`
but = [
          { buttonId: `${prefix}cogan`, buttonText: { displayText: '🔖 Next' }, type: 1 }
        ]
        sendButImage(from, wmn, trans, buff, but)
break
case 'cecan':
replly(`✍️Tunggu Sebentar....`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/cecan?apikey=KontoleBaperan`)
wmn = `𝑾𝒐𝒍𝒇𝑪𝒐𝒅𝒆𝑿☹︎`
trans = `Subrek YT : ItzMeHydra×`
but = [
          { buttonId: `${prefix}cecan`, buttonText: { displayText: '🔖 Next' }, type: 1 }
        ]
        sendButImage(from, wmn, trans, buff, but)
break
case 'cecanvietnam':
huft = await fetchJson(`https://Rendy-api.herokuapp.com/api/cewe/vietnam?apikey=Rendy`)
replly(`✍️Tunggu Sebentar....`)
goo = await getBuffer(huft.result.url)
Rendy.sendMessage(from, goo, image, {quoted: fgi, caption: 'Nih Jangan Lupa Subscribe YT : KirBotz×'})
break
case 'cecanrandom':
ini = await fetchJson(`https://Rendy-api.herokuapp.com/api/asupan/cecan?apikey=Rendy`)
replly(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
Rendy.sendMessage(from, buffer, image, {quoted: fgi, caption: ''})
break
case 'hijaber':
ini = await fetchJson(`https://Rendy-api.herokuapp.com/api/asupan/hijaber?apikey=Rendy`)
replly(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
Rendy.sendMessage(from, buffer, image, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'santuy':
ini = await fetchJson(`https://Rendy-api.herokuapp.com/api/asupan/santuy?apikey=Rendy`)
replly(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
Rendy.sendMessage(from, buffer, video, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'ukhti':

ini = await fetchJson(`https://Rendy-api.herokuapp.com/api/asupan/ukty?apikey=Rendy`)
replly(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
Rendy.sendMessage(from, buffer, video, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'bocil':

ini = await fetchJson(`https://Rendy-api.herokuapp.com/api/asupan/bocil?apikey=Rendy`)
replly(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
Rendy.sendMessage(from, buffer, video, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'ghea':

ini = await fetchJson(`https://Rendy-api.herokuapp.com/api/asupan/ghea?apikey=Rendy`)
replly(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
Rendy.sendMessage(from, buffer, video, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'rika':

ini = await fetchJson(`https://Rendy-api.herokuapp.com/api/asupan/rikagusriani?apikey=Rendy`)
replly(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
Rendy.sendMessage(from, buffer, video, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecanmalaysia':
huft = await fetchJson(`https://Rendy-api.herokuapp.com/api/cewe/malaysia?apikey=Rendy`)
replly(`✍️Tunggu Sebentar....`)
goo = await getBuffer(huft.result.url)
Rendy.sendMessage(from, goo, image, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecankorea':

huft = await fetchJson(`https://Rendy-api.herokuapp.com/api/cewe/korea?apikey=Rendy`)
replly(`✍️Tunggu Sebentar....`)
goo = await getBuffer(huft.result.url)
Rendy.sendMessage(from, goo, image, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecanindonesia':

huft = await fetchJson(`https://Rendy-api.herokuapp.com/api/cewe/indonesia?apikey=Rendy`)
replly(`✍️Tunggu Sebentar....`)
goo = await getBuffer(huft.result.url)
Rendy.sendMessage(from, goo, image, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecanjapan':

huft = await fetchJson(`https://Rendy-api.herokuapp.com/api/cewe/japan?apikey=Rendy`)
replly(`✍️Tunggu Sebentar....`)
goo = await getBuffer(huft.result.url)
Rendy.sendMessage(from, goo, image, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecanthailand':

huft = await fetchJson(`https://Rendy-api.herokuapp.com/api/cewe/thailand?apikey=Rendy`)
replly(`✍️Tunggu Sebentar....`)
goo = await getBuffer(huft.result.url)
Rendy.sendMessage(from, goo, image, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
//━━━━━━━━━━━━━━━[ FITUR MEME ]━━━━━━━━━━━━━━━━━//
case 'meme':
await getBuffer(`https://api.lolhuman.xyz/api/random/meme?apikey=${zerokey}`).then((gambar) => {
reply(mess.wait)
Rendy.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe WolfCodeX'})
})
break
case 'darkjoke':
await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${zerokey}`).then((gambar) => {
reply(mess.wait)
Rendy.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe WolfCodeX'})
})
break
case 'memeindo':
await getBuffer(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=${zerokey}`).then((gambar) => {
reply(mess.wait)
Rendy.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe WolfCodeX'})
})
break
case 'quotes':
quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${zerokey}`)
quotes = quotes.result
author = quotes.by
quotes = quotes.quote
reply(`_${quotes}_\n\n*― ${author}*`)
break
case 'quotesanime':
quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${zerokey}`)
quotes = quotes.result
quote = quotes.quote
char = quotes.character
anime = quotes.anime
episode = quotes.episode
reply(`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`)
break
case 'quotesdilan':
quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${zerokey}`)
reply(quotedilan.result)
break
case 'quotesimage':
get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${zerokey}`)
await Rendy.sendMessage(from, get_result, image, { quotes: ftrol })
break
case 'katabijak':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${zerokey}`)
reply(get_result.result)
break
case 'randomnama':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${zerokey}`)
reply(anu.result)
break
//━━━━━━━━━━━━━━━[ FITUR ANIME ]━━━━━━━━━━━━━━━━━//
case 'ssweb':
if (args.length < 1) return reply(`Gini, ${prefix + command} https://github.com/KamiKaze2325/ScBot`)
wbny = body.slice(7)
reply(`✍️Tunggu....`)
anu = await getBuffer(`https://api.lolhuman.xyz/api/ssweb?apikey=${lolkeyy}&url=${wbny}`)
weem = `✍️${botname}`
Rendy.sendMessage(from, anu, image, {quoted: kir, caption: weem})
break
case 'character':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${lolkeyy}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Name : ${get_result.name.full}\n`
ini_txt += `Native : ${get_result.name.native}\n`
ini_txt += `Favorites : ${get_result.favourites}\n`
ini_txt += `Media : \n`
ini_media = get_result.media.nodes
for (var x of ini_media) {
ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
}
ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
thumbnail = await getBuffer(get_result.image.large)
await Rendy.sendMessage(from, thumbnail, image, { quoted: ftrol, caption: ini_txt })
break
case 'manga':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${lolkeyy}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Id MAL : ${get_result.idMal}\n`
ini_txt += `Title : ${get_result.title.romaji}\n`
ini_txt += `English : ${get_result.title.english}\n`
ini_txt += `Native : ${get_result.title.native}\n`
ini_txt += `Format : ${get_result.format}\n`
ini_txt += `Chapters : ${get_result.chapters}\n`
ini_txt += `Volume : ${get_result.volumes}\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Source : ${get_result.source}\n`
ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
ini_txt += `Score : ${get_result.averageScore}%\n`
ini_txt += `Characters : \n`
ini_character = get_result.characters.nodes
for (var x of ini_character) {
ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
ini_txt += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
await Rendy.sendMessage(from, thumbnail, image, { quoted: ftrol, caption: ini_txt })
break
case 'anime':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lolkeyy}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Id MAL : ${get_result.idMal}\n`
ini_txt += `Title : ${get_result.title.romaji}\n`
ini_txt += `English : ${get_result.title.english}\n`
ini_txt += `Native : ${get_result.title.native}\n`
ini_txt += `Format : ${get_result.format}\n`
ini_txt += `Episodes : ${get_result.episodes}\n`
ini_txt += `Duration : ${get_result.duration} mins.\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Season : ${get_result.season}\n`
ini_txt += `Season Year : ${get_result.seasonYear}\n`
ini_txt += `Source : ${get_result.source}\n`
ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
ini_txt += `Score : ${get_result.averageScore}%\n`
ini_txt += `Characters : \n`
ini_character = get_result.characters.nodes
for (var x of ini_character) {
ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
ini_txt += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
await Rendy.sendMessage(from, thumbnail, image, { quoted: ftrol, caption: ini_txt })
break
case 'kusonimesearch':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolkeyy}&query=${query}`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Japanese : ${get_result.japanese}\n`
ini_txt += `Genre : ${get_result.genre}\n`
ini_txt += `Seasons : ${get_result.seasons}\n`
ini_txt += `Producers : ${get_result.producers}\n`
ini_txt += `Type : ${get_result.type}\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Total Episode : ${get_result.total_episode}\n`
ini_txt += `Score : ${get_result.score}\n`
ini_txt += `Duration : ${get_result.duration}\n`
ini_txt += `Released On : ${get_result.released_on}\n`
ini_txt += `Desc : ${get_result.desc}\n`
link_dl = get_result.link_dl
for (var x in link_dl) {
ini_txt += `\n${x}\n`
for (var y in link_dl[x]) {
ini_txt += `${y} - ${link_dl[x][y]}\n`
}
}
ini_buffer = await getBuffer(get_result.thumbnail)
await Rendy.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: ini_txt })
break
case 'otakudesusearch':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolkeyy}&query=${query}`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Japanese : ${get_result.japanese}\n`
ini_txt += `Judul : ${get_result.judul}\n`
ini_txt += `Type : ${get_result.type}\n`
ini_txt += `Episode : ${get_result.episodes}\n`
ini_txt += `Aired : ${get_result.aired}\n`
ini_txt += `Producers : ${get_result.producers}\n`
ini_txt += `Genre : ${get_result.genres}\n`
ini_txt += `Duration : ${get_result.duration}\n`
ini_txt += `Studios : ${get_result.status}\n`
ini_txt += `Rating : ${get_result.rating}\n`
ini_txt += `Credit : ${get_result.credit}\n`
get_link = get_result.link_dl
for (var x in get_link) {
ini_txt += `\n\n*${get_link[x].title}*\n`
for (var y in get_link[x].link_dl) {
ini_info = get_link[x].link_dl[y]
ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
ini_txt += `\`\`\`Link : \`\`\`\n`
down_link = ini_info.link_dl
for (var z in down_link) {
ini_txt += `${z} - ${down_link[z]}\n`
}
}
}
reply(ini_txt)
break
case 'hentaisearch':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolkeyy}&query=${query}`)
get_result = get_result.result
ini_txt = "Result : \n"
for (var x of get_result) {
ini_txt += `Id : ${x.id}\n`
ini_txt += `Title English : ${x.title_english}\n`
ini_txt += `Title Japanese : ${x.title_japanese}\n`
ini_txt += `Native : ${x.title_native}\n`
ini_txt += `Upload : ${x.date_upload}\n`
ini_txt += `Page : ${x.page}\n`
ini_txt += `Favourite : ${x.favourite}\n\n`
}
reply(ini_txt)
break
case 'nekopoisearch':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${lolkeyy}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
}
reply(ini_txt)
break
//━━━━━━━━━━━━━━━[ FITUR FUN ]━━━━━━━━━━━━━━━━━//
case 'fitnah' :
				//if (isBanned) return reply(mess.only.benned)

				//if (!isPublic) return reply(mess.only.publikG)
				if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag/pesan/balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember/hai/hai juga`)
				var gh = body.slice(8)
				mentioned = kir.message.extendedTextMessage.contextInfo.mentionedJid
				var replace = gh.split("/")[0];
				var target = gh.split("/")[1];
				var bot = gh.split("/")[2];
				Rendy.sendMessage(from, `${bot}`, text, { quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` } } })
				break
			case 'gantengcek' :
			case 'cekganteng' :
				//if (isBanned) return reply(mess.only.benned)


				ganteng = body.slice(12)
				const gan = ['10%', '30%', '20%', '40%', '50%', '60%', '70%', '62%', '74%', '83%', '97%', '100%', '29%', '94%', '75%', '82%', '41%', '39%']
				const teng = gan[Math.floor(Math.random() * gan.length)]
				Rendy.sendMessage(from, 'Pertanyaan : Cek Ganteng Bang *' + ganteng + '*\n\nJawaban : ' + teng + '', text, { quoted: kir })
				break
			case 'cantikcek' :
			case 'cekcantik' :
				//if (isBanned) return reply(mess.only.benned)


				cantik = body.slice(11)
				if (args.length < 1) return reply('Yg Mau dicek Siapa Kak??')
				const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v', '30% Semangat Kaka Merawat Dirinya><', '20% Semangat Ya Kaka👍', '40% Wahh Kaka><', '50% kaka cantik deh><', '60% Hai Cantik??', '70% Hai Ukhty??', '62% Kakak Cantik><', '74% Kakak ni cantik deh><', '83% Love You Kakak><', '97% Assalamualaikum Ukhty🐊', '100% Kakak Pake Susuk ya??:v', '29% Semangat Kakak:)', '94% Hai Cantik><', '75% Hai Kakak Cantik', '82% wihh Kakak Pasti Sering Perawatan kan??', '41% Semangat:)', '39% Lebih Semangat🐊']
				const tik = can[Math.floor(Math.random() * can.length)]
				Rendy.sendMessage(from, 'Pertanyaan : Cantik Cek Kakak *' + cantik + '*\n\nPersen Kecantikan : ' + tik + '', text, { quoted: kir })
				break
			case 'tts' :
				//if (isBanned) return reply(mess.only.benned)


				if (args.length < 1) return Rendy.sendMessage(from, 'Kode bahasanya mana gan?\n Kalo Gatau Kode Bahasanya Apa Aja Ketik Saja *${prefix}bahasa*', text, { quoted: kir })
				const gtts = require('./lib/gtts')(args[0])
				if (args.length < 2) return Rendy.sendMessage(from, 'Textnya mana gan?', text, { quoted: kir })
				dtt = body.slice(8)
				ranm = getRandom('.mp3')
				rano = getRandom('.ogg')
				dtt.length > 600
					? reply('Textnya kebanyakan gan')
					: gtts.save(ranm, dtt, function () {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Gagal gan:(')
							reply(mess.wait)
							Rendy.sendMessage(from, buff, audio, { quoted: kir, ptt: true })
							fs.unlinkSync(rano)
						})
					})
				break
			case 'apakah' :
				//if (isBanned) return reply(mess.only.benned)


				apakah = body.slice(1)
				const apakahh = ["Ya", "Tidak", "Ga tau", "ga mungkin", "bisa jadi", "mungkin"]
				const kah = apakahh[Math.floor(Math.random() * apakahh.length)]
				Rendy.sendMessage(from, 'Pertanyaan : *' + apakah + '*\n\nJawaban : ' + kah, text, { quoted: kir })
				break
			case 'rate' :
				//if (isBanned) return reply(mess.only.benned)


				rate = body.slice(1)
				ratee = ["100%", "95%", "90%", "85%", "80%", "75%", "70%", "65%", "60%", "55%", "50%", "45%", "40%", "35%", "30%", "25%", "20%", "15%", "10%", "5%"]
				const te = ratee[Math.floor(Math.random() * ratee.length)]
				Rendy.sendMessage(from, 'Pertanyaan : *' + rate + '*\n\nJawaban : ' + te + '', text, { quoted: kir })
				break
			case 'watak' :
				//if (isBanned) return reply(mess.only.benned)


				watak = body.slice(1)
				wa = ["penyayang", "pemurah", "Pemarah", "Pemaaf", "Penurut", "Baik", "baperan", "Baik Hati", "penyabar", "Uwu", "top deh, pokoknya", "Suka Membantu"]
				const tak = wa[Math.floor(Math.random() * wa.length)]
				Rendy.sendMessage(from, 'Pertanyaan : *' + watak + '*\n\nJawaban : ' + tak, text, { quoted: kir })
				break
			case 'hobby' :
				//if (isBanned) return reply(mess.only.benned)


				hobby = body.slice(1)
				hob = ["ngeue sapi", "ngeue kambing", "Memasak", "Membantu Atok", "Mabar", "Nobar", "Sosmed an", "Membantu Orang lain", "Nonton Anime", "Nonton Drakor", "Naik Motor", "Nyanyi", "Menari", "Bertumbuk", "Menggambar", "Foto fotoan Ga jelas", "Maen Game", "Berbicara Sendiri"]
				const by = hob[Math.floor(Math.random() * hob.length)]
				Rendy.sendMessage(from, 'Pertanyaan : *' + hobby + '*\n\nJawaban : ' + by, text, { quoted: kir })
				break
			case 'bisakah' :
				//if (isBanned) return reply(mess.only.benned)


				bisakah = body.slice(1)
				const bisakahh = ["Bisa", "Tidak Bisa", "Ga tau", "mungkin"]
				const keh = bisakahh[Math.floor(Math.random() * bisakahh.length)]
				Rendy.sendMessage(from, 'Pertanyaan : *' + bisakah + '*\n\nJawaban : ' + keh, text, { quoted: kir })
				break
			case 'kapankah' :
				//if (isBanned) return reply(mess.only.benned)


				kapankah = body.slice(1)
				const kapankahh = ["1 Minggu lagi", "1 Bulan lagi", "1 Tahun lagi", "100 tahun lagi", "gatau", "2030", "1 Jam lagi", "1 Menit lagi"]
				const koh = kapankahh[Math.floor(Math.random() * kapankahh.length)]
				Rendy.sendMessage(from, 'Pertanyaan : *' + kapankah + '*\n\nJawaban : ' + koh, text, { quoted: kir })
				break
			case 'truth' :
				//if (isBanned) return reply(mess.only.benned)


				anu = await fetchJson(`https://xptnbotapinew.herokuapp.com/?truth&apikey=xptn`, { method: 'get' })
				ttrth = `${anu.Dare}`
				truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
				Rendy.sendMessage(from, truteh, image, { caption: '*Truth*\n\n' + ttrth, quoted: kir })
				break
			case 'dare' :
				//if (isBanned) return reply(mess.only.benned)


				anu = await fetchJson(`https://xptnbotapinew.herokuapp.com/?dare&apikey=xptn`, { method: 'get' })
				der = `${anu.Dare}`
				tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
				Rendy.sendMessage(from, tod, image, { quoted: kir, caption: '*Dare*\n\n' + der })
				break
case 'bacotandilan' :
				//if (isBanned) return reply(mess.only.benned)

				hasil = randomdilan[Math.floor(Math.random() * (randomdilan.length))]
				Rendy.sendMessage(from, '*' + hasil + '*\n\n~ *Dilan*', text, { quoted: kir })
				break
			case 'antivirtexx' :
				await costum(antivirtexx(), text, Verived, `Buset Dahh Etekel🔥`)
				break
			case 'addbucin' :
				if (!isOwner) return reply(mess.only.ownerB)
				huu = body.slice(10)
				bucinrandom.push(huu)
				fs.writeFileSync('./database/json/bucin.json', JSON.stringify(bucinrandom))
				reply(`Sukses, Kata \n*${huu}*\n Telah Ditambahkan ke database`)
				break
case 'katailham' :
				//if (isBanned) return reply(mess.only.benned)


				hasil = katailham[Math.floor(Math.random() * (katailham.length))]
				Rendy.sendMessage(from, '*' + hasil + '*', text, { quoted: kir })
				break
			case 'persengay' :
			case 'gaypersen' :


				if (args.length < 1) return reply('tag temanmu!')
				rate = body.slice(11)
				persengayy = ["*4%*\n\n*Tobat Ngegay Gan:v*", "*9%*\n\n*OTW Tobat Gan:v*", "*17%*\n\n*Kang Coli*", "*28%*\n\n*Buset Dah Gay🤦*", "*34%*\n\n *Korban Tusbol*", "*48%*\n\n*Kang Hunter Bool:v*", "*59%*\n\n *Bahaya Ni Orang Gan*", "*62%*\n\n*Hati² Sama Ni Orang Beneran Dah*", "*74%*\n\n*Astagfirullah Kabur Gan🏃🌬️*", "83%\n\n Yaallah Nak🤦", "97%\n\nAstagfirullah🤦", "100%\n\nKabur ae Gan Daripada Ditusbol Bool lu🏃", "29%\n\n amann:v", "94%\n\n Yaallah🏃", "75%\n\nHadehh Gay🤦", "82%\n\nMending Lu Tobat Dah🏃", "41%\n\nSering Cari Bool Diperempatan", "39%\n\nSering Tusbol Bool Topan🏃"]
				const kl = persengayy[Math.floor(Math.random() * persengayy.length)]
				Rendy.sendMessage(from, 'Persen Gay: *' + rate + '*\n\nJawaban : ' + kl + '', text, { quoted: kir })
				break
			case 'persenbucin' :


				if (args.length < 1) return reply('Mana Nama?')
				rate = body.slice(8)
				persenbucin = ["4%\n\nHadehh🤦", "9%\n\nMasih Kecil Dah Bucin Ae", "17%\n\nNakk Masih Kecil", "28%\n\nYoalahh hmm", "34%\n\nMayan Lah", "48%\n\nGatau", "59%\n\nBiasa Kang Bucin", "62%\n\n Hadehhh🏃", "74%\n\n bucen Teroosss", "83%\n\n Sekali² kek Ga bucin Gitu", "97%\n\nHadehh Pakboi²", "100%\n\nHadehhh Ini Bukan Bucin Tapi Pakboi", "29%\n\nKasian Mana Masih Muda", "94%\n\n Dasar Pakboi", "75%\n\n Ya Ampun"]
				const pbucin = persenbucin[Math.floor(Math.random() * persenbucin.length)]
				Rendy.sendMessage(from, 'Persen Bucin Kak: *' + rate + '*\n\nJawaban : ' + pbucin + '', text, { quoted: kir })
				break
			case 'caklontong' :
				//if (isBanned) return reply(mess.only.benned)


				data = fs.readFileSync('./Rendyz/caklontong.js');
				cak = JSON.parse(data);
				lontong = Math.floor(Math.random() * cak.length);
				randKey = cak[lontong];
				Pertanyaan = randKey.result.soal
				Jawaban = '\n*' + randKey.result.desc + '*'
				setTimeout(() => {
					Rendy.sendMessage(from, Jawaban, text, { quoted: kir })
				}, 30000)
				setTimeout(() => {
					Rendy.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
				}, 20000) // 1000 = 1s,
				setTimeout(() => {
					Rendy.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
				}, 10000) // 1000 = 1s,
				setTimeout(() => {
					Rendy.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
				}, 2500) // 1000 = 1s
				Rendy.sendMessage(from, Pertanyaan, text, { quoted: kir })
				break
			case 'tebakgambar' :
				//if (isBanned) return reply(mess.only.benned)


				data = fs.readFileSync('./Rendyz/tebakgambar.js');
				jsonData = JSON.parse(data);
				randIndex = Math.floor(Math.random() * jsonData.length);
				randKey = jsonData[randIndex];
				randSoal = await getBuffer(randKey.result.soalImg)
				setTimeout(() => {
					Rendy.sendMessage(from, '*➸ Jawaban :* ' + randKey.result.jawaban + '\n', text, { quoted: kir }) // ur cods
				}, 30000) // 1000 = 1s,
				setTimeout(() => {
					Rendy.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
				}, 20000) // 1000 = 1s,
				setTimeout(() => {
					Rendy.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
				}, 10000) // 1000 = 1s,
				setTimeout(() => {
					Rendy.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
				}, 2500) // 1000 = 1s,
				setTimeout(() => {
					Rendy.sendMessage(from, randSoal, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: kir }) // ur cods
				}, 0) // 1000 = 1s,
				break
			case 'family100' :
				//if (isBanned) return reply(mess.only.benned)


				data = fs.readFileSync('./Rendyz/family100.js');
				fami = JSON.parse(data);
				ly100 = Math.floor(Math.random() * fami.length);
				randKey = fami[ly100];
				Pertanyaan = randKey.result.soal
				setTimeout(() => {
					Rendy.sendMessage(from, '*➸ Jawaban :* \n```' + randKey.result.jawaban + '```', text, { quoted: kir }) // ur cods
				}, 30000) // 1000 = 1s,
				setTimeout(() => {
					reply('_Waktu Anda Habis_')
				}, 29000)
				setTimeout(() => {
					Rendy.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
				}, 20000) // 1000 = 1s,
				setTimeout(() => {
					Rendy.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
				}, 10000) // 1000 = 1s,
				setTimeout(() => {
					Rendy.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
				}, 2500) // 1000 = 1s,
				setTimeout(() => {
					Rendy.sendMessage(from, '*' + Pertanyaan + '*', text, { quoted: kir }) // ur cods
				}, 0) // 1000 = 1s,
				break
//━━━━━━━━━━━━━━━[ FITUR RANDOM ]━━━━━━━━━━━━━━━━━//
case 'xnxxsearch':
    if (args.length == 0) return replly(`Example: ${prefix + command} Japanese`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=KemolX7&query=${query}`)
    get_result = get_result.result
    ini_txt = ""
    for (var x of get_result) {
        ini_txt += `Title : ${x.title}\n`
        ini_txt += `Views : ${x.views}\n`
        ini_txt += `Duration : ${x.duration}\n`
        ini_txt += `Uploader : ${x.uploader}\n`
        ini_txt += `Link : ${x.link}\n`
        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
    }
    replly(ini_txt)
    break
case 'xnxx':
    if (args.length == 0) return replly(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=KemolX7&url=${query}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Duration : ${get_result.duration}\n`
    ini_txt += `View : ${get_result.view}\n`
    ini_txt += `Rating : ${get_result.rating}\n`
    ini_txt += `Like : ${get_result.like}\n`
    ini_txt += `Dislike : ${get_result.dislike}\n`
    ini_txt += `Comment : ${get_result.comment}\n`
    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
    ini_txt += `Description : ${get_result.description}\n`
    ini_txt += "Link : \n"
    ini_link = get_result.link
    for (var x of ini_link) {
        ini_txt += `${x.type} - ${x.link}\n\n`
    }
    thumbnail = await getBuffer(get_result.thumbnail)
    await Rendy.sendMessage(from, thumbnail, image, { quoted: kir , caption: ini_txt })
    break
case 'nulis':
               if (args.length < 1) return replly('Yang mau di tulis apaan?')
               teks = args.join(' ')
               replly(mess.wait)
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return reply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               Rendy.sendMessage(from, buff, image, {quoted: fgi, caption: mess.success}).catch(e => {
               return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
               break
case 'nuliskiri':{
                if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
                reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/nulis/images/buku/sebelumkiri.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '22',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+140+153',
                    fixHeight,
                    './media/nulis/images/buku/setelahkiri.jpg'
                ])
                .on('error', () => reply('error'))
                .on('exit', () => {
                    Rendy.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {quoted: fgi, caption: `Jangan malas pak...`})
                    
                })
            }
                break
case 'nuliskanan':{
                if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
                reply(mess.wait)
                const tulisan = body.slice(12)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/nulis/images/buku/sebelumkanan.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+128+129',
                    fixHeight,
                    './media/nulis/images/buku/setelahkanan.jpg'
                ])
                .on('error', () => reply('error'))
                .on('exit', () => {
                    Rendy.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {quoted: fgi, caption: `Jangan malas pak...`})
                    
                })
            }
                break
case 'foliokiri':{
                if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
                reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './media/nulis/images/folio/sebelumkiri.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '1720x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '4',
                    '-annotate',
                    '+48+185',
                    fixHeight,
                    './media/nulis/images/folio/setelahkiri.jpg'
                ])
                .on('error', () => reply('error'))
                .on('exit', () => {
                    Rendy.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {quoted: fgi, caption: `Jangan malas pak...`})
                    
                })
            }
                break
case 'foliokanan':{
                if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
                reply(mess.wait)
                const tulisan = body.slice(12)
                const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './media/nulis/images/folio/sebelumkanan.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '3',
                    '-annotate',
                    '+89+190',
                    fixHeight,
                    './media/nulis/images/folio/setelahkanan.jpg'
                ])
                .on('error', () => reply('error'))
                .on('exit', () => {
                    Rendy.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {quoted: fgi, caption: `Jangan malas pak...`})
                    
                })
            }
                break
//━━━━━━━━━━━━━━━[ Owner Menu ]━━━━━━━━━━━━━━━\\                                              
case 'runtime':
            run = process.uptime() 
            teks = `${kyun(run)}`
            replly(teks)
            break  
case 'owner':
let inilist = []
for (let i of ownerNumber) {
const vname = Rendy.contacts[i] != undefined ? Rendy.contacts[i].vname || Rendy.contacts[i].notify : undefined
inilist.push({
"displayName": '𝑾𝒐𝒍𝒇𝑪𝒐𝒅𝒆𝑿☹︎',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${Rendy.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await Rendy.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: fgi })
button = [
  {buttonId: '.menu', buttonText: {displayText: 'MENU'}, type: 1}
]
 buttons = {
    contentText: 'Nih Kak Owner ku >_<',
    footerText: `*𝑾𝒐𝒍𝒇𝑪𝒐𝒅𝒆𝑿☹︎*`,
    buttons: button,
    headerType: 1
}
await Rendy.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: fgi})
break
case 'upswteks':
if (!kir.key.fromMe && !isOwner) return reply('Khusus Owner !!')
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    Rendy.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
                    case 'upswlokasi':
                    if (!kir.key.fromMe && !isOwner) return reply('Khusus Owner !!')
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    Rendy.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${ownername}`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                    case 'upswsticker':                    
                    if (!kir.key.fromMe && !isOwner) return reply('Khusus Owner !!')
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !kir.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(kir).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kir
						buff = await Rendy.downloadMediaMessage(encmedia)
						Rendy.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                     case 'upswaudio':
                     if (!kir.key.fromMe && !isOwner) return reply('Khusus Owner !!')
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !kir.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(kir).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kir
						buff = await Rendy.downloadMediaMessage(encmedia)
						Rendy.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
						case 'upswvn':            
					if (!kir.key.fromMe && !isOwner) return reply('Khusus Owner !!')	       
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !kir.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(kir).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kir
						buff = await Rendy.downloadMediaMessage(encmedia)
						Rendy.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
case 'upswvideo':
if (!kir.key.fromMe && !isOwner) return reply('Khusus Owner !!')
                    var konti = body.slice(11)
                    reply(mess.wait)
                    var enmediap = JSON.parse(JSON.stringify(kir).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await Rendy.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    Rendy.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Sukses upload video:\n${konti}`)
                        break
                           case 'upswgif':
                    var konti = body.slice(7)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(kir).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Rendy.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    Rendy.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif:\n${konti}`)
                        break
                        case 'upswimage':                       
                    var teksyy = body.slice(11)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(kir).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Rendy.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    Rendy.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: kir, caption: `${teksyy}`})
                    replyy(`Sukses upload image:\n${teksyy}`)
                        break 
case 'report':
 return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
const pesan = body.slice(8)
if (pesan.length > 300) return Rendy.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
var nomor = kir.participant
const teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
Rendy.sendMessage(`62895358183144@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break       
case 'tobc':				
if (!kir.key.fromMe && !isOwner) return reply('Khusus Owner !!')					
				Rendy.updatePresence(from, Presence.composing)
					anu = await groupMembers
					if (isMedia && !kir.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo :kir
						buff = await Rendy.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Rendy.sendMessage(_.jid, buff, audio, { quoted: ftrol })
						}
						} else if (isMedia && !kir.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(kir).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kir
						buff = await Rendy.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Rendy.sendMessage(_.jid, buff, sticker, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          replyy('reply sticker/audio')
							}
					break
					case 'bc2':
      case 'bc':
if (!kir.key.fromMe && !isOwner) return reply('Khusus Owner !!')      
             if (args.length < 1) return reply('teks?')
             anu = await Rendy.chats.all()
             if (isMedia && !kir.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kir).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kir
             bc = await Rendy.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             Rendy.sendMessage(_.jid, bc, image, {quoted:ftrol,caption: `*『 𝑾𝒐𝒍𝒇𝑪𝒐𝒅𝒆𝑿☹︎ 』*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
Rendy.sendMessage(_.jid, 
			{"contentText": `*『 HydraBOT BROADCAST』*\n\n${body.slice(4)}`,
			"footerText": '𝑾𝒐𝒍𝒇𝑪𝒐𝒅𝒆𝑿☹︎',
			"buttons": [
			{"buttonId": `#menu`,
			"buttonText": {"displayText": "📙 MENU"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )
}
             replyy('Suksess broadcast')
}
             break 
//━━━━━━━━━━━━━━━[ ISI PAKE CASE/FITUR LU ]━━━━━━━━━━━━━━━\\                                           
case 'cerpen':
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=KemolX7`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Creator : ${get_result.creator}\n`
    ini_txt += `Story :\n${get_result.cerpen}`
    titid = ini_txt
   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
        break
case "speed":
case "ping":
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
const timestamp = speed();
const latensi = speed() - timestamp;
exec(`neofetch --stdout`, (error, stdout, stderr) => {
const child = stdout.toString("utf-8");
const ssd = child.replace(/Memory:/, "Ram:");
const pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
reply(pingnya);
});
break;
case 'verify':
const serialUser = createSerial(18)
veri = sender
_registered.push(sender)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
addRegisteredUser(sender, serialUser)
const ara = fs.readFileSync('./media/sticker/verify.webp');
Rendy.sendMessage(from, ara, MessageType.sticker, {quoted: kir})
break
case 'asmaulhusna':
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=KemolX7`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
case 'jadwalsholat':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=KemolX7`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
case 'faktaunik':
case 'katabijak':
case 'pantun':
case 'bucin':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=KemolX7`)
                   titid = get_result.result
                   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `➡️ NEXT`,
            },
            type: 1,
          },]);
        break
case 'randomnama':
                    anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=KemolX7`)
                    dasi = anu.result
                   sendButMessage(from, dasi, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `➡️ NEXT `,
            },
            type: 1,
          },]);
        break
case 'sticker': 
case 'stiker':
case 's':
            if ((isMedia && !kir.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kir).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kir
            const media = await Rendy.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                Rendy.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: fgi})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && kir.message.videoMessage.seconds < 11 || isQuotedVideo && kir.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(kir).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kir
                const media = await Rendy.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            Rendy.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: fgi})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break
case 'toimg':
case 'tomedia':
					if (!isQuotedSticker) return reply('Reply stiker nya')
					if (kir.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(kir).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await Rendy.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(kir).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await Rendy.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply('error')
							buffer = fs.readFileSync(ran)
							Rendy.sendMessage(from, buffer, image, {quoted: fgi})
							fs.unlinkSync(ran)
						})
					}
					break
case 'ttaudio': 
case 'tiktokmusic': 
case 'tiktokaudio':
reply(mess.wait)
if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
ini_link = args[0]
get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${Rendykey}&url=${ini_link}`)
Rendy.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: kir })
break			
case 'detikvn':
encmediam = JSON.parse(JSON.stringify(kir).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediam = await Rendy.downloadAndSaveMediaMessage(encmediam)
cokmatane = Number(args[0])
hah = fs.readFileSync(mediam)
Rendy.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:kir})
fs.unlinkSync(mediam)
break
case 'detikvideo':
encmedian = JSON.parse(JSON.stringify(kir).replace('quotedM','m')).message.extendedTextMessage.contextInfo
median = await Rendy.downloadAndSaveMediaMessage(encmedian)
cokmatane = Number(args[0])
hah = fs.readFileSync(median)
Rendy.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: kir})
fs.unlinkSync(median)
break
case 'pinterest':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
query = args.join(" ")
ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${lolkeyy}&query=${query}`)
ini_url = ini_url.result
ini_buffer = await getBuffer(ini_url)
await Rendy.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
break
case 'tourl':
            if ((isMedia && !kir.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(kir).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kir
            owgi = await Rendy.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
case 'play':
             if (args.length < 1) return reply(`Kirim perintah *${prefix}play query*`)
             reply(mess.wait)
             let yut = await yts(q)
             yta(yut.videos[0].url)             
             .then(async(res) => {
             const { thumb, title, filesizeF, filesize } = res
             const capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬🍁
		     
•💬 Judul : ${yut.all[0].title}
•🎥 ID Video : ${yut.all[0].videoId}
•⏰️ Diupload Pada : ${yut.all[0].ago}
•👁️️ Views : ${yut.all[0].views}
•▶️ Durasi : ${yut.all[0].timestamp}
•📍 Channel : ${yut.all[0].author.name}
•🔗 Link Channel : ${yut.all[0].author.url}`
             ya = await getBuffer(thumb)
             py =await Rendy.prepareMessage(from, ya, image)
             gbutsan = [{buttonId: `${prefix}ytmp3 ${yut.all[0].url}`, buttonText: {displayText: 'AUDIO'}, type: 1},{buttonId: `${prefix}ytmp4 ${yut.all[0].url}`, buttonText: {displayText: 'VIDEO'}, type: 1}]
             gbuttonan = {
             imageMessage: py.message.imageMessage,
             contentText: capti,
             footerText: 'Silahkan Pilih Jenis File Dibawah Ini☕',
             buttons: gbutsan,
             headerType: 4
}
             await Rendy.sendMessage(from, gbuttonan, MessageType.buttonsMessage)})
             break              
case 'ytmp3':
             if(!q) return reply('linknya?')              
             res = await yta(`${q}`).catch(e => {
             reply('```[ ! ] Error Saat Mengirim Audio```')})
             sendMediaURL(from, `${res.dl_link}`,{quoted:fgi})
             break         
case 'ytmp4':
             if(!q) return reply('linknya?')            
             res = await ytv(`${q}`).catch(e => {
             reply('```[ ! ] Error Saat Mengirim Video```')})
             sendMediaURL(from, `${res.dl_link}`,'Nih Kack')
             break  
case 'tiktok': 
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
             break         
///fitur group
case 'bay':
      reply('Sayonara Buat Yang Pergi😔\nSemoga Amal Ibadahnya Di Terima\nTapi Kalo Lu Balik Harus Donasi')
      break
case 'selamatdatang':
      reply('Welcome Kak Jangan Lupa Patuhi Peraturan  Grup Ya Kaka \nSemoga Betah👏')
      break
case 'welcome':
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
case 'antilink':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (!q) return reply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLink) return reply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              reply(`Pilih enable atau disable`)
}
              break
case 'tagall':
       if (!isGroup) return reply(mess.only.group)
              let arr = [];
              let txti = `*[ TAG ALL BY KIRBOTZ ]*\n${q ? q : ''}\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
case 'hidetag':
      if (!isGroupAdmins && !isOwner) return 
      if (!isGroup) return reply(mess.only.group)
             try {
             quotedText = kir.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
 //━━━━━━━━━━━━━━━[ SOUND MENU COK ]━━━━━━━━━━━━━━━━━//
 case 'sound1':
satu = fs.readFileSync('./media/mp3/sound1.mp3');
Rendy.sendMessage(from, satu, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./media/mp3/sound2.mp3');
Rendy.sendMessage(from, dua, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./media/mp3/sound3.mp3');
Rendy.sendMessage(from, tiga, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./media/mp3/sound4.mp3');
Rendy.sendMessage(from, empat, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./media/mp3/sound5.mp3');
Rendy.sendMessage(from, lima, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./media/mp3/sound6.mp3');
Rendy.sendMessage(from, enam, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./media/mp3/sound7.mp3');
Rendy.sendMessage(from, tujuh, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break	
case 'sound8':
delapan = fs.readFileSync('./media/mp3/sound8.mp3');
Rendy.sendMessage(from, delapan, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound9':
sembilan = fs.readFileSync('./media/mp3/sound9.mp3');
Rendy.sendMessage(from, sembilan, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound10':
sepuluh = fs.readFileSync('./media/mp3/sound10.mp3');
Rendy.sendMessage(from, sepuluh, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
//=============18+ BOKEP================
//LINK BOKEP DI BAWAH NYA
case 'kodenuklir':
res = await Rendy.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
				"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AkN2CkuI0Ra5pjBRiJDaW0CC-Wd9HUPFI-TnTDW3rkYy.enc",
						"mimetype": "image/jpeg",
						"fileSha256": "090qnz/i+SxRxHNUztQwjfxmL7XAMiAyL6Kw7aBMIHw=",
						"fileLength": "44782",
						"height": 740,
						"width": 640,
						"mediaKey": "euwj3NlkbZ+B0E67HIzwb8isEogbcPogdFJCllUbdjA=",
						"fileEncSha256": "aDzE4IikU5jH87beKM2eUtPgnTwQIqbNGYsMCoYKnsg=",
						"mediaKeyTimestamp": "1633022751"
					 },
						"contentText": `📸YAH SUKA 2D 📸
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hai ${pushname}
▬▭▬▭▬▭▬▭▬▬▭▬▭
HELLO !!!
Note : EASY MODE = Sange, Biasa Aja, Mental Lemah :v
==============================
MEDIUM MODE = Bisa bikin sange, Lumayan nyesek, Rasanya pengen coli teros, Mental Batu
==============================
HARD MODE = Menyebabkan amnesia, insomnia, hipotermia, kejang", serangan jantung, diare, pendarahan hebat, buang air tidak terkendali, rasa ingin baku hantam, frustasi, depresi, emosi tidak tertahan kan, sakit hati (ambyar), Mental Baja
==============================
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "𝑾𝒐𝒍𝒇𝑪𝒐𝒅𝒆𝑿☹︎",
						"buttons": [
							{
								"buttonId": "HydraBOT",
								"buttonText": {
									"displayText": ` - EASY MODE
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
▬▭▬▭▬▭▬▭▬▬▭▬▭
Easy Mode :
• https://nhentai.net/g/316755/
• https://nhentai.net/g/316596/
• https://nhentai.net/g/311850/
• https://nhentai.net/g/315578/
• https://nhentai.net/g/315488/
• https://nhentai.net/g/315406/
• https://nhentai.net/g/315344/
• https://nhentai.net/g/315323/
• https://nhentai.net/g/315136/
• https://nhentai.net/g/315099/
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HydraBOT",
								"buttonText": {
									"displayText": ` - MEDIUM MODE -
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
▬▭▬▭▬▭▬▭▬▬▭▬▭
Medium Mode :
• https://nhentai.net/g/316867/
• https://nhentai.net/g/316869/
• https://nhentai.net/g/316785/
• https://nhentai.net/g/316763/51/
• https://nhentai.net/g/316445/
• https://nhentai.net/g/316250/
• https://nhentai.net/g/311283/
• https://nhentai.net/g/265671/
• https://nhentai.net/g/312127/
• https://nhentai.net/g/311560/
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HydraBOT",
								"buttonText": {
									"displayText": ` - HARD MODE -
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hard Mode :
• https://nhentai.net/g/316820/
• https://nhentai.net/g/316481/
• https://nhentai.net/g/316430/
• https://nhentai.net/g/276347/
• https://nhentai.net/g/196329/
• https://nhentai.net/g/304543/
• https://nhentai.net/g/295295/
• https://nhentai.net/g/311262/
• https://nhentai.net/g/311882/
• https://nhentai.net/g/312180/

══{*BONUS COK*}══
https://nhentai.net/g/271890/
https://nhentai.net/g/272057/
https://nhentai.net/g/272173/
https://nhentai.net/g/272182/
https://nhentai.net/g/272196/
https://nhentai.net/g/272197/
https://nhentai.net/g/272259/
https://nhentai.net/g/272276/
https://nhentai.net/g/272290/
https://nhentai.net/g/272377/
-
https://nhentai.net/g/272390/
https://nhentai.net/g/272512/
https://nhentai.net/g/271245/
https://nhentai.net/g/271056/
https://nhentai.net/g/270809/
https://nhentai.net/g/269653/
https://nhentai.net/g/266088/
https://nhentai.net/g/264980/
https://nhentai.net/g/262215/
https://nhentai.net/g/260433/
-
https://nhentai.net/g/260146/
https://nhentai.net/g/256738/
https://nhentai.net/g/272425/
https://nhentai.net/g/272352/
https://nhentai.net/g/272045/
https://nhentai.net/g/272015/
https://nhentai.net/g/271993/
https://nhentai.net/g/271924/
https://nhentai.net/g/271905/
https://nhentai.net/g/271797/
-
https://nhentai.net/g/271760/
https://nhentai.net/g/271717/
https://nhentai.net/g/271726/
https://nhentai.net/g/271667/
https://nhentai.net/g/267352/
https://nhentai.net/g/152968/
https://nhentai.net/g/238876/
https://nhentai.net/g/116395/
https://nhentai.net/g/84809/
https://nhentai.net/g/211656/
-
https://nhentai.net/g/272117/
https://nhentai.net/g/188721/
https://nhentai.net/g/266402/
https://nhentai.net/g/238876/
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ftrol})
Rendy.relayWAMessage(res)
break
case 'bokep8':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file`,
 `𝑾𝒐𝒍𝒇𝑪𝒐𝒅𝒆𝑿☹︎`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep9':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file`,
 `𝑾𝒐𝒍𝒇𝑪𝒐𝒅𝒆𝑿☹︎`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep10':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file`,
 `𝑾𝒐𝒍𝒇𝑪𝒐𝒅𝒆𝑿☹︎`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep11':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file`,
 `𝑾𝒐𝒍𝒇𝑪𝒐𝒅𝒆𝑿☹︎`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep12':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file`,
 `𝑾𝒐𝒍𝒇𝑪𝒐𝒅𝒆𝑿☹︎`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep13':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file`,
 `𝑾𝒐𝒍𝒇𝑪𝒐𝒅𝒆𝑿☹︎`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep14':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file`,
 `𝑾𝒐𝒍𝒇𝑪𝒐𝒅𝒆𝑿☹︎`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep15':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file`,
 `𝑾𝒐𝒍𝒇𝑪𝒐𝒅𝒆𝑿☹︎`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break             
			
case 'linkbokep':
        sendButtonLocation(from, 
        `[NO VPN]\n➻ *NO VPN1* : bit.ly/2Qn9Qgu\n➻ *NO VPN2* : bit.ly/3gWaBt8\n➻ *XNXX VPN* : bit.ly/3vJZJ7`,
        `Sebelum Comly Siapin sabun/tisu dulu adick²`, 
        {jpegThumbnail:fs.readFileSync(`./media/thumnail.jpg`)}, 

[{ buttonId: `${prefix}hshdbdhhd`, buttonText: { displayText: 'OK' }, type: 1 },
{ buttonId: `${prefix}hdbdjdhdhd`, buttonText: { displayText: 'Tidak😑' }, type: 1 }])
break
//━━━━━━━━━━━━━━━[ AKHIR  ]━━━━━━━━━━━━━━━\\
default:
        if (hour_now >= '02:00' && hour_now <= '04:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Waktunya sahur kak, Main botnya buat nanti lagi, Sebelum makan jangan lupa baca Doa ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '04:00' && hour_now <= '05:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak', 'yellow'), color('(😊)', 'white'))
          }
          if (hour_now >= '05:00' && hour_now <= '06:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Udah sholat Subuh belum kak', 'yellow'), color('(🙄)', 'white'))
          }
        if (hour_now >= '06:00' && hour_now <= '11:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Pagi kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
          if (hour_now >= '11:00' && hour_now <= '12:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Siang kak, Dah mandi blm kak?', 'yellow'), color('(🙄)', 'white'))
          }
          if (hour_now >= '12:00' && hour_now <= '14:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '14:00' && hour_now <= '15:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Sore kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
        if (hour_now >= '15:00' && hour_now <= '16:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Dah jam 3 kak, Jangan lupa sholat Ashar ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '17:00' && hour_now <= '18:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi buka kak, Sabar ya kak', 'yellow'), color('(😆)', 'white'))
          }
        if (hour_now >= '18:00' && hour_now <= '19:00') {
        	console.log(color('[Pesan Bot]', 'cyan'), color('Alhamdulillah, Dh magrib jan lupa sholat kak', 'yellow'), color('(😊)', 'white'))
        }
        if (hour_now >= '19:00' && hour_now <= '20:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi jam 8 gak mabar kak?', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '20:00' && hour_now <= '00:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Selamat malam kak, Jangan begadang ya kak, Tar sakit loh', 'yellow'), color('(😄)', 'white'))
        }
          if (hour_now >= '00:00' && hour_now <= '02:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Bot ngantuk kak, tidur dulu ya kak', 'yellow'), color('(😴)', 'white'))
        }
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(kir.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(kir.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return Rendy.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
