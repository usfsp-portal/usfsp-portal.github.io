jQuery(document).ready(function() {   
//SA 3 Feb 2017 to be uploaded to online.usfp.edu
          jQuery('.manage-event').click(function(){
          var eventToManage = jQuery(this).data('event-id');
          document.location = jQuery('body').data('path') + 'eventEditor/?s=' + eventToManage;
          });

          jQuery('.manage-event-unit').click(function(){
           //important -- this is one of two ways to edit an event on the spot 
           //this method leads from overall unit access, the other method leads from unitManagementEditor, template files    
          var eventToManage = jQuery(this).data('event-id');
          var eventUnitToManage = jQuery(this).data('event-unit');
          document.location = jQuery('body').data('path') + 'unitManagementEditor/?r=' + eventUnitToManage;
          });

//SA 3 Feb 2017 start         

jQuery( "#modify-event-information" ).submit(function( event ) {
  // Stop form from submitting normally
  event.preventDefault();
        var eventID = jQuery('#modify-event-information').data('event-id');  
        var unitID = jQuery('#modify-event-information').data('unit-id');
        var routerID = jQuery('#modify-event-information').data('id-router');
        var title = jQuery('#update-event-title').val();
        var contactWeb  = jQuery('#update-event-web').val();
        var locationPoint  = jQuery('#update-event-location').val();
        var locationAddress  = jQuery('#update-event-address').val();
        var locationCampus  = jQuery('#update-event-campus').val();
        var contactPerson   = jQuery('#event-contact-person').val();
        var contactPhone   = jQuery('#event-contact-phone').val();
        var contactEmail   = jQuery('#event-contact-email').val();
        var social1 = jQuery('#event-social-1').val();
        var social2 = jQuery('#event-social-2').val();
        var social3 = jQuery('#event-social-3').val();
        var eventStart = jQuery('#event-start-datetime').val();
        var eventEnd = jQuery('#event-end-datetime').val();

        //alert('eventID:' + eventID);
        //alert('unitID: ' + unitID);
        //alert('routerID: ' +routerID);
        //alert('title: ' +title);
        //alert('contactWeb: ' +contactWeb);
        //alert('locationPoint: ' +locationPoint);
        //alert('locationAddress: ' +locationAddress);
        //alert('locationCampus: ' +locationCampus);
       
          jQuery.ajax({
            type: "POST",
            url: jQuery('body').data('path') + 'process/event-manager.php',
            data: "mode=updateEventInformation&eventID="+eventID+
            "&unitID="+unitID+
            "&routerID="+routerID+
            "&title="+title+
            "&contactWeb="+contactWeb+
            "&locationPoint="+locationPoint+
            "&locationAddress="+locationAddress+
            "&locationCampus="+locationCampus+
            "&contactPerson="+contactPerson+
            "&contactPhone="+contactPhone+
            "&contactEmail="+contactEmail+
            "&social1="+social1+
            "&social2="+social2+
            "&social3="+social3+
            "&eventStart="+eventStart+
            "&eventEnd="+eventEnd,
            //success: toBeDetermined,
            dataType: 'html'
          });//end AJAX 
          alert('You have updated the event');
      });

//SA 7 Feb 2017 start

//SA 5 Jan 17 start
jQuery( "#unit-event-information" ).submit(function( event ) {
  // Stop form from submitting normally
  event.preventDefault();
        //SA 5 Jan 17 works with moment.js, datapicker.js, bootstrap.js 
        //SA 5 Jan 17 uses datetimepicker()    
        var title = jQuery('#event-title').val();
        var datetimeStart = jQuery('#event-start-datetime').val();
        var datetimeEnd = jQuery('#event-end-datetime').val();
        var locationPoint = jQuery('#event-location').val();
        var locationAddress = jQuery('#event-address').val();
        var locationCampus = jQuery('#event-campus').val();
        var contactPerson = jQuery('#event-contact-person').val();
        var contactPhone = jQuery('#event-contact-phone').val();
        var contactEmail = jQuery('#event-contact-email').val();
        var contactWeb = jQuery('#event-contact-web').val();
        var social1 = jQuery('#event-social-1').val();
        var social2 = jQuery('#event-social-2').val();
        var social3 = jQuery('#event-social-3').val();
        var unitID = jQuery('#unit-event-information').data('unit-id');
        var routerID = jQuery('#unit-event-information').data('id-router');
        var eventStart = jQuery('#event-start-datetime').val();
        var eventEnd = jQuery('#event-end-datetime').val();
        //Datepicker needs moment.js, datapicker.js, bootstrap.js       
          jQuery.ajax({
            type: "POST",
            url: jQuery('body').data('path') + 'process/event-manager.php',
            data: "mode=addEventToUnit&unitID="+unitID+
            "&title="+title+
            "&locationPoint="+locationPoint+
            "&locationAddress="+locationAddress+
            "&locationCampus="+locationCampus+
            "&datetimeStart="+datetimeStart+
            "&datetimeEnd="+datetimeEnd+
            "&contactPerson="+contactPerson+
            "&contactPhone="+contactPhone+
            "&contactEmail="+contactEmail+
            "&contactWeb="+contactWeb+
            "&social1="+social1+
            "&social2="+social2+
            "&social3="+social3+
            "&eventStart="+eventStart+
            "&eventEnd="+eventEnd+
            "&routerID="+routerID,
            //success: toBeDetermined,
            dataType: 'html'
          });//end AJAX 
          //SA 6 Jan 17 IMPORTANT eventStart and eventEnd are VARCHAR must follow time stamp
          jQuery('#event-title').val('Add another event').css("color", "green");
          jQuery('#event-start-datetime').val('Add another start day and time').css("color", "green");
          jQuery('#event-end-datetime').val('Add another end day and time').css("color", "green");
          jQuery('#event-location').val('Add another event location').css("color", "green");
          jQuery('#event-address').val('Add another event address').css("color", "green");
          jQuery('#event-contact-person').val('Add another contact person').css("color", "green");
          jQuery('#event-contact-phone').val('Add another contact phone').css("color", "green");
          jQuery('#event-contact-email').val('Add another contact email').css("color", "green");
          jQuery('#event-contact-web').val('Add another web link').css("color", "green");
          jQuery('#event-social-1').val('Add another link -- social media too').css("color", "green");
          jQuery('#event-social-2').val('Add another link -- social media too').css("color", "green");
          jQuery('#event-social-3').val('Add another link -- social media too').css("color", "green");
          jQuery('#event-campus').val('Add another city or campus').css("color", "green");
          jQuery('#update-event-feedback').html('You have added an event: '+title);
      });



//SA 5 Jan 17 start add for datepicker will need to add accessibility features
//SA 6 Jan IMPORTANT the datepicker dates must be varchar, and located AFTER time stamp in MAMP database
//Source File: https://eonasdan.github.io/bootstrap-datetimepicker/
//Reference One https://eonasdan.github.io/bootstrap-datetimepicker/Options/
//Reference Two http://momentjs.com/docs/#/displaying/format/
  $(function () {
                $('#datetimepicker1, #datetimepicker2').datetimepicker();
              });

//SA 5 Jan 17 end add section datepicker 1 and 2 

//SA 17 Feb 2017 start to add for individual event editor
  $(function () {
                $('#datetimepicker5, #datetimepicker6').datetimepicker();
              });
//SA 17 Feb 2017 end
//SA 21 Feb 2017 in start
jQuery('#select-all-events').on('click', function () {
  jQuery('input.delete-event:checkbox').each(function () { this.checked = !this.checked; });
  //jQuery('input.manage-event').prop('checked', true);
  //alert('you selected all events');
});

jQuery('#update-selected').on('click', function () {
  //alert('you clicked me');
  var actionID = jQuery('#event-action-selector option:selected').val();
  var events = Array();

  function eventUpdateCallBack () {
    
  }

  jQuery("input.delete-event:checked").each(function () {
    events.push(jQuery(this).data('event-id'));
  });

  switch (actionID) {
    // Delete selected users...
    case '1' :
      jQuery.ajax({
        type: "POST",
        url: jQuery('body').data('path') + 'process/event-manager.php',
        data: 'actionID='+actionID+'&events='+events,
        success: eventUpdateCallBack,
        dataType: 'html'
      });
      jQuery('#update-event-feedback').html('You have deleted the selected events');
      //alert('test one case 1');
      break;
  }

});//update-selected on click

//SA 21 Feb 2017 end
/////////////////////////////////////////////////////////////////
//SA do not delete below this line closes document ready
});
