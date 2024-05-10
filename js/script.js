let cardNumber = document.getElementById("card-number");
let paymentNetworkLogo = document.querySelector(".payment-network-logo");
let cardNumberText = document.querySelector(".card-number-text");

cardNumber.addEventListener("input", cardNumberFunction)

function cardNumberFunction() {
    for (let count = 0; count < cardNumber.value.length; count++) {
        if(cardNumber.value < 4 || cardNumber > 5){
            alert("Invalid Card Number");
            return;
        }

        if((cardNumber.value[0] === "5") && ((cardNumber.value.substring(0, 4)) !== "5061")){
            cardNumber.value = cardNumber.value.slice(0, 16);
            masterPaymentNetwork();
        }

        if((cardNumber.value[0] === "5") && ((cardNumber.value.substring(0, 4)) === "5061")){
            cardNumber.value = cardNumber.value.slice(0, 16);
            vervePaymentNetwork();
        }
        
        if((cardNumber.value[0] === "4")){
            cardNumber.value = cardNumber.value.slice(0, 16);
            visaPaymentNetwork();
        }
    }
}

function masterPaymentNetwork() {
    let handler = ""

    handler = `<img src="img/mastercard.png" alt="Master Card" id="payment-network-logo">`;

    paymentNetworkLogo.innerHTML = handler;
}

function vervePaymentNetwork() {
    let handler = ""

    handler = `<img src="img/verve.png" alt="Verve Card" id="payment-network-logo">`;

    paymentNetworkLogo.innerHTML = handler;
}

function visaPaymentNetwork() {
    let handler = ""

    handler = `<img src="img/visa.png" alt="Visa Card" id="payment-network-logo">`;

    paymentNetworkLogo.innerHTML = handler;
}

cardNumber.addEventListener("focusout", getCardNumber);

function getCardNumber() {
    cardNumberText.innerText = cardNumber.value;
    cardNumber.classList.add("card-number-field");
}