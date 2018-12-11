const Discord = require("discord.js")
const bot = new Discord.Client();
const config = require("./config.json");

bot.login(config.token);

bot.on("ready" , () => {
    bot.user.setGame("👽 !Shelp / !Sh 👽");
    console.log("Je suis la !");
})

var Prefix = '!S'

bot.on("message", (message) => {
    if (message.content === Prefix+"help" |message.content === Prefix+"h"){
        let embed = new Discord.RichEmbed()
        .setTitle("Aides Pour Les Commandes")
        .addField("Prefix:","!S")
        .addField("Commandes D'aides:","!Shelp ou !Sh")
        .addField("Pour des Info sur vous:","!Suser")
        .addField("Pour Avoir Un MP:","!Smp")
        .setColor("#17FF00")
        .setFooter("Youtube Channel : SloWManI");
        message.channel.send(embed);
    }
    if (message.content === '!Suser' | message.content === '!Su'){
        let user_guild = message.guild;
        let user_name = message.author.username;
        message.channel.send("Votre pseudo : " +user_name+" \nServeur Actuelle : "+user_guild);
    }
    if (message.content === '!Smp'){
        message.author.send("Coucou!!" +user_name);
    }
})

bot.on('guildMemberAdd', menber => {
    menber.createDM() .then(channel => {
        return channel.send('Merci d avoir rejoint le \nserveur :')+ menber.displayName
    }).catch(console.error)
})
