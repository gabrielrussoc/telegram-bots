var Bot = require('node-telegram-bot-api');
var token = '133996060:AAF8PI6X5YWhtcdRWXqAmAb6zvYbmRGUOWE';

var bot = new Bot(token,{polling: true});

bot.onText(/\/rir/, function (msg) {
  var chatId = msg.chat.id;
  var audio = 'risada.ogg';
  bot.sendAudio(chatId, audio);
});

bot.onText(/\/rirmuito/, function (msg) {
  var chatId = msg.chat.id;
  var audio = 'risadona.ogg';
  bot.sendAudio(chatId, audio);
});

bot.onText(/mulher/, function (msg) {
  var chatId = msg.chat.id;
  bot.sendMessage(chatId, 'mulher? quero');
});

module.exports = bot;