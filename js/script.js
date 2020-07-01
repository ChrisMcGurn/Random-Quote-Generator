/******************************************
Treehouse FSJS Techdegree:
Project 1 - A Random Quote Generator
******************************************/

const quotes = [
  {
    quote: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
    source: 'Ralph Waldo Emerson',
    tags: ['motivation', 'life', 'inspiration']
  },
  {
    quote: 'Toto, I\'ve got a feeling we\'re not in Kansas anymore.',
    source: 'Dorothy Gale',
    citation: 'The Wizard of Oz',
    year: 1939,
    tags: ['movies', 'arts']
  },
  {
    quote: 'The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts.',
    source: 'Bertrand Russell',
    tags: ['wisdom', 'fools']
  },
  {
    quote: 'The greater danger for most of us lies not in setting our aim too high and falling short, but in setting our aim too low, and achieving our mark.',
    source: 'Michelangelo di Lodovico Buonarroti Simoni',
    tags: ['life', 'motivation', 'inspiration']
  },
  {
    quote: 'Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.',
    source: 'Albert Einstein',
    tags: ['motivation', 'science']
  },
  {
    quote: 'All that is gold does not glitter, Not all those who wander are lost; The old that is strong does not wither, Deep roots are not reached by the frost. From the ashes a fire shall be woken, A light from the shadows shall spring; Renewed shall be blade that was broken, The crownless again shall be king.',
    source: 'J.R.R Tolkien',
    citation: 'The Followship of the Ring',
    tags: ['books', 'tolkien']
  }
];

/**
 * Get a random number
 *
 * @param {number} num - A number representing the max value of the random number
 * @returns {number} A random number from 0 to num
 */

const getRandomNumber = num => Math.floor(Math.random() * num);

/**
 * Select a random quote object from an array
 *
 * @param {Array<Object>} arr - An array containing quote objects
 * @returns {Object} A quote object from arr
 */

const getRandomQuote = arr => {
  let randomNumber = getRandomNumber(arr.length);
  return arr[randomNumber];
}

/**
 * Print out a random quote to the browser
 */

const printQuote = () => {
  const randomQuote = getRandomQuote(quotes);
  let HTMLOut = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
  `;

  // Check if randomQuote has 'citation' and 'year' properties
  if (Object.keys(randomQuote).includes('citation')) {
    HTMLOut += `<span class="citation">${randomQuote.citation}</span>`;
  }

  if (Object.keys(randomQuote).includes('year')) {
    HTMLOut += `<span class="year">${randomQuote.year}</span>`;
  }

  HTMLOut += `
    <span class="tags">${randomQuote.tags.join(', ')}</span></p>
  `;

  document.getElementById('quote-box').innerHTML = HTMLOut; 
}


/**
 * Generate random RGB value
 *
 * @return {string} RGB colour
 */

const getRandomRGB = () => `rgb(${getRandomNumber(255)}, ${getRandomNumber(255)}, ${getRandomNumber(255)})`;


/**
 * Change the background colour of the html body element
 */

const changeBgColour = () => {
  document.body.style.backgroundColor = getRandomRGB();
}

// Refresh quote and body background colour every 10 seconds
setInterval(
  function () { 
    changeBgColour();
    printQuote();
  }, 10000
);

  
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", function() {
  changeBgColour();
  printQuote();
}, false);