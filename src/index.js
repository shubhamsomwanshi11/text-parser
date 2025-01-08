// Extract URLs from text
function extractURLs(text) {
    const urlPattern = /https?:\/\/[^\s]+/g;  // Regex pattern to match URLs starting with http or https
    const urls = text.match(urlPattern);  // Find all matches in the text
    return urls ? urls : [];  // Return an array of URLs or an empty array if no matches
}

// Extract domain names from URLs in the text
function extractDomains(text) {
    const urlPattern = /https?:\/\/([a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)/g;  // Regex pattern to capture domain names from URLs
    const domains = [];
    let match;

    // Loop through all matches and extract the domain part
    while ((match = urlPattern.exec(text)) !== null) {
        domains.push(match[1]);  // Push each extracted domain to the domains array
    }

    return domains;  // Return the array of domains
}

// Extract email addresses from the text
function extractEmails(text) {
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;  // Regex pattern to match email addresses
    const emails = text.match(emailPattern);  // Find all email matches
    return emails ? emails : [];  // Return an array of emails or an empty array if no matches
}

// Extract phone numbers from the text
function extractPhoneNumbers(text) {
    const phonePattern = /(\+?[0-9]{1,4}[-.\s]?)?(\(?\d{1,4}\)?[-.\s]?)?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}/g;  // Regex pattern to match phone numbers
    const phoneNumbers = text.match(phonePattern);  // Find all phone number matches
    return phoneNumbers ? phoneNumbers : [];  // Return an array of phone numbers or an empty array if no matches
}

// Convert text to uppercase
function convertToUpperCase(text) {
    return text.toUpperCase();  // Convert and return the text in uppercase
}

// Convert text to lowercase
function convertToLowerCase(text) {
    return text.toLowerCase();  // Convert and return the text in lowercase
}

// Capitalize the first letter of each word in the text
function capitalizeText(text) {
    return text
        .split(' ')  // Split the text into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())  // Capitalize each word
        .join(' ');  // Join the words back into a single string
}

// Escape special characters for regular expression usage
function escapeRegExp(string) {
    return string.replace(/[.*+?^=!:${}()|\[\]\/\\]/g, '\\$&');  // Escape characters that may interfere with regex
}

// Find and replace text in the given string
function findAndReplaceText(text, findText, replaceText) {
    const escapedFindText = escapeRegExp(findText);  // Escape special characters in the find text
    const regex = new RegExp(escapedFindText, 'g');  // Create a global regex for finding the text
    return text.replace(regex, replaceText);  // Replace the found text with the replacement
}

// Append text to the original string at the specified position
function appendText(originalText, textToAdd, position) {
    if (position === 'start') {
        return textToAdd + originalText;  // Add text at the start
    } else if (position === 'end') {
        return originalText + textToAdd;  // Add text at the end
    } else {
        throw new Error("Position must be either 'start' or 'end'.");  // Throw an error if the position is invalid
    }
}

// Remove a specified number of characters from the text at a given position
function removeText(originalText, position, count) {
    if (count < 0) {
        throw new Error("Count must be a non-negative number.");  // Throw an error if count is negative
    }

    if (position === 'start') {
        return originalText.slice(count);  // Remove 'count' characters from the start
    } else if (position === 'end') {
        return originalText.slice(0, -count);  // Remove 'count' characters from the end
    } else {
        throw new Error("Position must be either 'start' or 'end'.");  // Throw an error if the position is invalid
    }
}

//  Count Word Occurrences:
function countWordOccurrences(text, word) {
    const wordPattern = new RegExp(`\\b${escapeRegExp(word)}\\b`, 'g');  // Create a case-sensitive word match pattern
    const matches = text.match(wordPattern);
    return matches ? matches.length : 0;  // Return the number of occurrences, or 0 if no match
}

// Remove Extra Whitespaces
function removeExtraWhitespaces(text) {
    return text.replace(/\s+/g, ' ').trim();  // Replace multiple spaces with a single space and trim leading/trailing spaces
}

// Reverse Text
function reverseText(text) {
    return text.split('').reverse().join('');  // Split the text into characters, reverse them, and join them back
}

// Word Wrap
function wordWrap(text, maxLength) {
    const regex = new RegExp(`.{1,${maxLength}}`, 'g');  // Create a regex to match chunks of text of the specified length
    return text.match(regex).join('\n');  // Join the chunks with newlines to create wrapped text
}

// Check if Text Contains a Word
function containsWord(text, word) {
    const wordPattern = new RegExp(`\\b${escapeRegExp(word)}\\b`, 'i');  // Create a case-insensitive word match pattern
    return wordPattern.test(text);  // Return true if the word is found, otherwise false
}

module.exports = {
    extractURLs,
    extractDomains,
    extractEmails,
    extractPhoneNumbers,
    convertToUpperCase,
    convertToLowerCase,
    capitalizeText,
    escapeRegExp,
    findAndReplaceText,
    appendText,
    removeText,
    countWordOccurrences,
    removeExtraWhitespaces,
    reverseText,
    wordWrap,
    containsWord
};