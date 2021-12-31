const Programs = require('../base/programs')
const discord = require('discord.js')
const download = require('download')




class dfile extends Programs{
    constructor(bot){
        super(bot,{
            name:"download",
            description:"Download a file to the bot",
            aliases:["d"],
            usage:"download <url>",
            permLevel:"Owner",
            category:"System"
        })
    }
    async run(message,args,bot){
        if(!args[1]) return message.channel.send(new discord.MessageEmbed().setTitle("Missing url!").setDescription("Enter file URL to use this program").setColor(0x33FFEC))
        let url = message.content.slice(args[0].length+1+args[1].length+1)
        await download(url,"./system/etc/download")

        return message.channel.send(new discord.MessageEmbed().setTitle("Done!").setDescription("To move this to executables. Turn on XTerm and run ;mv <fileorigin> <destination>"))
    }
}

module.exports = dfile
