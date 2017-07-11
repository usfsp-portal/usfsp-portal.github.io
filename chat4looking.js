if(document.getElementById('chat')) {
//28 Sept adding this line for the sole purpose of online.usfsp.edu test from laptop for compiling on laptop test 13:33pm
  document.getElementById("talk").value = "";
  document.getElementById("chatRoom").value = "";

  var displayName =       jQuery('#new-chat-perm').data('display-name'); // this is the user name
  var userID =            jQuery('#new-chat-perm').data('user-id'); // this is the user ID
  var arrival =           jQuery('#new-chat-perm').data('arrival'); // this is the time the user 'arrived' -- they see everything from this point onward

  var lockListenAJAX =    true; // don't allow an AJAX call until the previous one has finished
  var listenFrequency =   2000; // How often the heartbeat script should run, in milliseconds
  var talkQueue =         ""; // before comments are posted, they go into a queue
  var callCount =         -1; // we use call count to only refresh the attendee once every x number of calls (this is now set on the server)
  var lastReceived =      0;
  var status =            0; // this is used to track who's typing
  var typeTimer =         0;
  var chatRoomStatus =    false;
  //var oldTime =           null;
  var oldName =           null;

  jQuery(document).ready(function () {

    setInterval('listen()', listenFrequency);

    var activeRoom = getUrlVars()['q'];
    if (activeRoom > 0) {

      var room = jQuery("#chatsList").find("[data-room-id='" + activeRoom + "']");
      jQuery('#chatsList a').removeClass('active-chat');

      jQuery(room).addClass('active-chat');
      loadChatRoom(jQuery(room).data('room-id'), jQuery(room).html());
      jQuery('#submit-message').html('Submit');
      jQuery('#submit-message').addClass('continue-chat');
      jQuery('#submit-message').removeClass('new-chat');      
    }

    jQuery(document).on('click', '.new-chat', function () {
      var userID = jQuery('.new-chat').data('user-id');
      var headline = jQuery('#talk').val();
      createNewChatRoom(userID, headline, 0, 0);
    });


    jQuery(document).on('click', '.continue-chat', function () {
      talkQueue += document.getElementById("talk").value + " ";
      document.getElementById("talk").value = "";
      document.getElementById("talk").focus();
    });
    jQuery('#chatsList').on('click', '.oldChat', function() {
      jQuery('#chatsList a').removeClass('active-chat');
      jQuery(this).addClass('active-chat');
      loadChatRoom(jQuery(this).data('room-id'), jQuery(this).html());
      jQuery('#submit-message').html('Submit');
      jQuery('#submit-message').addClass('continue-chat');
      jQuery('#submit-message').removeClass('new-chat');
    });

    jQuery(document).on('click', '#new-chat-perm', function () {

      lockListenAJAX = true;

      jQuery('#submit-message').html('Start New Chat');
      jQuery('#submit-message').removeClass('continue-chat');
      jQuery('#submit-message').addClass('new-chat');
      jQuery('#chatsList a').removeClass('active-chat');

      document.getElementById("chatRoom").innerHTML = '';

      jQuery('#chatRoom').css({'display':'block'});
      jQuery('.input-group').css({'display':'table'});

      jQuery('#talk').attr("placeholder", 'Type a question to start a new chat. It must be at least five letters long.');
      document.getElementById("talk").focus();

      jQuery('#room-title').html('Chat');
      jQuery('#chat-instructions').html('Click or tap the <strong>Ask a New Question</strong> button to get started. A USFSP support staffer will be in touch soon, sometimes right away.');

      jQuery('#attendeeList li').remove();

      jQuery(this).prop('disabled', true);

    });

  });
}


if(document.getElementById('chatManagementEditor')) {
  loadChatRoom(jQuery('#changeRoomQuestion').data('room-id'), jQuery('#changeRoomQuestion').data('room-headline'));
  jQuery('#submit-message').html('Submit');
  jQuery('#submit-message').addClass('continue-chat');
  jQuery('#submit-message').removeClass('new-chat');
  jQuery('#talk').attr("placeholder", '');
}


function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function formatNewMessages(text) {
  return text;
  //var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  //return text.replace(exp,"<a target = '_blank' href='$1'>$1</a>"); 
}
function roomStatusUpdate (data) {
  if (data < 5) {
    jQuery('.modify'+data).toggleClass("highlight");
  } else {
    jQuery('.modify5').remove();
  }
}
function chatServerCallBack (response) {
  // Regulate the loading message...
  if (chatRoomStatus) {
    chatRoomStatus = false;
    loadingMessage(chatRoomStatus);
  }

  /*
  if (document.getElementById("chatRoom").innerHTML =='') {
    document.getElementById("chatRoom").innerHTML = '<span id="no-messages">Welcome to the chat. Messages will appear here.</span>';
  }
  */

  // Loop through posted messages...
  for (var j = 0; j < response[0].length; j++) {
    if (jQuery('#chatRoom').has('#no-messages')) {
      jQuery('#no-messages').remove();
    }
    id_message = response[0][j][0];
    id_user = response[0][j][1];
    message = response[0][j][2];
    stamp = response[0][j][3];
    displayName = response[0][j][4];
    if (id_message > 0 && id_message < 1000000) {
      lastReceived = id_message;
      if (j == response[0].length-1) {
        message = formatNewMessages(message);
        // Play new message sound, if the option is enabled...
        //if (!document.getElementById("disableSounds").checked){
        //  soundManager.play('newMessage');
        //}
      }

      // Date Formatting...
      var now = new Date();
      var then = new Date(stamp);
      var hours = Math.abs(now - then) / 36e5;
      if (hours <= 0.01) {
        displayTime = 'Just now';
      } else if (hours < 1) {
        displayTime = Math.floor(hours*60);
        if (displayTime == 1) {
          displayTime += ' minute ago';
        } else {
          displayTime += ' minutes ago';
        }
      } else if (hours >= 1 && hours <= 23) {
        displayTime = Math.floor(hours);
        if (displayTime == 1) {
          displayTime += ' hour ago';
        } else {
          displayTime += ' hours ago';
        }        
      } else if (hours >= 24 && hours <= 47) {
        displayTime = 'Yesterday';
      } else {
        displayTime = moment(stamp).format('MMMM D, YYYY [at] h:mm a');
        var displayTime = displayTime.replace("January", "Jan.");
        var displayTime = displayTime.replace("February", "Feb.");
        var displayTime = displayTime.replace("September", "Sept.");
        var displayTime = displayTime.replace("October", "Oct.");
        var displayTime = displayTime.replace("November", "Nov.");
        var displayTime = displayTime.replace("December", "Dec.");
        var displayTime = displayTime.replace("am", "a.m.");
        var displayTime = displayTime.replace("pm", "p.m.");
      }
      document.getElementById("chatRoom").innerHTML += "<div class='stamp'>"+displayTime+"</div>";

      var userComponent = '';
      //if (oldName != id_user) {
        //oldName = id_user;
        userComponent = "<div class = 'user'>" + displayName + ":</div>";
      //}
      document.getElementById("chatRoom").innerHTML += "<div class = 'record'>" + userComponent + "<div class = 'message'>" + message + "</div></div>";
      document.getElementById("chatRoom").scrollTop = document.getElementById("chatRoom").scrollHeight;             
    }
  }
  // Loop through attendee list...
  if (response[1].length > 0) {
    document.getElementById("attendeeList").innerHTML = '';
    for (var j = 0; j < response[1].length; j++) {
      username = response[1][j][2];
      var typing = response[1][j][1] == "0" ? "" : " <span class = 'note'>(Typing)</span>";
      document.getElementById("attendeeList").innerHTML += '<li>' + username + typing + '</li>';
    }
  }
  lockListenAJAX = false;
}
function talk () {
  talkQueue += document.getElementById("talk").value + " ";
  document.getElementById("talk").value = "";
}
function submitText (e) {
  typeTimer = 2;
  var keynum;  if(window.event) {
    keynum = e.keyCode;
  } else if(e.which) {
    keynum = e.which;
  }
  if (keynum == 13 && jQuery('#talk').val().length > 0) {
    if(jQuery('.new-chat').length) {
      var userID = jQuery('.new-chat').data('user-id');
      var headline = jQuery('#talk').val();
      jQuery('#talk').val('');
      createNewChatRoom(userID, headline, 0, 0);
    } else {
      typeTimer = 0;
      talk();
      document.getElementById("talk").value = "";
    }
  }
}
function createNewChatRoom (userID, headline, privateStatus, origin) {
  //var privateStatus = jQuery('#privateStatus').is(':checked') ? 1 : 0;
  jQuery.ajax({
    type: "POST",
    url: jQuery('body').data('path') + 'process/chat-manager.php',
    data: "mode=create&userID="+userID+"&headline="+headline+"&privateStatus="+privateStatus+'&origin='+origin,
    success: chatManagerCallBack,
    dataType: 'json'
  });
}
function chatManagerCallBack (response) {
    var mode = response[0];
    var roomID = response[1];
    var headline = response[2];
    var origin = response[3];
 
    // Chat was created on the chat page...
    if (origin == 0) {
      loadChatRoom(roomID, headline);
      jQuery('#chatsList').prepend('<li class="data-room-id="'+roomID+'"><a href="#" class="oldChat chatbutton active-chat" data-room-id="'+roomID+'">'+headline+'</a></li>');
      jQuery('#submit-message').html('Submit');
      jQuery('#submit-message').addClass('continue-chat');
      jQuery('#submit-message').removeClass('new-chat');
      jQuery('#talk').attr("placeholder", '');
    // Chat was created on the home page...
    } else if (origin == 1) {
      window.location.href='../chat/?q='+roomID;
    }
}
function loadChatRoom (chatRoomID, chatRoomHeadline) {
    chatRoomStatus = true;
    loadingMessage(chatRoomStatus);
    jQuery('#chat-headline').html(chatRoomHeadline);
    jQuery('#chatRoom').html('');
    jQuery('#chatRoomWrapper').data('room-id', chatRoomID);
    jQuery('#chatRoom').css({'display':'block'});
    jQuery('.input-group').css({'display':'table'});
    document.getElementById("talk").value = '';
    document.getElementById("talk").focus();
    jQuery('#new-chat-perm').prop('disabled', false);
    jQuery('#attendees').css({'display':'block'});
    lastReceived = 0;
    lockListenAJAX = false;
}
function loadingMessage(status) {
  switch (status) {
    case true:
      jQuery("#loader").css({'display':'block'});
      break;
    case false:
      jQuery("#loader").css({'display':'none'});
  }
}
function listen () {
  if (typeTimer > 0) {
    typeTimer--;
    status = 1;
  } else {
    status = 0;
  }
  if (!lockListenAJAX) {
    callCount ++;
    lockListenAJAX = true;
    jQuery.ajax({
      type: "POST",
      url: jQuery('body').data('path') + 'process/chat-server.php',
      data: "room=" + $('#chatRoomWrapper').data('room-id') + "&userID=" + userID + "&arrival=" + arrival + "&message=" + encodeURIComponent(talkQueue) + "&callCount=" + callCount + "&lastReceived=" + lastReceived + "&status=" + status,
      success: chatServerCallBack,
      dataType: 'json'
    });
    talkQueue = "";
  }
}