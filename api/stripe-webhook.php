<?php
require_once '../vendor/autoload.php';
require_once 'config.php';

\Stripe\Stripe::setApiKey(getenv('STRIPE_SECRET_KEY'));

// Webhook-Secret aus der Konfiguration
$endpoint_secret = STRIPE_WEBHOOK_SECRET;

$payload = @file_get_contents('php://input');
$sig_header = $_SERVER['HTTP_STRIPE_SIGNATURE'];
$event = null;

try {
    $event = \Stripe\Webhook::constructEvent(
        $payload, $sig_header, $endpoint_secret
    );
} catch(\UnexpectedValueException $e) {
    // Ungültiger Payload
    http_response_code(400);
    exit();
} catch(\Stripe\Exception\SignatureVerificationException $e) {
    // Ungültige Signatur
    http_response_code(400);
    exit();
}

// Ereignis verarbeiten
switch ($event->type) {
    case 'payment_intent.succeeded':
        $paymentIntent = $event->data->object;
        handleSuccessfulPayment($paymentIntent);
        break;
    case 'payment_intent.payment_failed':
        $paymentIntent = $event->data->object;
        handleFailedPayment($paymentIntent);
        break;
}

http_response_code(200);

function handleSuccessfulPayment($paymentIntent) {
    // Erfolgreiche Zahlung in der Datenbank speichern
    $payment_id = $paymentIntent->id;
    $amount = $paymentIntent->amount;
    $customer_email = $paymentIntent->customer_details->email;
    
    // Hier können Sie die Zahlung in Ihrer Datenbank speichern
    // und weitere Aktionen ausführen (z.B. E-Mail-Bestätigung senden)
}

function handleFailedPayment($paymentIntent) {
    // Fehlgeschlagene Zahlung protokollieren
    $payment_id = $paymentIntent->id;
    $error = $paymentIntent->last_payment_error;
    
    // Hier können Sie den Fehler protokollieren
    error_log("Zahlung fehlgeschlagen: " . $payment_id . " - " . $error->message);
} 