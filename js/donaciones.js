'use strict';

//grab a form
const form = document.querySelector('#form-donations');

//grab an input
const nameRestaurant = form.querySelector('#nameRestaurant');
const address = form.querySelector('#address');
const phone = form.querySelector('#phone');
const units = form.querySelector('#units');
const content = form.querySelector('#content');
const valueDonation = form.querySelector('#valueDonation');
const selectCharity = form.querySelector('#selectCharity');
const selectCity = form.querySelector('#selectCity');
const selectHour = form.querySelector('#selectHour');
const valueTotal = document.getElementById("valueTotal").innerText;

//config your firebase push
const config = {
    apiKey: "AIzaSyAS2NYTrfE7BYp01v0s3TJ6v7uRewwmmhk",
    authDomain: "lastfood-forms.firebaseapp.com",
    databaseURL: "https://lastfood-forms-default-rtdb.firebaseio.com/",
    projectId: "lastfood-forms",
    storageBucket: "lastfood-forms.appspot.com",
    messagingSenderId: "835170736542",
    appId: "1:835170736542:web:78761fe76776f54a9e1e8f"
};

firebase.initializeApp(config);

    if (form) {
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();

            if (nameRestaurant.value == null || nameRestaurant.value == "", phone.value == null || phone.value == "", units.value == null || units.value == "", address.value == null || address.value == "") {
                alert("Por favor completa todos los campos para continuar 🙈");
                return false;
            } else {
                
                var orderMarket = firebase.database().ref('restaurants-donations').push().set(
                    {
                        nameRestaurant: nameRestaurant.value,
                        phone: phone.value,
                        address: address.value,
                        units: units.value,
                        selectCity: selectCity.value,
                        selectCharity: selectCharity.value,
                        selectHour: selectHour.value,
                        valueDonation: valueDonation.value,
                        content: content.value,                                 
                        totalOrder: valueTotal
                    }
                );
                    
                setTimeout(function() {                    
                    location.href = "https://lastfood.co/congratsDonation";                                   
                }, 2500);                
            }                        
        })
    }


    // Jquery Dependency

$("input[data-type='currency']").on({
    keyup: function() {
      formatCurrency($(this));
    },
    blur: function() { 
      formatCurrency($(this), "blur");
    }
});


function formatNumber(n) {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}


function formatCurrency(input, blur) {
  // appends $ to value, validates decimal side
  // and puts cursor back in right position.
  
  // get input value
  var input_val = input.val();
  
  // don't validate empty input
  if (input_val === "") { return; }
  
  // original length
  var original_len = input_val.length;

  // initial caret position 
  var caret_pos = input.prop("selectionStart");
    
  // check for decimal
  if (input_val.indexOf(".") >= 0) {

    // get position of first decimal
    // this prevents multiple decimals from
    // being entered
    var decimal_pos = input_val.indexOf(".");

    // split number by decimal point
    var left_side = input_val.substring(0, decimal_pos);
    var right_side = input_val.substring(decimal_pos);

    // add commas to left side of number
    left_side = formatNumber(left_side);

    // validate right side
    right_side = formatNumber(right_side);
    
    // On blur make sure 2 numbers after decimal
    if (blur === "blur") {
      right_side += "00";
    }
    
    // Limit decimal to only 2 digits
    right_side = right_side.substring(0, 2);

    // join number by .
    input_val = "$" + left_side + "." + right_side;

  } else {
    // no decimal entered
    // add commas to number
    // remove all non-digits
    input_val = formatNumber(input_val);
    input_val = "$" + input_val;
    
    // final formatting
    if (blur === "blur") {
      input_val += ".00";
    }
  }
  
  // send updated string to input
  input.val(input_val);

  // put caret back in the right position
  var updated_len = input_val.length;
  caret_pos = updated_len - original_len + caret_pos;
  input[0].setSelectionRange(caret_pos, caret_pos);
}


