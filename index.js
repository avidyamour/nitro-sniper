const { clear } = require('console')

const Discord = require('discord.js'),
    utilisateur = new Discord.Client(),
    axios = require('axios').default,
    { token, id } = require('./config.json')

    console.log('[By Avidya]')

utilisateur.login(token)

utilisateur.on('ready', () => {
    console.log("[]")
})

utilisateur.on('message', message => {
    if (message.content.includes('discord.gift') || message.content.includes('discordapp.com/gifts/')) {
        var guild = message.guild
        var guild_groupe = ""
            if (guild_groupe == guild) {
                guild_groupe = message.guild.name
            }
            if (message.author.id == id) {
                 console.log(`[Ping] Tu as envoyé un nitro : ${message.content}`)
                return;
            }
        var nitroreg = /(discord\.(gift)|discordapp\.com\/gift)\/.+[a-z]/
        var nitrolink = nitroreg.exec(message.content);
        const nitrocode = nitrolink[0].split('/')[1];

                console.log(`[Ping] > [${guild_groupe}] | de ${message.author.tag} : ${nitrolink[0]}`);
                        axios({ method: 'POST', url: `https://discordapp.com/api/v6/entitlements/gift-codes/${nitrocode}/redeem`, headers: { 'Authorization': token }})
                       .then(() => console.log(`[Ping] > Nitro récuperé dans [${guild_groupe}] | de [${message.author.tag}]`))
                       .catch(e => console.log(`> Ce nitro a déjà été utilisé ou/est invalide :/`))
    }
})
