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

bot.onText(/AI FOX/,function(msg){
  var chatId = msg.chat.id;
  bot.sendMessage(chatId, 'VICTOR WICHMANN RAPOSO');
});

bot.onText(/ai fox/,function(msg){
  var chatId = msg.chat.id;
  bot.sendMessage(chatId, 'que homem');
});

bot.onText(/que homem/,function(msg){
  var chatId = msg.chat.id;
  bot.sendMessage(chatId, 'ai fox');
});

bot.onText(/\/number/,function(msg) {
  var chatId = msg.chat.id;
  bot.sendMessage(chatId, '7');
});

bot.onText(/Russo, .*[?]/,function(msg) {
  var chatId = msg.chat.id;
  bot.sendMessage(chatId, 'sim');
});

bot.onText(/hola/, function (msg) {
  var chatId = msg.chat.id;
  bot.sendSticker(chatId, 'BQADBAADogADpxzQAeQXWGFfR8VpAg');
});

module.exports = bot;

