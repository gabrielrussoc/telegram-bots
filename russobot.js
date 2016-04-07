var Bot = require('node-telegram-bot-api');
var token = '133436018:AAHHVXvAkq7oIaLY2pNj4Pwhsu4pnneEG50';

var bot = new Bot(token,{polling: true});

bot.onText(/lado bom da vida/i,function(msg) {
  var chatId = msg.chat.id;
  var n = Math.random() * 9;
  var ret;
  if(n < 1) ret = 'pao de alho';
  else if (n < 2) ret = 'acordar cedo e lembrar que é sábado';
  else if (n < 3) ret = 'mijar apertado';
  else if (n < 4) ret = 'passar naf rente de uma loja com ar condicionado num dia de muito calor';
  else if (n < 5) ret = 'quando chega o que vc comprou pela internet';
  else if (n < 6) ret = 'quando a pizza chega rápido';
  else if (n < 7) ret = 'achar dinheiro no bolso';
  else if (n < 8) ret = 'wifi grátis';
  else ret = 'lombo no central';
  bot.sendMessage(chatId, ret);
});

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

