---
title: reisekosten
emoji: 🐳
colorFrom: green
colorTo: gray
sdk: static
pinned: false
tags:
  - deepsite
---

Check out the configuration reference at https://huggingface.co/docs/hub/spaces-config-reference

# Reisekostenabrechnung Tool

Ein professionelles Tool zur Erstellung von Reisekostenabrechnungen nach § 9 Abs. 4a EStG und BRKG.

## Installation

1. Klonen Sie das Repository:
```bash
git clone https://github.com/ihr-username/reisekosten.git
cd reisekosten
```

2. Installieren Sie die Abhängigkeiten mit Composer:
```bash
composer install
```

3. Konfigurieren Sie die Anwendung:
   - Kopieren Sie `api/config.php.example` nach `api/config.php`
   - Tragen Sie Ihre Stripe API-Schlüssel ein
   - Konfigurieren Sie die Datenbank- und E-Mail-Einstellungen
   - Setzen Sie die APP_URL auf Ihre Domain

4. Richten Sie die Datenbank ein:
```sql
CREATE DATABASE reisekosten;
USE reisekosten;

CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    payment_id VARCHAR(255) NOT NULL,
    amount INT NOT NULL,
    status VARCHAR(50) NOT NULL,
    customer_email VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE newsletter_subscribers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    discount_code VARCHAR(20),
    subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

5. Konfigurieren Sie Ihren Webserver:
   - Stellen Sie sicher, dass mod_rewrite aktiviert ist
   - Kopieren Sie die .htaccess-Datei in das Root-Verzeichnis
   - Konfigurieren Sie SSL für Ihre Domain

## Stripe-Einrichtung

1. Erstellen Sie einen Stripe-Account unter https://stripe.com
2. Holen Sie sich Ihre API-Schlüssel aus dem Dashboard
3. Richten Sie einen Webhook ein:
   - Webhook-URL: https://ihre-domain.de/api/stripe-webhook.php
   - Zu überwachende Events:
     - payment_intent.succeeded
     - payment_intent.payment_failed

## Funktionen

- Automatische Berechnung von Verpflegungspauschalen
- Berücksichtigung von gestellten Mahlzeiten
- Berechnung von Fahrtkosten (PKW, Bahn, Flugzeug)
- PDF-Export mit professionellem Layout
- Stripe-Integration für sichere Zahlungen
- Newsletter-Integration mit Rabattcodes

## Preise

- Regulärer PDF-Export: 0,89€
- Rabattierter PDF-Export (Newsletter): 0,67€

## Sicherheit

- SSL-Verschlüsselung erforderlich
- Sichere Verarbeitung von Zahlungsdaten über Stripe
- XSS- und CSRF-Schutz implementiert
- Regelmäßige Sicherheitsupdates

## Support

Bei Fragen oder Problemen erstellen Sie bitte ein Issue im Repository oder kontaktieren Sie uns unter support@ihre-domain.de