var Bot = require('node-telegram-bot-api');
var token = '133996060:AAF8PI6X5YWhtcdRWXqAmAb6zvYbmRGUOWE';

var bot = new Bot(token,{polling: true});

bot.on('message', function (msg) {
  var chatId = msg.chat.id;
  bot.sendMessage(chatId, 'eita caralho');
});

module.exports = bot;
