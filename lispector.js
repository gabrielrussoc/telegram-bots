var Bot = require('node-telegram-bot-api');
var token = '167629071:AAFKL18E5qvJZT1r8tGHa7-2GJq1eNtYuqw';

var bot = new Bot(token,{polling: true});

bot.on('message', function (msg) {
    var n = Math.random();
    if(n < 1/10){
        var chatId = msg.chat.id;
        var msgId = msg.message_id;
        bot.sendMessage(chatId,'- Clarice Lispector ',{reply_to_message_id: msgId});
    }
});

module.exports = bot;
