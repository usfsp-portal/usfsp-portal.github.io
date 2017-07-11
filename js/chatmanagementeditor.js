function assignUnitsAndUsersAccess (unitID, routerID, roomID) {
  jQuery.ajax({
    type: "POST",
    url: jQuery('body').data('path') + 'process/chat-manager.php',
    data: "mode=assignUnitsAndUsersAccess&unitID="+unitID+"&routerID="+routerID+"&roomID="+roomID,
    //success: routerAddAttendee,
    dataType: 'html', 
    success: function(result){
      console.log('logged ' + result);
      /*
      result = $.parseJSON(result);
      var removeRecordID = result[0];
      jQuery( "#chatRecordUsers" ).append('<div><button data-record-id="'+removeRecordID+'" data-approved-lastname="'+thisApprovedLastName+'" data-approved-firstname="'+thisApprovedFirstName+'" data-approved-id="'+thisApprovedID+'" data-id-router="'+routerID+'" data-room-id="'+thisRoomID+'" class="remove-attendee btn btn-danger">'+thisApprovedFirstName+ " " +thisApprovedLastName+ '</button></div>');
      */
    }
  });
}

//SA 9 December ask Casey about doc ready function under function assignUnitsAndUsersAccess
    jQuery(document).ready(function(){// start of container for all document ready 

//SA 9 Dec toggle is ONLY for visibility -- need to collect selected checkboxes for AJAX 
      jQuery('#listOfUnits').on('change', 'input[type="checkbox"]', function () {
        var routerID = jQuery('#changeRoomQuestion').data('id-router');
        var roomID = jQuery('#changeRoomQuestion').data('room-id');
        assignUnitsAndUsersAccess(jQuery(this).data('unit-id'), routerID, roomID);
            //var unitSelected = (jQuery(this).data('unit-id') + ' is the relevant unit');
            //console.log(unitSelected);
             //if(jQuery(this).prop('checked')) {
            //if(jQuery(this).is(':checked')) {
              var green = jQuery(this).data('unit-id');
              //var unitID = jQuery(this).data('unit-id');
              console.log('green is  ' + green);
              console.log(jQuery(this).data('unit-id') + ' is checked');
              //alert(jQuery(this).data('unit-id') + ' is checked');
              //important -- toggle only the visibility is changed not state
              jQuery('#notifyList').find('.q'+green).css('color', 'green');
              jQuery('#notifyList').find('.q'+green).toggle();
            //} 
      });//list of units on change


      jQuery('#selectRoomStatus').on('change', function() {
        //set the room status to the value of the selection
        var statusOld = jQuery('#rowOldStatus').attr('data-old-status'); 
        var roomID = jQuery('#selectRoomStatus option:selected').data('room-id');
        var routerID = jQuery('#selectRoomStatus option:selected').data('id-router');
        var roomStatus = jQuery('#selectRoomStatus option:selected').val();
          jQuery.ajax({
            type: "POST",
            url: jQuery('body').data('path') + 'process/chat-manager.php',
            data: "mode=modify&roomID="+roomID+"&routerID="+routerID+"&statusOld="+statusOld+"&statusNew="+roomStatus,
            //success: roomStatusUpdate,
            dataType: 'html'
          });//ajax
      })//on change 

//Shift, Esc, and delete trigger keydown events but not keypress  https://api.jquery.com/keypress/
//Use keyup -- "keypress" function behaves differently in different browsers
  jQuery('#changeRoomQuestion').on( 'keyup', function (e) {
    var headline = jQuery('#changeRoomQuestion').attr('data-room-headline');
    //To retrieve the value's attribute as a string without any attempt to convert it, use the attr() method. https://api.jquery.com/data/
    var newHeadline = jQuery('#changeRoomQuestion').val();
    var roomID = jQuery(this).data('room-id');
    var routerID = jQuery('#changeRoomQuestion').data('id-router');
    //var privateStatus = jQuery('#privateStatus').is(':checked') ? 1 : 0;
      if (e.which == 13) {
      jQuery( "#updateQuestionFeedback" ).append("<br />Updated Question:<br /> " +newHeadline);//immediate feedback in tab area
        jQuery.ajax({
          type: "POST",
          url: jQuery('body').data('path') + 'process/chat-manager.php',
          data: "mode=modifyHeadline&headline="+headline+"&roomID="+roomID+"&routerID="+routerID+"&newHeadline="+newHeadline,
          //success: routerModifyHeadline,
          dataType: 'html'
          });//ajax 
      }//for e.which key 13 enter
    });//on keyup

//perform the function and provide feedback to the editor when adding an attendee
    jQuery('#list-of-attendees').on('click', 'button.add-attendee', function(e) {//capture data in eligible attendees 
      //console.log('.add-attendee element clicked');
      var thisRoomID = jQuery(this).data('room-id');
      var routerID = jQuery(this).data("id-router");
      var thisApprovedID = jQuery(this).data('approved-id');
      var thisApprovedFirstName = jQuery(this).data('approved-firstname');
      var thisApprovedLastName = jQuery(this).data('approved-lastname');
      var selectToRemove = jQuery(this).css('display', 'none');
      //the below variables are for the appended, dynamically added buttons         
      jQuery.ajax({
        type: "POST",
        url: jQuery('body').data('path') + 'process/chat-manager.php',
        data: "mode=addAttendee&thisApprovedID="+thisApprovedID+"&thisRoomID="+thisRoomID+"&routerID="+routerID,
        //success: routerAddAttendee,
        dataType: 'html', 
        success: function(result){

          console.log('logged');

          result = $.parseJSON(result);
          var removeRecordID = result[0];

          jQuery( "#chatRecordUsers" ).append('<div><button data-record-id="'+removeRecordID+'" data-approved-lastname="'+thisApprovedLastName+'" data-approved-firstname="'+thisApprovedFirstName+'" data-approved-id="'+thisApprovedID+'" data-id-router="'+routerID+'" data-room-id="'+thisRoomID+'" class="remove-attendee btn btn-danger">'+thisApprovedFirstName+ " " +thisApprovedLastName+ '</button></div>');
      
            console.log("Router: " + routerID);
            console.log("Room: " + thisRoomID);
            console.log("Approve Add ID:  " + thisApprovedID);
            console.log("Remove Record ID:  " + removeRecordID);
        }//success function result
      });//end AJAX 
    });//end click event function for add attendee


//perform the function and provide feedback to the editor when removing  an attendee
//event needs to be on #chatRecordUsers as a preexisting object for the dynamically generated buttons to work
    jQuery('#chatRecordUsers').on('click', 'button', function(e) {//capture data in eligible attendees 
    e.preventDefault();

      var routerID = $(this).data('id-router');
      var removeRecordID = $(this).data('record-id');
      var thisRoomID = $(this).data('room-id');
      var thisRemoveAttendee = $(this).data('approved-id');
      var selectToRemove = $(this).css('display', 'none');
      var first_name = jQuery(this).data('approved-firstname');
      var last_name = jQuery(this).data('approved-lastname');
       
    jQuery('#list-of-attendees').append('<button class="btn btn-success add-attendee" data-id-router="'+routerID+'" data-approved-id="'+thisRemoveAttendee+'" data-approved-firstname="'+first_name+'" data-approved-lastname="'+last_name+'" data-room-id="'+thisRoomID+'">'+first_name+' '+last_name+'</button>'); 

    jQuery.ajax({
      type: "POST",
      url: jQuery('body').data('path') + 'process/chat-manager.php',
      data: "mode=removeAttendee&removeRecordID="+removeRecordID+"&thisRoomID="+thisRoomID+"&thisRemoveAttendee="+thisRemoveAttendee,
      //success: routerRemoveAttendee,
      dataType: 'html'
      });//end AJAX component of function removeAttendee
      return false;
    });//end click event function for remove attendee

  jQuery(document).ready(function (returnToManagementPage) {
      jQuery('button#returnToList').click(function (){
      document.location = 'chatManagement.php';
      });
    });

//Toggle visibility of tab target areas in Chat Record Editor
  jQuery('ul.editor-tabs li').click(function(){
    var tabID = jQuery(this).data('editor-tab');
    jQuery('ul.editor-tabs li').removeClass('current');
    jQuery('.tab-content').removeClass('current');
    jQuery(this).addClass('current');
    jQuery("#"+tabID).addClass('current');
  });//end click function for editor-tabs

//21 Oct 2016 SA added
  jQuery('#inputHourOpen').on( 'keyup', function (e) {
    var hourOpen = jQuery('#inputHourOpen').val();
    var unitID = jQuery(this).data('unit-id');
    var routerID = jQuery('#inputHourOpen').data('id-router');
    if (e.which == 13) {
    alert('You input me');
    }//e which
  });//keyup 
//below line is end of original document ready SHARON Do  NOT remove the closing bracket below
});//end of document ready
