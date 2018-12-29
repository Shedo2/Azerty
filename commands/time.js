const Discord = require('discord.js')
const moment = require('moment')
const dateformat = require('dateformat')

module.exports.run = async (bot, message, args) => {

    let user = message.mentions.users.first() || message.author

    let d = new Date()
    dformat = [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');

    message.channel.send(`${d}`)
}

module.exports.help = {
    name: 'time'
}