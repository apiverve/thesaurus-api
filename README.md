# [Thesaurus API](https://thesaurus.apiverve.com?utm_source&#x3D;github&amp;utm_medium&#x3D;readme)

Thesaurus is a simple tool for getting word synonyms. It returns a list of synonyms.

The Thesaurus API provides a simple, reliable way to integrate thesaurus functionality into your applications. Built for developers who need production-ready thesaurus capabilities without the complexity of building from scratch.

**[View API Details →](https://thesaurus.apiverve.com?utm_source&#x3D;github&amp;utm_medium&#x3D;readme)**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![API Status](https://img.shields.io/badge/Status-Active-green.svg)](https://thesaurus.apiverve.com?utm_source&#x3D;github&amp;utm_medium&#x3D;readme)
[![Method](https://img.shields.io/badge/Method-GET-blue.svg)](#)
[![Platform](https://img.shields.io/badge/Platform-Multi--Platform-orange.svg)](#installation)

**Available on:**
[![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/package/@apiverve/thesaurus)
[![NuGet](https://img.shields.io/badge/NuGet-004880?style=flat&logo=nuget&logoColor=white)](https://www.nuget.org/packages/APIVerve.API.Thesaurus)
[![PyPI](https://img.shields.io/badge/PyPI-3776AB?style=flat&logo=python&logoColor=white)](https://pypi.org/project/apiverve-thesaurus/)
[![RubyGems](https://img.shields.io/badge/RubyGems-E9573F?style=flat&logo=rubygems&logoColor=white)](https://rubygems.org/gems/apiverve_thesaurus)
[![Packagist](https://img.shields.io/badge/Packagist-F28D1A?style=flat&logo=packagist&logoColor=white)](https://packagist.org/packages/apiverve/thesaurus)
[![Go](https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white)](#-go)
[![Dart](https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white)](https://pub.dev/packages/apiverve_thesaurus)
[![JitPack](https://img.shields.io/badge/JitPack-2E7D32?style=flat&logo=android&logoColor=white)](#-android-jitpack)

---

## Quick Start

### Using JavaScript

```javascript
async function callThesaurusAPI() {
    try {
        const params = new URLSearchParams({
            word: 'big'
        });

        const response = await fetch(`https://api.apiverve.com/v1/thesaurus?${params}`, {
            method: 'GET',
            headers: {
                'x-api-key': 'YOUR_API_KEY_HERE'
            }
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

callThesaurusAPI();
```

### Using cURL

```bash
curl -X GET "https://api.apiverve.com/v1/thesaurus?word=big" \
  -H "x-api-key: YOUR_API_KEY_HERE"
```

**Get your API key:** [https://apiverve.com](https://apiverve.com)

**📁 For more examples, see the [examples folder](./examples/)**

---

## Installation

Choose your preferred programming language:

### 📦 NPM (JavaScript/Node.js)

```bash
npm install @apiverve/thesaurus
```

[**View NPM Package →**](https://www.npmjs.com/package/@apiverve/thesaurus) | [**Package Code →**](./npm/)

---

### 🔷 NuGet (.NET/C#)

```bash
dotnet add package APIVerve.API.Thesaurus
```

[**View NuGet Package →**](https://www.nuget.org/packages/APIVerve.API.Thesaurus) | [**Package Code →**](./nuget/)

---

### 🐍 Python (PyPI)

```bash
pip install apiverve-thesaurus
```

[**View PyPI Package →**](https://pypi.org/project/apiverve-thesaurus/) | [**Package Code →**](./python/)

---

### 💎 Ruby (RubyGems)

```bash
gem install apiverve_thesaurus
```

[**View RubyGems Package →**](https://rubygems.org/gems/apiverve_thesaurus) | [**Package Code →**](./ruby/)

---

### 🐘 PHP (Packagist)

```bash
composer require apiverve/thesaurus
```

[**View Packagist Package →**](https://packagist.org/packages/apiverve/thesaurus) | [**Package Code →**](./php/)

---

### 🎯 Dart (pub.dev)

```bash
dart pub add apiverve_thesaurus
```

[**View pub.dev Package →**](https://pub.dev/packages/apiverve_thesaurus) | [**Package Code →**](./dart/)

---

### 🤖 Android (JitPack)

```gradle
implementation 'com.github.apiverve:thesaurus-api:1.0.0'
```

[**Package Code →**](./android/)

---

### 🐹 Go

```bash
go get github.com/apiverve/thesaurus-api/go
```

[**Package Code →**](./go/)

---

## Why Use This API?

| Feature | Benefit |
|---------|---------|
| **Multi-language SDKs** | Native packages for JavaScript, Python, C#, Go, and Android |
| **Simple Integration** | Single API key authentication, consistent response format |
| **Production Ready** | 99.9% uptime SLA, served from 24 global regions |
| **Comprehensive Docs** | Full examples, OpenAPI spec, and dedicated support |

---

## Documentation

- 🏠 **API Home:** [Thesaurus API](https://thesaurus.apiverve.com?utm_source&#x3D;github&amp;utm_medium&#x3D;readme)
- 📚 **API Reference:** [docs.apiverve.com/ref/thesaurus](https://docs.apiverve.com/ref/thesaurus)
- 📖 **OpenAPI Spec:** [openapi.yaml](./openapi.yaml)
- 💡 **Examples:** [examples/](./examples/)

---

## What Can You Build?

The Thesaurus API is commonly used for:

- **Web Applications** - Add thesaurus features to your frontend or backend
- **Mobile Apps** - Native SDKs for Android development
- **Automation** - Integrate with n8n, Zapier, or custom workflows
- **SaaS Products** - Enhance your product with thesaurus capabilities
- **Data Pipelines** - Process and analyze data at scale

---

## API Reference

### Authentication
All requests require an API key in the header:
```
x-api-key: YOUR_API_KEY_HERE
```

Get your API key: [https://apiverve.com](https://apiverve.com)

### Response Format
All responses are JSON with this structure:
```json
{
  "status": "ok",
  "data": { ... }
}
```

---

## Support & Community

- 🏠 **API Home**: [Thesaurus API](https://thesaurus.apiverve.com?utm_source&#x3D;github&amp;utm_medium&#x3D;readme)
- 💬 **Support**: [https://apiverve.com/contact](https://apiverve.com/contact)
- 🐛 **Issues**: [GitHub Issues](../../issues)
- 📖 **Documentation**: [https://docs.apiverve.com](https://docs.apiverve.com)
- 🌐 **Website**: [https://apiverve.com](https://apiverve.com)

---

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## Security

For security concerns, please review our [Security Policy](SECURITY.md).

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

Built with ❤️ by [APIVerve](https://apiverve.com)

Copyright © 2026 APIVerve. All rights reserved.
