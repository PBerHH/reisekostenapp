const express = require('express');
const router = express.Router();
const expenseReportController = require('../controllers/expenseReportController');

// Alle Routen für Reisekostenabrechnungen
router.post('/', expenseReportController.createExpenseReport);
router.get('/', expenseReportController.getAllExpenseReports);
router.get('/:reportId', expenseReportController.getExpenseReport);
router.put('/:reportId', expenseReportController.updateExpenseReport);
router.delete('/:reportId', expenseReportController.deleteExpenseReport);

module.exports = router; 