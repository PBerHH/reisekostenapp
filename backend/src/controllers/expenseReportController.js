// Temporäre In-Memory-Datenbank
let expenseReports = [];

// Neue Reisekostenabrechnung erstellen
exports.createExpenseReport = async (req, res) => {
    try {
        const expenseReport = {
            reportId: '28ddd01a-f6e4-4df3-88e9-8918223686d4',
            ...req.body,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        expenseReports.push(expenseReport);
        res.status(201).json(expenseReport);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Reisekostenabrechnung anhand der ID abrufen
exports.getExpenseReport = async (req, res) => {
    try {
        const expenseReport = expenseReports.find(r => r.reportId === req.params.reportId);
        if (!expenseReport) {
            return res.status(404).json({ message: 'Reisekostenabrechnung nicht gefunden' });
        }
        res.json(expenseReport);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Reisekostenabrechnung aktualisieren
exports.updateExpenseReport = async (req, res) => {
    try {
        const index = expenseReports.findIndex(r => r.reportId === req.params.reportId);
        if (index === -1) {
            return res.status(404).json({ message: 'Reisekostenabrechnung nicht gefunden' });
        }
        expenseReports[index] = {
            ...expenseReports[index],
            ...req.body,
            updatedAt: new Date()
        };
        res.json(expenseReports[index]);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Reisekostenabrechnung löschen
exports.deleteExpenseReport = async (req, res) => {
    try {
        const index = expenseReports.findIndex(r => r.reportId === req.params.reportId);
        if (index === -1) {
            return res.status(404).json({ message: 'Reisekostenabrechnung nicht gefunden' });
        }
        expenseReports.splice(index, 1);
        res.json({ message: 'Reisekostenabrechnung erfolgreich gelöscht' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Alle Reisekostenabrechnungen abrufen
exports.getAllExpenseReports = async (req, res) => {
    try {
        res.json(expenseReports);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; 