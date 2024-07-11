
const { default: mongoose } = require('mongoose');
const { setupBot } = require('./bot');
require("dotenv").config({path: './config/.env'});



(async function() {
    try {
        await mongoose.connect(process.env.DB_TOKEN)
        await setupBot().launch();
    
    
    } catch (error) {
        
        
        console.log('Ошибка запуска', error)
    
    
    }

}())
console.log("Bot start");