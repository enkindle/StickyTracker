;(function (window, document, undefined) {
  'use strict';

  // Initialze application
  function init(){
    var product = {},
      manufacturer = [];

    if (manufacturer.length === 0){
      $('#noSelection').text('Please Add a Manufacturer'));
    }

    // Initalize listeners
    $('#manufacturerSubmit').on('click', function(){
      addManufacturer(this, manufacturer);
      console.log(manufacturer);
    });
  }

  function addManufacturer(that, manufacturerArray){
    var $this = that;
    var manufacturerExists = false;
    for (var i = 0; manufacturerArray.length > i; i++){
      var entered = $($this).parent().find('#manufacturerName').val();
      if (entered === manufacturerArray[i]){
        manufacturerExists = true;
      }
    }
    if (!manufacturerExists){
      manufacturerArray.push($($this).parent().find('#manufacturerName').val());
      if (manufacturerArray.length >= 1){
        $('#noSelection').text('Please Select a Manufacturer'));
      }
    }
  }

  init();

}(window, window.document));