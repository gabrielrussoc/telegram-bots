var Bot = require('node-telegram-bot-api');
var token = '133436018:AAHHVXvAkq7oIaLY2pNj4Pwhsu4pnneEG50';

var bot = new Bot(token,{polling: true});

bot.onText(/.+ nao .+ oq aconteceu/,function(msg) {
  var chatId = msg.chat.id;
  bot.sendMessage(chatId,'os caras do Charlie Brown invadiram a cidade');
});

bot.onText(/viadao/,function(msg){
  var chatId = msg.chat.id;
  bot.sendMessage(chatId, 'JOAO FRANCISCO LINO DANIEL');
});

bot.onText(/\/number/,function(msg) {
  var chatId = msg.chat.id;
  bot.sendMessage(chatId, '7');
});

bot.onText(/pergunta/,function(msg) {
  var chatId = msg.chat.id;
  bot.send(chatId, 'sim');
});

module.exports = bot;

