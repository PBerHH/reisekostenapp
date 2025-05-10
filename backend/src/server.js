const express = require('express');
const cors = require('cors');
const expenseReportRoutes = require('./routes/expenseReportRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Statische Dateien servieren
app.use(express.static('public'));

// Routen
app.use('/api/expense-reports', expenseReportRoutes);

// Root-Route
app.get('/', (req, res) => {
    res.json({ message: 'Reisekosten-API ist aktiv' });
});

// Fehlerbehandlung
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Etwas ist schiefgelaufen!' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});
