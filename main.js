const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()

// $prefix install
// my prefix is $
const prefix = "$"

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file=>file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`)
    client.commands.set(command.name,command)
}


client.once('ready',()=>{
    console.log('Bot is Online')
})

client.on("message", message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if(command === 'ping'){
        client.commands.get('ping').execute(message,args,client)
    }else if(command === 'youtube'){
        client.commands.get('youtube').execute(message,args)
    }else if(command === 'embed'){
        client.commands.get('embed').execute(message,args,Discord)
    }else if(command === 'clear'){
        client.commands.get('clear').execute(message,args)
    }else if(command === 'kick'){
        client.commands.get('kick').execute(message,args)
    }else if(command === 'ban'){
        client.commands.get('ban').execute(message,args)
    }else if(command === 'image'){
        client.commands.get('image').execute(message,client,args,Discord)
    }else if(command === 'covid'){
        client.commands.get('covid').execute(message,args)
    }
})

client.login(process.env.token)
