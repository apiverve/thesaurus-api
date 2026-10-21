# Thesaurus API - PHP Package

Thesaurus finds synonyms and alternative terms for any word. Supply a single target word to receive an array of matching synonyms.

## Installation

Install via Composer:

```bash
composer require apiverve/thesaurus
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Thesaurus\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute(['word' => 'big']);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Thesaurus\Client;
use APIVerve\Thesaurus\Exceptions\APIException;
use APIVerve\Thesaurus\Exceptions\ValidationException;

try {
    $response = $client->execute(['word' => 'big']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "word": "big",
    "similarCount": 50,
    "similarWords": [
      "large",
      "ample",
      "sizable",
      "sizeable",
      "astronomic",
      "astronomical",
      "galactic",
      "bigger",
      "larger",
      "biggest",
      "greatest",
      "largest",
      "biggish",
      "largish",
      "blown-up",
      "enlarged",
      "bouffant",
      "puffy",
      "bulky",
      "capacious",
      "colossal",
      "prodigious",
      "stupendous",
      "cosmic",
      "deep",
      "double",
      "elephantine",
      "gargantuan",
      "giant",
      "jumbo",
      "enormous",
      "tremendous",
      "epic",
      "heroic",
      "larger-than-life",
      "extensive",
      "extended",
      "gigantic",
      "mammoth",
      "great",
      "hulking",
      "hulky",
      "huge",
      "immense",
      "vast",
      "Brobdingnagian",
      "humongous",
      "banging",
      "thumping",
      "whopping"
    ]
  }
}
```

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/thesaurus?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/thesaurus?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/thesaurus?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
