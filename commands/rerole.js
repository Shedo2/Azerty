const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('MANAGE_MEMBERS')) return message.reply('You dont have the permission to execute this command');
    let roleMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!roleMember) return message.reply('Couldnt find the user');
    let role = args.join(' ').slice(22);
    if (!role) return message.reply('Please specify a role');
    let guildRole = message.guild.roles.find('name', role);
    if (!guildRole) return message.reply('Couldnt find that role');

    if (!roleMember.roles.has(guildRole.id)) return message.reply('They dont have that role');
    await (roleMember.removeRole(guildRole.id));

}

module.exports.help = {
    name: 'rerole'
}