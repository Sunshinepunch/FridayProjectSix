import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency.js';

let conversionIndex = {};

function getElements(response) {
  if (response) {
    conversionIndex = response.conversion_rates;
    if (rates != undefined) {
      $('.showRate').text("");
    } else {
      $('.showRate').text("There was an error with " + currency + ". The currency you entered may not exist.");
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