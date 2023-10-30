// Create the root element
const html = document.createElement('html');
html.lang = 'en';

// Create the head element
const head = document.createElement('head');

// Create the meta elements
const metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');
const metaViewport = document.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');

// Create the title element
const title = document.createElement('title');
title.textContent = 'Trenton Alford Portfolio';

// Create the link element for the stylesheet
const linkStylesheet = document.createElement('link');
linkStylesheet.setAttribute('rel', 'stylesheet');
linkStylesheet.setAttribute('href', './style.css');

// Append the meta and title elements to the head
head.appendChild(metaCharset);
head.appendChild(metaViewport);
head.appendChild(title);
head.appendChild(linkStylesheet);

// Create the body element
const body = document.createElement('body');

// Create and set attributes for the h1 and h2 elements
const h1 = document.createElement('h1');
h1.id = 'Name';
h1.textContent = 'Trenton Alford';
const h2 = document.createElement('h2');
h2.id = 'Title';
h2.textContent = 'Performance Contractors Field Solutions Architect';

// Create and append an hr element
const hr1 = document.createElement('hr');

// Create an h3 element with a link to the Movie Ranking Project
const h3Movie = document.createElement('h3');
const linkMovie = document.createElement('a');
linkMovie.setAttribute('href', './project/movie-ranking.html');
linkMovie.textContent = 'Movie Ranking Project';
h3Movie.appendChild(linkMovie);

// Create an image element for the Movie Ranking Project
const imgMovie = document.createElement('img');
imgMovie.setAttribute('src', './assets/images/movie-ranking.png');
imgMovie.setAttribute('height', '200');
imgMovie.setAttribute('width', '300');
imgMovie.setAttribute('alt', 'Movie Ranking Project Preview');

// Create and append an hr element
const hr2 = document.createElement('hr');

// Create an h3 element with a link to the Birthday Invite Project
const h3Birthday = document.createElement('h3');
const linkBirthday = document.createElement('a');
linkBirthday.setAttribute('href', './project/birthday-invite.html');
linkBirthday.textContent = 'Birthday Invite Project';
h3Birthday.appendChild(linkBirthday);

// Create an image element for the Birthday Invite Project
const imgBirthday = document.createElement('img');
imgBirthday.setAttribute('src', './assets/images/birthday-invite.png');
imgBirthday.setAttribute('height', '200');
imgBirthday.setAttribute('width', '300');
imgBirthday.setAttribute('alt', 'Birthday Invite');

// Create and append an hr element
const hr3 = document.createElement('hr');

// Create an anchor element for 'About Me' and 'Contact Me'
const aboutMeLink = document.createElement('a');
aboutMeLink.setAttribute('href', './project/about.html');
aboutMeLink.textContent = 'About Me';

const contactMeLink = document.createElement('a');
contactMeLink.setAttribute('href', './project/contact.html');
contactMeLink.textContent = 'Contact Me';

// Create and append link elements for fonts
const linkPreconnect1 = document.createElement('link');
linkPreconnect1.setAttribute('rel', 'preconnect');
linkPreconnect1.setAttribute('href', 'https://fonts.googleapis.com');

const linkPreconnect2 = document.createElement('link');
linkPreconnect2.setAttribute('rel', 'preconnect');
linkPreconnect2.setAttribute('href', 'https://fonts.gstatic.com');
linkPreconnect2.setAttribute('crossorigin', '');

const linkFonts = document.createElement('link');
linkFonts.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Work+Sans&display=swap');
linkFonts.setAttribute('rel', 'stylesheet');

// Append all elements to the body
body.appendChild(h1);
body.appendChild(h2);
body.appendChild(hr1);
body.appendChild(h3Movie);
body.appendChild(imgMovie);
body.appendChild(hr2);
body.appendChild(h3Birthday);
body.appendChild(imgBirthday);
body.appendChild(hr3);
body.appendChild(aboutMeLink);
body.appendChild(hr3.cloneNode(true)); // Clone hr for separation
body.appendChild(contactMeLink);
body.appendChild(linkPreconnect1);
body.appendChild(linkPreconnect2);
body.appendChild(linkFonts);

// Append head and body to the root html element
html.appendChild(head);
html.appendChild(body);

// Append the root html element to the document
document.documentElement.replaceWith(html);
