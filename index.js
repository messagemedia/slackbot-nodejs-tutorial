// Add support for environmental variables

require('dotenv/config');
// Import botkit package
var Botkit = require('botkit');

// Create a controller for the Slackbot
var controller = Botkit.slackbot({
  debug: false
});

// Use the token to connect the bot to your Slack app
controller.spawn({
  token: process.env.TOKEN
}).startRTM();

// Determine behaviour of the Slackbot
controller.hears(['hello', 'hi'], ['ambient', 'direct_mention', 'mention'], function (bot, message) {
  bot.reply(message, "Hello.");
});
