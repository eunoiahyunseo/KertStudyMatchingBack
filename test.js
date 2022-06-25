const sanitizeHtml = require('sanitize-html');

const sanitizeOption = {
  allowedTags: [
    'h1',
    'h2',
    'b',
    'i',
    'u',
    's',
    'p',
    'ul',
    'ol',
    'li',
    'blockquote',
    'a',
    'img',
  ],
  allowedAttributes: {
    a: ['href', 'name', 'target'],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height', 'loading'],
    li: ['class'],
  },
  allowedSchemes: ['data', 'http', 'https'],
};

const html_ =
  '<p>safd</p><p><br></p><p><img src=\'https://boiling-castle-28671.herokuapp.com/blob-1656139757963.png\' width="380" style="cursor: nwse-resize;"></p>';
console.log(html_);
console.log(sanitizeHtml(html_, sanitizeOption));
