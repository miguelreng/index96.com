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
const selectPayment = form.querySelector('#selectPayment');
const valueTotal = document.getElementById("valueTotal").innerText;
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

            if (fullName.value == null || fullName.value == "", whatsapp.value == null || whatsapp.value == "", email.value == null || email.value == "", address.value == null || address.value == "") {
                alert("Por favor completa todos los campos para continuar 🙈");
                return false;
            } else {
                
                var orderMarket = firebase.database().ref('users-market').push().set(
                    {
                        fullName: fullName.value,
                        whatsapp: whatsapp.value,
                        email: email.value,
                        address: address.value,
                        selectCity: selectCity.value,
                        selectDay: selectDay.value,
                        selectProduct: selectProduct.value,         
                        selectPayment: selectPayment.value,
                        totalOrder: valueTotal
                    }
                );
                    
                setTimeout(function() {                    
                    if (selectPayment.value == "Efectivo") {                        
                        location.href = "https://lastfood.co/congrats";
                    } else {
                        if (selectProduct.value == "Caja de 5kgs Semanales") {
                            if (selectCity.value == "Medellín") {
                                location.href = "https://checkout.wompi.co/l/kGSWPc";                            
                            }else if (selectCity.value == "Envigado") {
                                location.href = "https://checkout.wompi.co/l/d5A9fj";
                            } else if (selectCity.value == "Sabaneta") {
                                location.href = "https://checkout.wompi.co/l/ZBppa6";
                            } else if (selectCity.value == "Itagüí") {
                                location.href = "https://checkout.wompi.co/l/gIWMnW";
                            } else {
                                // Bello
                                location.href = "https://checkout.wompi.co/l/ep0TXg";
                            }                        
                        }else {
                            if (selectCity.value == "Medellín") {
                                location.href = "https://checkout.wompi.co/l/zCGe6s";
                            }else if (selectCity.value == "Envigado") {
                                location.href = "https://checkout.wompi.co/l/iPSPcK";
                            } else if (selectCity.value == "Sabaneta") {
                                location.href = "https://checkout.wompi.co/l/Hr8Aes";
                            } else if (selectCity.value == "Itagüí") {
                                location.href = "https://checkout.wompi.co/l/01jzN9";
                            } else {
                                // Bello
                                location.href = "https://checkout.wompi.co/l/LICKs0";
                            }                                                                              
                        }
                    }                    
                }, 2500);                
            }                        
        })
    }