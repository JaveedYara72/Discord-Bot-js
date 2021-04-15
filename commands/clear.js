const { MessageFlags } = require("discord.js")

module.exports={
    name:'clear',
    description:'this will be used to delete messages',
    async execute(message,args){
        if(!args){
            return message.reply('Please enter the number of messages you want to delete')
        }
        if(isNaN(args[0])){
            return message.reply('Please Enter a real number')
        }
        if(args[0]>100){
            return message.reply('THe max limit is 100')
        }
        if(args[0]<0){
            return message.reply('I can only delete messages ranging number from 1 to 100')
        }

        await message.channel.messages.fetch({limit:args[0]}).then(messages=>{
            message.channel.bulkDelete(messages)
        })
    }
}