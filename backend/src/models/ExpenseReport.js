const mongoose = require('mongoose');

const expenseReportSchema = new mongoose.Schema({
    reportId: {
        type: String,
        required: true,
        unique: true,
        default: () => '28ddd01a-f6e4-4df3-88e9-8918223686d4' // Standard-UUID
    },
    purpose: {
        type: String,
        required: true
    },
    traveler: {
        type: String,
        required: true
    },
    department: String,
    costCenter: String,
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    transportType: {
        type: String,
        enum: ['car', 'train', 'plane', 'other'],
        required: true
    },
    distance: Number,
    transportCost: Number,
    dailyAllowances: [{
        date: Date,
        amount: Number,
        breakfastProvided: Boolean,
        lunchProvided: Boolean,
        dinnerProvided: Boolean
    }],
    additionalCosts: [{
        type: {
            type: String,
            enum: ['accommodation', 'parking', 'taxi', 'tickets', 'other']
        },
        amount: Number
    }],
    totalAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['draft', 'submitted', 'approved', 'paid'],
        default: 'draft'
    },
    applicantName: String,
    approverName: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Middleware für updatedAt
expenseReportSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('ExpenseReport', expenseReportSchema); 