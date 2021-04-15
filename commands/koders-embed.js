module.exports={
    name:'embed',
    description: 'THis is a embed command',
    execute(message,args,Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Rules Everyone Must Follow')
        .setURL('https://www.youtube.com/watch?v=gHN-EhL8x3g')
        .setDescription('THis is an embed for the server Rules everyone must follow')
        .addFields(
            {name:'Rule 1',value:'Follow all rules'},
        ).setImage('https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2F%40marcelloscherme%2Falways-be-nice-to-people-c42a44e3ee1d&psig=AOvVaw2i2SDNmtcQwMaBj1FSJAHd&ust=1618572237838000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNi-5MyRgPACFQAAAAAdAAAAABAD')
        .setFooter('Make Sure to check out rules channel')

        message.channel.send(newEmbed)

    }
}