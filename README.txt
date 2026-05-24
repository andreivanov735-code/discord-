# Bot de Discord — Anti-Raid & Seguridad

  ==============================================
    OPCIÓN 1: Railway (recomendado, gratis)
  ==============================================

  1. Ve a https://railway.app y crea una cuenta
  2. Clic en "New Project" → "Deploy from GitHub"
     - Sube este código a un repo de GitHub primero
     - O usa "Empty project" y sube los archivos manualmente
  3. En tu proyecto Railway ve a la pestaña "Variables"
  4. Añade:
        DISCORD_TOKEN = tu_token_aquí
  5. Railway detecta el Dockerfile automáticamente
  6. ¡El bot se inicia solo!

  Para registrar los comandos slash en tu servidor:
     Abre una terminal en Railway → "Open terminal"
     Ejecuta: node deploy.js


  ==============================================
    OPCIÓN 2: Tu PC (Windows/Mac/Linux)
  ==============================================

  1. Instala Node.js desde https://nodejs.org
  2. Extrae esta carpeta
  3. Abre el archivo .env y pon tu token:
        DISCORD_TOKEN=MTUwMjU5NzE2MjQ3MzYxOTUyNg.GtCmL2.AuZCzZ8CoHBYVMr3bB5ST1bv-0t-LXpbINTQYU
  4. Abre una terminal en la carpeta y ejecuta:
        npm install
        node deploy.js   ← solo la primera vez
        node index.js    ← inicia el bot


  ==============================================
    OPCIÓN 3: Render (gratis)
  ==============================================

  1. Ve a https://render.com
  2. New → "Background Worker"
  3. Conecta tu repo de GitHub con este código
  4. Build Command:  npm install
     Start Command:  node index.js
  5. En "Environment" añade:
        DISCORD_TOKEN = tu_token_aquí


  ==============================================
    CÓMO OBTENER TU TOKEN
  ==============================================

  1. Ve a https://discord.com/developers/applications
  2. Selecciona tu aplicación (Seguridad)
  3. Bot → Token → Copy (o Reset Token)


  ==============================================
    COMANDOS DEL BOT
  ==============================================

  /panel        Panel de control exclusivo del owner
  /antiraid     Protección anti-raid
  /antilink     Filtro de enlaces
  /antispam     Anti-spam
  /antibot      Anti-bot
  /sancionar    Sancionar usuario
  /unsancionar  Levantar sanción
  /sanciones    Historial de sanciones
  /lockdown     Bloquear todos los canales
  /unlockdown   Desbloquear todos los canales
  /masaban      Ban masivo
  /raidlog      Registro de raids
  /purgar       Borrar mensajes en masa
  
