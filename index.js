const Discord = require('discord.js');
const {
    prefix,
    token
} = require('./config.json'); //prefix is the sympol you right before the command for example !play in rythm I can't show you the file as it's contain my token :D
const client = new Discord.Client();
const {
    restrictedWords
} = require('./wordList.json');

const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/plain'
    });
    res.write('Hey');
    res.end();
}).listen(4000);

client.once('ready', () => {
    console.log('Ready!');
});


client.on('message', message => {

    // console.log(message.content);

    if (!message.author.bot) {

        let member = message.mentions.members.first();

        if (message.content.startsWith(`${prefix}sayHello`)) {
            message.delete();
            message.channel.send("Hello " + member + ":wave:");
        }

        if (message.content.startsWith(`${prefix}rankMe`)) {
            let member = message.mentions.members.first();
            message.channel.send('checking data-base...')
                .then(() => {
                    message.channel.send(`${member.displayName} is confirmed to be boosted`)
                });
        }

        if (message.content.startsWith(`${prefix}fuck`)) {
            let member = message.author.username;
            message.channel.send(`Ah yes ${member} do you want more ?`).then(message => {
                setTimeout(() => {
                    message.edit(`${member} is confirmed to be gay`)
                }, 2000) // a3ml save
            });
        }

        if (message.content.match(/Do u love me/i) ||
            message.content.match(/Do u want me/i) ||
            message.content.match(/Do u need me/i)) {
            message.channel.send('Do u do u');
        }


        if (message.content.match(/Sasageyo/i)) {
            message.channel.send
            (`Sasageyo! sasageyo! shinzou wo sasageyo!\nSubete no gisei wa ima kono toki no tame ni\nSasageyo! sasageyo! shinzou wo sasageyo!\nSusumu beki mirai wo sono te de kirihirake`);
        }

        if (message.content.startsWith(`${prefix}shrug`)) {
            message.channel.send('( ͡° ͜ʖ ͡°)')
        }


    }

    // const exampleEmbed = new Discord.RichEmbed().setTitle('Warning');
    // if (!message.author.bot)  {
    //     restrictedWords.map(word => {
    //         let ma = new RegExp(word, "i");
    //         if (message.content.match(ma)) {
    //             exampleEmbed.setColor('#bc0000');
    //             exampleEmbed.setDescription("Please be respectful or you might get banned");
    //             message.channel.send(exampleEmbed);
    //             message.channel.send('', {
    //                files: ['https://media.giphy.com/media/QGzPdYCcBbbZm/giphy.gif']
    //             })
    //             setTimeout(() => {
    //                     message.delete();
    //             }, 3000);
    //         }
    //     })

    // for (let index of data) {
    //     let ma = new RegExp(index, "i");
    //     if (message.content.match(ma)) {
    //         message.channel.send("Please be respectful or you might get banned");
    //         setTimeout(() => {
    //             message.delete();
    //         }, 3000);
    //     }
    // }
    // checks if the message from the bot itself
    // } filter the messages

    if (message.content.includes('بلحة')) {
        message.channel.send("اسمه الرئيس المشير عبدالفتاح السيسي يا عدو الوطن ");
    }
    if (message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {

        if (message.content.startsWith(`${prefix}kick`)) {

            member.kick().then((member) => {
                message.channel.send(`:wave: ${member.displayName} has been kicked`, {
                    files: ['https://media.giphy.com/media/7DzlajZNY5D0I/giphy.gif']
                });
            }).catch(() => {
                message.channel.send("Error ugh!");
            });
        };
    };
});
client.login(token);