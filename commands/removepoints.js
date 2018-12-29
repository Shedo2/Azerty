const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) {
        return message.reply('You do not have the permission to execute this command')
    }

    if (!args[0]) return message.reply('Please specify an amount to remove.')
    if (isNaN(args[0])) return message.reply('That was not a valid number')

    let user = message.mentions.users.first() || message.author
    message.channel.send('Successfully removed ' + args[0] + ' from ' + user)
    db.subtract(`points_${message.guild.id}_${message.author.id}`, args[0])

}

module.exports.help = {
    name: 'removepoints'
}