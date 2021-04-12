exports.run = (client, message, args) => {
  
    message.channel.send(`Ping do bot **${client.ws.ping}**`)
    
}

exports.help = {
    name: 'ping',
    aliases: ["pong"]
}