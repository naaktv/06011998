const Discord = require("discord.js");
const client = new Discord.Client();
const logger = require(".src/utils/logger.js");

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

const modules = ["information"];
const fs = require("fs");

modules.forEach((x) => {	
    fs.readdir (`./src/commands/${x}/`, (err, files) => {
        if (err) return logger.error(err);
        logger.sucess(
          `(COMANDOS): Foram carregados ${files.length} comandos(s) na pasta ${x}`
    );
    
    files.forEach((f) => {
        const props = require(`./src/commands/${x}/${F}`);	
        client.commands.set(props.help.name, props);	
        props.help.aliases.forEach((alias) => {
            client.aliases.set(alias, props.help.name);
          });
        });
    });
});

fs.readdir("./src/client/events/", (err, files) => {	
    if(err) return logger.error(err);	
    files.forEach((file) => {	
    const event = require(`./src/client/events/${file}`);
    let eventName = file.split(".")[0];	
    client.on(eventName, event.bind(null, client));	
    delete require.cache[require.resolve(`./src/client/events/${file}`)];
    logger.sucess(`(EVENTOS): ${eventName} foi carregado.`);
  });
});

client
  .login("ODI4Nzc3NzQ0MDc3Njg0Nzg2.YGuhbA.q8aTq9GtQP4tbc6wHcZr_lnpKe4")
  .then(() => {	
    logger.sucess(`(BOT): Index Carragada com Sucesso.`);
  });