import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency.js';

let conversionIndex = {};

function getRate(conversionRates, currency1, currency2) {
  console.log(currency2);
  console.log(currency1);
}

$('#first-currency').val();


// function showConversion(conversionRates)

function getElements(response) {
  if (response) {
    conversionIndex = response.conversion_rates;
    const currency1 = $('#first-currency').val();
    const currency2 = $('#last-currency').val();
    let rates = (getRate(conversionIndex, currency1, currency2));
    if (rates != undefined) {
      $('.showRate').text("");
    } else {
      $('.showRate').text("Error in input");
    }
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$('document').ready(function () {
  $('button#show-conversion').click(function () {
    CurrencyExchange.convertMoney()
      .then(function (response) {
        getElements(response);
      });
  });
});