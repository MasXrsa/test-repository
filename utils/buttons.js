const { Markup } = require("telegraf")
const { CMD_TEXT } = require("../config/const")

const mainMenu=
    Markup.keyboard([
        [CMD_TEXT.login],
        [CMD_TEXT.upload],
        [CMD_TEXT.download]
    ]).resize();

    
const backButtonMenu=
    Markup.keyboard([
        [CMD_TEXT.menu]
    ])


module.exports = {
    mainMenu,
    backButtonMenu
}