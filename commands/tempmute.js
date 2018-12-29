const Discord = require('discord.js');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {

    if (!args[0]) return message.reply('❗**Usage: ?tempmute <@user> s/m/h/d**');
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply('Couldnt find user.');
    if (tomute.hasPermission('MANAGE_MESSAGES')) return message.reply('**Cant mute them**.')
    let muterole = message.guild.roles.find(`name`, 'Muted');
    if(!muterole){
        try{
            muterole = await message.guild.createRole({
                name: 'Muted',
                color: '#ff0000',
                permission:[]
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        }catch(e){
            console.log(e.stack);
        }
    }
    let mutetime = args[1];
    if (!mutetime) return message.reply('**You dint specify a time**')

    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

    setTimeout(function(){
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> has been unmuted`);
    }, ms(mutetime));

}

module.exports.help = {
    name: 'tempmute'
}