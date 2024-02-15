//your code here
function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}
let sortedArray = array.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

let ul = document.getElementById('band');
for(let i = 0; i < sortedArray.length; i++) {
    let li = document.createElement('li');
    li.textContent = sortedArray[i];
    ul.appendChild(li);
}