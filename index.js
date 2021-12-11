const Discord = require('discord.js');
const { token, chanMove, chanBL } = require('./config.json');
const client = new Discord.Client();

client.on('ready', async () => {
    console.log(`Connecté sur ${client.user.username}`)
});

client.on('voiceStateUpdate', async (oldState, newState) => {
    if (!chanBL.includes(newState.channel.id)) return;
    const channel = client.channels.cache.get(chanMove)
    newState.setChannel(channel)
})

client.login(token)
