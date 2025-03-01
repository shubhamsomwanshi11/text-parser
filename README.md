
# Text Manipulation Package

This JavaScript package provides a collection of functions for manipulating text. It includes utilities for extracting URLs, domains, emails, phone numbers, and more. Additionally, it offers various text transformation and search capabilities, such as converting text case, capitalizing words, counting word occurrences, and performing find and replace operations.

## Features

- **Extract URLs**: Extracts all URLs from a given text.
- **Extract Domains**: Extracts domain names from the URLs in the text.
- **Extract Emails**: Extracts all email addresses from the given text.
- **Extract Phone Numbers**: Extracts phone numbers from the text.
- **Text Transformations**: Convert text to uppercase, lowercase, or capitalize each word.
- **Find and Replace**: Find and replace specific text in a string.
- **Whitespace Management**: Remove extra whitespaces or trim the text.
- **Text Search**: Check if a word exists in the text or count the occurrences of a word.
- **Text Wrapping**: Wrap text into a specified number of characters per line.
- **Text Reversal**: Reverse the order of characters in the text.
- **Append or Remove Text**: Append or remove text at the beginning or end of the string.

## Installation

You can install the package using npm:

```bash
npm install text-parser
```

## Functions

### `extractURLs(text)`

Extracts all URLs from the given text.

```javascript
const { extractURLs } = require('text-parser');
const urls = extractURLs("Visit https://example.com and http://test.com");
console.log(urls);  // Output: ['https://example.com', 'http://test.com']
```

### `extractDomains(text)`

Extracts domain names from URLs in the text.

```javascript
const { extractDomains } = require('text-parser');
const domains = extractDomains("Visit https://example.com and http://test.com");
console.log(domains);  // Output: ['example.com', 'test.com']
```

### `extractEmails(text)`

Extracts all email addresses from the text.

```javascript
const { extractEmails } = require('text-parser');
const emails = extractEmails("Contact us at support@example.com or info@test.com");
console.log(emails);  // Output: ['support@example.com', 'info@test.com']
```

### `extractPhoneNumbers(text)`

Extracts phone numbers from the text.

```javascript
const { extractPhoneNumbers } = require('text-parser');
const phones = extractPhoneNumbers("Call us at +1-234-567-890 or (123) 456-7890");
console.log(phones);  // Output: ['+1-234-567-890', '(123) 456-7890']
```

### `convertToUpperCase(text)`

Converts text to uppercase.

```javascript
const { convertToUpperCase } = require('text-parser');
const upperText = convertToUpperCase("hello world");
console.log(upperText);  // Output: 'HELLO WORLD'
```

### `convertToLowerCase(text)`

Converts text to lowercase.

```javascript
const { convertToLowerCase } = require('text-parser');
const lowerText = convertToLowerCase("HELLO WORLD");
console.log(lowerText);  // Output: 'hello world'
```

### `capitalizeText(text)`

Capitalizes the first letter of each word in the text.

```javascript
const { capitalizeText } = require('text-parser');
const capitalizedText = capitalizeText("hello world");
console.log(capitalizedText);  // Output: 'Hello World'
```

### `findAndReplaceText(text, findText, replaceText)`

Finds and replaces a specific text in the string.

```javascript
const { findAndReplaceText } = require('text-parser');
const replacedText = findAndReplaceText("Hello world", "world", "there");
console.log(replacedText);  // Output: 'Hello there'
```

### `appendText(originalText, textToAdd, position)`

Appends text to the original string at the specified position.

```javascript
const { appendText } = require('text-parser');
const newText = appendText("Hello", " world", "end");
console.log(newText);  // Output: 'Hello world'
```

### `removeText(originalText, position, count)`

Removes a specified number of characters from the text at a given position.

```javascript
const { removeText } = require('text-parser');
const newText = removeText("Hello world", "end", 5);
console.log(newText);  // Output: 'Hello'
```

### `countWordOccurrences(text, word)`

Counts the occurrences of a specific word in the text.

```javascript
const { countWordOccurrences } = require('text-parser');
const count = countWordOccurrences("The quick brown fox jumps over the lazy dog", "quick");
console.log(count);  // Output: 1
```

### `removeExtraWhitespaces(text)`

Removes extra whitespaces and trims the text.

```javascript
const { removeExtraWhitespaces } = require('text-parser');
const cleanedText = removeExtraWhitespaces("   Hello   world   ");
console.log(cleanedText);  // Output: 'Hello world'
```

### `reverseText(text)`

Reverses the text.

```javascript
const { reverseText } = require('text-parser');
const reversedText = reverseText("Hello");
console.log(reversedText);  // Output: 'olleH'
```

### `wordWrap(text, maxLength)`

Wraps the text into a specified number of characters per line.

```javascript
const { wordWrap } = require('text-parser');
const wrappedText = wordWrap("Lorem ipsum dolor sit amet", 10);
console.log(wrappedText);
/* Output:
Lorem ipsum
dolor sit
amet
*/
```

### `containsWord(text, word)`

Checks if the text contains a specific word.

```javascript
const { containsWord } = require('text-parser');
const isContained = containsWord("The quick brown fox", "quick");
console.log(isContained);  // Output: true
```

## License

This package is open-source and available under the MIT License.
