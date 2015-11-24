var Bot = require('telegram-api');
var Message = require('telegram-api/types/Message');

var bot = new Bot({
    token : '133436018:AAG0ac3IpUGNWd-rpHbCJnseERYC-wHL3_g'
});

bot.start();

bot.get(/.+ nao .+ oq aconteceu/,function(message) {
    var answer = new Message().text('os caras do charlie brown invadiram a cidade').to(message.chat.id);
    bot.send(answer);
});

bot.get(/viadao/,function(message){
    var answer = new Message().text('JOAO FRANCISCO LINO DANIEL').to(message.chat.id);
    bot.send(answer);
});

bot.get(/oi/,function(message){
    var answer = new Message().text('fala ai meu pirocudo').to(message.chat.id);
    bot.send(answer);
});

bot.get(/tchau/,function(message){
    var answer = new Message().text('tchau lindao').to(message.chat.id);
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
