const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    
    let pingembed = new Discord.RichEmbed()
    .setDescription('Pong!')
    .setFooter(Math.round(bot.ping) + 'ms')
    .setColor('RANDOM');

    return message.channel.send(pingembed)
}

module.exports.help = {
    name: 'ping'
}