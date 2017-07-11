jQuery(document).ready(function() {   
  jQuery('.manage-chat-room').click(function(goToEditor){
    var chatHeadline = jQuery(this).attr('data-manage-headline');
    var roomToManage = jQuery(this).attr('data-manage-room');
    document.location = jQuery('body').data('path') + 'chatManagementEditor/?r=' + roomToManage;
  });

  jQuery('.route-chat-to-unit').click(function(goToUnitEditor){
    var chatHeadline = jQuery(this).attr('data-manage-headline');
    var roomToManage = jQuery(this).attr('data-manage-room');
    document.location = jQuery('body').data('path') + 'unitRouterEditor/?r=' + roomToManage;
  });




/*
checkboxes: .edit-question
data-question-id


select all CB: #select-all


#question-action-selector
*/

jQuery('#update-selected').on('click', function () {
  var actionID = jQuery('#question-action-selector option:selected').val();
  var questions = Array();
  jQuery("input.edit-question:checked").each(function () {
    questions.push(jQuery(this).data('question-id'));
  });
  switch (actionID) {
    // Delete selected questions...
    case '1' :
      jQuery.ajax({
        type: "POST",
        url: jQuery('body').data('path') + 'process/questions.php',
        data: 'actionID='+actionID+'&questions='+questions,
        success: questionUpdateCallBack,
        dataType: 'html'
      });
      break;
  }
});

function questionUpdateCallBack (data) {
  var data = data.split(','); 
  for (var i=0; i<data.length; i++) {
    jQuery('#q'+data[i]).remove();
  }
} 


var allSelected = 0;
jQuery('#select-all').on('click', function () {
  if (allSelected == 0) {
    allSelected = 1;
    jQuery('.edit-question').prop('checked',true);
  } else {
    allSelected = 0;
    jQuery('.edit-question').prop('checked',false);
  }
});





});
