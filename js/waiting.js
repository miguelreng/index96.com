'use strict';

//grab a form
const form = document.querySelector('#form-market');

//grab an input
const fullName = form.querySelector('#fullName');
const address = form.querySelector('#address');
const whatsapp = form.querySelector('#whatsapp');
const email = form.querySelector('#email');
const selectDay = form.querySelector('#selectDay');
const selectProduct = form.querySelector('#selectProduct');
const selectCity = form.querySelector('#selectCity');
const weekly = form.querySelector('#weekly');
const monthly = form.querySelector('#monthly');

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

            if (fullName.value == null || fullName.value == "", whatsapp.value == null || whatsapp.value == "") {
                alert("Por favor completa todos los campos para continuar 🙈");
                return false;
            } else {
                
                var orderMarket = firebase.database().ref('users-waiting').push().set(
                    {
                        fullName: fullName.value,
                        whatsapp: whatsapp.value,                               
                    }
                );
                    
                setTimeout(function() {
                    window.location.href = "https://lastfood.co/success-waiting";
                }, 1000);                
            }                        
        })
    }