
$(document).ready(function() {
//resend for deploybot

  //jQuery("#courses-lowvision").on("click", function(e){
  jQuery(".lowvision").on("click", function(e){
      $( '#lowvision-keyboard').toggle();
 });
/////////////////////////////////////////////////
  jQuery("#course-lvbutton").on("click", function(e){

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

    var input = jQuery('#course-inputlv').val();
    var searchTermKey = jQuery('#course-inputlv').val();
    var searchTypeKey = 'typed';
    var userID = jQuery('#course-inputlv').data('user-id');
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




///////////////////////////////////////////////
  /*
//////////////////////////////////////////////////////////////////////////////
//works but moving this up in the file
       var howManyClicks = 0;   
       $("#right-arrow").click(function() {

      howManyClicks++;
       //alert('howManyClicks: ' +howManyClicks); 
       var textEntered = $("#course-input").val();
       //alert('text entered is ' +textEntered);
       var lastKey = $("#course-input").val();
       var rightArrow = lastKey[lastKey.length - 1];
       //var theLetter = lastKey[lastKey.length - 1];
       //alert('rightArrow is ' +rightArrow);
         var $btn = $(this);
         var howManyClicks = ($btn.data("click_count") || 0) + 1;
         $("#right-arrow").data("click_count", howManyClicks);
         if ( howManyClicks == 1 )
         $("#right-arrow").text(rightArrow) && $("#right-arrow").val(rightArrow) && $("#right-arrow").css({'color' : 'red', 'font-size' : '5em'});
         else if ( howManyClicks == 2 )
         $("#right-arrow").text(rightArrowAlt1) && $("#right-arrow").val(rightArrowAlt1) && $("#right-arrow").css({'color' : 'red', 'font-size' : '5em'});
         else if ( howManyClicks == 3 )
         $("#right-arrow").text(rightArrowAlt2) && $("#right-arrow").val(rightArrowAlt2) && $("#right-arrow").css({'color' : 'red', 'font-size' : '5em'});
         else if ( howManyClicks == 4 )
         $("#right-arrow").text(rightArrowAlt3) && $("#right-arrow").val(rightArrowAlt3) && $("#right-arrow").css({'color' : 'red', 'font-size' : '5em'});
         else if ( howManyClicks == 5 )
         $("#right-arrow").text(rightArrowAlt4) && $("#right-arrow").val(rightArrowAlt4) && $("#right-arrow").css({'color' : 'red', 'font-size' : '5em'});
         else if ( howManyClicks == 6 )
         $("#right-arrow").text(rightArrowAlt5) && $("#right-arrow").val(rightArrowAlt5) && $("#right-arrow").css({'color' : 'red', 'font-size' : '5em'});
         else {
         $("#right-arrow").text("last alternate");
           //$btn.unbind("click");
         var howManyClicks = 0; 
         }
         return false;
});

//SA 23 May 2017 end right arrow



//////////////////////////////////////
//SA 24 May 2017 update
       
       jQuery('#accept-option').on('click', function() {

         $('#accept-option').val(function(i,v){
          return v.substr(0,(v.length -1))
            });
            //return false;
 
       var specialKey = textEntered[textEntered.length - 1];
       alert('specialKey is '+specialKey);
       //var theLetter = specialKey;//storing the last choice 
       
         var caretPos = document.getElementById("course-input").selectionStart;
         alert('caretPos is  '+caretPos);
         var textAreaTxt = jQuery("#course-input").val();
         alert('textAreaText is ' +textAreaTxt);
         //var txtToAdd = ($(this).val());
         //jQuery("#course-input").val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
         jQuery("#course-input").val(textAreaTxt.substring(0, caretPos) + 'txtToAdd' + textAreaTxt.substring(caretPos) );

  $('#accept-option').html('<span style="font-size:10em;color:red;">'+specialKey+'</span>'); 

});//closing brace right-arrow button 
/////////////////////////////////////////////////////////////////////////////
//IMPORTANT keypress needed rather than keydown to capture case

       var theLetter ='';
       $('#course-input').keypress(function(e){ 
           //if (e.which == 13) $('#right-arrow').html('reset'); 
             
       var theLetter = String.fromCharCode(e.which); 

        var alternate1 = '';
        var alternate2 = '';
        var alternate3 = '';
        var alternate4 = '';
        var alternate5 = '';
        var alternate6 = '';

        var text;
          switch(theLetter) {

              case 'A':
              text = 'You chose the upper-case letter A.';
              alternate1 = 'Q';
              rightArrowAlt1 = 'Q';
              alternate2 = 'W';
              rightArrowAlt2 = 'W';
              alternate3 = 'S';
              rightArrowAlt3 = 'S';
              alternate4 = 'Z';
              rightArrowAlt4 = 'Z';
              alternate5 = 'Shift';
              rightArrowAlt5 = 'Shift';
              alternate6 = 'Caps';
              rightArrowAlt6 = 'Caps';
              break;

              case 'a':
              text = 'You chose the lower-case letter a.';
              alternate1 = 'q';
              rightArrowAlt1 = 'q';
              alternate2 = 'w';
              rightArrowAlt2 = 'w';
              alternate3 = 's';
              rightArrowAlt3 = 's';
              alternate4 = 'z';
              rightArrowAlt4 = 'z';
              alternate5 = 'Shift';
              rightArrowAlt5 = 'Shift';
              alternate6 = 'Caps';
              rightArrowAlt6 = 'Caps';
              break;

              case 'B':
              text = 'You chose the upper-case letter B.';
              alternate1 = 'G';
              rightArrowAlt1 = 'G';
              alternate2 = 'H';
              rightArrowAlt2 = 'H';
              alternate3 = 'N';
              rightArrowAlt3 = 'N';
              alternate4 = 'SpaceBar';
              rightArrowAlt4 = 'SpaceBar';
              alternate5 = 'V';
              rightArrowAlt5 = 'V';
              alternate6 = 'F';
              rightArrowAlt6 = 'F';
              break;

              case 'b':
              text = 'You chose the lower-case letter b.';
              alternate1 = 'g';
              rightArrowAlt1 = 'g';
              alternate2 = 'h';
              rightArrowAlt2 = 'h';
              alternate3 = 'n';
              rightArrowAlt3 = 'n';
              alternate4 = 'SpaceBar';
              rightArrowAlt4 = 'SpaceBar';
              alternate5 = 'v';
              rightArrowAlt5 = 'v';
              alternate6 = 'f';
              rightArrowAlt6 = 'f';
              break;

              case 'C':
              text = 'You chose the upper-case letter C.';
              alternate1 = 'D';
              rightArrowAlt1 = 'D';
              alternate2 = 'F';
              rightArrowAlt2 = 'F';
              alternate3 = 'V';
              rightArrowAlt3 = 'Q';
              alternate4 = 'SpaceBar';
              rightArrowAlt4 = 'SpaceBar';
              alternate5 = 'Alt';
              rightArrowAlt5 = 'Alt';
              alternate6 = 'X';
              rightArrowAlt6 = 'X';
              break;

              case 'c':
              text = 'You chose the lower-case letter c.';
              alternate1 = 'd';
              rightArrowAlt1 = 'd';
              alternate2 = 'f';
              rightArrowAlt2 = 'f';
              alternate3 = 'v';
              rightArrowAlt3 = 'v';
              alternate4 = 'SpaceBar';
              rightArrowAlt4 = 'SpaceBar';
              alternate5 = 'Alt';
              rightArrowAlt5 = 'Alt';
              alternate6 = 's';
              rightArrowAlt6 = 's';
              break;

              case 'D':
              text = 'You chose the upper-case letter D.';
              alternate1 = 'E';
              rightArrowAlt1 = 'E';
              alternate2 = 'R';
              rightArrowAlt2 = 'R';
              alternate3 = 'F';
              rightArrowAlt3 = 'F';
              alternate4 = 'C';
              rightArrowAlt4 = 'C';
              alternate5 = 'X';
              rightArrowAlt5 = 'X';
              alternate6 = 'S';
              rightArrowAlt6 = 'S';
              break;

              case 'd':
              text = 'You chose the lower-case letter d.';
              alternate1 = 'e';
              rightArrowAlt1 = 'e';
              alternate2 = 'r';
              rightArrowAlt2 = 'r';
              alternate3 = 'f';
              rightArrowAlt3 = 'f';
              alternate4 = 'c';
              rightArrowAlt4 = 'c';
              alternate5 = 'x';
              rightArrowAlt5 = 'x';
              alternate6 = 's';
              rightArrowAlt6 = 's';
              break;

              case 'E':
              text = 'You chose the upper-case letter E.';
              alternate1 = '3';
              rightArrowAlt1 = '3';
              alternate2 = '4';
              rightArrowAlt2 = '4';
              alternate3 = 'R';
              rightArrowAlt3 = 'R';
              alternate4 = 'D';
              rightArrowAlt4 = 'D';
              alternate5 = 'S';
              rightArrowAlt5 = 'S';
              alternate6 = 'W';
              rightArrowAlt6 = 'W';
              break;

              case 'e':
              text = 'You chose the lower-case letter e.';
              alternate1 = '3';
              rightArrowAlt1 = '3';
              alternate2 = '4';
              rightArrowAlt2 = '4';
              alternate3 = 'r';
              rightArrowAlt3 = 'r';
              alternate4 = 'd';
              rightArrowAlt4 = 'd';
              alternate5 = 's';
              rightArrowAlt5 = 's';
              alternate6 = 'w';
              rightArrowAlt6 = 'w';
              break;

              case 'F':
              text = 'You chose the upper-case letter F.';
              alternate1 = 'R';
              rightArrowAlt1 = 'R';
              alternate2 = 'T';
              rightArrowAlt2 = 'T';
              alternate3 = 'G';
              rightArrowAlt3 = 'G';
              alternate4 = 'V';
              rightArrowAlt4 = 'V';
              alternate5 = 'C';
              rightArrowAlt5 = 'C';
              alternate6 = 'D';
              rightArrowAlt6 = 'D';
              break;

              case 'f':
              text = 'You chose the lower-case letter f.';
              alternate1 = 'r';
              rightArrowAlt1 = 'r';
              alternate2 = 't';
              rightArrowAlt2 = 't';
              alternate3 = 'g';
              rightArrowAlt3 = 'g';
              alternate4 = 'v';
              rightArrowAlt4 = 'v';
              alternate5 = 'c';
              rightArrowAlt5 = 'c';
              alternate6 = 'd';
              rightArrowAlt6 = 'd';
              break;

              case 'G':
              text = 'You chose the upper-case letter G.';
              alternate1 = 'T';
              rightArrowAlt1 = 'T';
              alternate2 = 'Y';
              rightArrowAlt2 = 'Y';
              alternate3 = 'H';
              rightArrowAlt3 = 'H';
              alternate4 = 'B';
              rightArrowAlt4 = 'B';
              alternate5 = 'V';
              rightArrowAlt5 = 'V';
              alternate6 = 'F';
              rightArrowAlt6 = 'F';
              break;

              case 'g':
              text = 'You chose the lower-case letter g.';
              alternate1 = 't';
              rightArrowAlt1 = 't';
              alternate2 = 'y';
              rightArrowAlt2 = 'y';
              alternate3 = 'h';
              rightArrowAlt3 = 'h';
              alternate4 = 'b';
              rightArrowAlt4 = 'b';
              alternate5 = 'v';
              rightArrowAlt5 = 'v';
              alternate6 = 'f';
              rightArrowAlt6 = 'f';
              break;

              case 'H':
              text = 'You chose the upper-case letter H.';
              alternate1 = 'Y';
              rightArrowAlt1 = 'Y';
              alternate2 = 'U';
              rightArrowAlt2 = 'U';
              alternate3 = 'J';
              rightArrowAlt3 = 'J';
              alternate4 = 'N';
              rightArrowAlt4 = 'N';
              alternate5 = 'B';
              rightArrowAlt5 = 'B';
              alternate6 = 'G';
              rightArrowAlt6 = 'G';
              break;

              case 'h':
              text = 'You chose the lower-case letter h.';
              alternate1 = 'y';
              rightArrowAlt1 = 'y';
              alternate2 = 'u';
              rightArrowAlt2 = 'u';
              alternate3 = 'j';
              rightArrowAlt3 = 'j';
              alternate4 = 'n';
              rightArrowAlt4 = 'n';
              alternate5 = 'b';
              rightArrowAlt5 = 'b';
              alternate6 = 'g';
              rightArrowAlt6 = 'g';
              break;


              case 'I':
              text = 'You chose the upper-case letter I.';
              alternate1 = '8';
              rightArrowAlt1 = '8';
              alternate2 = '9';
              rightArrowAlt2 = '9';
              alternate3 = 'O';
              rightArrowAlt3 = '0';
              alternate4 = 'K';
              rightArrowAlt4 = 'K';
              alternate5 = 'J';
              rightArrowAlt5 = 'J';
              alternate6 = 'U';
              rightArrowAlt6 = 'U';
              break;

              case 'i':
              text = 'You chose the lower-case letter i.';
              alternate1 = '8';
              rightArrowAlt1 = '8';
              alternate2 = '9';
              rightArrowAlt2 = '9';
              alternate3 = 'o';
              rightArrowAlt3 = 'o';
              alternate4 = 'k';
              rightArrowAlt4 = 'k';
              alternate5 = 'j';
              rightArrowAlt5 = 'j';
              alternate6 = 'u';
              rightArrowAlt6 = 'u';
              break;


              case 'J':
              text = 'You chose the upper-case letter J.';
              alternate1 = 'U';
              rightArrowAlt1 = 'U';
              alternate2 = 'I';
              rightArrowAlt2 = 'I';
              alternate3 = 'K';
              rightArrowAlt3 = 'K';
              alternate4 = 'M';
              rightArrowAlt4 = 'M';
              alternate5 = 'N';
              rightArrowAlt5 = 'N';
              alternate6 = 'H';
              rightArrowAlt6 = 'H';
              break;

              case 'j':
              text = 'You chose the lower-case letter j.';
              alternate1 = 'u';
              rightArrowAlt1 = 'u';
              alternate2 = 'i';
              rightArrowAlt2 = 'i';
              alternate3 = 'k';
              rightArrowAlt3 = 'k';
              alternate4 = 'm';
              rightArrowAlt4 = 'm';
              alternate5 = 'n';
              rightArrowAlt5 = 'n';
              alternate6 = 'h';
              rightArrowAlt6 = 'h';
              break;


              case 'K':
              text = 'You chose the upper-case letter K.';
              alternate1 = 'I';
              rightArrowAlt1 = 'I';
              alternate2 = 'O';
              rightArrowAlt2 = 'O';
              alternate3 = 'L';
              rightArrowAlt3 = 'L';
              alternate4 = '<';
              rightArrowAlt4 = '<';
              alternate5 = 'M';
              rightArrowAlt5 = 'M';
              alternate6 = 'J';
              rightArrowAlt6 = 'J';
              break;

              case 'k':
              text = 'You chose the lower-case letter k.';
              alternate1 = 'i';
              rightArrowAlt1 = 'i';
              alternate2 = 'o';
              rightArrowAlt2 = 'o';
              alternate3 = 'l';
              rightArrowAlt3 = 'l';
              alternate4 = ',';
              rightArrowAlt4 = ',';
              alternate5 = 'm';
              rightArrowAlt5 = 'm';
              alternate6 = 'j';
              rightArrowAlt6 = 'j';
              break;

              case 'L':
              text = 'You chose the upper-case letter L.';
              alternate1 = 'O';
              rightArrowAlt1 = 'O';
              alternate2 = 'P';
              rightArrowAlt2 = 'P';
              alternate3 = ':';
              rightArrowAlt3 = ':';
              alternate4 = '>';
              rightArrowAlt4 = '>';
              alternate5 = '<';
              rightArrowAlt5 = '<';
              alternate6 = 'K';
              rightArrowAlt6 = 'K';
              break;

              case 'l':
              text = 'You chose the lower-case letter l.';
              alternate1 = 'o';
              rightArrowAlt1 = 'o';
              alternate2 = 'p';
              rightArrowAlt2 = 'p';
              alternate3 = ';';
              rightArrowAlt3 = ';';
              alternate4 = '.';
              rightArrowAlt4 = '.';
              alternate5 = ',';
              rightArrowAlt5 = ',';
              alternate6 = 'k';
              rightArrowAlt6 = 'k';
              break;

              case 'M':
              text = 'You chose the upper-case letter M.';
              alternate1 = 'J';
              rightArrowAlt1 = 'J';
              alternate2 = 'K';
              rightArrowAlt2 = 'K';
              alternate3 = '<';
              rightArrowAlt3 = '<';
              alternate4 = 'SpaceBar';
              rightArrowAlt4 = 'SpaceBar';
              alternate5 = 'Spacebar';
              rightArrowAlt5 = 'Spacebar';
              alternate6 = 'N';
              rightArrowAlt6 = 'N';
              break;

              case 'm':
              text = 'You chose the lower-case letter m.';
              alternate1 = 'j';
              rightArrowAlt1 = 'j';
              alternate2 = 'k';
              rightArrowAlt2 = 'k';
              alternate3 = ',';
              rightArrowAlt3 = ',';
              alternate4 = 'Spacebar';
              rightArrowAlt4 = 'Spacebar';
              alternate5 = 'Spacebar';
              rightArrowAlt5 = 'Spacebar';
              alternate6 = 'n';
              rightArrowAlt6 = 'n';
              break;

              case 'N':
              text = 'You chose the upper-case letter N.';
              alternate1 = 'H';
              rightArrowAlt1 = 'H';
              alternate2 = 'J';
              rightArrowAlt2 = 'J';
              alternate3 = 'M';
              rightArrowAlt3 = 'M';
              alternate4 = 'SpaceBar';
              rightArrowAlt4 = 'SpaceBar';
              alternate5 = 'Spacebar';
              rightArrowAlt5 = 'Spacebar';
              alternate6 = 'B';
              rightArrowAlt6 = 'B';
              break;

              case 'n':
              text = 'You chose the lower-case letter n.';
              alternate1 = 'h';
              rightArrowAlt1 = 'h';
              alternate2 = 'j';
              rightArrowAlt2 = 'j';
              alternate3 = 'm';
              rightArrowAlt3 = 'm';
              alternate4 = 'Spacebar';
              rightArrowAlt4 = 'Spacebar';
              alternate5 = 'Spacebar';
              rightArrowAlt5 = 'Spacebar';
              alternate6 = 'b';
              rightArrowAlt6 = 'b';
              break;

              case 'O':
              text = 'You chose the upper-case letter O.';
              alternate1 = '9';
              rightArrowAlt1 = '9';
              alternate2 = '0';
              rightArrowAlt2 = '0';
              alternate3 = 'P';
              rightArrowAlt3 = 'P';
              alternate4 = 'L';
              rightArrowAlt4 = 'L';
              alternate5 = 'K'
              rightArrowAlt5 = 'K';
              alternate6 = 'I';
              rightArrowAlt6 = 'I';
              break;

              case 'o':
              text = 'You chose the lower-case letter o.';
              alternate1 = '9';
              rightArrowAlt1 = '9';
              alternate2 = '0';
              rightArrowAlt2 = '0';
              alternate3 = 'p';
              rightArrowAlt3 = 'p';
              alternate4 = 'l';
              rightArrowAlt4 = 'l';
              alternate5 = 'k';
              rightArrowAlt5 = 'k';
              alternate6 = 'i';
              rightArrowAlt6 = 'i';
              break;

              case 'P':
              text = 'You chose the upper-case letter P.';
              alternate1 = '0';
              rightArrowAlt1 = '0';
              alternate2 = '_';
              rightArrowAlt2 = '_';
              alternate3 = '{';
              rightArrowAlt3 = '{';
              alternate4 = ':';
              rightArrowAlt4 = ':';
              alternate5 = 'L';
              rightArrowAlt5 = 'L';
              alternate6 = 'O';
              rightArrowAlt6 = 'O';
              break;

              case 'p':
              text = 'You chose the lower-case letter p.';
              alternate1 = '0';
              rightArrowAlt1 = '0';
              alternate2 = '-';
              rightArrowAlt2 = '-';
              alternate3 = '[';
              rightArrowAlt3 = '[';
              alternate4 = ';';
              rightArrowAlt4 = ';';
              alternate5 = 'l';
              rightArrowAlt5 = 'l';
              alternate6 = 'o';
              rightArrowAlt6 = 'o';
              break;

              case 'Q':
              text = 'You chose the upper-case letter Q.';
              alternate1 = '!';
              rightArrowAlt1 = '!';
              alternate2 = '@';
              rightArrowAlt2 = '@';
              alternate3 = 'W';
              rightArrowAlt3 = 'W';
              alternate4 = 'A';
              rightArrowAlt4 = 'A';
              alternate5 = 'Caps';
              rightArrowAlt5 = 'Caps';
              alternate6 = 'Tab';
              rightArrowAlt6 = 'Tab';
              break;

              case 'q':
              text = 'You chose the lower-case letter q.';
              alternate1 = '1';
              rightArrowAlt1 = '1';
              alternate2 = '2';
              rightArrowAlt2 = '2';
              alternate3 = 'w';
              rightArrowAlt3 = 'w';
              alternate4 = 'a';
              rightArrowAlt4 = 'a';
              alternate5 = 'Caps';
              rightArrowAlt5 = 'Caps';
              alternate6 = 'Tab';
              rightArrowAlt6 = 'Tab';
              break;

              case 'R':
              text = 'You chose the upper-case letter R.';
              alternate1 = '$';
              rightArrowAlt1 = '$';
              alternate2 = '%';
              rightArrowAlt2 = '%';
              alternate3 = 'T';
              rightArrowAlt3 = 'T';
              alternate4 = 'F';
              rightArrowAlt4 = 'F';
              alternate5 = 'D';
              rightArrowAlt5 = 'D';
              alternate6 = 'E';
              rightArrowAlt6 = 'E';
              break;

              case 'r':
              text = 'You chose the lower-case letter r.';
              alternate1 = '4';
              rightArrowAlt1 = '4';
              alternate2 = '5';
              rightArrowAlt2 = '5';
              alternate3 = 't';
              rightArrowAlt3 = 't';
              alternate4 = 'f';
              rightArrowAlt4 = 'f';
              alternate5 = 'd';
              rightArrowAlt5 = 'd';
              alternate6 = 'e';
              rightArrowAlt6 = 'e';
              break;

              case 'S':
              text = 'You chose the upper-case letter S.';
              alternate1 = 'W';
              rightArrowAlt1 = 'W';
              alternate2 = 'E';
              rightArrowAlt2 = 'E';
              alternate3 = 'D';
              rightArrowAlt3 = 'D';
              alternate4 = 'X';
              rightArrowAlt4 = 'X';
              alternate5 = 'Z';
              rightArrowAlt5 = 'Z';
              alternate6 = 'A';
              rightArrowAlt6 = 'A';
              break;

              case 's':
              text = 'You chose the lower-case letter s.';
              alternate1 = 'w';
              rightArrowAlt1 = 'w';
              alternate2 = 'e';
              rightArrowAlt2 = 'e';
              alternate3 = 'd';
              rightArrowAlt3 = 'd';
              alternate4 = 'x';
              rightArrowAlt4 = 'x';
              alternate5 = 'z';
              rightArrowAlt5 = 'z';
              alternate6 = 'a';
              rightArrowAlt6 = 'a';
              break;

              case 'T':
              text = 'You chose the upper-case letter T.';
              alternate1 = '%';
              rightArrowAlt1 = '%';
              alternate2 = '^';
              rightArrowAlt2 = '^';
              alternate3 = 'Y';
              rightArrowAlt3 = 'Y';
              alternate4 = 'G';
              rightArrowAlt4 = 'G';
              alternate5 = 'F';
              rightArrowAlt5 = 'F';
              alternate6 = 'R';
              rightArrowAlt6 = 'R';
              break;

              case 't':
              text = 'You chose the lower-case letter t.';
              alternate1 = '5';
              rightArrowAlt1 = '5';
              alternate2 = '6';
              rightArrowAlt2 = '6';
              alternate3 = 'y';
              rightArrowAlt3 = 'y';
              alternate4 = 'g';
              rightArrowAlt4 = 'g';
              alternate5 = 'f';
              rightArrowAlt5 = 'f';
              alternate6 = 'r';
              rightArrowAlt6 = 'r';
              break;

              case 'U':
              text = 'You chose the upper-case letter U.';
              alternate1 = '&';
              rightArrowAlt1 = '&';
              alternate2 = '*';
              rightArrowAlt2 = '*';
              alternate3 = 'I';
              rightArrowAlt3 = 'I';
              alternate4 = 'J';
              rightArrowAlt4 = 'J';
              alternate5 = 'H';
              rightArrowAlt5 = 'H';
              alternate6 = 'Y';
              rightArrowAlt6 = 'Y';
              break;

              case 'u':
              text = 'You chose the lower-case letter u.';
              alternate1 = '7';
              rightArrowAlt1 = '7';
              alternate2 = '8';
              rightArrowAlt2 = '8';
              alternate3 = 'i';
              rightArrowAlt3 = 'i';
              alternate4 = 'j';
              rightArrowAlt4 = 'j';
              alternate5 = 'h';
              rightArrowAlt5 = 'h';
              alternate6 = 'y';
              rightArrowAlt6 = 'y';
              break;

              case 'V':
              text = 'You chose the upper-case letter V.';
              alternate1 = 'F';
              rightArrowAlt1 = 'F';
              alternate2 = 'G';
              rightArrowAlt2 = 'G';
              alternate3 = 'B';
              rightArrowAlt3 = 'B';
              alternate4 = 'Spacebar';
              rightArrowAlt4 = 'Spacebar';
              alternate5 = 'Spacebar';
              rightArrowAlt5 = 'Spacebar';
              alternate6 = 'C';
              rightArrowAlt6 = 'C';
              break;

              case 'v':
              text = 'You chose the lower-case letter v.';
              alternate1 = 'f';
              rightArrowAlt1 = 'f';
              alternate2 = 'g';
              rightArrowAlt2 = 'g';
              alternate3 = 'b';
              rightArrowAlt3 = 'b';
              alternate4 = 'Spacebar';
              rightArrowAlt4 = 'Spacebar';
              alternate5 = 'Spacebar';
              rightArrowAlt5 = 'Spacebar';
              alternate6 = 'c';
              rightArrowAlt6 = 'c';
              break;

              case 'W':
              text = 'You chose the upper-case letter W.';
              alternate1 = '@';
              rightArrowAlt1 = '@';
              alternate2 = '#';
              rightArrowAlt2 = '#';
              alternate3 = 'E';
              rightArrowAlt3 = 'E';
              alternate4 = 'S';
              rightArrowAlt4 = 'S';
              alternate5 = 'A';
              rightArrowAlt5 = 'A';
              alternate6 = 'Q';
              rightArrowAlt6 = 'Q';
              break;

              case 'w':
              text = 'You chose the lower-case letter w.';
              alternate1 = '2';
              rightArrowAlt1 = '2';
              alternate2 = '3';
              rightArrowAlt2 = '3';
              alternate3 = 'e';
              rightArrowAlt3 = 'e';
              alternate4 = 's';
              rightArrowAlt4 = 's';
              alternate5 = 'a';
              rightArrowAlt5 = 'a';
              alternate6 = 'q';
              rightArrowAlt6 = 'q';
              break;

              case 'X':
              text = 'You chose the upper-case letter X.';
              alternate1 = 'S';
              rightArrowAlt1 = 'S';
              alternate2 = 'D';
              rightArrowAlt2 = 'D';
              alternate3 = 'C';
              rightArrowAlt3 = 'C';
              alternate4 = 'Spacebar';
              rightArrowAlt4 = 'Spacebar';
              alternate5 = 'Alt';
              rightArrowAlt5 = 'Alt';
              alternate6 = 'Z';
              rightArrowAlt6 = 'Z';
              break;

              case 'x':
              text = 'You chose the lower-case letter x.';
              alternate1 = 's';
              rightArrowAlt1 = 's';
              alternate2 = 'd';
              rightArrowAlt2 = 'd';
              alternate3 = 'c';
              rightArrowAlt3 = 'c';
              alternate4 = 'Spacebar';
              rightArrowAlt4 = 'Spacebar';
              alternate5 = 'Alt';
              rightArrowAlt5 = 'Alt';
              alternate6 = 'z';
              rightArrowAlt6 = 'z';
              break;

              case 'Y':
              text = 'You chose the upper-case letter Y.';
              alternate1 = '^';
              rightArrowAlt1 = '^';
              alternate2 = '&';
              rightArrowAlt2 = '&';
              alternate3 = 'U';
              rightArrowAlt3 = 'U';
              alternate4 = 'H';
              rightArrowAlt4 = 'H';
              alternate5 = 'G';
              rightArrowAlt5 = 'G';
              alternate6 = 'T';
              rightArrowAlt6 = 'T';
              break;

              case 'y':
              text = 'You chose the lower-case letter y.';
              alternate1 = '6';
              rightArrowAlt1 = '6';
              alternate2 = '7';
              rightArrowAlt2 = '7';
              alternate3 = 'u';
              rightArrowAlt3 = 'u';
              alternate4 = 'h';
              rightArrowAlt4 = 'h';
              alternate5 = 'g';
              rightArrowAlt5 = 'g';
              alternate6 = 't';
              rightArrowAlt6 = 't';
              break;

              case 'Z':
              text = 'You chose the upper-case letter Z.';
              alternate1 = 'A';
              rightArrowAlt1 = 'A';
              alternate2 = 'S';
              rightArrowAlt2 = 'S';
              alternate3 = 'X';
              rightArrowAlt3 = 'X';
              alternate4 = 'Alt';
              rightArrowAlt4 = 'Alt';
              alternate5 = 'Special';
              rightArrowAlt5 = 'Special';
              alternate6 = 'Shift';
              rightArrowAlt6 = 'Shift';
              break;

              case 'z':
              text = 'You chose the lower-case letter z.';
              alternate1 = 'a';
              rightArrowAlt1 = 'a';
              alternate2 = 's';
              rightArrowAlt2 = 's';
              alternate3 = 'x';
              rightArrowAlt3 = 'x';
              alternate4 = 'Alt';
              rightArrowAlt4 = 'Alt';
              alternate5 = 'Special';
              rightArrowAlt5 = 'Special';
              alternate6 = 'Shift';
              rightArrowAlt6 = 'Shift';
              break;

              case '1':
              text = 'You chose the number 1.';
              alternate1 = '`';
              rightArrowAlt1 = '`';
              alternate2 = '2';
              rightArrowAlt2 = '2';
              alternate3 = '3';
              rightArrowAlt3 = '3';
              alternate4 = '4';
              rightArrowAlt4 = '4';
              alternate5 = '5';
              rightArrowAlt5 = '5';
              alternate6 = '6';
              rightArrowAlt6 = '6';
              break;

              case '2':
              text = 'You chose the number 2.';
              alternate1 = '1';
              rightArrowAlt1 = '1';
              alternate2 = '3';
              rightArrowAlt2 = '3';
              alternate3 = '4';
              rightArrowAlt3 = '4';
              alternate4 = '5';
              rightArrowAlt4 = '5';
              alternate5 = '6';
              rightArrowAlt5 = '6';
              alternate6 = '7';
              rightArrowAlt6 = '7';
              break;

              case '3':
              text = 'You chose the number 3.';
              alternate1 = '1';
              rightArrowAlt1 = '1';
              alternate2 = '2';
              rightArrowAlt2 = '2';
              alternate3 = '4';
              rightArrowAlt3 = '4';
              alternate4 = '5';
              rightArrowAlt4 = '5';
              alternate5 = '6';
              rightArrowAlt5 = '6';
              alternate6 = '7';
              rightArrowAlt6 = '7';
              break;

              case '4':
              text = 'You chose the number 4.';
              alternate1 = '1';
              rightArrowAlt1 = '1';
              alternate2 = '2';
              rightArrowAlt2 = '2';
              alternate3 = '3';
              rightArrowAlt3 = '3';
              alternate4 = '5';
              rightArrowAlt4 = '5';
              alternate5 = '6';
              rightArrowAlt5 = '6';
              alternate6 = '7';
              rightArrowAlt6 = '7';
              break;

              case '5':
              text = 'You chose the number 5.';
              alternate1 = '2';
              rightArrowAlt1 = '2';
              alternate2 = '3';
              rightArrowAlt2 = '3';
              alternate3 = '4';
              rightArrowAlt3 = '4';
              alternate4 = '6';
              rightArrowAlt4 = '6';
              alternate5 = '7';
              rightArrowAlt5 = '7';
              alternate6 = '8';
              rightArrowAlt6 = '8';
              break;

              case '6':
              text = 'You chose the number 6.';
              alternate1 = '3';
              rightArrowAlt1 = '3';
              alternate2 = '4';
              rightArrowAlt2 = '4';
              alternate3 = '5';
              rightArrowAlt3 = '5';
              alternate4 = '7';
              rightArrowAlt4 = '7';
              alternate5 = '8';
              rightArrowAlt5 = '8';
              alternate6 = '9';
              rightArrowAlt6 = '9';
              break;

              case '7':
              text = 'You chose the number 7.';
              alternate1 = '4';
              rightArrowAlt1 = '4';
              alternate2 = '5';
              rightArrowAlt2 = '5';
              alternate3 = '6';
              rightArrowAlt3 = '6';
              alternate4 = '8';
              rightArrowAlt4 = '8';
              alternate5 = '9';
              rightArrowAlt5 = '5';
              alternate6 = '0';
              rightArrowAlt6 = '0';
              break;

              case '8':
              text = 'You chose the number 8.';
              alternate1 = '5';
              rightArrowAlt1 = '5';
              alternate2 = '6';
              rightArrowAlt2 = '6';
              alternate3 = '7';
              rightArrowAlt3 = '7';
              alternate4 = '9';
              rightArrowAlt4 = '9';
              alternate5 = '0';
              rightArrowAlt5 = '0';
              alternate6 = '-';
              rightArrowAlt6 = '-';
              break;

              case '9':
              text = 'You chose the number 9.';
              alternate1 = '6';
              rightArrowAlt1 = '6';
              alternate2 = '7';
              rightArrowAlt2 = '7';
              alternate3 = '8';
              rightArrowAlt3 = '8';
              alternate4 = '0';
              rightArrowAlt4 = '0';
              alternate5 = '-';
              rightArrowAlt5 = '-';
              alternate6 = '=';
              rightArrowAlt6 = '=';
              break;

              case '0':
              text = 'You chose the number 0.';
              alternate1 = '7';
              rightArrowAlt1 = '7';
              alternate2 = '8';
              rightArrowAlt2 = '8';
              alternate3 = '9';
              rightArrowAlt3 = '9';
              alternate4 = '-';
              rightArrowAlt4 = '4';
              alternate5 = '=';
              rightArrowAlt5 = '=';
              alternate6 = '';
              rightArrowAlt6 = '';
              break;

              default:
              text = "To Be Determined";
            }

        //alert(text);
        //$('#lowv-letter').html($('#lowv-input').val());    
        $('#lowv-letter').html($('#course-input').val());      
        $('#lowv-feedback').html(text);
        $('#selected-letter').html(theLetter);
        $('#selected-letter').val(theLetter);
        $('#alternate1').html(alternate1);
        $('#alternate1').val(alternate1);
        $('#alternate2').html(alternate2);
        $('#alternate2').val(alternate2);   
        $('#alternate3').html(alternate3);
        $('#alternate3').val(alternate3);    
        $('#alternate4').html(alternate4);
        $('#alternate4').val(alternate4);    
        $('#alternate5').html(alternate5);
        $('#alternate5').val(alternate5);  
        $('#alternate6').html(alternate6);
        $('#alternate6').val(alternate6);
       

       });//change function
//});//right-arrow button 

//http://api.jquery.com/val/
//http://stackoverflow.com/questions/6891402/delete-last-character-from-input/6891436
//SA 23 May 2017 No longer used but please do not delete below this is used as a model
       /*
       jQuery('.letter-button').on('click', function() {

          $('#course-input').val(function(i,v){
            return v.substr(0,(v.length -1))
            });
            //return false;

         var caretPos = document.getElementById("course-input").selectionStart;
         var textAreaTxt = jQuery("#course-input").val();
         var txtToAdd = ($(this).val());
         jQuery("#course-input").val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
         
       });
       */
//SA 23 May 2017 No longer used but please do not delete above this is used as a model
//SA 2 May 2017 end add Frechette accessibility initiative
/*
function alt0() {
 document.getElementByID('selected-letter').innerHTML = "Selected";
}
function alt1() {
 document.getElementByID('alternate1').innerHTML = "Alternate 1";
}
function alt2() {
 document.getElementByID('alternate2').innerHTML = "Alternate 2";
}
function alt3() {
 document.getElementByID('alternate3').innerHTML = "Alternate 3";
}
function alt4() {
 document.getElementByID('alternate4').innerHTML = "Alternate 4";
}
function alt5() {
 document.getElementByID('alternate5').innerHTML = "Alternate 5";
}
function alt6() {
 document.getElementByID('alternate6').innerHTML = "Alternate 6";
}
*/

//SA 23 May 2017 start right arrow
//https://forum.jquery.com/topic/how-to-make-a-button-disabled-after-3-clicks
//var counter = 0;


//https://stackoverflow.com/questions/1772179/get-character-value-from-keycode-in-javascript-then-trim
//SA 24 2017 commenting out below but want to keep this for reference
/*
var keyCodes = [];

$("#courses-lowvision").click(function() {
  keyCodes = [];
  $("#course-input").val("");
  $("#key-codes").html("var keyCodes = [ ];");
  $("#key-names").html("var keyNames = [ ];");
});

$(document).keydown(function(e) {
  keyCodes.push(e.which);
  updateOutput();
});

function updateOutput() {
  var kC = "var keyCodes = [ ";
  var kN = "var keyNames = [ ";

  var len = keyCodes.length;

  for (var i = 0; i < len; i++) {
    kC += keyCodes[i];
    kN += "'"+keyboardMap[keyCodes[i]]+"'";
    if (i !== (len - 1)) {
      kC += ", ";
      kN += ", ";
    }
  }

  kC += " ];";
  kN += " ];";

  $("#key-codes").html(kC);
  $("#key-names").html(kN);
}

// names of known key codes (0-255)

var keyboardMap = [
  "", // [0]
  "", // [1]
  "", // [2]
  "CANCEL", // [3]
  "", // [4]
  "", // [5]
  "HELP", // [6]
  "", // [7]
  "BACK_SPACE", // [8]
  "TAB", // [9]
  "", // [10]
  "", // [11]
  "CLEAR", // [12]
  "ENTER", // [13]
  "ENTER_SPECIAL", // [14]
  "", // [15]
  "SHIFT", // [16]
  "CONTROL", // [17]
  "ALT", // [18]
  "PAUSE", // [19]
  "CAPS_LOCK", // [20]
  "KANA", // [21]
  "EISU", // [22]
  "JUNJA", // [23]
  "FINAL", // [24]
  "HANJA", // [25]
  "", // [26]
  "ESCAPE", // [27]
  "CONVERT", // [28]
  "NONCONVERT", // [29]
  "ACCEPT", // [30]
  "MODECHANGE", // [31]
  "SPACE", // [32]
  "PAGE_UP", // [33]
  "PAGE_DOWN", // [34]
  "END", // [35]
  "HOME", // [36]
  "LEFT", // [37]
  "UP", // [38]
  "RIGHT", // [39]
  "DOWN", // [40]
  "SELECT", // [41]
  "PRINT", // [42]
  "EXECUTE", // [43]
  "PRINTSCREEN", // [44]
  "INSERT", // [45]
  "DELETE", // [46]
  "", // [47]
  "0", // [48]
  "1", // [49]
  "2", // [50]
  "3", // [51]
  "4", // [52]
  "5", // [53]
  "6", // [54]
  "7", // [55]
  "8", // [56]
  "9", // [57]
  "COLON", // [58]
  "SEMICOLON", // [59]
  "LESS_THAN", // [60]
  "EQUALS", // [61]
  "GREATER_THAN", // [62]
  "QUESTION_MARK", // [63]
  "AT", // [64]
  "A", // [65]
  "B", // [66]
  "C", // [67]
  "D", // [68]
  "E", // [69]
  "F", // [70]
  "G", // [71]
  "H", // [72]
  "I", // [73]
  "J", // [74]
  "K", // [75]
  "L", // [76]
  "M", // [77]
  "N", // [78]
  "O", // [79]
  "P", // [80]
  "Q", // [81]
  "R", // [82]
  "S", // [83]
  "T", // [84]
  "U", // [85]
  "V", // [86]
  "W", // [87]
  "X", // [88]
  "Y", // [89]
  "Z", // [90]
  "OS_KEY", // [91] Windows Key (Windows) or Command Key (Mac)
  "", // [92]
  "CONTEXT_MENU", // [93]
  "", // [94]
  "SLEEP", // [95]
  "NUMPAD0", // [96]
  "NUMPAD1", // [97]
  "NUMPAD2", // [98]
  "NUMPAD3", // [99]
  "NUMPAD4", // [100]
  "NUMPAD5", // [101]
  "NUMPAD6", // [102]
  "NUMPAD7", // [103]
  "NUMPAD8", // [104]
  "NUMPAD9", // [105]
  "MULTIPLY", // [106]
  "ADD", // [107]
  "SEPARATOR", // [108]
  "SUBTRACT", // [109]
  "DECIMAL", // [110]
  "DIVIDE", // [111]
  "F1", // [112]
  "F2", // [113]
  "F3", // [114]
  "F4", // [115]
  "F5", // [116]
  "F6", // [117]
  "F7", // [118]
  "F8", // [119]
  "F9", // [120]
  "F10", // [121]
  "F11", // [122]
  "F12", // [123]
  "F13", // [124]
  "F14", // [125]
  "F15", // [126]
  "F16", // [127]
  "F17", // [128]
  "F18", // [129]
  "F19", // [130]
  "F20", // [131]
  "F21", // [132]
  "F22", // [133]
  "F23", // [134]
  "F24", // [135]
  "", // [136]
  "", // [137]
  "", // [138]
  "", // [139]
  "", // [140]
  "", // [141]
  "", // [142]
  "", // [143]
  "NUM_LOCK", // [144]
  "SCROLL_LOCK", // [145]
  "WIN_OEM_FJ_JISHO", // [146]
  "WIN_OEM_FJ_MASSHOU", // [147]
  "WIN_OEM_FJ_TOUROKU", // [148]
  "WIN_OEM_FJ_LOYA", // [149]
  "WIN_OEM_FJ_ROYA", // [150]
  "", // [151]
  "", // [152]
  "", // [153]
  "", // [154]
  "", // [155]
  "", // [156]
  "", // [157]
  "", // [158]
  "", // [159]
  "CIRCUMFLEX", // [160]
  "EXCLAMATION", // [161]
  "DOUBLE_QUOTE", // [162]
  "HASH", // [163]
  "DOLLAR", // [164]
  "PERCENT", // [165]
  "AMPERSAND", // [166]
  "UNDERSCORE", // [167]
  "OPEN_PAREN", // [168]
  "CLOSE_PAREN", // [169]
  "ASTERISK", // [170]
  "PLUS", // [171]
  "PIPE", // [172]
  "HYPHEN_MINUS", // [173]
  "OPEN_CURLY_BRACKET", // [174]
  "CLOSE_CURLY_BRACKET", // [175]
  "TILDE", // [176]
  "", // [177]
  "", // [178]
  "", // [179]
  "", // [180]
  "VOLUME_MUTE", // [181]
  "VOLUME_DOWN", // [182]
  "VOLUME_UP", // [183]
  "", // [184]
  "", // [185]
  "SEMICOLON", // [186]
  "EQUALS", // [187]
  "COMMA", // [188]
  "MINUS", // [189]
  "PERIOD", // [190]
  "SLASH", // [191]
  "BACK_QUOTE", // [192]
  "", // [193]
  "", // [194]
  "", // [195]
  "", // [196]
  "", // [197]
  "", // [198]
  "", // [199]
  "", // [200]
  "", // [201]
  "", // [202]
  "", // [203]
  "", // [204]
  "", // [205]
  "", // [206]
  "", // [207]
  "", // [208]
  "", // [209]
  "", // [210]
  "", // [211]
  "", // [212]
  "", // [213]
  "", // [214]
  "", // [215]
  "", // [216]
  "", // [217]
  "", // [218]
  "OPEN_BRACKET", // [219]
  "BACK_SLASH", // [220]
  "CLOSE_BRACKET", // [221]
  "QUOTE", // [222]
  "", // [223]
  "META", // [224]
  "ALTGR", // [225]
  "", // [226]
  "WIN_ICO_HELP", // [227]
  "WIN_ICO_00", // [228]
  "", // [229]
  "WIN_ICO_CLEAR", // [230]
  "", // [231]
  "", // [232]
  "WIN_OEM_RESET", // [233]
  "WIN_OEM_JUMP", // [234]
  "WIN_OEM_PA1", // [235]
  "WIN_OEM_PA2", // [236]
  "WIN_OEM_PA3", // [237]
  "WIN_OEM_WSCTRL", // [238]
  "WIN_OEM_CUSEL", // [239]
  "WIN_OEM_ATTN", // [240]
  "WIN_OEM_FINISH", // [241]
  "WIN_OEM_COPY", // [242]
  "WIN_OEM_AUTO", // [243]
  "WIN_OEM_ENLW", // [244]
  "WIN_OEM_BACKTAB", // [245]
  "ATTN", // [246]
  "CRSEL", // [247]
  "EXSEL", // [248]
  "EREOF", // [249]
  "PLAY", // [250]
  "ZOOM", // [251]
  "", // [252]
  "PA1", // [253]
  "WIN_OEM_CLEAR", // [254]
  "" // [255]
];

*/
/////////////////////////////23 May 2017 end
/////////////////////////////////////////////////////////////
});//Do NOT remove this closes document ready

