const { mainMenu } = require("../utils/buttons")

const start = ctx => ctx.reply('Hi', {
    ...mainMenu
})

const backMenu = ctx => ctx.reply('Ты находишься в меню', {
    ...mainMenu
})

module.exports = {
    start,
    backMenu
}