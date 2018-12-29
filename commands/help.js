const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    let pages = ['__**Member Command**__\n**?help** = Show list of available commands\n**?info** = Show bot info\n**?server** = Show current server info\n**?gay** = Calculate how gay you are\n**?8ball** = Ask the 8Ball a question\n**?ping** = pong!\n**?report** = Report a user', '__**Admin Commands**__\n**?clear** = To clear messages\n**?poll** = To create a poll\n**?ready** = Ask the server "Are you ready?"\n**?rerole** = To remove a role\n**?tempmute** = To temporary mute them'];
    let page = 1;

   const embed = new Discord.RichEmbed()
   .setColor('#ff0054')
   .setFooter(`Page ${page} of ${pages.length}`)
   .setDescription(pages[page-1])

   message.channel.send(embed).then(msg => {

       msg.react('⏪').then( r => {
        msg.react('⏩')
        
        const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;

        const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000});

        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })

        forwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
       })
   })


}

module.exports.help = {
    name: 'help'
}