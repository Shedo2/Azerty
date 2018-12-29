const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    function checkBots(guild) {
        let botCount = 0;
        guild.members.forEach(member => {
            if (member.user.bot) botCount++
        });
        return botCount++
    }

    let sicon = message.guild.iconURL
    let serverembed = new Discord.RichEmbed()
    .setColor('#e80404')
    .setThumbnail(sicon)
    .setAuthor('Server Information')
    .setDescription(`🏷 Name: **${message.guild.name}**\n💳 ID: **${message.guild.id}**`)
    .addBlankField()
    .addField('🌏 **Region:**', `• **${message.guild.region}**`, true)
    .addField('🔒 **Role Count**', `• **${message.guild.roles.size}** roles`,true)
    .addField('📡 **Channels**', `• **${message.guild.channels.filter(channel => channel.type === 'category').size}** category\n• **${message.guild.channels.filter(channel => channel.type === 'text').size}** text\n• **${message.guild.channels.filter(channel => channel.type === 'voice').size}** voice`, true)
    .addField(`👥 **Member Count**  [${message.guild.memberCount}]`, `• **${message.guild.members.filter(m => m.presence.status === 'online').size}** user online\n• **${message.guild.members.filter(m => m.presence.status === 'idle').size}** user idle\n• **${message.guild.members.filter(m => m.presence.status === 'dnd').size}** user do not disturb\n• **${message.guild.members.filter(m => m.presence.status === 'offline').size}** user offline`, true)
    .addField('🤖 **Bot Count**', `• **${checkBots(message.guild)}** bots`, true)
    .addBlankField()
    .addField('🗓Created At', message.guild.createdAt)

    return message.channel.send(serverembed);
}

module.exports.help = {
    name: 'server'
}

