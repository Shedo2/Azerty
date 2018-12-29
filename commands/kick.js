const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!target) return message.channel.send('**Couldn\'t find the user**')
    let reason = args.join(' ').slice(22);
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**You do not have the permission to execute this command.**')
    if (target.hasPermission('MANAGE_GUILD')) return message.channel.send('**That user cannot be kicked.**')

    let kickembed = new Discord.RichEmbed()
    .setTitle('Kicked User:')
    .setDescription(`${target}, ID: ${target.id}`)
    .addField('Kicked by:', `<@${message.author.id}>, ID: ${message.author.id}`)
    .addField('Kicked In:', message.channel)
    .addField('Time:', message.createdAt)
    .addField('Reason:', reason)
    .setColor('RANDOM');

    let kickChannel = message.guild.channels.find('name', 'logs')
    if (!kickChannel) return message.channel.send('**Couldn\'t find channel "logs".**');

    message.guild.member(target).kick(reason);
    kickChannel.send(kickembed)
}

module.exports.help = {
    name: 'kick'
}