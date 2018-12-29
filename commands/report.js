const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!rUser) return message.channel.send('Couldnt find user');
    let rreason = args.join(' ').slice(22);

    let reportembed = new Discord.RichEmbed()
    .addField('Reported User:', `${rUser} ID: ${rUser.id}`)
    .addField('Reported By:', `${message.author} ID: ${message.author.id}`)
    .addField('Channel:', message.channel)
    .addField('Reason:', rreason)
    .addField('Time:', message.createdAt)
    .setColor('#0007ea');

    let reportschannel = message.guild.channels.find(`name`, 'reports');
    if (!reportschannel) return message.channel.send('Couldnt find report channel');

    message.delete().catch(O_o=>{});
    reportschannel.send(reportembed);

}

module.exports.help = {
    name: 'report'
}