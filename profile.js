jQuery(document).ready(function() { 
//SA 8 March 2017 check with CF should we move to datepicker for widget

var activeTab = getUrlVars()['tab'];
function changeActiveTab (target) {
  jQuery('#account-tabs li').removeClass('active');
  jQuery('#account-tabs li[data-target="'+target+'"]').addClass('active');
  jQuery('.custom-tab-content').css({'display':'none'});
  jQuery('#'+target).css({'display':'block'}); 
}
changeActiveTab('target-'+activeTab);

//////////////////////////////////////////////////////////////
//SA 20 April 2017
      jQuery('#user-email-notification:input, #user-sms-notification:input').on('change', function () {
            var userID = jQuery(this).data('user-id');
            var smsChoice = jQuery('#user-sms-notification').prop('checked') ? 1 : 0;
            var emailChoice = jQuery('#user-email-notification').prop('checked') ? 1 : 0;
            //alert(userID);
            //alert('smsChoice' + smsChoice);
            //alert('emailChoice' + emailChoice);
            jQuery.ajax({
            type: "POST",
            url: jQuery('body').data('path') + 'process/profile-manager.php',
            data: "mode=modifyNotificationSettings&userID="+userID+"&smsChoice="+smsChoice+"&emailChoice="+emailChoice,
            //success: roomStatusUpdate,
            dataType: 'html'
          });//ajax
          jQuery('#notifications-updated-feedback').html('You have updated your notification settings');
      });//list of units on change


//////////////////////////////////////////////////////////////////////////////////
//SA April 20 2017
      jQuery('#user-availability-notification:input').on('change', function () {
         var $input = $( this );
            var userID = jQuery(this).data('user-id');
            //alert(userID);
            var availabilityChoice = jQuery('#user-availability-notification').prop('checked') ? 1 : 0 ;
            //alert(availabilityChoice);
            jQuery.ajax({
            type: "POST",
            url: jQuery('body').data('path') + 'process/profile-manager.php',
            data: "mode=modifyAvailabilitySettings&userID="+userID+"&availabilityChoice="+availabilityChoice,
            //success: TBD,
            dataType: 'html'
          });//ajax
            jQuery('#availability-status').html('');
      });//list of units on change
 //SA 20 April 17     
/////////////////////////////////////////////////////////////////////////////////

//SA 11 Jan 2017 start add code adopted from unitmanagementeditor.js
//SA 11 Jan on change does not show closed since there is no change. 
      jQuery('.widget-hours-options').on('change', function() {

        //set the unit hours based on setting class widget-hours-options on unit-editor-hours.php
        var unitID = jQuery('.widget-hours-options option:selected').data('unit-id');
        var routerID = jQuery('.widget-hours-options option:selected').data('id-router');
        var optionSelected= jQuery(this).val();
        var optionParent= jQuery(this).closest('tr').data('hour-setday');
        //alert('day of week  : '+optionParent+ '  option: '+optionSelected);
        var setMonday = jQuery('.widget1').find('.widget-hours-options option:selected').val();
        var setTuesday = jQuery('.widget2').find('.widget-hours-options option:selected').val();
        var setWednesday = jQuery('.widget3').find('.widget-hours-options option:selected').val();
        var setThursday = jQuery('.widget4').find('.widget-hours-options option:selected').val();
        var setFriday = jQuery('.widget5').find('.widget-hours-options option:selected').val();
        var setSaturday = jQuery('.widget6').find('.widget-hours-options option:selected').val();
        var setSunday = jQuery('.widget7').find('.widget-hours-options option:selected').val();

        //Notice not a one-for-one releationship in index between classes for hour open/close and id for a.m. p.m. 
          if (setMonday == 0){
          $('.wtodhour-open1, .wtodminute-open1, .wtodhour-close1, .wtodminute-close1').attr('disabled', true);
          $('.wtodhour-open1, .wtodminute-open1, .wtodhour-close1, .wtodminute-close1').css('color', 'red');
          $('.wtodhour-open1, .wtodminute-open1, .wtodhour-close1, .wtodminute-close1').val('00');
         } else if (setMonday == 1) {
          $('.wtodhour-open1, .wtodminute-open1, .wtodhour-close1, .wtodminute-close1').attr('disabled', true);
          $('.wtodhour-open1, .wtodminute-open1, .wtodhour-close1, .wtodminute-close1').css('color', 'red');
          $('.wtodhour-open1, .wtodminute-open1').val('00');
          $('.wtodhour-close1').val('11');
          $('.wtodminute-close1').val('59');
          //$('.todCloseVal0').val('2');
          $("#wtodCloseVal0 option[value='1']").prop('selected', false);
          $("#wtodCloseVal0 option[value='2']").prop("selected", 'selected');
          $("#wtodCloseVal0 option[value='1']").css("color", 'red');
         } else if (setMonday == 2) {
          $('.wtodhour-open1, .wtodminute-open1, .wtodhour-close1, .wtodminute-close1').attr('disabled', false);
          $('.wtodhour-open1, .wtodminute-open1, .wtodhour-close1, .wtodminute-close1').css('color', 'green');
         }

          if (setTuesday == 0){
          $('.wtodhour-open2, .wtodminute-open2, .wtodhour-close2, .wtodminute-close2').attr('disabled', true);
          $('.wtodhour-open2, .wtodminute-open2, .wtodhour-close2, .wtodminute-close2').css('color', 'red');
          $('.wtodhour-open2, .wtodminute-open2, .wtodhour-close2, .wtodminute-close2').val('00');
         } else if (setTuesday == 1) {
          $('.wtodhour-open2, .wtodminute-open2, .wtodhour-close2, .wtodminute-close2').attr('disabled', true);
          $('.wtodhour-open2, .wtodminute-open2, .wtodhour-close2, .wtodminute-close2').css('color', 'red');
          $('.wtodhour-open2, .wtodminute-open2').val('00');
          $('.wtodhour-close2').val('11');
          $('.wtodminute-close2').val('59');
          $("#wtodCloseVal1 option[value='1']").prop('selected', false);
          $("#wtodCloseVal1 option[value='2']").prop("selected", 'selected');
          $("#wtodCloseVal1 option[value='1']").css("color", 'red');
         } else if (setTuesday == 2) {
          $('.wtodhour-open2, .wtodminute-open2, .wtodhour-close2, .wtodminute-close2').attr('disabled', false);
          $('.wtodhour-open2, .wtodminute-open2, .wtodhour-close2, .wtodminute-close2').css('color', 'green');
         }

         if (setWednesday == 0){
          $('.wtodhour-open3, .wtodminute-open3, .wtodhour-close3, .wtodminute-close3').attr('disabled', true);
          $('.wtodhour-open3, .wtodminute-open3, .wtodhour-close3, .wtodminute-close3').css('color', 'red');
          $('.wtodhour-open3, .wtodminute-open3, .wtodhour-close3, .wtodminute-close3').val('00');
         } else if (setWednesday == 1) {
          $('.wtodhour-open3, .wtodminute-open3, .wtodhour-close3, .wtodminute-close3').attr('disabled', true);
          $('.wtodhour-open3, .wtodminute-open3, .wtodhour-close3, .wtodminute-close3').css('color', 'red');
          $('.wtodhour-open3, .wtodminute-open3').val('00');
          $('.wtodhour-close3').val('11');
          $('.wtodminute-close3').val('59');
          $("#wtodCloseVal2 option[value='1']").prop('selected', false);
          $("#wtodCloseVal2 option[value='2']").prop("selected", 'selected');
          $("#wtodCloseVal2 option[value='1']").css("color", 'red');
         } else if (setWednesday == 2) {
          $('.wtodhour-open3, .wtodminute-open3, .wtodhour-close3, .wtodminute-close3').attr('disabled', false);
          $('.wtodhour-open3, .wtodminute-open3, .wtodhour-close3, .wtodminute-close3').css('color', 'green');
         }

          if (setThursday == 0){
          $('.wtodhour-open4, .wtodminute-open4, .wtodhour-close4, .wtodminute-close4').attr('disabled', true);
          $('.wtodhour-open4, .wtodminute-open4, .wtodhour-close4, .wtodminute-close4').css('color', 'red');
          $('.wtodhour-open4, .wtodminute-open4, .wtodhour-close4, .wtodminute-close4').val('00');
         } else if (setThursday == 1) {
          $('.wtodhour-open4, .wtodminute-open4, .wtodhour-close4, .wtodminute-close4').attr('disabled', true);
          $('.wtodhour-open4, .wtodminute-open4, .wtodhour-close4, .wtodminute-close4').css('color', 'red');
          $('.wtodhour-open4, .wtodminute-open4').val('00');
          $('.wtodhour-close4').val('11');
          $('.wtodminute-close4').val('59');
          $("#wtodCloseVal3 option[value='1']").prop('selected', false);
          $("#wtodCloseVal3 option[value='2']").prop("selected", 'selected');
          $("#wtodCloseVal3 option[value='1']").css("color", 'red');
         } else if (setThursday == 2) {
          $('.wtodhour-open4, .wtodminute-open4, .wtodhour-close4, .wtodminute-close4').attr('disabled', false);
          $('.wtodhour-open4, .wtodminute-open4, .wtodhour-close4, .wtodminute-close4').css('color', 'green');
         }

          if (setFriday == 0){
          $('.wtodhour-open5, .wtodminute-open5, .wtodhour-close5, .wtodminute-close5').attr('disabled', true);
          $('.wtodhour-open5, .wtodminute-open5, .wtodhour-close5, .wtodminute-close5').css('color', 'red');
          $('.wtodhour-open5, .wtodminute-open5, .wtodhour-close5, .wtodminute-close5').val('00');
         } else if (setFriday == 1) {
          $('.wtodhour-open5, .wtodminute-open5, .wtodhour-close5, .wtodminute-close5').attr('disabled', true);
          $('.wtodhour-open5, .wtodminute-open5, .wtodhour-close5, .wtodminute-close5').css('color', 'red');
          $('.wtodhour-open5, .wtodminute-open5').val('00');
          $('.wtodhour-close5').val('11');
          $('.wtodminute-close5').val('59');
          $("#wtodCloseVal4 option[value='1']").prop('selected', false);
          $("#wtodCloseVal4 option[value='2']").prop("selected", 'selected');
          $("#wtodCloseVal4 option[value='1']").css("color", 'red');
         } else if (setFriday == 2) {
          $('.wtodhour-open5, .wtodminute-open5, .wtodhour-close5, .wtodminute-close5').attr('disabled', false);
          $('.wtodhour-open5, .wtodminute-open5, .wtodhour-close5, .wtodminute-close5').css('color', 'green');
         }

         if (setSaturday == 0){
          $('.wtodhour-open6, .wtodminute-open6, .wtodhour-close6, .wtodminute-close6').attr('disabled', true);
          $('.wtodhour-open6, .wtodminute-open6, .wtodhour-close6, .wtodminute-close6').css('color', 'red');
          $('.wtodhour-open6, .wtodminute-open6, .wtodhour-close6, .wtodminute-close6').val('00');
         } else if (setSaturday == 1) {
          $('.wtodhour-open6, .wtodminute-open6, .wtodhour-close6, .wtodminute-close6').attr('disabled', true);
          $('.wtodhour-open6, .wtodminute-open6, .wtodhour-close6, .wtodminute-close6').css('color', 'red');
          $('.wtodhour-open6, .wtodminute-open6').val('00');
          $('.wtodhour-close6').val('11');
          $('.wtodminute-close6').val('59');
          $("#wtodCloseVal5 option[value='1']").prop('selected', false);
          $("#wtodCloseVal5 option[value='2']").prop("selected", 'selected');
          $("#wtodCloseVal5 option[value='1']").css("color", 'red');
         } else if (setSaturday == 2) {
          $('.wtodhour-open6, .wtodminute-open6, .wtodhour-close6, .wtodminute-close6').attr('disabled', false);
          $('.wtodhour-open6, .wtodminute-open6, .wtodhour-close6, .wtodminute-close6').css('color', 'green');
         }


          if (setSunday == 0){
          $('.wtodhour-open7, .wtodminute-open7, .wtodhour-close7, .wtodminute-close7').attr('disabled', true);
          $('.wtodhour-open7, .wtodminute-open7, .wtodhour-close7, .wtodminute-close7').css('color', 'red');
          $('.wtodhour-open7, .wtodminute-open7, .wtodhour-close7, .wtodminute-close7').val('00');
         } else if (setSunday == 1) {
          $('.wtodhour-open7, .wtodminute-open7, .wtodhour-close7, .wtodminute-close7').attr('disabled', true);
          $('.wtodhour-open7, .wtodminute-open7, .wtodhour-close7, .wtodminute-close7').css('color', 'red');
          $('.wtodhour-open7, .wtodminute-open7').val('00');
          $('.wtodhour-close7').val('11');
          $('.wtodminute-close7').val('59');
          $("#wtodCloseVal6 option[value='1']").prop('selected', false);
          $("#wtodCloseVal6 option[value='2']").prop("selected", 'selected');
          $("#wtodCloseVal6 option[value='1']").css("color", 'red');
         } else if (setSunday == 2) {
          $('.wtodhour-open7, .wtodminute-open7, .wtodhour-close7, .wtodminute-close7').attr('disabled', false);
          $('.wtodhour-open7, .wtodminute-open7, .wtodhour-close7, .wtodminute-close7').css('color', 'green');
         }

     });//on change 
//SA 11 Jan 2017 end add code adopted from unitmanagementeditor.js      

//SA 16 Dec start of  js code modified from unitmanagementeditor.js for modifying hours
jQuery( '#submit-profile-hours' ).submit(function( event ) {
  // Stop form from submitting normally
  event.preventDefault();
        var dailyMondayHourOpen = jQuery('.wtodhour-open1').val();
        var dailyMondayMinuteOpen = jQuery('.wtodminute-open1').val();
        var dailyTuesdayHourOpen = jQuery('.wtodhour-open2').val();
        var dailyTuesdayMinuteOpen = jQuery('.wtodminute-open2').val();
        var dailyWednesdayHourOpen = jQuery('.wtodhour-open3').val();
        var dailyWednesdayMinuteOpen = jQuery('.wtodminute-open3').val();
        var dailyThursdayHourOpen = jQuery('.wtodhour-open4').val();
        var dailyThursdayMinuteOpen = jQuery('.wtodminute-open4').val();
        var dailyFridayHourOpen = jQuery('.wtodhour-open5').val();
        var dailyFridayMinuteOpen = jQuery('.wtodminute-open5').val();
        var dailySaturdayHourOpen = jQuery('.wtodhour-open6').val();
        var dailySaturdayMinuteOpen = jQuery('.wtodminute-open6').val();
        var dailySundayHourOpen = jQuery('.wtodhour-open7').val();
        var dailySundayMinuteOpen = jQuery('.wtodminute-open7').val();
        var dailyMondayHourClose = jQuery('.wtodhour-close1').val();
        var dailyMondayMinuteClose = jQuery('.wtodminute-close1').val();
        var dailyTuesdayHourClose = jQuery('.wtodhour-close2').val();
        var dailyTuesdayMinuteClose = jQuery('.wtodminute-close2').val();
        var dailyWednesdayHourClose = jQuery('.wtodhour-close3').val();
        var dailyWednesdayMinuteClose = jQuery('.wtodminute-close3').val();
        var dailyThursdayHourClose = jQuery('.wtodhour-close4').val();
        var dailyThursdayMinuteClose = jQuery('.wtodminute-close4').val();
        var dailyFridayHourClose = jQuery('.wtodhour-close5').val();
        var dailyFridayMinuteClose = jQuery('.wtodminute-close5').val();
        var dailySaturdayHourClose = jQuery('.wtodhour-close6').val();
        var dailySaturdayMinuteClose = jQuery('.wtodminute-close6').val();
        var dailySundayHourClose = jQuery('.wtodhour-close7').val();
        var dailySundayMinuteClose = jQuery('.wtodminute-close7').val();

        var todOpenVal0 = jQuery('#wtodOpenVal0').val();
        var todOpenVal1 = jQuery('#wtodOpenVal1').val();
        var todOpenVal2 = jQuery('#wtodOpenVal2').val();
        var todOpenVal3 = jQuery('#wtodOpenVal3').val();
        var todOpenVal4 = jQuery('#wtodOpenVal4').val();
        var todOpenVal5 = jQuery('#wtodOpenVal5').val();
        var todOpenVal6 = jQuery('#wtodOpenVal6').val();

        var todCloseVal0 = jQuery('#wtodCloseVal0').val();
        var todCloseVal1 = jQuery('#wtodCloseVal1').val();
        var todCloseVal2 = jQuery('#wtodCloseVal2').val();
        var todCloseVal3 = jQuery('#wtodCloseVal3').val();
        var todCloseVal4 = jQuery('#wtodCloseVal4').val();
        var todCloseVal5 = jQuery('#wtodCloseVal5').val();
        var todCloseVal6 = jQuery('#wtodCloseVal6').val();


        var userID = jQuery('.tod').data('user-id');
        //var routerID = jQuery('.tod').data('id-router'); 
        //alert(userID);      
          jQuery.ajax({
            type: "POST",
            url: jQuery('body').data('path') + 'process/users-widget-hours-manager.php',
            data: "mode=updateProfileWidgetHours&userID="+userID+
            "&dailyMondayHourOpen="+dailyMondayHourOpen+
            "&dailyMondayMinuteOpen="+dailyMondayMinuteOpen+
            "&dailyTuesdayHourOpen="+dailyTuesdayHourOpen+
            "&dailyTuesdayMinuteOpen="+dailyTuesdayMinuteOpen+
            "&dailyWednesdayHourOpen="+dailyWednesdayHourOpen+
            "&dailyWednesdayMinuteOpen="+dailyWednesdayMinuteOpen+
            "&dailyThursdayHourOpen="+dailyThursdayHourOpen+
            "&dailyThursdayMinuteOpen="+dailyThursdayMinuteOpen+
            "&dailyFridayHourOpen="+dailyFridayHourOpen+
            "&dailyFridayMinuteOpen="+dailyFridayMinuteOpen+
            "&dailySaturdayHourOpen="+dailySaturdayHourOpen+
            "&dailySaturdayMinuteOpen="+dailySaturdayMinuteOpen+
            "&dailySundayHourOpen="+dailySundayHourOpen+
            "&dailySundayMinuteOpen="+dailySundayMinuteOpen+
            "&dailyMondayHourClose="+dailyMondayHourClose+
            "&dailyMondayMinuteClose="+dailyMondayMinuteClose+
            "&dailyTuesdayHourClose="+dailyTuesdayHourClose+
            "&dailyTuesdayMinuteClose="+dailyTuesdayMinuteClose+
            "&dailyWednesdayHourClose="+dailyWednesdayHourClose+
            "&dailyWednesdayMinuteClose="+dailyWednesdayMinuteClose+
            "&dailyThursdayHourClose="+dailyThursdayHourClose+
            "&dailyThursdayMinuteClose="+dailyThursdayMinuteClose+
            "&dailyFridayHourClose="+dailyFridayHourClose+
            "&dailyFridayMinuteClose="+dailyFridayMinuteClose+
            "&dailySaturdayHourClose="+dailySaturdayHourClose+
            "&dailySaturdayMinuteClose="+dailySaturdayMinuteClose+
            "&dailySundayHourClose="+dailySundayHourClose+
            "&dailySundayMinuteClose="+dailySundayMinuteClose+
            "&todOpenVal0="+todOpenVal0+
            "&todOpenVal1="+todOpenVal1+
            "&todOpenVal2="+todOpenVal2+
            "&todOpenVal3="+todOpenVal3+
            "&todOpenVal4="+todOpenVal4+
            "&todOpenVal5="+todOpenVal5+
            "&todOpenVal6="+todOpenVal6+
            "&todCloseVal0="+todCloseVal0+
            "&todCloseVal1="+todCloseVal1+
            "&todCloseVal2="+todCloseVal2+
            "&todCloseVal3="+todCloseVal3+
            "&todCloseVal4="+todCloseVal4+
            "&todCloseVal5="+todCloseVal5+
            "&todCloseVal6="+todCloseVal6,
            //success: toBeDetermined,
            dataType: 'html'
          });//end AJAX component of hours
      jQuery('#feedback-widget-hours').html('<h4 style="color:teal;">You updated Widget hours!</h4>');

});


jQuery( "#user-info-update" ).on('click', function() {
        var userID = jQuery(this).data('user-id');
        var first = jQuery('#first-name-update').val();
        var last = jQuery('#last-name-update').val();
        var email = jQuery('#email-update').val();
        var phone = jQuery('#phone-update').val();

          jQuery.ajax({
            type: "POST",
            url: jQuery('body').data('path') + 'process/profile-manager.php',
            //IMPORTANT data: needs to be linear, break destroys functionality for some reason
            data: "mode=updateUserProfile&userID="+userID+"&first="+first+"&last="+last+"&email="+email+"&phone="+phone,
            //success: toBeDetermined,
            dataType: 'html'
          });//end AJAX component 
        });

//SA April 20 2017
function isPasswordUpdated(pwStatus) {
  switch (pwStatus) {
    case true:
      jQuery('#password-updated-feedback').html("You have updated your password!");
      break;
    case false:
      jQuery('#password-updated-feedback').html("Passwords do not match.");
      break;
  }
}

jQuery( "#user-password-update" ).on('click', function() {
        var userID = jQuery(this).data('user-id');
        var newPw1 = jQuery('#new-password1').val();
        var newPw2 = jQuery('#new-password2').val();
          if (newPw1 != newPw2) {
          jQuery('#password-updated-feedback').html("Passwords do not match. Try again");
          var pwStatus = false;
          return false;
            } else{
          var pwStatus = true; 
          //return true;   
            }

          jQuery.ajax({
            type: "POST",
            url: jQuery('body').data('path') + 'process/profile-manager.php',
            //IMPORTANT data: needs to be linear, break destroys functionality for some reason
            data: "mode=updateUserPassword&userID="+userID+"&newPw1="+newPw1+"&newPw2="+newPw2,
            success: isPasswordUpdated(pwStatus),
            dataType: 'html'
          });//end AJAX component
        });
//SA 20 April return true false removed to allow passwords to be posted

//below closes document ready do not remove
});

