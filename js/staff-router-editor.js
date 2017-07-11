//!Important staffRouterEditorContainer is used in userMangagementEditor and OTHER files do not delete this file without
//transferring functionality that is associated with id staffRouterEditorContainer and the data

//SA to do list for this file
//SA 20 December 2016 staffRouterEditor retired by moving from Management Drop-down list. Coordinate with CF on moving file functionality
//SA 19 Dec 2016 check that routability is actually working properly
//SA 19 Dec check taht this on click .alphabetical index is actually being used and is functional line 26
 /* 
jQuery(document).ready(function () {

  var unitInfo = jQuery('#staffRouterEditorContainer').data('units');
  var userInfo = jQuery('#staffRouterEditorContainer').data('users');

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
//SA added below 26 September
//SA still needs work this is opening ALL ul, not just the one for letter of alphabet opened
//SA 19 December is this functionality actually being used please check
  jQuery(this).on('click', '.alphabetical-index', function () {
     if ($(this).parent().find('.alphabetical-entry').css('display') == 'block') {
      $('span:first-child', this).removeClass('glyphicon-triangle-bottom');
      $('span:first-child', this).addClass('glyphicon-triangle-right');
      $(this).parent().find('.alphabetical-entry').css({'display':'none'});
    } else {
      $('span:first-child', this).removeClass('glyphicon-triangle-right');
      $('span:first-child', this).addClass('glyphicon-triangle-bottom');
      $(this).parent().find('.alphabetical-entry').css({'display':'block'});
     
    }//else

  });//onclick

//SA added above 26 September
  

  jQuery('body').on('click', '.removeUnit', function () {
    removeUnitsAndUsers(jQuery(this), jQuery(this).data('unit-id'), jQuery(this).parent().parent().data('user-id'));
  });

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
  jQuery('body').on('click', '.unit-to-add', function () {
    var userID = jQuery(this).parent().parent().parent().parent().data('user-id');
    var unitID = jQuery(this).data('unit-id');
    var routerID = jQuery('#staffRouterEditorContainer').data('router-id');
    jQuery.ajax({
      type: "POST",
      url: jQuery('body').data('path') + 'process/chat-manager.php',
      data: 'mode=assignUserToUnit&userID='+userID+'&unitID='+unitID+'&routerID='+routerID,
      success: chatManagerCallBack,
      dataType: 'json'
    });

    var routerID = jQuery('#staffRouterEditorContainer').data('router-id');
    var dynCheckbox = "<input name='routable' class='routable' data-router-id='"+routerID+"' data-routable='0' data-unit-id='"+unitID+"' data-user-id='"+userID+"' type='checkbox'>";
 
    $(this).parent().parent().parent().prev().before('<li> <a class="removeUnit" data-unit-id="'+$(this).parent().find('input').data('unit-id')+'"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a> '+$(this).parent().find('label').html()+' '+dynCheckbox+'</li>');
    $(this).parent().parent().parent().prev().find('.add-a-unit').val('');
    $(this).parent().remove();

  });


  jQuery('body').on('click', '.user-to-add', function () {

    var userID = jQuery(this).data('user-id');
    var unitID = jQuery(this).parent().parent().parent().parent().data('unit-id');

    jQuery.ajax({
      type: "POST",
      url: jQuery('body').data('path') + 'process/chat-manager.php',
      data: 'mode=assignUserToUnit&userID='+userID+'&unitID='+unitID,
      success: chatManagerCallBack,
      dataType: 'json'
    });

    $(this).parent().parent().parent().prev().before('<li> <a class="removeUser" data-user-id="'+$(this).parent().find('input').data('user-id')+'"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a> '+$(this).parent().find('label').html()+'</li>');
    $(this).parent().parent().parent().prev().find('.add-a-user').val('');
    $(this).parent().remove();
  
  });

//SLA 29 September 
  
  jQuery('body').on('click', '.unit-letter', function (){
    var unitLetter = $(this).data('unit-letter');
    //jQuery(this).css({'color': 'green'});
    console.log('clicked ' + jQuery(this).data('unit-letter'));  
  });

//SLA 29 September 

      jQuery('body').on('change', '.routable', function() {
          var unitID = jQuery(this).data('unit-id');
          var userID = jQuery(this).data('user-id');
          var routable = jQuery(this).data('routable');
          var routerID = jQuery(this).data('router-id'); 

          alert('The user id is: '+userID);
          alert(unitID);
          alert('On first change the routable is: '  +routable);
          alert(routerID);
           
          if(jQuery(this).prop('checked')) {

      
            routable='1';
            alert(jQuery(this).data('unit-id') + ' is checked');
            alert('1 routable is: ' +routable);    
          } else {

            routable='0';
            alert(jQuery(this).data('unit-id') + ' is NOT checked');
            alert('0 routable is: ' +routable);       
          } 
       
            jQuery.ajax({
                type: 'POST',
                url: jQuery('body').data('path') + 'process/chat-manager.php',
                data: 'mode=toggleRoutability&unitID='+unitID+'&userID='+userID+'&routable='+routable+'&routerID='+routerID,
                //dataType: 'html', 
                success: function(result){
                  console.log('logged ' +result+ '  routable:'+routable+ '  unitID:' +unitID+ '  userID:'+userID+ '  routerID:'+routerID);
                }//end success function result
              });//ajax
  
      });//onchange



  $('.add-a-unit').keyup(function(){

      if ($(this).val().length >= 3) {
          var searchTerm = $(this).val().split(' ');
          var allMatches = [];

          for (i = 0; i < searchTerm.length; i++) { 
              var currentTerm = searchTerm[i].trim();
              if (currentTerm.length >= 3) {

                  var matcher = new RegExp(currentTerm + "+", "i");
                  var matches = $.grep(unitInfo, function(item){ return matcher.test(item);});
                  for (var j = 0; j < matches.length; j++) {

                      
                      var skipUnit = false;
                      $(this).parents('ul').children('li').each(function(index) {
                        if ($('a',this).data('unit-id') == matches[j][0]) {
                          skipUnit = true;
                        }


                      });
                                           
                      //$(this).parent().parent().each(function(index) {
                       
                      //});
                      if (!skipUnit) {
                        allMatches.push(matches[j]);
                      }
                  }
              }
          }
          allMatches = allMatches.sort();
          var resultList = '';
          for (i = 0; i < allMatches.length; i++) {
              //allMatches[i] = allMatches[i].split('%%%');
              
              resultList += '<li><input type="checkbox" id="unit'+allMatches[i][0]+'" class="unit-to-add" data-org="'+allMatches[i][2]+'" data-unit-id="'+allMatches[i][0]+'"> <label for="unit'+allMatches[i][0]+'">' + allMatches[i][3] + '</label></li>';
          }

          
          $(this).parent().next().html('<ul class="unassigned-units">'+resultList+'</ul>');
      } else {
          $(this).parent().next().html('');
      }
  });





  jQuery('#remove-user-from-unit').click(function(){
    alert('you clicked remove user');
    jQuery( ".select-users" ).removeClass( "add-to-unit" );
    jQuery( ".select-units" ).removeClass( "add-to-unit" );
    jQuery( ".select-users" ).addClass( "remove-from-unit" );
    jQuery( ".select-units" ).addClass( "remove-from-unit" );
  });

  jQuery('#add-user-to-unit').click(function(){
    alert('you clicked add user');
    jQuery( ".select-users" ).removeClass( "remove-from-unit" );
    jQuery( ".select-units" ).removeClass( "remove-from-unit" );
    jQuery( ".select-users" ).addClass( "add-to-unit" );
    jQuery( ".select-units" ).addClass( "add-to-unit" );
  });


 jQuery('body').on('click', '.browse-units', function () {
  $(".view-units" ).toggle();
   });
 

 jQuery('body').on('click', '.view-unit-description', function () {
  $(this).next(".view-description" ).toggle();
   });

//Sharon notice Casey's formatting to get path for process files
  jQuery( "input[type=checkbox].remove-from-unit" ).click(function () {
    var idUnit = jQuery('.remove-from-unit').val();
    var selectedUser = jQuery('.remove-from-unit').data('user-id');
    jQuery.ajax({
    type: "POST",
    url: jQuery('body').data('path') + 'process/chat-manager.php',
    data: 'idUnit='+idUnit+'&idUser='+selectedUser,
    success: chatManagerCallBack,
    dataType: 'json'
    });
  });

//DANGER do not remove closing below closes document ready  
});//closes document ready function
*/
