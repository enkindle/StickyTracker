;(function (window, document, undefined) {
  'use strict';

  var gecko = {},
      collection = {};

  var geckoTypeObj = {
    "Uroplatus" : [
      "phantasticus",
      "sikorae",
      "pietschmanni"
    ],
    "Correlophus" : [
      "ciliatus",
      "sarasinorum"
    ]

  };

  function setGeckoSpecies(){
    for (var genus in geckoTypeObj){
      var speciesArray = geckoTypeObj[genus];
      for (var i = 0; speciesArray.length > i; i++){
        $('#speciesDropdown').append('<option value="' + genus + "' '" +  speciesArray[i] + '">' + genus + " " +  speciesArray[i] + '</option>');
      }
    }
  }

  setGeckoSpecies();

}(window, window.document));