const axios = require('axios');

module.exports={
    name:'covid',
    description: "Daily statistics of Covid Numbers.",
    async execute(message,args){
        const url = 'https://api.covid19india.org/data.json'
        const data = await axios.get(url)
        message.channel.send(`last updated time: ${data.data.statewise[0].lastupdatedtime}`)

        const state1 = args.join(" ")
        
        for(let i=0;i<37;i++){
            if(data.data.statewise[i].state === state1){
                    message.channel.send(`Active Cases are ${data.data.statewise[i].active}`)
                    message.channel.send(`confirmed Cases are ${data.data.statewise[i].confirmed}`)
                    message.channel.send(`deaths are ${data.data.statewise[i].deaths}`)
                    message.channel.send(`recovered Cases are ${data.data.statewise[i].recovered}`)
                    message.channel.send('--------------------------------------------------------')
            }
        }

        // for(let i=1;i<37;i++){
        //     message.channel.send(`for the state of ${data.data.statewise[i].state} `)
        //     message.channel.send(`Active Cases are ${data.data.statewise[i].active}`)
        //     message.channel.send(`confirmed Cases are ${data.data.statewise[i].confirmed}`)
        //     message.channel.send(`deaths are ${data.data.statewise[i].deaths}`)
        //     message.channel.send(`recovered Cases are ${data.data.statewise[i].recovered}`)
        //     message.channel.send('--------------------------------------------------------')
        // }
    }
}