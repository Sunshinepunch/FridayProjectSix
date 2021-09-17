import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency.js';

let conversionIndex = {
  "USD": 1,
  "AED": 3.6725,
  "AFN": 81.3072,
  "ALL": 102.9134,
  "AMD": 487.6766,
  "ANG": 1.7900,
  "AOA": 621.0358,
  "ARS": 98.2428,
  "AUD": 1.3687,
  "AWG": 1.7900,
  "AZN": 1.7001,
  "BAM": 1.6595,
  "BBD": 2.0000,
  "BDT": 85.2069,
  "BGN": 1.6605,
  "BHD": 0.3760,
  "BIF": 1980.5353,
  "BMD": 1.0000,
  "BND": 1.3433,
  "BOB": 6.8854,
  "BRL": 5.2409,
  "BSD": 1.0000,
  "BTN": 73.5225,
  "BWP": 11.0746,
  "BYN": 2.4854,
  "BZD": 2.0000,
  "CAD": 1.2642,
  "CDF": 1987.2547,
  "CHF": 0.9256,
  "CLP": 779.6128,
  "CNY": 6.4474,
  "COP": 3845.9649,
  "CRC": 625.0596,
  "CUC": 1.0000,
  "CUP": 25.0000,
  "CVE": 93.5590,
  "CZK": 21.5348,
  "DJF": 177.7210,
  "DKK": 6.3301,
  "DOP": 56.6298,
  "DZD": 135.7083,
  "EGP": 15.6926,
  "ERN": 15.0000,
  "ETB": 46.2579,
  "EUR": 0.8485,
  "FJD": 2.0807,
  "FKP": 0.7239,
  "FOK": 6.3301,
  "GBP": 0.7239,
  "GEL": 3.1091,
  "GGP": 0.7239,
  "GHS": 6.0402,
  "GIP": 0.7239,
  "GMD": 52.1419,
  "GNF": 9779.9160,
  "GTQ": 7.7298,
  "GYD": 209.3609,
  "HKD": 7.7824,
  "HNL": 24.1867,
  "HRK": 6.3930,
  "HTG": 96.9238,
  "HUF": 298.2374,
  "IDR": 14427.7762,
  "ILS": 3.2216,
  "IMP": 0.7239,
  "INR": 73.5227,
  "IQD": 1461.2389,
  "IRR": 41853.1010,
  "ISK": 127.6836,
  "JMD": 149.3661,
  "JOD": 0.7090,
  "JPY": 109.5993,
  "KES": 110.0233,
  "KGS": 84.7774,
  "KHR": 4081.8717,
  "KID": 1.3687,
  "KMF": 417.4310,
  "KRW": 1172.9711,
  "KWD": 0.2996,
  "KYD": 0.8333,
  "KZT": 425.5657,
  "LAK": 9587.0941,
  "LBP": 1507.5000,
  "LKR": 199.2847,
  "LRD": 171.6336,
  "LSL": 14.5501,
  "LYD": 4.5189,
  "MAD": 8.9605,
  "MDL": 17.6381,
  "MGA": 3930.4986,
  "MKD": 52.1290,
  "MMK": 1807.3474,
  "MNT": 2852.1739,
  "MOP": 8.0158,
  "MRU": 36.3518,
  "MUR": 42.8349,
  "MVR": 15.4173,
  "MWK": 812.2651,
  "MXN": 19.9199,
  "MYR": 4.1583,
  "MZN": 64.0171,
  "NAD": 14.5501,
  "NGN": 424.6787,
  "NIO": 35.1341,
  "NOK": 8.6148,
  "NPR": 117.6360,
  "NZD": 1.4117,
  "OMR": 0.3845,
  "PAB": 1.0000,
  "PEN": 4.1108,
  "PGK": 3.5094,
  "PHP": 49.9193,
  "PKR": 168.9149,
  "PLN": 3.8870,
  "PYG": 6984.1463,
  "QAR": 3.6400,
  "RON": 4.2020,
  "RSD": 99.8877,
  "RUB": 72.4672,
  "RWF": 1001.8495,
  "SAR": 3.7500,
  "SBD": 7.9778,
  "SCR": 13.3870,
  "SDG": 442.9065,
  "SEK": 8.6208,
  "SGD": 1.3433,
  "SHP": 0.7239,
  "SLL": 10442.5119,
  "SOS": 578.9193,
  "SRD": 21.4429,
  "SSP": 177.7465,
  "STN": 20.7881,
  "SYP": 1471.1211,
  "SZL": 14.5501,
  "THB": 33.0850,
  "TJS": 11.3012,
  "TMT": 3.4993,
  "TND": 2.8004,
  "TOP": 2.2293,
  "TRY": 8.4920,
  "TTD": 6.7787,
  "TVD": 1.3687,
  "TWD": 27.7053,
  "TZS": 2317.2451,
  "UAH": 26.6596,
  "UGX": 3529.4272,
  "UYU": 42.6730,
  "UZS": 10775.5267,
  "VES": 4037015.3875,
  "VND": 22736.9980,
  "VUV": 111.4553,
  "WST": 2.5595,
  "XAF": 556.5746,
  "XCD": 2.7000,
  "XDR": 0.7028,
  "XOF": 556.5746,
  "XPF": 101.2523,
  "YER": 250.8068,
  "ZAR": 14.5504,
  "ZMW": 16.3578
};




function getRate(conversionRates, currency) {
  return conversionRates[currency];
}



function getElements(response) {
  if (response) {
    conversionIndex = response.conversion_rates;
    let rates = (getRate(conversionIndex, currency));
    if (rates != undefined) {
      $('.showRate').text("Working");
    } else {
      $('.showRate').text("Oops");
    }
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$('document').ready(function () {
  let selectISO = $("#first-currency");
  CurrencyExchange.convertMoney()
    .then(function (response) {
      getElements(response);
    });
  $('button#show-conversion').click(function () {
    $.each(conversionIndex, function(index, value){
      $("<option/>", {
        value: value,
        text: index
      }).appendTo(selectISO);
    });
  });
});