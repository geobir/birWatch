// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

document.addEventListener('DOMContentLoaded', function() {
  // let connection;
  console.log('START');
  document.getElementById('playPause').addEventListener('click', changeColorElem);
  document.getElementById('open-or-join-room').onclick = function() {
    // disableInputButtons();
    console.log('CLICK JOIN');
    
    chrome.storage.sync.get('connection', function(data) {
      console.log('connection?', data.connection);
      // connection = data.connection;
      // data.connection.openOrJoin(document.getElementById('room-id').value, function(isRoomExist, roomid, error) {
      //     if(error) {
      //       // disableInputButtons(true);
      //       alert(error);
      //     }
      //     else if (connection.isInitiator === true) {
      //         // if room doesn't exist, it means that current user will create the room
      //         showRoomURL(roomid);
      //     }
      // });
    });
  };
});


function changeColorElem() {
  document.getElementById('playPause').innerText = document.getElementById('playPause').innerText === '\u23F8' ? '\u25B6' : '\u23F8';
  // document.getElementById('room').innerText = process.env.PORT;
}
