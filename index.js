
const { setupBot } = require('./bot');
require("dotenv").config({path: './config/.env'});

(async function(){
    try {
        await setupBot().launch();
        console.log(process.env.BOT_TOKEN)
    
    
    } catch (error) {
        
        
        console.log('Ошибка запуска', error)
    
    
    }

})

console.log("Bot start");