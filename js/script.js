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
    date: 1995,
    tags: ['weird', 'til', 'funny']
  }
];

/**
 * Select a random quote object from argument array
 *
 * @param {Array<Object>} arr - An array containing quote objects
 * @return {Object} A quote object from arr
 */

const getRandomQuote = arr => {
  let randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
}


/***
 * `printQuote` function
***/

function printQuote() {
  const randomQuote = getRandomQuote(quotes);
  let HTMLOut = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
  `;

  // Check if randomQuote has 'citation' property
  if (Object.keys(randomQuote).includes('citation')) {
    HTMLOut += `<span class="citation">${randomQuote.citation}</span>`;
  }
  // Check if 'randomQuote' has 'year' property
  if (Object.keys(randomQuote).includes('year')) {
    HTMLOut += `<span class="year">${randomQuote.year}</span>`;
  }

  HTMLOut += `</p>`;

  document.getElementById('quote-box').innerHTML = HTMLOut; 
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);