const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();
const Client = new Discord.Client();
const newUsers = new Discord.Collection();

bot.on('ready', () => {
  console.log('Started!');
  bot.user.setGame('Type !help');
  console.log('SetGame Started!');
  bot.user.setUsername('Blaxed Helper')
  console.log('.')
  console.log('..')
  console.log('...')
  console.log('....')
  console.log('.....')
  console.log('......')
  console.log('.......')
  console.log('........')
  console.log('.........')
  console.log('..........')
  console.log('.........')
  console.log('........')
  console.log('.......')
  console.log('......')
  console.log('.....')
  console.log('....')
  console.log('...')
  console.log('..')
  console.log('.')
  console.log('Ready to Use')
});

bot.on('message', message =>{
    if(message.content == '!help') {
        //message.channel.sendMessage('!help\n!prices\n!staff');
        message.channel.send({embed: {
    color: 16777215,
    author: {
      name: bot.user.username,
    },
    title: "",
    fields: [{
        name: "Command List:\n",
        value: "!prices - See products prices\n\n!buy  - Informations about prices\n\n!q&a - popular questions\n\n!trade - Trade offers for buy cheat with skins\n\nMore Coming Soon"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "Bot made by AlexMaster©"
    }
  }
});
    }
});
bot.on('message', message => {
    if(message.content == '!buy')
        {
            message.channel.send({embed: {
                color: 16777215,
                author:{
                    name:bot.user.username,
                },
                fields:[{
                    name:"Buy Infos",
                    value:"ALL BUYS ARE MAKE ON DMY2003 AND ALEXMASTER"
                },
                {
                    name:"Buy place",
                    value:"You can make a buy from https://blaxed.com/forum/index.php?/store/"
                },
                {
                    name:"Payment methods",
                    value:"You can buy products with Paypal,Skrill,Paysafecard,CSGO Skins"
                }
            ],
                timestamp: new Date(),
                footer: {
                    icon_url: bot.user.avatarURL,
                    text: "Bot made by AlexMaster©"
                    }
            }})
        }
});
    bot.on('message', message => {
    if(message.content == '!q&a')
        {
            message.channel.send({embed: {
                color: 16777215,
                author:{
                    name:bot.user.username,
                },
                fields:[{
                    name:"Q&A",
                    value:"HERE SEE ALL POPULAR QUESTIONS FROM ALL USERS"
                },
                {
                    name:"Have Auto-Updater?",
                    value:"Yes, cheat have auto-updater!"
                },
                {
                    name:"Is safe to use on matchmaking / faceit / pvpro etc?",
                    value:"Yes,is safe and undetectable to use on matchmaking / faceit / pvpro etc!"
                },
                {
                    name:"I can buy with skins?",
                    value:"Yes, you can buy with csgo skins but first verify price on https://skins.cash/"
                },
                {
                    name:"I buy cheat but how start it?",
                    value:"If you buy the cheat and you don`t know how to open it? Listen up , 1.Start Loader.exe with Administrator with csgo open 2.If you injected go to the game and press *INSERT* button to open menu!"
                },
                {
                    name:"Where can get trade offer to buy cheat with skins?",
                    value:"You can get valid trade offers from *!trade* and you put skin on trade and your name from forum and send trade offer!"
                }
            ],
                timestamp: new Date(),
                footer: {
                    icon_url: bot.user.avatarURL,
                    text: "Bot made by AlexMaster©"
                    }
            }})
        }
});
bot.on('message', message => {
    if(message.content == '!prices') {
        message.channel.send({embed: {
        color: 16777215,
        author:{
            name: bot.user.username,
        },
        fields:[{
            name:"CSGO & LMS Cheats",
            value:"Status : \nOnline"
        },
        {
            name:"CSGO Prices",
            value:"Internal (Stable) = 15$ - LifeTime"
        },
        {
            name:"LMS Prices",
            value:"LMS Cheat = 15$ - LifeTime"
        }
    ],
        timestamp: new Date(),
                footer: {
                    icon_url: bot.user.avatarURL,
                    text: "Bot made by AlexMaster©"
                    }
        }})
    }
});

bot.on('message', function(message) {
    if (message.content == "!clear") {
        if (message.author.id !== '261560215344775168' && message.author.id !== '265179128200691713') return message.reply("You don`t have access to use this command");
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages({})
               .then(function(list){
                    message.channel.bulkDelete(list);
                message.channel.send({embed:{
                title: "📛 Channel Clear 📛",
                description: "🔧An Administrator cleared this channel🔧",
                color: 0x17A589,
                timestamp: new Date(),
                footer: {
                    text: "Bot made by AlexMaster©"
                    }
                }})    
                }), function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")}                     
        }
    }

});

//--------------------------END NEW COMMANDS----------------------------
bot.on('guildMemberAdd', member => {
    member.addRole(member.guild.roles.find("name", "Member"));
    member.send("Welcome on *Blaxed*!\n\nType !help on server to show all avaible commands!\n\nForum: https://blaxed.com/forum/\nStore: https://blaxed.com/forum/index.php?/store/\n\nDeveloper / Administrator:DMY2004\nSupport / Administrator:AlexMaster");
});

bot.on('guildMemberAdd', member => {
   member.send("Welcome on *Blaxed*!\n\nType !help on server to show all avaible commands!\n\nForum: https://blaxed.com/forum/\nStore: https://blaxed.com/forum/index.php?/store/\n\nDeveloper / Administrator:DMY2004\nSupport / Administrator:AlexMaster");
});

bot.login(process.env.BOT_TOKEN);
