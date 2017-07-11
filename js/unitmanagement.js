jQuery(document).ready(function() {  
//SA 6 March 2017 revised, now works so be careful about selecting delete and then select all  

          jQuery('.manage-unit').click(function(goToUnitEditor){
            var unitTitle = jQuery(this).attr('data-manage-title');
            var unitToManage = jQuery(this).attr('data-manage-unit');
            document.location = jQuery('body').data('path') + 'unitManagementEditor/?r=' + unitToManage;
          });


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


          jQuery('.manage-unit-chat').click(function(goToUnitEditor){
            var unitTitle = jQuery(this).attr('data-manage-title');
            var unitToManage = jQuery(this).attr('data-manage-unit');
            document.location = jQuery('body').data('path') + 'unitManagementEditor/?r=' + unitToManage;
          });

        var allSelected = 0;
        jQuery('#select-all').on('click', function () {
          if (allSelected == 0) {
            allSelected = 1;
            jQuery('.edit-unit').prop('checked',true);
          } else {
            allSelected = 0;
            jQuery('.edit-unit').prop('checked',false);
          }
        });


jQuery('#select-all-units').on('click', function () {
  jQuery('input.edit-unit:checkbox').each(function () { this.checked = !this.checked; });
  //alert('you selected all units');
});



jQuery('#update-selected-unit').on('click', function () {
  var actionID = jQuery('#unit-action-selector option:selected').val();
  var units = Array();

  function unitUpdateCallBack () {
    
  }

  jQuery("input.edit-unit:checked").each(function () {
    units.push(jQuery(this).data('unit-id'));
  });

  switch (actionID) {
    // Delete selected units...
    case '1' :
      jQuery.ajax({
        type: "POST",
        url: jQuery('body').data('path') + 'process/unit-manager.php',
        data: 'actionID='+actionID+'&units='+units,
        success: unitUpdateCallBack,
        dataType: 'html'
      });

      break;
  }

});//update-selected on click


//SA do not delete below this line closes document ready
});
