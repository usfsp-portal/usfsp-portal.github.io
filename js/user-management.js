jQuery(document).ready(function() {  
//SA 1 March 2017 revert back to original 

        jQuery('td.manage-users').on('click', function(){
            var userToManage = jQuery(this).data('user-id');
            var userFirstName = jQuery(this).data('first-name');
            var userLastName = jQuery(this).data('last-name');
            alert(userToManage);
            alert(userFirstName);
            alert(userLastName);
            document.location = jQuery('body').data('path') + 'profile/?p=' +userToManage;
          });//click 

//SA 2 March 2017 start
  jQuery('#update-selected-user').on('click', function () {
    alert('you clicked me'); 
    var actionID = jQuery('#user-action-selector option:selected').val(); 
    alert(actionID);
    });


  jQuery('#select-all-users').on('click', function () {
    jQuery('input.edit-user:checkbox').each(function () { this.checked = !this.checked; });
    alert('you selected all users');
  });

//SA 2 March 2017 end

  jQuery('.edit-user').on('click', function () {
    //alert('you clicked me');
    var actionID = jQuery('#user-action-selector option:selected').val();
    var users = Array();

    function userUpdateCallBack () {
      
    }

  jQuery("input.edit-user:checked").each(function () {
    users.push(jQuery(this).data('user-id'));
  });
  switch (actionID) {
    // Delete selected users...

    case '1' :
      jQuery.ajax({
        type: "POST",
        url: jQuery('body').data('path') + 'process/users.php',
        data: 'actionID='+actionID+'&users='+users,
        success: userUpdateCallBack,
        dataType: 'html'
      });
      alert('hi');
      break;
  }
});//update edit-user selected on click

//SA do not delete braces below this line 
});//document ready
