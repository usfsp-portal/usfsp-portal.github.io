jQuery(document).ready(function(){


      var unitInfo = jQuery('#staffRouterEditorContainer').data('units');
      var userInfo = jQuery('#staffRouterEditorContainer').data('users');
  

//////start top level information on unitManagementEditor.php

//SA 11 Jan on change does not show closed since there is no change. 
      jQuery('.daily-hours-options').on('change', function() {

        //set the unit hours based on setting class daily-hours-options on unit-editor-hours.php
        var unitID = jQuery('.daily-hours-options option:selected').data('unit-id');
        var routerID = jQuery('.daily-hours-options option:selected').data('id-router');
        var optionSelected= jQuery(this).val();
        var optionParent= jQuery(this).closest('tr').data('hour-setday');
        //alert('day of week  : '+optionParent+ '  option: '+optionSelected);
        var setMonday = jQuery('.1').find('.daily-hours-options option:selected').val();
        var setTuesday = jQuery('.2').find('.daily-hours-options option:selected').val();
        var setWednesday = jQuery('.3').find('.daily-hours-options option:selected').val();
        var setThursday = jQuery('.4').find('.daily-hours-options option:selected').val();
        var setFriday = jQuery('.5').find('.daily-hours-options option:selected').val();
        var setSaturday = jQuery('.6').find('.daily-hours-options option:selected').val();
        var setSunday = jQuery('.7').find('.daily-hours-options option:selected').val();

        //Notice not a one-for-one releationship in index between classes for hour open/close and id for a.m. p.m. 
          if (setMonday == 0){
          $('.todhour-open1, .todminute-open1, .todhour-close1, .todminute-close1').attr('disabled', true);
          $('.todhour-open1, .todminute-open1, .todhour-close1, .todminute-close1').css('color', 'red');
          $('.todhour-open1, .todminute-open1, .todhour-close1, .todminute-close1').val('00');
         } else if (setMonday == 1) {
          $('.todhour-open1, .todminute-open1, .todhour-close1, .todminute-close1').attr('disabled', true);
          $('.todhour-open1, .todminute-open1, .todhour-close1, .todminute-close1').css('color', 'red');
          $('.todhour-open1, .todminute-open1').val('00');
          $('.todhour-close1').val('11');
          $('.todminute-close1').val('59');
          //$('.todCloseVal0').val('2');
          $("#todCloseVal0 option[value='1']").prop('selected', false);
          $("#todCloseVal0 option[value='2']").prop("selected", 'selected');
          $("#todCloseVal0 option[value='1']").css("color", 'red');
         } else if (setMonday == 2) {
          $('.todhour-open1, .todminute-open1, .todhour-close1, .todminute-close1').attr('disabled', false);
          $('.todhour-open1, .todminute-open1, .todhour-close1, .todminute-close1').css('color', 'green');
         }

          if (setTuesday == 0){
          $('.todhour-open2, .todminute-open2, .todhour-close2, .todminute-close2').attr('disabled', true);
          $('.todhour-open2, .todminute-open2, .todhour-close2, .todminute-close2').css('color', 'red');
          $('.todhour-open2, .todminute-open2, .todhour-close2, .todminute-close2').val('00');
         } else if (setTuesday == 1) {
          $('.todhour-open2, .todminute-open2, .todhour-close2, .todminute-close2').attr('disabled', true);
          $('.todhour-open2, .todminute-open2, .todhour-close2, .todminute-close2').css('color', 'red');
          $('.todhour-open2, .todminute-open2').val('00');
          $('.todhour-close2').val('11');
          $('.todminute-close2').val('59');
          $("#todCloseVal1 option[value='1']").prop('selected', false);
          $("#todCloseVal1 option[value='2']").prop("selected", 'selected');
          $("#todCloseVal1 option[value='1']").css("color", 'red');
         } else if (setTuesday == 2) {
          $('.todhour-open2, .todminute-open2, .todhour-close2, .todminute-close2').attr('disabled', false);
          $('.todhour-open2, .todminute-open2, .todhour-close2, .todminute-close2').css('color', 'green');
         }

         if (setWednesday == 0){
          $('.todhour-open3, .todminute-open3, .todhour-close3, .todminute-close3').attr('disabled', true);
          $('.todhour-open3, .todminute-open3, .todhour-close3, .todminute-close3').css('color', 'red');
          $('.todhour-open3, .todminute-open3, .todhour-close3, .todminute-close3').val('00');
         } else if (setWednesday == 1) {
          $('.todhour-open3, .todminute-open3, .todhour-close3, .todminute-close3').attr('disabled', true);
          $('.todhour-open3, .todminute-open3, .todhour-close3, .todminute-close3').css('color', 'red');
          $('.todhour-open3, .todminute-open3').val('00');
          $('.todhour-close3').val('11');
          $('.todminute-close3').val('59');
          $("#todCloseVal2 option[value='1']").prop('selected', false);
          $("#todCloseVal2 option[value='2']").prop("selected", 'selected');
          $("#todCloseVal2 option[value='1']").css("color", 'red');
         } else if (setWednesday == 2) {
          $('.todhour-open3, .todminute-open3, .todhour-close3, .todminute-close3').attr('disabled', false);
          $('.todhour-open3, .todminute-open3, .todhour-close3, .todminute-close3').css('color', 'green');
         }

          if (setThursday == 0){
          $('.todhour-open4, .todminute-open4, .todhour-close4, .todminute-close4').attr('disabled', true);
          $('.todhour-open4, .todminute-open4, .todhour-close4, .todminute-close4').css('color', 'red');
          $('.todhour-open4, .todminute-open4, .todhour-close4, .todminute-close4').val('00');
         } else if (setThursday == 1) {
          $('.todhour-open4, .todminute-open4, .todhour-close4, .todminute-close4').attr('disabled', true);
          $('.todhour-open4, .todminute-open4, .todhour-close4, .todminute-close4').css('color', 'red');
          $('.todhour-open4, .todminute-open4').val('00');
          $('.todhour-close4').val('11');
          $('.todminute-close4').val('59');
          $("#todCloseVal3 option[value='1']").prop('selected', false);
          $("#todCloseVal3 option[value='2']").prop("selected", 'selected');
          $("#todCloseVal3 option[value='1']").css("color", 'red');
         } else if (setThursday == 2) {
          $('.todhour-open4, .todminute-open4, .todhour-close4, .todminute-close4').attr('disabled', false);
          $('.todhour-open4, .todminute-open4, .todhour-close4, .todminute-close4').css('color', 'green');
         }

          if (setFriday == 0){
          $('.todhour-open5, .todminute-open5, .todhour-close5, .todminute-close5').attr('disabled', true);
          $('.todhour-open5, .todminute-open5, .todhour-close5, .todminute-close5').css('color', 'red');
          $('.todhour-open5, .todminute-open5, .todhour-close5, .todminute-close5').val('00');
         } else if (setFriday == 1) {
          $('.todhour-open5, .todminute-open5, .todhour-close5, .todminute-close5').attr('disabled', true);
          $('.todhour-open5, .todminute-open5, .todhour-close5, .todminute-close5').css('color', 'red');
          $('.todhour-open5, .todminute-open5').val('00');
          $('.todhour-close5').val('11');
          $('.todminute-close5').val('59');
          $("#todCloseVal4 option[value='1']").prop('selected', false);
          $("#todCloseVal4 option[value='2']").prop("selected", 'selected');
          $("#todCloseVal4 option[value='1']").css("color", 'red');
         } else if (setFriday == 2) {
          $('.todhour-open5, .todminute-open5, .todhour-close5, .todminute-close5').attr('disabled', false);
          $('.todhour-open5, .todminute-open5, .todhour-close5, .todminute-close5').css('color', 'green');
         }

         if (setSaturday == 0){
          $('.todhour-open6, .todminute-open6, .todhour-close6, .todminute-close6').attr('disabled', true);
          $('.todhour-open6, .todminute-open6, .todhour-close6, .todminute-close6').css('color', 'red');
          $('.todhour-open6, .todminute-open6, .todhour-close6, .todminute-close6').val('00');
         } else if (setSaturday == 1) {
          $('.todhour-open6, .todminute-open6, .todhour-close6, .todminute-close6').attr('disabled', true);
          $('.todhour-open6, .todminute-open6, .todhour-close6, .todminute-close6').css('color', 'red');
          $('.todhour-open6, .todminute-open6').val('00');
          $('.todhour-close6').val('11');
          $('.todminute-close6').val('59');
          $("#todCloseVal5 option[value='1']").prop('selected', false);
          $("#todCloseVal5 option[value='2']").prop("selected", 'selected');
          $("#todCloseVal5 option[value='1']").css("color", 'red');
         } else if (setSaturday == 2) {
          $('.todhour-open6, .todminute-open6, .todhour-close6, .todminute-close6').attr('disabled', false);
          $('.todhour-open6, .todminute-open6, .todhour-close6, .todminute-close6').css('color', 'green');
         }


          if (setSunday == 0){
          $('.todhour-open7, .todminute-open7, .todhour-close7, .todminute-close7').attr('disabled', true);
          $('.todhour-open7, .todminute-open7, .todhour-close7, .todminute-close7').css('color', 'red');
          $('.todhour-open7, .todminute-open7, .todhour-close7, .todminute-close7').val('00');
         } else if (setSunday == 1) {
          $('.todhour-open7, .todminute-open7, .todhour-close7, .todminute-close7').attr('disabled', true);
          $('.todhour-open7, .todminute-open7, .todhour-close7, .todminute-close7').css('color', 'red');
          $('.todhour-open7, .todminute-open7').val('00');
          $('.todhour-close7').val('11');
          $('.todminute-close7').val('59');
          $("#todCloseVal6 option[value='1']").prop('selected', false);
          $("#todCloseVal6 option[value='2']").prop("selected", 'selected');
          $("#todCloseVal6 option[value='1']").css("color", 'red');
         } else if (setSunday == 2) {
          $('.todhour-open7, .todminute-open7, .todhour-close7, .todminute-close7').attr('disabled', false);
          $('.todhour-open7, .todminute-open7, .todhour-close7, .todminute-close7').css('color', 'green');
         }

     });//on change 
//SA end 11 Jan 2017
//SA 3 Feb 2017 cleaning and starting again fresh section one below is CF code that works in association with above


  jQuery( ".remove-unit-hours" ).click(function () {
    var unitID = jQuery('.remove-unit-hours').data('unit-id');
    var routerID = jQuery('.remove-unit-hours').data('id-router');
    var removeHoursID = jQuery(this).data('hours-id');
    jQuery.ajax({
    type: "POST",
    url: jQuery('body').data('path') + 'process/unit-manager.php',
    data: 'mode=removeSpecialHours&unitID='+unitID+'&removeHoursID='+removeHoursID,
    //success: toBeDetermied,
    dataType: 'html'
    });
  });



jQuery( "#submit-regular-hours" ).submit(function( event ) {
  // Stop form from submitting normally
  event.preventDefault();
        var dailyMondayHourOpen = jQuery('.todhour-open1').val();
        var dailyMondayMinuteOpen = jQuery('.todminute-open1').val();
        var dailyTuesdayHourOpen = jQuery('.todhour-open2').val();
        var dailyTuesdayMinuteOpen = jQuery('.todminute-open2').val();
        var dailyWednesdayHourOpen = jQuery('.todhour-open3').val();
        var dailyWednesdayMinuteOpen = jQuery('.todminute-open3').val();
        var dailyThursdayHourOpen = jQuery('.todhour-open4').val();
        var dailyThursdayMinuteOpen = jQuery('.todminute-open4').val();
        var dailyFridayHourOpen = jQuery('.todhour-open5').val();
        var dailyFridayMinuteOpen = jQuery('.todminute-open5').val();
        var dailySaturdayHourOpen = jQuery('.todhour-open6').val();
        var dailySaturdayMinuteOpen = jQuery('.todminute-open6').val();
        var dailySundayHourOpen = jQuery('.todhour-open7').val();
        var dailySundayMinuteOpen = jQuery('.todminute-open7').val();
        var dailyMondayHourClose = jQuery('.todhour-close1').val();
        var dailyMondayMinuteClose = jQuery('.todminute-close1').val();
        var dailyTuesdayHourClose = jQuery('.todhour-close2').val();
        var dailyTuesdayMinuteClose = jQuery('.todminute-close2').val();
        var dailyWednesdayHourClose = jQuery('.todhour-close3').val();
        var dailyWednesdayMinuteClose = jQuery('.todminute-close3').val();
        var dailyThursdayHourClose = jQuery('.todhour-close4').val();
        var dailyThursdayMinuteClose = jQuery('.todminute-close4').val();
        var dailyFridayHourClose = jQuery('.todhour-close5').val();
        var dailyFridayMinuteClose = jQuery('.todminute-close5').val();
        var dailySaturdayHourClose = jQuery('.todhour-close6').val();
        var dailySaturdayMinuteClose = jQuery('.todminute-close6').val();
        var dailySundayHourClose = jQuery('.todhour-close7').val();
        var dailySundayMinuteClose = jQuery('.todminute-close7').val();

        var todOpenVal0 = jQuery('#todOpenVal0').val();
        var todOpenVal1 = jQuery('#todOpenVal1').val();
        var todOpenVal2 = jQuery('#todOpenVal2').val();
        var todOpenVal3 = jQuery('#todOpenVal3').val();
        var todOpenVal4 = jQuery('#todOpenVal4').val();
        var todOpenVal5 = jQuery('#todOpenVal5').val();
        var todOpenVal6 = jQuery('#todOpenVal6').val();

        var todCloseVal0 = jQuery('#todCloseVal0').val();
        var todCloseVal1 = jQuery('#todCloseVal1').val();
        var todCloseVal2 = jQuery('#todCloseVal2').val();
        var todCloseVal3 = jQuery('#todCloseVal3').val();
        var todCloseVal4 = jQuery('#todCloseVal4').val();
        var todCloseVal5 = jQuery('#todCloseVal5').val();
        var todCloseVal6 = jQuery('#todCloseVal6').val();


        var unitID = jQuery('.tod').data('unit-id');
        var routerID = jQuery('.tod').data('id-router'); 
        //alert(unitID);      
          jQuery.ajax({
            type: "POST",
            url: jQuery('body').data('path') + 'process/unit-manager.php',
            data: "mode=updateRegularHours&unitID="+unitID+
            "&routerID="+routerID+
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
      jQuery('#feedback-add-hours').html('<h4 style="color:teal;">You updated the hours!</h4>');

});
///////
//SA 1 Feb start





//SA 3 Feb 2017 cleaning and starting again fresh end section one
    jQuery('#selectUnitType').on('change', function() {
        //set the unit type to the value of the selection
        var typeOld = jQuery('#unitType').attr('data-unit-type'); 
        var unitID = jQuery('#selectUnitType option:selected').data('unit-id');
        var routerID = jQuery('#selectUnitType option:selected').data('id-router');
        var typeNew = jQuery('#selectUnitType option:selected').val();
      jQuery.ajax({
        type: "POST",
        url: jQuery('body').data('path') + 'process/unit-manager.php',
        data: "mode=modifyOrganizationType&unitID="+unitID+"&routerID="+routerID+"&typeOld="+typeOld+"&typeNew="+typeNew,
        //success: roomStatusUpdate,
        dataType: 'html'
      });//ajax
     });//on change for unit type  

jQuery( "#update-title-area" ).submit(function( event ) {
  // Stop form from submitting normally
  event.preventDefault();
        var updatedTitle = jQuery('#update-title').val();
        var unitID = jQuery(this).data('unit-id');
        var routerID = jQuery(this).data('id-router');        
          jQuery.ajax({
            type: "POST",
            url: jQuery('body').data('path') + 'process/unit-manager.php',
            data: "mode=updateTitle&updatedTitle="+updatedTitle+"&unitID="+unitID+"&routerID="+routerID,
            //success: toBeDetermined,
            dataType: 'html'
          });//end AJAX component of new title
});

jQuery('#update-title').on( 'keypress', function (e) {
        var keycode = e.keyCode ? e.keyCode : e.which;
        if (keycode === 13) {
        var updatedTitle = jQuery('#update-title').val();
        var unitID = jQuery(this).data('unit-id');
        var routerID = jQuery(this).data('id-router');        
          jQuery.ajax({
            type: "POST",
            url: jQuery('body').data('path') + 'process/unit-manager.php',
            data: "mode=updateTitle&updatedTitle="+updatedTitle+"&unitID="+unitID+"&routerID="+routerID,
            //success: toBeDetermined,
            dataType: 'html'
          });//end AJAX component 
        }
    });

////End top-level section start keyword section

//SA 13 December Casey fixed this
          $('.target-keyword').css('display','none');
          $('.browse-keyword-header').css('display','none');

           var getKeywordsOptions = [];
           var unitID = jQuery('#search-unit-keyword').data('unit-id');
           //SA 19 December check with Casey unitID is defined multiple locations is this a problem?
            $(".bot-keywords-options label").each(function(index) {
               getKeywordsOptions.push($(this).text().trim() + '%%%' + $(this).attr('data-keyword-id'));
                });//var botKeywordList
   
                $("#search-unit-keyword").keyup(function(){
                    if ($(this).val().length >= 3) {
                      //
                      $('.target-keyword, .browse-keyword-header').css('display','block');
                      //
                        var keywordID = $(this).data('keyword-id');
                        var searchTerm = $(this).val().split(' ');
                        var allMatches = [];
                        for (i = 0; i < searchTerm.length; i++) { 
                            var currentTerm = searchTerm[i].trim();
                            if (currentTerm.length >= 3) {

                                var matcher = new RegExp(currentTerm + "+", "i");
                                //var matches = $.grep(botKeywordList, function(item){ return matcher.test(item);});
                                var matches = $.grep(getKeywordsOptions, function(item){ return matcher.test(item);});
                                for (var j = 0; j < matches.length; j++) {
                                    allMatches.push(matches[j]);
                                }
                            }
                        }
                        allMatches = allMatches.sort();
                        var resultList = '';
                        for (i = 0; i < allMatches.length; i++) {
                            allMatches[i] = allMatches[i].split('%%%');
                            resultList += '<li><input type="checkbox" class="add-keyword-to-unit" data-unit-id="'+unitID+'" data-keyword-id="'+allMatches[i][1]+'" data-keyword="'+allMatches[i][0]+'"> <label for="'+allMatches[i][0]+'" data-keyword-id="'+allMatches[i][1]+'">'+allMatches[i][0]+'</label></li>';
                        }
                        $('#search-results-keywords').html('<ul id ="keyword-result-set">' +resultList+'</ul>');
                    } else {
                        $('#search-results-keywords').html('You need at least three letters');
                    }
                });


jQuery('body').on('click', '.add-keyword-to-unit', function () {//for section browsing keywords
  var unitID = jQuery(this).data('unit-id');
  var keyword = jQuery(this).data('keyword');
  var keywordID = jQuery(this).data('keyword-id');

  var keywords = Array();

    jQuery("input.add-keyword-to-unit:checked").each(function () {
    keywords.push(jQuery(this).data('keyword-id'));
  });

    jQuery.ajax({
    type: "POST",
    url: jQuery('body').data('path') + 'process/unit-manager.php',
    data: 'mode=addKeywordToUnit&unitID='+unitID+'&keywordID='+keywordID,
    //success: unitUpdateKeywords,
    dataType: 'html'
    });

});


jQuery( "#add-unit-keyword-button").on('click', function (e){
        var unitKeywordLower = jQuery('#add-unit-keyword').val();
        var unitKeyword = (unitKeywordLower.toUpperCase());//make uppercase for bot
        var unitID = jQuery(this).data('unit-id');
        var routerID = jQuery(this).data('id-router');
        console.log(unitKeyword);
        console.log(unitID);
        console.log(routerID);
          jQuery.ajax({
            type: "POST",
            url: jQuery('body').data('path') + 'process/unit-manager.php',
            data: "mode=addNewKeyword&unitKeyword="+unitKeyword+"&unitID="+unitID+"&routerID="+routerID,
            //success: toBeDetermined,
            dataType: 'html'
          });//end AJAX component of add new keyword
     jQuery("#add-keyword-feedback").html("You have added "+ unitKeyword);     
});

    jQuery('#add-unit-keyword').on( 'keypress', function (e) {
        var keycode = e.keyCode ? e.keyCode : e.which;
        if (keycode === 13) {
        var unitKeywordLower = jQuery('#add-unit-keyword').val();
        var unitKeyword = (unitKeywordLower.toUpperCase());//make uppercase for bot
        var unitID = jQuery(this).data('unit-id');
        var routerID = jQuery(this).data('id-router');

         jQuery.ajax({
            type: "POST",
            url: jQuery('body').data('path') + 'process/unit-manager.php',
            data: "mode=addNewKeyword&unitKeyword="+unitKeyword+"&unitID="+unitID+"&routerID="+routerID,
            //success: keywordFeedback,
            dataType: 'html'
          });//AJAX 
        }//keywhich  
    });//on keypress

////End keyword section start information section

//SA 30 Nov check with Casey if it is a problem if empty
jQuery( "#unit-directory-information" ).submit(function( event ) {
  // Stop form from submitting normally
  event.preventDefault();
        var updateLocation = jQuery('#update-location').val();
        var updateDescription = jQuery('#update-description').val();
        var updateURL = jQuery('#update-unit-url').val();
        var unitID = jQuery('#unit-directory-information').data('unit-id');
        var routerID = jQuery('#unit-directory-information').data('id-router');
       
          jQuery.ajax({
            type: "POST",
            url: jQuery('body').data('path') + 'process/unit-manager.php',
            data: "mode=updateDirectoryInformation&updateURL="+updateURL+
            "&updateDescription="+updateDescription+
            "&updateLocation="+updateLocation+
            "&unitID="+unitID+
            "&routerID="+routerID,
            //success: toBeDetermined,
            dataType: 'html'
          });//end AJAX 
      });


  jQuery('#unit-phone-and-label-button').on( 'click', function (e) {
        var unitPhone = jQuery('#add-phone').val();
        var unitPhoneLabel = jQuery('#add-phone-label').val();
        var unitID = jQuery(this).data('unit-id');
        var routerID = jQuery(this).data('id-router');        
          jQuery.ajax({
            type: "POST",
            url: jQuery('body').data('path') + 'process/unit-manager.php',
            data: "mode=addPhoneAndLabel&unitPhoneLabel="+unitPhoneLabel+"&unitPhone="+unitPhone+"&unitID="+unitID+"&routerID="+routerID,
            //success: toBeDetermined,
            dataType: 'html'
          });//end AJAX 
           jQuery('#add-phone').val('Add another phone number').css("color", "green");
           jQuery('#add-phone-label').val('Add another phone label').css("color", "green");
           jQuery('#update-phone-feedback').html('You have added '+unitPhoneLabel+':'+unitPhone);
    });//submit phone and label

//SA 18 Jan start
  jQuery('#unit-fax-and-label-button').on( 'click', function (e) {
        var unitFAX = jQuery('#add-fax').val();
        var unitFAXLabel = jQuery('#add-fax-label').val();
        var unitID = jQuery(this).data('unit-id');
        var routerID = jQuery(this).data('id-router');        
          jQuery.ajax({
            type: "POST",
            url: jQuery('body').data('path') + 'process/unit-manager.php',
            data: "mode=addFAXAndLabel&unitFAXLabel="+unitFAXLabel+"&unitFAX="+unitFAX+"&unitID="+unitID+"&routerID="+routerID,
            //success: toBeDetermined,
            dataType: 'html'
          });//end AJAX 
            jQuery('#add-fax').val('Add another fax number ').css("color", "green");
           jQuery('#add-fax-label').val('Add another fax label').css("color", "green");
           jQuery('#update-fax-feedback').html('You have added '+unitFAXLabel+':'+unitFAX);
    });//submit fax and label
//SA 18 Jan end


  jQuery('#update-description-button').on( 'click', function (e) {
        var updatedDescription = jQuery('#update-description').val();
        var unitID = jQuery('#update-description').data('unit-id');
        var routerID = jQuery('#update-description').data('id-router');        
          jQuery.ajax({
            type: "POST",
            url: jQuery('body').data('path') + 'process/unit-manager.php',
            data: "mode=updateDescription&updatedDescription="+updatedDescription+"&unitID="+unitID+"&routerID="+routerID,
            //success: toBeDetermined,
            dataType: 'html'
          });//end AJAX component of new description
      jQuery('#update-description-feedback').html('You have updated the description');
  });


  jQuery('#submit-unit-link').on( 'click', function (e){
        var newLink = jQuery('#add-unit-link').val();
        var newLinkLabel = jQuery('#add-link-label').val();
        var unitID = jQuery(this).data('unit-id');
        var routerID = jQuery(this).data('id-router');        
          jQuery.ajax({
            type: "POST",
            url: jQuery('body').data('path') + 'process/unit-manager.php',
            data: "mode=addUnitLink&newLink="+newLink+"&newLinkLabel="+newLinkLabel+"&unitID="+unitID+"&routerID="+routerID,
            //success: toBeDetermined,
            dataType: 'html'
          });//end AJAX component 
          jQuery('#add-unit-link').val('Add another link').css("color", "green");
          jQuery('#add-link-label').val('Add another link label').css("color", "green");
          jQuery('#add-link-feedback').html('You have added a link for ' +newLinkLabel);
    });//end click event 


  jQuery('#add-unit-email').on( 'keypress', function (e) {
        var keycode = e.keyCode ? e.keyCode : e.which;
        if (keycode === 13) {
        var newEmail = jQuery('#add-unit-email').val();
        var emailLabel = jQuery('#add-email-label').val();
        var unitID = jQuery(this).data('unit-id');
        var routerID = jQuery(this).data('id-router');        
          jQuery.ajax({
            type: "POST",
            url: jQuery('body').data('path') + 'process/unit-manager.php',
            data: "mode=addUnitEmail&newEmail="+newEmail+"&unitID="+unitID+"&routerID="+routerID+"&emailLabel="+emailLabel,
            //success: toBeDetermined,
            dataType: 'html'
          });//end AJAX component 
        }//keypress
     });//end click event 

  jQuery('#unit-email-button').on( 'click', function (e) {
        var newEmail = jQuery('#add-unit-email').val();
        var emailLabel = jQuery('#add-email-label').val();
        var unitID = jQuery(this).data('unit-id');
        var routerID = jQuery(this).data('id-router');         
          jQuery.ajax({
            type: "POST",
            url: jQuery('body').data('path') + 'process/unit-manager.php',
            data: "mode=addUnitEmail&newEmail="+newEmail+"&unitID="+unitID+"&routerID="+routerID+"&emailLabel="+emailLabel,
            //success: toBeDetermined,
            dataType: 'html'
          });//end AJAX component 
          jQuery('#add-unit-email').val('Add another email').css("color", "green");
          jQuery('#add-email-label').val('Add another email label').css("color", "green");
          jQuery('#update-email-feedback').html('You have added a new email: '+newEmail);
          
  });  

//BAD CODE STARTS HERE
 /*
//SA 28 Nov need to write method to extract form extension from url 
//SA 28 Nov Note there is no current input for formExtension available to user
  jQuery('#unit-form-button').on( 'click', function (e) {
        var formTitle = jQuery('#add-form-title').val();
        var formDescription = jQuery('#add-form-description').val();
        var formURL = jQuery('#add-form-url').val();
        var formExtension = jQuery('#add-form-extension').val();
        var formNumber = jQuery('#add-form-number').val();
        var unitID = jQuery(this).data('unit-id');
        var routerID = jQuery(this).data('id-router');        
          jQuery.ajax({
            type: "POST",
            url: jQuery('body').data('path') + 'process/unit-manager.php',
            data: "mode=addUnitForm&formTitle="+formTitle+"&formDescription="+formDescription+"&formURL="+formURL+"&formExtension="+formExtension+"&formNumber="+formNumber+"&unitID="+unitID+"&routerID="+routerID,
            //success: toBeDetermined,
            dataType: 'html'
          });//end AJAX
           jQuery('#add-form-title').val('Add another form title').css("color", "green"); 
           jQuery('#add-form-description').val('Add another form description').css("color", "green"); 
           jQuery('#add-form-url').val('Add a link for another form').css("color", "green"); 
           jQuery('#add-form-number').val('Add a number or version, if known').css("color", "green"); 
           jQuery('#update-form-feedback').html('You have added '+formTitle+'<br />
            <a href="'+formURL+'">'+formURL+'</a>');
    });//submit form

*/
//End BAD CODE
//Good code beyond this point 
//SA 10 Jan 17
 jQuery('body').on('change', '.for-sacs', function() {
          var sacs = jQuery(this).data('for-sacs');
          
          if(jQuery(this).prop('checked')) {
            sacs='1';
            //alert(sacs); 
          } else {
            sacs='0';
            //alert(sacs);
          }
 });//on body change for-sacs

 //SA 19 Jan 17
 jQuery('body').on('change', '.for-ncate', function() {
          var ncate = jQuery(this).data('ncate');
          
          if(jQuery(this).prop('checked')) {
            ncate='1';
            //alert(ncate); 
          } else {
            ncate='0';
            //alert(ncate);
          }
 });//on body change for-ncate


//Good code beyond this point
//SA 19 Jan 17
 jQuery('body').on('change', '.for-aacsb', function() {
          var aacsb = jQuery(this).data('aacsb');
          
          if(jQuery(this).prop('checked')) {
            aacsb='1';
            //alert(aacsb); 
          } else {
            aacsb='0';
            //alert(aacsb);
          }
 });//on body change for-aacsb

//SA 19 Jan 17
 jQuery('body').on('change', '.for-acejmc', function() {
          var acejmc = jQuery(this).data('acejmc');
          
          if(jQuery(this).prop('checked')) {
            acejmc='1';
            //alert(acejmc); 
          } else {
            acejmc='0';
            //alert(acejmc);
          }
 });//on body change for-acejmc


 //Good code beyond this point
//SA 28 Note there is no current input for formExtension available to user
  jQuery('#unit-report-button').on( 'click', function (e) {
        var reportTitle = jQuery('#add-report-title').val();
        var reportDescription = jQuery('#add-report-description').val();
        var reportURL = jQuery('#add-report-url').val();
        var reportExtension = jQuery('#add-report-extension').val();
        var reportNumber = jQuery('#add-report-number').val();
        var unitID = jQuery(this).data('unit-id');
        var routerID = jQuery(this).data('id-router');
        var sacs = jQuery(this).data('for-sacs');

        var ncate = jQuery(this).data('for-ncate');
        var aacsb = jQuery(this).data('for-aacsb');
        var acejmc = jQuery(this).data('for-acejmc');
        var legal = jQuery('.for-legal').val();


          if(jQuery('.for-sacs').prop('checked')) {
            sacs='1';
          } else {
            sacs='0';
          }


          if(jQuery('.for-ncate').prop('checked')) {
            ncate='1';
          } else {
            ncate='0';
          }

          if(jQuery('.for-aacsb').prop('checked')) {
            aacsb='1';
          } else {
            aacsb='0';
          }


          if(jQuery('.for-acejmc').prop('checked')) {
            acejmc='1';
          } else {
            acejmc='0';
          }


          jQuery.ajax({
            type: "POST",
            url: jQuery('body').data('path') + 'process/unit-manager.php',
            data: "mode=addUnitReport&reportTitle="+reportTitle+
            "&reportDescription="+reportDescription+
            "&reportURL="+reportURL+
            "&reportExtension="+reportExtension+
            "&reportNumber="+reportNumber+
            "&unitID="+unitID+
            "&sacs="+sacs+
            "&ncate="+ncate+
            "&aacsb="+aacsb+
            "&acejmc="+acejmc+
            "&legal="+legal+
            "&routerID="+routerID,
            //success: toBeDetermined,
            dataType: 'html'
          });//end AJAX
            jQuery('#add-report-title').val('Add another report title').css("color", "green");
            jQuery('#add-report-description').val('Add another report description').css("color","green");
            jQuery('#add-report-url').val('Add another report link').css("color","green");
            jQuery('#add-report-number').val('Add another report number or version').css("color", "green");
            jQuery('#update-report-feedback').html('You have added '+reportTitle+'<br /><a href="'+reportURL+'">'+reportURL+'</a>');
    });//submit form
//SA revised 19 Jan 2017
//Good code beyond this point

    jQuery('.unitDaySetting').on( 'change', function (e) {
        var daySetting = jQuery('.unitDaySetting').val();
        var unitID = jQuery(this).data('unit-id');
        var routerID = jQuery(this).data('id-router');        
          jQuery.ajax({
            type: "POST",
            url: jQuery('body').data('path') + 'process/unit-manager.php',
            data: "mode=updateUnitDaySetting&daySetting="+daySetting+"&unitID="+unitID+"&routerID="+routerID,
            //success: toBeDetermined,
            dataType: 'html'
          });//end AJAX 
    });//keypress update location


  jQuery( '.remove-unit-report' ).click(function () {
    var removeReportID = jQuery(this).data('report-id');
    var unitID = jQuery(this).data('unit-id');
    var routerID = jQuery(this).data('id-router');
    jQuery.ajax({
    type: "POST",
    url: jQuery('body').data('path') + 'process/unit-manager.php',
    data: 'mode=removeUnitReport&routerID='+routerID+'&unitID='+unitID+'&removeReportID='+removeReportID,
    //success: chatManagerCallBack,
    dataType: 'html'
    });
    jQuery('#update-report-feedback').html('You have removed the reprt: '+unitReport);
  });


//Good code beyond this point
  jQuery( ".remove-unit-email" ).click(function () {
    var unitEmail  = jQuery(this).data('unit-email');
    var removeEmailID = jQuery(this).data('email-id');
    var unitID = jQuery(this).data('unit-id');
    var routerID = jQuery(this).data('id-router');
    jQuery.ajax({
    type: "POST",
    url: jQuery('body').data('path') + 'process/unit-manager.php',
    data: 'mode=removeUnitEmail&routerID='+routerID+'&unitID='+unitID+'&unitEmail='+unitEmail+'&removeEmailID='+removeEmailID,
    //success: chatManagerCallBack,
    dataType: 'html'
    });
    jQuery('#update-email-feedback').html('You have removed the email: '+unitEmail);
  });

    jQuery( ".remove-unit-link" ).click(function () {
    var unitID = jQuery(this).data('unit-id');
    var routerID = jQuery(this).data('id-router');
    var removeUnitLink = jQuery(this).data('unit-link');
    var removeLinkID = jQuery(this).data('link-id');
    jQuery.ajax({
    type: "POST",
    url: jQuery('body').data('path') + 'process/unit-manager.php',
    data: 'mode=removeUnitLink&routerID='+routerID+'&unitID='+unitID+'&removeUnitLink='+removeUnitLink+'&removeLinkID='+removeLinkID,
    //success: chatManagerCallBack,
    dataType: 'html'
    });
  });

  jQuery( ".remove-unit-phone" ).click(function () {
    var unitPhone  = jQuery(this).data('unit-phone');
    var removePhoneID = jQuery(this).data('phone-id');
    var unitID = jQuery(this).data('unit-id');
    var routerID = jQuery(this).data('id-router');
    jQuery.ajax({
    type: "POST",
    url: jQuery('body').data('path') + 'process/unit-manager.php',
    data: 'mode=removeUnitPhone&routerID='+routerID+'&unitID='+unitID+'&unitPhone='+unitPhone+'&removePhoneID='+removePhoneID,
    //success: toBeDetermined,
    dataType: 'html'
    });
  });


//Good code beyond this point
//SA 18 Jan Start
  jQuery( ".remove-unit-fax" ).click(function () {
    var unitFAX  = jQuery(this).data('unit-fax');
    var removeFAXID = jQuery(this).data('fax-id');
    var unitID = jQuery(this).data('unit-id');
    var routerID = jQuery(this).data('id-router');
    jQuery.ajax({
    type: "POST",
    url: jQuery('body').data('path') + 'process/unit-manager.php',
    data: 'mode=removeUnitFAX&routerID='+routerID+'&unitID='+unitID+'&unitFAX='+unitFAX+'&removeFAXID='+removeFAXID,
    //success: toBeDetermined,
    dataType: 'html'
    });
  });

//SA 18 Jan End
  jQuery( ".remove-unit-keyword" ).click(function () {
    var keywordID = jQuery(this).data('keyword-id');
    var unitID = jQuery(this).data('unit-id');
    jQuery.ajax({
    type: "POST",
    url: jQuery('body').data('path') + 'process/unit-manager.php',
    data: 'mode=removeKeywordFromUnit&unitID='+unitID+'&keywordID='+keywordID,
    //success: toBeDetermined,
    dataType: 'html'
    });
  });

    jQuery( ".remove-unit-form" ).click(function () {
    var formID = jQuery(this).data('form-id');
    var unitID = jQuery(this).data('unit-id');
    jQuery.ajax({
    type: "POST",
    url: jQuery('body').data('path') + 'process/unit-manager.php',
    data: 'mode=removeFormFromUnit&unitID='+unitID+'&formID='+formID,
    //success: toBeDetermined,
    dataType: 'html'
    });
  });


//End information section start hours section


//Good code beyond this point
//SA 9 Feb 2017 start

jQuery( "#submit-special-hours" ).submit(function( event ) {
  // Stop form from submitting normally
  event.preventDefault();
        
        var unitID = jQuery('#submit-special-hours').data('unit-id');
        var routerID = jQuery('#submit-special-hours').data('id-router');
        var specialHoursStart = jQuery('#special-hours-start').val();
        var specialHoursEnd = jQuery('#special-hours-end').val(); 
        var specialLabel = jQuery('#special-hours-label').val(); 

          jQuery.ajax({
            type: "POST",
            url: jQuery('body').data('path') + 'process/unit-manager.php',
            data: "mode=addSpecialHours&routerID="+routerID+
            "&unitID="+unitID+
            "&specialHoursStart="+specialHoursStart+
            "&specialHoursEnd="+specialHoursEnd+
            "&specialLabel="+specialLabel,
            //success: toBeDetermined,
            dataType: 'html'
          });//end AJAX component of hours

          jQuery('#special-hours-start').val('Add another start time and date').css("color", "green");
          jQuery('#special-hours-end').val('Add another end time and date').css("color", "green");
          jQuery('#special-hours-label').val('Add another label').css("color", "green");
          jQuery('#feedback-special-hours').html('<h4 style="color:teal;">You updated special hours!</h4>');

});
//Good code beyond this point

  jQuery( ".remove-special-hours" ).click(function () {
    var unitID = jQuery('.remove-special-hours').data('unit-id');
    var routerID = jQuery('.remove-special-hours').data('id-router');
    var removeHoursID = jQuery(this).data('hours-id');
      jQuery.ajax({
      type: "POST",
      url: jQuery('body').data('path') + 'process/unit-manager.php',
      data: 'mode=removeSpecialHours&unitID='+unitID+'&removeHoursID='+removeHoursID,
      //success: toBeDetermied,
      dataType: 'html'
      });
      
    jQuery('#feedback-special-hours').html('<h4 style="color:teal;">You have removed special hours!</h4>');

  });

//SA 9 Feb 2017 end
//End hours section start users section
//Good code beyond this point

  jQuery('body').on('click', '.user-entry h4', function () {

      if ($(this).parent().find('ul').css('display') == 'block') {
      $('span:first-child', this).removeClass('glyphicon-triangle-bottom');
      $('span:first-child', this).addClass('glyphicon-triangle-right');
      $(this).parent().find('ul').css({'display':'none'});
    } else {
      $('span:first-child', this).removeClass('glyphicon-triangle-right');
      $('span:first-child', this).addClass('glyphicon-triangle-bottom');
      $(this).parent().find('ul').css({'display':'block'});
     
      }
    });


  $('.add-a-user').keyup(function(){

      if ($(this).val().length >= 3) {

          var searchTerm = $(this).val().split(' ');
          var allMatches = [];

          for (i = 0; i < searchTerm.length; i++) { 
              var currentTerm = searchTerm[i].trim();
              if (currentTerm.length >= 3) {

                  var matcher = new RegExp(currentTerm + "+", "i");
                  var matches = $.grep(userInfo, function(item){ return matcher.test(item);});
                  for (var j = 0; j < matches.length; j++) {

                      
                      var skipUser = false;
                      $(this).parents('ul').children('li').each(function(index) {
                        if ($('a',this).data('user-id') == matches[j][0]) {
                          skipUser = true;
                        }


                      });
                                           
                      //$(this).parent().parent().each(function(index) {
                       
                      //});
                      if (!skipUser) {
                        allMatches.push(matches[j]);
                      }
                  }
              }
          }
          allMatches = allMatches.sort();
          var resultList = '';
          for (i = 0; i < allMatches.length; i++) {
              //allMatches[i] = allMatches[i].split('%%%');
              
              resultList += '<li><input type="checkbox" id="user'+allMatches[i][0]+'" class="user-to-add" data-user-id="'+allMatches[i][0]+'"> <label for="user'+allMatches[i][0]+'">' + allMatches[i][1] + '</label></li>';
          }
          
          $(this).parent().next().html('<ul class="unassigned-users">'+resultList+'</ul>');
      } else {
          $(this).parent().next().html('');
      }
  });


//Good code beyond this point
//SA 21 Dec 2016 user-to-add, remove-user and routable copied code below is from staff-router-editor.js
  jQuery('body').on('click', '.user-to-add', function () {

    var userID = jQuery(this).data('user-id');
    var routerID = jQuery(this).data('router-id');
    var unitID = jQuery(this).parent().parent().parent().parent().data('unit-id');

    jQuery.ajax({
      type: "POST",
      url: jQuery('body').data('path') + 'process/chat-manager.php',
      data: 'mode=assignUserToUnit&userID='+userID+'&unitID='+unitID+'&routerID='+routerID,
      success: chatManagerCallBack,
      dataType: 'json'
    });

    $(this).parent().parent().parent().prev().before('<li> <a class="removeUser" data-user-id="'+$(this).parent().find('input').data('user-id')+'"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a> '+$(this).parent().find('label').html()+'</li>');
    $(this).parent().parent().parent().prev().find('.add-a-user').val('');
    $(this).parent().remove();
  
  });


//Good code beyond this point
//SA 21 Dec 2016 the added copied code above is important to keep for functionality in users tab in unitManagementEditor.php

   jQuery('body').on('click', '.removeUser', function () {
    removeUnitsAndUsers(jQuery(this), jQuery(this).parent().parent().data('unit-id'), jQuery(this).data('user-id'));
  });
  function removeUnitsAndUsers (target, unitID, userID) {
    var userID = userID;
    var unitID = unitID;
    var routerID = jQuery('#staffRouterEditorContainer').data('router-id');
    target.parent().remove();
    jQuery.ajax({
      type: "POST",
      url: jQuery('body').data('path') + 'process/chat-manager.php',
      data: 'mode=removeUserFromUnit&userID='+userID+'&unitID='+unitID+'&routerID='+routerID,
      success: chatManagerCallBack,
      dataType: 'json'
    });
  }

      jQuery('body').on('change', '.routable', function() {
          var unitID = jQuery(this).data('unit-id');
          var userID = jQuery(this).data('user-id');
          var routable = jQuery(this).data('routable');
          var routerID = jQuery(this).data('router-id'); 
          
          if(jQuery(this).prop('checked')) {
      
                routable='1';
              } else {
                routable='0';
              } 
       
            jQuery.ajax({
                type: 'POST',
                url: jQuery('body').data('path') + 'process/chat-manager.php',
                data: 'mode=toggleRoutability&unitID='+unitID+'&userID='+userID+'&routable='+routable+'&routerID='+routerID,
                dataType: 'html', 
                success: function(result){
                console.log('logged ' +result+ '  routable:'+routable+ '  unitID:' +unitID+ '  userID:'+userID+ '  routerID:'+routerID);
                }//end success function result
              });//ajax
  
      });//onchange

////End users section start event section
//SA 6 Jan start
    jQuery( ".remove-unit-event" ).click(function () {
    var eventID = jQuery(this).data('event-id');
    var unitID = jQuery(this).data('unit-id');
    var routerID = jQuery(this).data('id-router');
    jQuery.ajax({
    type: "POST",
    url: jQuery('body').data('path') + 'process/unit-manager.php',
    data: 'mode=removeUnitEvent&unitID='+unitID+'&eventID='+eventID+'&routerID='+routerID,
    //success: toBeDetermined,
    dataType: 'html'
    });
  });

//SA 6 Jan end
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
            url: jQuery('body').data('path') + 'process/unit-manager.php',
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

     jQuery("#help-add-users").click(function(){
        jQuery("#help-add-users-view").toggle("slow", function(){
          //slow animation
        });
     });

//SA 8 Feb 17 start add for datepicker will need to add accessibility features
//SA 6 Jan IMPORTANT the datepicker dates must be varchar, and located AFTER time stamp in MAMP database
//Source File: https://eonasdan.github.io/bootstrap-datetimepicker/
//Reference One https://eonasdan.github.io/bootstrap-datetimepicker/Options/
//Reference Two http://momentjs.com/docs/#/displaying/format/
  $(function () {
                $('#datetimepicker3, #datetimepicker4').datetimepicker();
              });

//SA 8 Feb 17 end add section for additional datepicker  

/////////////////////////////Sharon Do NOT TOUCH DO NOT remove closing bracket below
});//end document ready for unitmanagementeditor.js
