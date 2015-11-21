var Bot = require('telegram-api');
var Message = require('telegram-api/types/Message');

var bot = new Bot({
    token : '133436018:AAG0ac3IpUGNWd-rpHbCJnseERYC-wHL3_g'
});

bot.start();

bot.get(/.+ nao .+ oq aconteceu/,function(message) {
    var answer = new Message().text('a galera do charlie brown invadiu a cidade').to(message.chat.id);
    bot.send(answer);
});


bot.command('number',function(message) {
    var answer = new Message().text('7').to(message.chat.id);
    bot.send(answer);
});

bot.command('help',function(message) {
    var answer = new Message().text('Commands:\n /number generate a random integer').to(message.chat.id);
    bot.send(answer);
});

bot.get(/.*/,function(message) {
    var n = Math.random();
    if(n < 1/10){
        var answer = new Message().text('sim').to(message.chat.id);
        bot.send(answer);
    }
});
