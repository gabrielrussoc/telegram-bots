var Bot = require('node-telegram-bot-api');
var token = process.env.RUSSOBOT_TOKEN;

var bot = new Bot(token,{polling: true});

bot.onText(/lado bom da vida/i,function(msg) {
  var chatId = msg.chat.id;
  var n = Math.random() * 9;
  var ret;
  if(n < 1) ret = 'pao de alho';
  else if (n < 2) ret = 'acordar cedo e lembrar que é sábado';
  else if (n < 3) ret = 'mijar apertado';
  else if (n < 4) ret = 'passar na frente de uma loja com ar condicionado num dia de muito calor';
  else if (n < 5) ret = 'quando chega o que vc comprou pela internet';
  else if (n < 6) ret = 'quando a pizza chega rápido';
  else if (n < 7) ret = 'achar dinheiro no bolso';
  else if (n < 8) ret = 'wifi grátis';
  else ret = 'lombo no central';
  bot.sendMessage(chatId, ret);
});

bot.on('callback_query', (query) => {
    var id = query.id;
    var userId = query.from.id;
    var inlineMessageId = query.inline_message_id;
    var options = {};
    if(query.game_short_name == 'WikiGraph')
        options.url = 'http://russoft.tech?t_user_id=' + userId + '&t_inline_message_id=' + inlineMessageId;

    bot.answerCallbackQuery(id, '', false, options);
});

bot.on('inline_query', (query) => {
    var id = query.id;
    var game = {
        type: 'game',
        id: '0',
        game_short_name: 'WikiGraph',
        reply_markup: {
            inline_keyboard: [
                [{
                    text: 'Jogar',
                    callback_game: {
                        game_short_name: 'WikiGraph'
                    }
                }]
            ]
        }
    };
    bot.answerInlineQuery(id, [game]);
});

bot.onText(/.+ nao .+ oq aconteceu/i,function(msg) {
  var chatId = msg.chat.id;
  bot.sendMessage(chatId,'os caras do Charlie Brown invadiram a cidade');
});

bot.onText(/.*bande(jao|jar|co).*/i,function(msg) {
  var chatId = msg.chat.id;
  bot.sendMessage(chatId,'não');
});

bot.onText(/viadao/i,function(msg){
  var chatId = msg.chat.id;
  bot.sendMessage(chatId, 'JOAO FRANCISCO LINO DANIEL');
});

bot.onText(/ai fox/i,function(msg){
  var chatId = msg.chat.id;
  bot.sendMessage(chatId, 'que homem');
});

bot.onText(/que homem/i,function(msg){
  var chatId = msg.chat.id;
  bot.sendMessage(chatId, 'ai fox');
});

bot.onText(/\/number/,function(msg) {
  var chatId = msg.chat.id;
  bot.sendMessage(chatId, '7');
});

bot.onText(/\/rir/, function (msg) {
  var chatId = msg.chat.id;
  var audio = 'audio/risada.ogg';
  bot.sendAudio(chatId, audio);
});

bot.onText(/\/rirmuito/, function (msg) {
  var chatId = msg.chat.id;
  var audio = 'audio/risadona.ogg';
  bot.sendAudio(chatId, audio);
});

bot.onText(/\/errou/, function (msg) {
  var chatId = msg.chat.id;
  var audio = 'audio/faustao-errou.ogg';
  bot.sendVoice(chatId, audio);
});

bot.onText(/\/treta/, function (msg) {
  var chatId = msg.chat.id;
  var audio = 'audio/treta.ogg';
  bot.sendAudio(chatId, audio);
});

bot.onText(/\/nein/, function (msg) {
  var chatId = msg.chat.id;
  var audio = 'audio/hitler.ogg';
  bot.sendAudio(chatId, audio);
});

bot.onText(/\/cena/, function (msg) {
  var chatId = msg.chat.id;
  var audio = 'audio/john-cena.ogg';
  bot.sendAudio(chatId, audio);
});

bot.onText(/Russo, .*[?]/i,function(msg) {
  var chatId = msg.chat.id;
  bot.sendMessage(chatId, 'sim');
});

bot.onText(/hola/i, function (msg) {
  var chatId = msg.chat.id;
  bot.sendSticker(chatId, 'BQADBAADogADpxzQAeQXWGFfR8VpAg');
});

module.exports = bot;
