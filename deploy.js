"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const index_js_1 = require("./commands/index.js");
const token = process.env.DISCORD_TOKEN;
if (!token) {
    console.error('[ERROR] Falta DISCORD_TOKEN.MTUwMjU5NzE2MjQ3MzYxOTUyNg.GQJDvr.-A4dXOLnFdxeUzqcZwiuT2dIhASTwZBoz1AF14');
    process.exit(1);
}
const rest = new discord_js_1.REST({ version: '10' }).setToken(token);
);
async function deploy() {
    console.log('[DEPLOY] Registrando slash commands globalmente...');
    try {
        const me = await rest.get(discord_js_1.Routes.user());
        const clientId = me.id;
        console.log(`[DEPLOY] Bot detectado: ${me.username} (${clientId})`);
        const body = index_js_1.commands.map((c) => c.data.toJSON());
        const result = await rest.put(discord_js_1.Routes.applicationCommands(clientId), { body });
        console.log(`[DEPLOY] ✅ ${result.length} comando(s) registrados correctamente.`);
        result.forEach((cmd) => {
            const c = cmd;
            console.log(`  → /${c.name}`);
        });
    }
    catch (err) {
        console.error('[DEPLOY] Error al registrar comandos:', err);
        process.exit(1);
    }
}
deploy();
