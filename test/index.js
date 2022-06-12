const { app, BrowserWindow } = require("electron");

(async () => {
    await app.whenReady();
    const mainWindow = new BrowserWindow({
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
        },
    });
    await mainWindow.loadFile("index.html");
    mainWindow.webContents.openDevTools();
})();
