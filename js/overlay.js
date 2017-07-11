jQuery(document).ready(function () {
  if(document.getElementById('overlay1') ||
    document.getElementById('overlay2') ||
    document.getElementById('overlay3') ||
    document.getElementById('overlay4') ||
    document.getElementById('overlay5')) {
    setOverlayHeights();
    jQuery('.overlay-tab').on('click swipe', function(){
     animateOverlay(jQuery(this).parent().attr('id'));
    });
  }
});
 
jQuery(window).resize(function () {
  if(document.getElementById('overlay1') ||
    document.getElementById('overlay2') ||
    document.getElementById('overlay3') ||
    document.getElementById('overlay4') ||
    document.getElementById('overlay5')) {
   setOverlayHeights();
  }
});

function animateOverlay (overlay) {
  var overlayWidth = jQuery('#'+overlay+' .overlay-main').css('width');
  direction = jQuery('#'+overlay).css('left') == '0px' ? '-'+overlayWidth : '0';
  jQuery('#overlay1').animate({left: direction});
}

function setOverlayHeights () {
  var overlayDynamicHeight = jQuery(window).height() > jQuery('body').height() ? jQuery(window).height() : jQuery('body').height();
  var paddingTop = jQuery('.overlay-main').css('padding-top');
  var paddingTop = paddingTop.substring(0, paddingTop.length-2);
  var paddingBottom = jQuery('.overlay-main').css('padding-bottom');
  var paddingBottom = paddingBottom.substring(0, paddingBottom.length-2);
  jQuery(".overlay-main").height(overlayDynamicHeight-paddingTop-paddingBottom);
}
