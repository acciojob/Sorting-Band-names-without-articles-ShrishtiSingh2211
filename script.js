//your code here
function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}
let sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
let bandsList = document.querySelector('#bands');
let bandItems = sortedBands.map(band => `<li>${band}</li>`);
bandsList.innerHTML = bandItems.join('');