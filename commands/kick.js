module.exports = {
    name: 'kick',
    description: "This command kicks out a member!",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
        }else{
            message.channel.send(`You couldn't kick that member!`);
        }
    }
}