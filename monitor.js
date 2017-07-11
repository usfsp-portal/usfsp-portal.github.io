var statusElem  = document.getElementById('status'),
    state               = document.getElementById('state');

function online(event) {
  statusElem.className = navigator.onLine ? 'online' : 'offline';
  statusElem.innerHTML = navigator.onLine ? 'online' : 'offline';
  state.innerHTML += '<li>New event: ' + event.type + '</li>';
}

window.addEventListener('online', online);
window.addEventListener('offline', online);
// just to call the online function so that it refreshes display when the page is initally loaded
online({ type: 'ready' });