/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// quote: The quote
// source: The person or character who said it
// citation: A reference to the source of the quote, like the book, movie or song where the quote originates
// year: A string or number representing the year the quote originated.
// tags: An array of tags

const quotes = [
  {
    quote: 'Random Quote #1',
    source: 'Dude A.',
    citation: 'A Book, Pg. 103',
    year: 1991,
    tags: ['motivation', 'life', 'personal development']
  },
  {
    quote: 'Random Quote #2',
    source: 'Dude B.',
    citation: 'Unknown',
    year: 1992,
    tags: ['music', 'arts', 'inspiration']
  },
  {
    quote: 'Random Quote #3',
    source: 'Gourley S.',
    citation: 'HTTP: The definitive Giuide, Pg. 304',
    year: 1993,
    tags: ['http', 'internet', 'data transfer']
  },
  {
    quote: 'Random Quote #4',
    source: 'Ryan D.',
    citation: 'A Book About Life, Pg. 3',
    year: 1994,
    tags: ['life', 'motivation', 'inspiration']
  },
  {
    quote: 'Random Quote #5',
    source: 'Doolaly O.',
    citation: 'www.doolaly.com',
    year: 1995,
    tags: ['weird', 'til', 'funny']
  }
];

/**
 * Gets a random number
 *
 * @param {number} num - A number representing the max value of the random number
 * @return {number} A random number from 0 to num
 */

const getRandomNumber = num => Math.floor(Math.random() * num);

/**
 * Select a random quote object from an array
 *
 * @param {Array<Object>} arr - An array containing quote objects
 * @return {Object} A quote object from arr
 */

const getRandomQuote = arr => {
  let randomNumber = getRandomNumber(arr.length);
  return arr[randomNumber];
}

/**
 * print quote function
 *
 */

const printQuote = () => {
  const randomQuote = getRandomQuote(quotes);
  let HTMLOut = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
  `;

  // Check if randomQuote has 'citation', 'year', and 'tags' peoperties
  if (Object.keys(randomQuote).includes('citation')) {
    HTMLOut += `<span class="citation">${randomQuote.citation}</span>`;
  }

  if (Object.keys(randomQuote).includes('year')) {
    HTMLOut += `<span class="year">${randomQuote.year}</span>`;
  }

  if (Object.keys(randomQuote).includes('tags')) {
    // HTMLOut += `<span class="year">${randomQuote.year}</span>`;
  }

  HTMLOut += `</p>`;

  document.getElementById('quote-box').innerHTML = HTMLOut; 
}


/**
 * Generate random RGB value
 *
 * @return {string} RGB colour profile
 */

const getRandomRGB = () => `rgb(${getRandomNumber(255)}, ${getRandomNumber(255)}, ${getRandomNumber(255)})`;

// Refresh quote and body background colour every 5 seconds
setInterval(
  function () { 
    document.body.style.backgroundColor = getRandomRGB();
    printQuote();
  }, 5000
);

  
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

