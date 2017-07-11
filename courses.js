$(document).ready(function() {
//SA As of 12 April 2017 still needs deployment to online.usfsp.edu 
                var terms = [['Spring','01'],['Summer','05'],['Fall','08']];
                d = new Date();
                d.getFullYear();
                currentMonth = d.getMonth();
                currentYear = d.getFullYear();
                var currentTerm = '';
                if (currentMonth <= 4) {
                    currentTerm = 0;
                } else if (currentMonth >= 5 && currentMonth <= 7) {
                    currentTerm = 1;
                } else {
                    currentTerm = 2;
                }
                if (currentTerm < terms.length - 1) {
                    nextTerm = currentTerm + 1;
                } else {
                    nextTerm = 0;
                }
                if (currentTerm + 1 < terms.length - 1) {
                    nextNextTerm = currentTerm + 2;
                    nextYear = currentYear;
                    nextNextYear = currentYear;
                } else if (currentTerm + 1 == terms.length - 1) {
                    nextNextTerm = 0;
                    nextYear = currentYear;
                    nextNextYear = currentYear + 1;
                } else {
                    nextNextTerm = 1;
                    nextYear = currentYear + 1;
                    nextNextYear = currentYear + 1;
                }                
//  original    $('#semester-chooser').append ('<button id="semester-option1" data-term="' + currentYear + terms[currentTerm][1] + '" type="button" class="semester-key btn btn-default btn-sm narrow">'+terms[currentTerm][0] + ' ' + currentYear+'</button> <button id="semester-option2" data-term="' + nextYear + terms[nextTerm][1] + '" type="button" class="semester-key btn btn-success-usfsp btn-sm active active-semester narrow">'+terms[nextTerm][0] + ' ' + nextYear+'</button> <button id="semester-option3" data-term="' + nextNextYear + terms[nextNextTerm][1] + '" type="button" class="semester-key btn btn-default btn-sm narrow">'+terms[nextNextTerm][0] + ' ' + nextNextYear+'</button>');
             $('#semester-chooser').append ('<div class="dropdown"><button type="button" class="btn btn-success dropdown-toggle narrow" id="semester-menu" data-toggle="dropdown">Semester<span class="caret"></span></button><ul class="dropdown-menu narrow" role="menu" aria-labelledby="semester-menu"><li id="semester-option1" data-term="' + currentYear + terms[currentTerm][1] + '" class="semester-key narrow"><a role="menuitem" href="#">'+terms[currentTerm][0] + ' ' + currentYear+'</a></li><li id="semester-option2" data-term="' + nextYear + terms[nextTerm][1] + '" class="semester-key active active-semester narrow"><a role="menuitem" href="#">'+terms[nextTerm][0] + ' ' + nextYear+'</a></li><li id="semester-option3" data-term="' + nextNextYear + terms[nextNextTerm][1] + '" class="semester-key narrow"><a role="menuitem" href="#">'+terms[nextNextTerm][0] + ' ' + nextNextYear+'</a></li></ul></div>');
                //var baselineSemester = (currentYear + terms[currentTerm][1]);

                $('#custom-search-step-1 button').click(function(){
                    if ($(this).hasClass('active')) {
                        $(this).removeClass('active');
                        $(this).addClass('btn-default');
                        $(this).removeClass('btn-success-usfsp');
                    } else {
                        $(this).addClass('active');
                        $(this).removeClass('btn-default');
                        $(this).addClass('btn-success-usfsp');
                    }
                });



  jQuery('#delivery-format1').on('click', function() { 
        if ($(this).hasClass('active-online')) {
          $(this).removeClass('active-online');
          $(this).removeClass('active');//from above
          $(this).addClass('btn-default');//from above
          $(this).removeClass('btn-success-usfsp');//from above
          jQuery('#delivery-format2').removeClass('btn-default');
           jQuery('#delivery-format2').addClass('active-oncampus');
          jQuery('#delivery-format2').addClass('active');
          jQuery('#delivery-format2').addClass('btn-success-usfsp');
         } else {
          jQuery('#delivery-format1').addClass('active-online');
          $(this).addClass('active');//from above
          $(this).removeClass('btn-default');//from above
          $(this).addClass('btn-success-usfsp');//from above
          jQuery('#delivery-format2').removeClass('active');
          jQuery('#delivery-format2').removeClass('active-oncampus');
          jQuery('#delivery-format2').removeClass('btn-success-usfsp');
          jQuery('#delivery-format2').addClass('btn-default');
       }
  });


$( "body" ).on( 'click', 'button.course-details', function() {
  var buttonClass = $(this).data('course-details');
   $('li.'+buttonClass).toggle();  
});


  jQuery('#semester-option1').on('click', function() { 
         if ($(this).hasClass('active-semester')) {
         $(this).removeClass('active-semester');
          $(this).removeClass('active');
          $(this).addClass('btn-default');
          $(this).removeClass('btn-success-usfsp');
         } else {
         jQuery('#semester-option1').addClass('active-semester');
          $(this).addClass('active');
          $(this).removeClass('btn-default');
          $(this).addClass('btn-success-usfsp');
       } 
  });

  jQuery('#semester-option2').on('click', function() { 
        if ($(this).hasClass('active-semester')) {
          $(this).removeClass('active-semester');
          $(this).removeClass('active');
          $(this).addClass('btn-default');
          $(this).removeClass('btn-success-usfsp');
        } else {
         jQuery('#semester-option2').addClass('active-semester');
          $(this).addClass('active');
          $(this).removeClass('btn-default');
          $(this).addClass('btn-success-usfsp');
       }
  });


  jQuery('#semester-option3').on('click', function() { 
        if ($(this).hasClass('active-semester')) {
          $(this).removeClass('active-semester');
          $(this).removeClass('active');//from above
          $(this).addClass('btn-default');//from above
          $(this).removeClass('btn-success-usfsp');//from above
        } else {
         jQuery('#semester-option3').addClass('active-semester');
          $(this).addClass('active');//from above
          $(this).removeClass('btn-default');//from above
          $(this).addClass('btn-success-usfsp');//from above
        } 
  });



toggleSearchFilters($('#i-stpete'));

function toggleSearchFilters (target) {
    if (target.hasClass('active')) {
        target.removeClass('btn-success-usfsp active');
        target.addClass('btn-default');  
    } else {
        target.removeClass('btn-default');
        target.addClass('btn-success-usfsp active');      
    }
  }

//SA 1 May start change from button to li to accomodate dropdown

  jQuery("#course-input").on("keypress", function(e){
      var searchSemesterKey = [];
      jQuery('li.semester-key').each(function(index) {
      index++;
      if ($('#semester-option'+index).hasClass('active-semester')) {
        searchSemesterKey.push(jQuery("#semester-option"+index).data('term'));
      }
    });

/*

  jQuery("#course-input").on("keypress", function(e){
      var searchSemesterKey = [];
      jQuery('button.semester-key').each(function(index) {
      index++;
      if ($('#semester-option'+index).hasClass('active-semester')) {
        searchSemesterKey.push(jQuery("#semester-option"+index).data('term'));
      }
    });
*/

//SA 1 May end change from button to li to accomodate dropdown

      var deliveryMethod4 = '';
      if ($('#delivery-format1').hasClass('active')) {
        deliveryMethod4 = '4';
       } else {
         deliveryMethod4 = '';
      }

    var keycode = e.keyCode ? e.keyCode : e.which;
    if (keycode === 13) {

      jQuery('#search-loader').css({'display':'block'});
      jQuery('#search-courses').css({'display':'none'});
      jQuery('#response-with-result2').css({'display':'none'});

      var input = jQuery('#course-input').val();
      var searchTermKey = jQuery('#course-input').val();
      var searchTypeKey = 'typed';
      var userID = jQuery('#course-input').data('user-id');
          $.get( jQuery('body').data('path') + 'search.php', { 'searchSemesterKey': searchSemesterKey, 'deliveryMethod4': deliveryMethod4, 'searchTermKey': searchTermKey, 'searchTypeKey': 'typed'})
            .done(function( data ) {
                jQuery("#search-courses").html(data);
                jQuery('#search-loader').css({'display':'none'});
                jQuery('#search-courses').css({'display':'block'});
                jQuery('#custom-search-step-1').css({'display':'block'});
                jQuery('#response-with-result2').css({'display':'block'});
              });           
            }//keycode    
        });//keypress


  jQuery("#input2").on("click", function(e){

    jQuery('#search-loader').css({'display':'block'});
    jQuery('#custom-search-step-1').css({'display':'block'});
    jQuery('#search-courses').css({'display':'none'});
    jQuery('#response-with-result2').css({'display':'none'});

//SA 1 May 2017 start change from button to dropdown
/*
    var searchSemesterKey = [];
    jQuery('button.semester-key').each(function(index) {
      index++;
      if ($('#semester-option'+index).hasClass('active-semester')) {
        searchSemesterKey.push(jQuery("#semester-option"+index).data('term'));
      }
    });
*/
    var searchSemesterKey = [];
    jQuery('li.semester-key').each(function(index) {
      index++;
      if ($('#semester-option'+index).hasClass('active-semester')) {
        searchSemesterKey.push(jQuery("#semester-option"+index).data('term'));
      }
    });

//SA 1 May 2017 end 
//The number 4 as a suffix is a reminder that oasis currently uses it as an indicator of online classes
      var deliveryMethod4 = '';
      if ($('#delivery-format1').hasClass('active')) {
        deliveryMethod4 = '4';
       } else {
         deliveryMethod4 = '';
      }

    var input = jQuery('#course-input').val();
    var searchTermKey = jQuery('#course-input').val();
    var searchTypeKey = 'typed';
    var userID = jQuery('#course-input').data('user-id');
        $.get( jQuery('body').data('path') + 'search.php', { 'searchSemesterKey': searchSemesterKey, 'deliveryMethod4': deliveryMethod4, 'searchTermKey': searchTermKey, 'searchTypeKey': 'typed'})
          .done(function(data) {
              jQuery("#search-courses").html(data);
              jQuery('#search-courses').css({'display':'block'});
              jQuery('#response-with-result2').css({'display':'block'});
              jQuery('#search-loader').css({'display':'none'});
          });           
        });//keypress




//SA 1 May 2017 start add

$('#online-menu + [aria-labelledby="online-menu"] a').on('click', function (e) {
  e.preventDefault();
  var format = this;
  //alert(format);
  var choice = $(this).text();
  var choiceID = $(this).data('format');
  //alert(choiceID);
  $('#online-menu').html(choice);

});

$('#campus-menu + [aria-labelledby="campus-menu"] a').on('click', function (e) {
  e.preventDefault();
  var campus = this;
  var campusChoice = $(this).text();
  var campusID = $(this).data('campus');
  $('#campus-menu').html(campusChoice);
});


//SA 1 May 2017 end add


/////////////////////////////////////////////////////////////
});//Do NOT remove this closes document ready

