import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency.js';


let conversionIndex = {};

function getRate(conversionRates, currency, money) {
  let theToCurrency = conversionRates[currency];
  let convertedCash = theToCurrency * money;
  return roundToCents(convertedCash);
}

function roundToCents(dollars) {
  return +(Math.round(dollars + "e+2") + "e-2");
}


function getElements(response) {
  if (response) {
    conversionIndex = response.conversion_rates;
    const money =  $('#money').val();
    const currency = $('#foreign-currency').val();
    let rates = (getRate(conversionIndex, currency, money));
    if (rates != undefined) {
      $('.showRate').text("The value of " + money + " USD is " + " " + rates + " " + currency );
    } else {
      $('.showRate').text("There was an error with your selection.");
    }
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$('document').ready(function () {
  $('button#show-conversion').click(function () {
    CurrencyExchange.convert()
      .then(function (response) {
        getElements(response);
      });
  });
});



