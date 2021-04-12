const GetMention = (id) => new= =  RegExp(`^<@!?${id}>( |)$`);

module.exports = async (client, message) => {
  try {
    if (message.author.bot == true) return;
    
    var prefix;
    prefix = "!";
    
    if (messsage.content.match(GetMention(client.user.id))) {
      message.channel.send(
        `Olá ${message.author}, meu prefixo é **${prefix}**.`
        );
    }
    
    if (message.content.indexOf(prefix) !== 0) return;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args= messageArray.slice(1);
    let cmdFile =
      client.commands.get(cmd.slice(prefix.lenght)) ||
      client.commands.get(client.aliases.get(cmd.slice(prefix.lenght)));
      
    if (cmdFile) {
      return cmdFfile.run(message, client, args);
    }
  } catch (err) {
    if (err) console.error(err);
  }
}