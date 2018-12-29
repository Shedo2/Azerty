const Discord = require('discord.js');

module.exports.run  = async (bot, message, args) => {

    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`Sorry ${message.author}, you dont have the permission to execute this command`);
    if (!args[0]) return message.channel.send('**❗Usage: ?poll <title>**');

    let pollembed = new Discord.RichEmbed()
    .setAuthor('Poll', 'https://i.imgur.com/pVu3e0d.png')
    .setColor('#ffffff')
    .setDescription(args.join(' '))
    .setFooter(`Poll started by ${message.author.username}`, message.author.avatarURL);

    let msg = await message.channel.send(pollembed);

    await msg.react('✅');
    await msg.react('❎');

    message.delete({timeout: 10});

}

module.exports.help = {
    name: 'poll'
}