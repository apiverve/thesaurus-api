# Thesaurus API - Ruby Gem

Thesaurus finds synonyms and alternative terms for any word. Supply a single target word to receive an array of matching synonyms.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_thesaurus'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_thesaurus
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_thesaurus'

# Initialize the client
client = APIVerve::Thesaurus::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({ word: "big" })

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ word: "big" })
  puts response["data"]
rescue APIVerve::Thesaurus::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Thesaurus::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Thesaurus::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/thesaurus?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/thesaurus?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/thesaurus?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
