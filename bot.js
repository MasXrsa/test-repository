const { Telegraf } = require("telegraf");
const {
      start,
      backMenu
 } = require("./controllers/command");
const { CMD_TEXT } = require("./config/const");
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
    
    bot.hears(CMD_TEXT.menu, backMenu)

    return bot;
}

module.exports = {
    setupBot
}