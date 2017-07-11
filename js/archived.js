/*
June 22, 2016
We used this code to prevent the browser's scrollbar from appearing when the user resized upward, but it turned out to not be necessary after we loaded only the 'touch' portion of the jQuery Mobile library...
*/
var countDown = 0;
setInterval('resizer()', 100);
function resizer() {
  if (countDown > 1) {
    countDown--;
  } else if (countDown == 1) {
    setOverlayHeights();
    clearInterval('resizer');
  }
}
