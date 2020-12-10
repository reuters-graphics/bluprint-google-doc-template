import '../scss/main.scss';

// IF we're in an iframe...
const isEmbedded = window.location !== window.parent.location;
// You can write code specific to embeds like this...
if (isEmbedded) {
  window.childFrame.sendHeight();
}
/*
let formatter = require('d3-format');
let d3 = Object.assign(
  formatter,
  require('d3-fetch'),
  require('d3-time-format')
);
window.jQuery = window.$ = require('jquery');

import ReutersCharter from 'ReutersCharter';
*/


/*
import(`Locales/${locale}/myDoc.json`).then((doc) => {


});

const data = require(`../../locales/en/text.json`);

*/