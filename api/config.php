<?php
// Stripe API Keys
// HIER KEINEN ECHTEN SECRET KEY SPEICHERN!
// Beispiel: define('STRIPE_SECRET_KEY', getenv('STRIPE_SECRET_KEY'));
define('STRIPE_PUBLIC_KEY', 'pk_test_DEIN_PUBLIC_KEY');
define('STRIPE_SECRET_KEY', getenv('STRIPE_SECRET_KEY'));
define('STRIPE_WEBHOOK_SECRET', getenv('STRIPE_WEBHOOK_SECRET'));

// Datenbank-Konfiguration
define('DB_HOST', 'localhost');
define('DB_NAME', 'reisekosten');
define('DB_USER', '');
define('DB_PASS', '');

// E-Mail-Konfiguration
define('SMTP_HOST', '');
define('SMTP_PORT', 587);
define('SMTP_USER', '');
define('SMTP_PASS', '');
define('MAIL_FROM', 'noreply@ihre-domain.de');
define('MAIL_FROM_NAME', 'Reisekostenabrechnung');

// Anwendungseinstellungen
define('APP_URL', 'https://ihre-domain.de');
define('PDF_PRICE', 89); // Preis in Cent (0,89€)
define('PDF_PRICE_DISCOUNTED', 67); // Rabattierter Preis in Cent (0,67€) 