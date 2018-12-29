const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    if (!args[2]) return message.reply('**Please ask a full question**')

    let replies = ['Yes.', 'No.', 'I don\'t know', 'Probably']
    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(' ');

    let ballembed = new Discord.RichEmbed()
    .setAuthor('8Ball', 'https://i.imgur.com/F45Yfrm.png')
    .addField('Question', question)
    .addField('Answer', replies[result])
    .setColor('WHITE');

    return message.channel.send(ballembed)

}

module.exports.help = {
    name: '8ball'
}