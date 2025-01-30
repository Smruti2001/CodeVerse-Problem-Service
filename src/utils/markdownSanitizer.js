const marked = require('marked');
const htmlSanitizer = require('sanitize-html');
const TurndownService = require('turndown');


function sanitizeMarkdownContent(markdownContent) {
    const turndownService = new TurndownService();

    // Convert the incoming markdown into HTML
    const convertedHtml = marked.parse(markdownContent);

    // Sanitize the converted HTML
    const sanitizedHtml = htmlSanitizer(convertedHtml, {
        allowedTags: htmlSanitizer.defaults.allowedTags.filter(tag => tag !== 'a')
    });

    // Convert the sanitized HTML back to Markdown
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

    return sanitizedMarkdown;
}


module.exports = sanitizeMarkdownContent;