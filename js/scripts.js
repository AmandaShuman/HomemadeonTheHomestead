 $(function() {
    // Toggle New/Existing Customer
    var custType = $('#customer-type'),
        newCust = $('.new-customer'),
        existCust = $('.existing-customer'),
        createAccBtn = $('.create-account'),
        verifyAccBtn = $('.verify-account');
   
    custType.val($(this).is(':checked'))
            .change(function() {
    if ($(this).is(':checked')) {
          newCust.fadeToggle(400, function() { // Hide Full form when checked
            existCust.fadeToggle(500); //Display Small form when checked
            createAccBtn.toggleClass('hide');
            verifyAccBtn.toggleClass('hide');
          });
          
        } else {
          existCust.fadeToggle(400, function() { //Hide Small form when unchecked
            newCust.fadeToggle(500); //Display Full form when unchecked
            createAccBtn.toggleClass('hide');
            verifyAccBtn.toggleClass('hide');
          });
          
        }
   });
  });



