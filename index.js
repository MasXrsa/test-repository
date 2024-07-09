const { Telegraf } = require("telegraf");
require("dotenv").config();

const token = process.env.TOKEN;
const bot = new Telegraf(token);

bot.on("message", async ctx =>{
    const msg = ctx.message.text;

    if(msg == "ключ"){
        ctx.reply("Key word");
    }
})

bot.launch();
console.log("Bot start");