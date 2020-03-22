// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('playPause').addEventListener('click', changeColorElem);
});


function changeColorElem() {
  document.getElementById('playPause').innerText = document.getElementById('playPause').innerText === '\u23F8' ? '\u25B6' : '\u23F8';
}
