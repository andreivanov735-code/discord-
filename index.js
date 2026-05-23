"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandCollection = exports.client = void 0;
const discord_js_1 = require("discord.js");
const index_js_1 = require("./commands/index.js");
const ready_js_1 = require("./events/ready.js");
const interactionCreate_js_1 = require("./events/interactionCreate.js");
const messageCreate_js_1 = require("./events/messageCreate.js");
const guildMemberAdd_js_1 = require("./events/guildMemberAdd.js");
exports.client = new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMembers,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.MessageContent,
        discord_js_1.GatewayIntentBits.GuildModeration,
    ],
    partials: [discord_js_1.Partials.Message, discord_js_1.Partials.Channel, discord_js_1.Partials.GuildMember],
});
exports.commandCollection = new discord_js_1.Collection();
for (const cmd of index_js_1.commands) {
    exports.commandCollection.set(cmd.data.name, cmd);
}
exports.client.once('clientReady', ready_js_1.handleReady);
exports.client.on('interactionCreate', interactionCreate_js_1.handleInteraction);
exports.client.on('messageCreate', messageCreate_js_1.handleMessage);
exports.client.on('guildMemberAdd', guildMemberAdd_js_1.handleMemberAdd);
const token = process.env.DISCORD_TOKEN;
if (!token) {
    console.error('[ERROR] Falta DISCORD_TOKEN en las variables de entorno.');
    process.exit(1);
}
exports.client.login(token).catch((err) => {
    console.error('[ERROR] No se pudo conectar al bot:', err.message);
    process.exit(1);
});
