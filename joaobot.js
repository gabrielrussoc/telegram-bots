var Bot = require('telegram-api');
var Message = require('telegram-api/types/Message');
var File = require('telegram-api/types/File');

var bot = new Bot({
    token : '133996060:AAF8PI6X5YWhtcdRWXqAmAb6zvYbmRGUOWE'
});

bot.start();

bot.command('help',function(message) {
    var answer = new Message().text('Comandos:\n /rir melhor risada').to(message.chat.id);
    bot.send(answer);
});

bot.command('rir', function(message) {
    const file = new File().file('./risada.ogg').caption('bla').to(message.chat.id);
    bot.send(file);
});

module.exports = bot;
