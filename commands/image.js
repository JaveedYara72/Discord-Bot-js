var scraper = require('images-scraper')

const google = new scraper({
    puppeteer:{
        headless: true
    }
})

const prefix = '$'

module.exports={
    name:'image',
    description:'this sends the first 3 images to a discord channel',
    async execute(message,client,args,Discord){
        const image_query = args.join(" ")
        if(!image_query) return message.channel.send('enter what you want to search')
        const image_results = await google.scrape(image_query,3)
        message.channel.send(image_results[0].url)
        message.channel.send(image_results[1].url)
        message.channel.send(image_results[2].url)
    }
}