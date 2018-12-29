const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
        return message.channel.send('**You don\'t have the permission to execute this command.**')
    }
    
    let modesembed = new Discord.RichEmbed()
    .setAuthor('Poll', 'https://i.imgur.com/pVu3e0d.png')
    .setColor('RANDOM')
    .setTitle('Choose your gamemode')
    .setDescription(':one: Solo\n:two: Duo\n:three: Squad');

    let msg = await message.channel.send(modesembed);

    await msg.react(':one:')
    await msg.react('2️⃣')
    await msg.react('3️⃣')
}
module.exports.help = {
    name: 'modes'
}