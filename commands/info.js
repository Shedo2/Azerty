const Discord = require('discord.js');

module.exports.run = async (bot, message, args) =>{

    let infoembed = new Discord.RichEmbed()
    .setTitle('🗂 About Azerty')
    .setDescription('Its a dedicated multifunction discord bot for the discord server "Asia Creative Scrims".')
    .addBlankField()
    .addField('🏷 Bot Name', '• Azerty#8547', true)
    .addField('💳 Bot ID', '• 522393704791539714', true)
    .addField('🏷 Owner Name', 'NizzQ#6969', true)
    .addField('💳 Owner ID', '• 257709390537162752', true)
    .addField('🖥Version', '• 0.7.0 BETA', true)
    .addField('💬 Prefix', '• ?', true)
    .addBlankField()
    .setColor('#560684')
    .setThumbnail('https://i.imgur.com/O2LYe7M.png')
    .addField('🗓 **Created At**', bot.user.createdAt);

    return message.channel.send(infoembed);
}

module.exports.help = {
    name: 'info'
}