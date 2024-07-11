const { Telegraf } = require("telegraf");
const { start } = require("./controllers/command")
require("dotenv").config({path: './config/.env'});


const bot = new Telegraf(process.env.BOT_TOKEN);

const setupBot = () =>{
    bot.use((ctx, next) => {
        console.log(ctx);
        console.log(ctx.message.chat);
        console.log(ctx.message.chat.id);
        return next()

    })
    
    bot.start(start);
    
    return bot;
}

module.exports = {
    setupBot
}