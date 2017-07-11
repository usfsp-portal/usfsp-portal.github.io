function runBotFromHome() {
  homeQuestionBox(jQuery('#homeNewQuestion').val());
  var homeInput = jQuery('#homeNewQuestion').val();
  var userID = jQuery('#homeNewChat').data('user-id');
  jQuery.ajax({
  type: "POST",
  url: jQuery('body').data('path') + 'process/chat-manager.php',
  data: 'mode=updateInputLog&homeInput='+homeInput+'&userID='+userID,
  success: chatManagerCallBack,
  dataType: 'json'
  });    
}
function bot (input) {
  jQuery.ajax({
    type: "POST",
    url: jQuery('body').data('path') + 'process/bot.php',
    data: 'input='+input,
    success: botCallBack,
    dataType: 'html'
  }); 
}
function botCallBack (response) {
  if (response) {
    jQuery('#bot-answer').html(response);
    jQuery('#response-with-result').css({'display':'block'});
    jQuery('#response-no-result').css({'display':'none'});
  } else {
    jQuery('#response-with-result').css({'display':'none'});
    jQuery('#response-no-result').css({'display':'block'});
  }
  jQuery('#homeNewChat').html('Ask Now');  
}
function homeQuestionBox (input) {
  jQuery('#homeNewChat').html('Searching...');
  bot(input);

  /*
  var result = bot(input);
  if (result) {
    jQuery('#bot-answer').html(result);
    jQuery('#response-with-result').css({'display':'block'});
    jQuery('#response-no-result').css({'display':'none'});

  } else {
    jQuery('#response-with-result').css({'display':'none'});
    jQuery('#response-no-result').css({'display':'block'});
  }
  jQuery('#homeNewChat').html('Ask Now');  
  */

}



jQuery(document).ready(function () {

  jQuery("#homeNewQuestion").on("keypress", function(e){
    var keycode = e.keyCode ? e.keyCode : e.which;
    if (keycode === 13) {
      homeQuestionBox(jQuery('#homeNewQuestion').val());
      var homeInput = jQuery('#homeNewQuestion').val();
      var userID = jQuery('#homeNewQuestion').data('user-id');
      jQuery.ajax({
      type: "POST",
      url: jQuery('body').data('path') + 'process/chat-manager.php',
      data: 'mode=updateInputLog&homeInput='+homeInput+'&userID='+userID,
      success: chatManagerCallBack,
      dataType: 'json'
      });
    }
  });

  jQuery("#homeNewChat").click(function () {
    runBotFromHome();
  });


  jQuery(document).on('click', '.start-a-chat', function(){
    jQuery(this).prop('disabled',true);
    console.log('User ID: ' + jQuery('#homeNewChat').data('user-id'));
    console.log('Question: ' + jQuery('#homeNewQuestion').val());
    createNewChatRoom(jQuery('#homeNewChat').data('user-id'), jQuery('#homeNewQuestion').val(), 0, 1);
  });


//SA 3 Jan 17 ask-question-tips is on question.php need to coordinate with Casey
     jQuery("#ask-question-tips, .tip").click(function(){
        jQuery("#ask-question-tips-view").fadeToggle("slow", function(){
          //slow animation
        });
     });
//SA 3 Jan 17 end of adding code need to coordinate with Casey
//SA 11 May 17 start
/*
  jQuery("#browse-answers1, #browse-answers2").click(function () {
   window.location.href = ( jQuery('body').data('path') + '/infoQStatus.php');
});
*/
//SA 11 May 17 end
});