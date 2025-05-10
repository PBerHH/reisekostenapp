<?php
require_once '../vendor/autoload.php';
require_once 'config.php';

header('Content-Type: application/json');

try {
    \Stripe\Stripe::setApiKey(STRIPE_SECRET_KEY);
    
    $jsonStr = file_get_contents('php://input');
    $jsonObj = json_decode($jsonStr);
    
    // Preis validieren
    $amount = isset($jsonObj->amount) ? $jsonObj->amount : PDF_PRICE;
    if ($amount !== PDF_PRICE && $amount !== PDF_PRICE_DISCOUNTED) {
        throw new Exception('Ungültiger Betrag');
    }
    
    $paymentIntent = \Stripe\PaymentIntent::create([
        'amount' => $amount,
        'currency' => 'eur',
        'automatic_payment_methods' => [
            'enabled' => true,
        ],
        'metadata' => [
            'product' => 'PDF Export',
            'price_type' => ($amount === PDF_PRICE_DISCOUNTED) ? 'discounted' : 'regular'
        ]
    ]);
    
    echo json_encode([
        'clientSecret' => $paymentIntent->client_secret
    ]);
} catch(Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
} 