const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {

    let points = db.startsWith(`points_${message.guild.id}`, { sort: '.data'})
    let content = '';

    for (let i =0; i < points.length; i++) {
        let user = bot.users.get(points[i].ID.split('_')[2]).username

        content += `${i+1}) ${user} | ${points[i].data} points\n`
    }

    message.channel.send('Leaderboard - Top Players on Asia Creative Scrims')

    let embed = new Discord.RichEmbed()
    .setAuthor('Player | Points', message.guild.iconURL)
    .setDescription(content)
    .setColor('RANDOM')

    return message.channel.send(embed)
}

module.exports.help = {
    name: 'leaderboard'
}