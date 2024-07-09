const { Telegraf } = require("telegraf")

const token = process.env.token
const bot = new Telegraf(token)
