const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
// just change this with the words you want to ban
let data = ['ok', 'fine', 'nice', 'foo', 'lorem', 'ipsum'];

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    // console.log(message.content);
    let member = message.mentions.members.first();

    // Manualy welcoming members

    if(message.content.startsWith(`${prefix}sayHello`)) {
        message.delete();
        message.channel.send("Hello " + member + ":wave:");
    }

        for(let index of data) {
            let ma = new RegExp(index, "i");
            if(message.content.match(ma)) {
                message.channel.send("Please be respectful or you might get banned");
                setTimeout(() => {
                    message.delete();
                }, 3000);
            }
        }

    // automatic chat filter
    // kick command that shows a gif after kick you can add more gifs or get a random one just refer to gary simon's video or google it you'll find an answer

    if(message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {

        if(message.content.startsWith(`${prefix}kick`)) {
            
            member.kick().then((member) => {
                message.channel.send(`:wave: ${member.displayName} has been kicked`, {
                    files: ['https://media.giphy.com/media/UQaRUOLveyjNC/giphy.gif']
                });
            }).catch(() => {
                message.channel.send("Error ugh!");
            });
        };
};
});
client.login(token);