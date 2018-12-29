const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {

    let user = message.mentions.users.first() || message.author.id;
    let points = await db.get(`points_${user.id}`)
    if (points === null) points = 0;

    message.channel.send(`<@${user}>`)

    let pointsembed = new Discord.RichEmbed()
    .setAuthor('Points', 'https://i.imgur.com/ja8TqbH.png')
    .setTitle('Your points')
    .setDescription(`${points}`)
    .setColor('RANDOM')

    return message.channel.send(pointsembed);
}

module.exports.help = {
    name: 'points'
}