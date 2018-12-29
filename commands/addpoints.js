const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args, config) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) {
        return message.reply('You do not have the permission to execute this command')
    }

    let user = message.mentions.members.first() || message.author.id;
    let amount = parseInt(args.join(' ').replace(user, ''));

    if (isNaN(amount)) return message.channel.send('**Please specify an amount to add**')
    let points = await db.get(`points_${user.id}`)
    db.add(`points_${user.id}`, amount)

    let addpointsembed = new Discord.RichEmbed()
    .setAuthor('Added Points')
    .addField('Amount', `${amount}`)
    .setColor('RANDOM')

    return message.channel.send(addpointsembed)

}

module.exports.help = {
    name: 'addpoints'
}