const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`Sorry ${message.author}, you dont have the permission to execute this command`);
    
    let readyembed = new Discord.RichEmbed()
    .setAuthor('Poll', 'https://i.imgur.com/pVu3e0d.png')
    .setTitle('Are you guys ready?')
    .setDescription('React to vote')
    .setFooter(`Poll started by ${message.author.username}`, message.author.displayAvatarURL)
    .setColor('#ffffff');

    let msg = await message.channel.send(readyembed);

    await msg.react('✅');
    await msg.react('❎');

    message.delete({timeout: 10});

}

module.exports.help = {
    name: 'ready'
}