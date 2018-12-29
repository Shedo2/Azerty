const Discord = require('discord.js');
const botconfig = require('./botconfig.json');
const bot = new Discord.Client();
const fs = require('fs');
bot.commands = new Discord.Collection()
const moment = require('moment');
const db = require('quick.db');

fs.readdir('./commands/', (err, files) => {

    if (err) console.log(err);

    let jsfile = files.filter(f => f.split('.').pop() === 'js')
    if (jsfile.length <= 0){
        console.log('Couldnt find command');
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on('ready', async () => {
    console.log(`${bot.user.username} is ready`);
    bot.user.setActivity('with himself')
});

bot.on('guildMemberAdd', function(member) {
    let nvRole = member.guild.roles.find('name', 'Non-Verified');
    member.addRole(nvRole);
})

bot.on('message', async message => {

    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(' ');
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    if (!message.content.startsWith(prefix)) return;

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(bot,message,args);

});

bot.on('message', message => {

    let sender = message.author;
    let msg = message.content.toUpperCase();
    let prefix = botconfig.prefix;

});

//eval command

bot.on('message', message => {
    const args = message.content.split(' ').slice(1);

    if (message.content.startsWith(botconfig.prefix + 'eval')) {
        if (message.author.id !== botconfig.ownerID) return;
        try {
            const code = args.join(' ');
            let evaled = eval(code);

            if (typeof evaled !== 'string')
                evaled = require('util').inspect(evaled);

                message.channel.sendCode('xl', clean(evaled));
        } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
    }
});

function clean(text) {
    if (typeof(text) === 'string')
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}

//Verification
bot.on('message', message => {

    if (message.channel.name === 'verification') {
        if (message.content === 'I agree') {
            let verifyRole = message.guild.roles.find('name', 'Members')
            let role = message.guild.roles.find('name', 'Non-Verified');
            
            message.member.addRole(verifyRole)
            message.member.removeRole(role);
            message.author.send('Welcome to **ACS Community** discord server! We hope you have fun in this discord server and also don\'t forget to read the **Rules**.\nJoin our primary discord server as it may help us grow bigger\nhttps://discord.gg/TxKQnC').then(msg => {
                message.delete(2000)
            })
        }
    }
});

bot.login(botconfig.token);
