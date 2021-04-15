module.exports={
    name:'ping',
    description:"this is a ping command",
    execute(message,args,client){
        message.channel.send('Pong!')
        message.channel.send('Calculating Ping ...>>')
        .then((resultMessage)=>{
            const ping = resultMessage.createdTimeStamp - message.createdTimeStamp
            message.channel.send(`The Latency is ${client.ws.ping} ms`)
        })
    }
}