"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultConfig = defaultConfig;
exports.loadConfig = loadConfig;
exports.saveConfig = saveConfig;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const DATA_DIR = path_1.default.join(process.cwd(), 'bots', 'discord-bot', 'data');
function ensureDataDir() {
    if (!fs_1.default.existsSync(DATA_DIR)) {
        fs_1.default.mkdirSync(DATA_DIR, { recursive: true });
    }
}
function getConfigPath(guildId) {
    return path_1.default.join(DATA_DIR, `${guildId}.json`);
}
function defaultConfig() {
    return {
        antiraid: {
            enabled: false,
            nivel: 'medio',
            maxJoinsPerMinute: 10,
        },
        antilink: {
            enabled: false,
            whitelist: ['discord.gg', 'discord.com', 'discordapp.com'],
            exemptRoles: [],
        },
        antispam: {
            enabled: false,
            maxMensajes: 5,
            ventanaTiempo: 5,
            tiempoMute: 10,
            exemptRoles: [],
        },
        antibot: {
            enabled: false,
        },
        antilinkViolaciones: {},
        wars: [],
        sanciones: [],
        raids: [],
    };
}
function loadConfig(guildId) {
    ensureDataDir();
    const configPath = getConfigPath(guildId);
    if (!fs_1.default.existsSync(configPath)) {
        const config = defaultConfig();
        saveConfig(guildId, config);
        return config;
    }
    try {
        const raw = fs_1.default.readFileSync(configPath, 'utf-8');
        const parsed = JSON.parse(raw);
        const def = defaultConfig();
        return {
            antiraid: { ...def.antiraid, ...parsed.antiraid },
            antilink: { ...def.antilink, ...parsed.antilink },
            antispam: { ...def.antispam, ...parsed.antispam },
            antibot: { ...def.antibot, ...parsed.antibot },
            antilinkViolaciones: parsed.antilinkViolaciones ?? {},
            wars: parsed.wars ?? [],
            sanciones: parsed.sanciones ?? [],
            raids: parsed.raids ?? [],
        };
    }
    catch {
        return defaultConfig();
    }
}
function saveConfig(guildId, config) {
    ensureDataDir();
    fs_1.default.writeFileSync(getConfigPath(guildId), JSON.stringify(config, null, 2), 'utf-8');
}
