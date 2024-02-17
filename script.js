//your code here
function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

let ul = document.getElementById('band');
let array = Array.from(ul.getElementsByTagName('li')).map(li => li.textContent);

let sortedArray = array.sort((a, b) => strip(a).localeCompare(strip(b)));

ul.innerHTML = ""; // clear the existing list

for(let i = 0; i < sortedArray.length; i++) {
    let li = document.createElement('li');
    li.textContent = sortedArray[i];
    ul.appendChild(li);
}