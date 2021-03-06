const { Client, Intents} = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
}); 

const token = process.env.DISCORD_TOKEN;

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async message => {
  if(message.author.bot) return
  if(message.content.toLowerCase().indexOf("hi") != -1 && message.author.id == "949166612169228328"){
    message.reply("Hi Misaki!");
  }
})

client.login(token);
