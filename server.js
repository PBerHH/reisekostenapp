const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Statische Dateien aus dem aktuellen Verzeichnis servieren
app.use(express.static(__dirname));

// Alle anderen Routen auf index.html umleiten
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
}); 