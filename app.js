'use strict';

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

  console.log('app.js is linked');

  // let locations = [seattleLocation, tokyoLocation, dubaiLocation, parisLocation, limaLocation];

  // create variable for store hours
  let storeHours = [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12am',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
  ];

  //////////////////// SEATTLE LOCATION ///////////////////////

  function seattleLocationFunction() {
    // data for Seattle location
    let seattleLocation = {
      minCustomers: 23,
      maxCustomers: 65,
      avgCookiesPerCustomer: 6.3,
      customersPerHour: [],
    };

    // generate random number of customers based off locations minimum and maximum customers per hour
    let calculateRandomNumberOfCustomers = function (min, max) {
      return Math.random() * (max - min) + min;
    };
    // console.log(calculateRandomNumberOfCustomers(seattleLocation.minCustomers, seattleLocation.maxCustomers));

    // calculate the amounts of cookies purchased for each hour and store in a variable (getCustomersPerHour)

    let getCustomersPerHour;
    for (var i = 0; i < storeHours.length; i++) {
      getCustomersPerHour = Math.round(
        calculateRandomNumberOfCustomers(
          seattleLocation.minCustomers,
          seattleLocation.maxCustomers
        ) * seattleLocation.avgCookiesPerCustomer
      );

      // populate random customers per hour into customersPerHour array
      seattleLocation.customersPerHour.push(getCustomersPerHour);
      // console.log(getCustomersPerHour);

      //////// insert new element into DOM using DOM manipulation
      // find target and save in variable
      let targetOne = document.getElementById('seattle-list');
      // create textnode
      let textnode = document.createTextNode(
        storeHours[i] + ': ' + getCustomersPerHour + ' cookies'
      );
      // create new element
      let newElementLi = document.createElement('li');
      // append text node to element
      newElementLi.appendChild(textnode);
      // append element to li
      targetOne.appendChild(newElementLi);
    }

    // find total number of sales usning reduce method
    let totalSalesPerDay = seattleLocation.customersPerHour.reduce(function (
      a,
      b
    ) {
      return a + b;
    },
    0);

    // append total to li in DOM
    // find target and save in variable
    let targetOne = document.getElementById('seattle-list');
    // create textnode
    let textnode = document.createTextNode(
      'Total: ' + totalSalesPerDay + ' cookies'
    );
    // create new element
    let newElementLi = document.createElement('li');
    // append text node to element
    newElementLi.appendChild(textnode);
    // append element to li
    targetOne.appendChild(newElementLi);
  }
  seattleLocationFunction();

  //////////////////// TOKYO LOCATION ///////////////////////

  function tokyoLocationFunction() {
    // data for Tokyo location
    let tokyoLocation = {
      minCustomers: 23,
      maxCustomers: 65,
      avgCookiesPerCustomer: 6.3,
      customersPerHour: [],
    };

    // generate random number of customers based off locations minimum and maximum customers per hour
    let calculateRandomNumberOfCustomers = function (min, max) {
      return Math.random() * (max - min) + min;
    };
    // console.log(calculateRandomNumberOfCustomers(tokyoLocation.minCustomers, tokyoLocation.maxCustomers));

    // calculate the amounts of cookies purchased for each hour and store in a variable (getCustomersPerHour)

    let getCustomersPerHour;
    for (var i = 0; i < storeHours.length; i++) {
      getCustomersPerHour = Math.round(
        calculateRandomNumberOfCustomers(
          tokyoLocation.maxCustomers,
          tokyoLocation.minCustomers
        ) * tokyoLocation.avgCookiesPerCustomer
      );

      // populate random customers per hour into customersPerHour array
      tokyoLocation.customersPerHour.push(getCustomersPerHour);
      // console.log(getCustomersPerHour);

      //////// insert new element into DOM using DOM manipulation
      // find target and save in variable
      let targetOne = document.getElementById('tokyo-list');
      // create textnode
      let textnode = document.createTextNode(
        storeHours[i] + ': ' + getCustomersPerHour + ' cookies'
      );
      // create new element
      let newElementLi = document.createElement('li');
      // append text node to element
      newElementLi.appendChild(textnode);
      // append element to li
      targetOne.appendChild(newElementLi);
    }

    // find total number of sales usning reduce method
    let totalSalesPerDay = tokyoLocation.customersPerHour.reduce(function (
      a,
      b
    ) {
      return a + b;
    },
    0);

    // append total to li in DOM
    // find target and save in variable
    let targetOne = document.getElementById('tokyo-list');
    // create textnode
    let textnode = document.createTextNode(
      'Total: ' + totalSalesPerDay + ' cookies'
    );
    // create new element
    let newElementLi = document.createElement('li');
    // append text node to element
    newElementLi.appendChild(textnode);
    // append element to li
    targetOne.appendChild(newElementLi);
  }
  tokyoLocationFunction();

  //////////////////// DUBAI LOCATION ///////////////////////

  function dubaiLocationFunction() {
    // data for Dubai location
    let dubaiLocation = {
      minCustomers: 11,
      maxCustomers: 38,
      avgCookiesPerCustomer: 3.7,
      customersPerHour: [],
    };

    // generate random number of customers based off locations minimum and maximum customers per hour
    let calculateRandomNumberOfCustomers = function (min, max) {
      return Math.random() * (max - min) + min;
    };
    // console.log(calculateRandomNumberOfCustomers(dubaiLocation.minCustomers, dubaiLocation.maxCustomers));

    // calculate the amounts of cookies purchased for each hour and store in a variable (getCustomersPerHour)

    let getCustomersPerHour;
    for (var i = 0; i < storeHours.length; i++) {
      getCustomersPerHour = Math.round(
        calculateRandomNumberOfCustomers(
          dubaiLocation.maxCustomers,
          dubaiLocation.minCustomers
        ) * dubaiLocation.avgCookiesPerCustomer
      );

      // populate random customers per hour into customersPerHour array
      dubaiLocation.customersPerHour.push(getCustomersPerHour);
      // console.log(getCustomersPerHour);

      //////// insert new element into DOM using DOM manipulation
      // find target and save in variable
      let targetOne = document.getElementById('dubai-list');
      // create textnode
      let textnode = document.createTextNode(
        storeHours[i] + ': ' + getCustomersPerHour + ' cookies'
      );
      // create new element
      let newElementLi = document.createElement('li');
      // append text node to element
      newElementLi.appendChild(textnode);
      // append element to li
      targetOne.appendChild(newElementLi);
    }

    // find total number of sales usning reduce method
    let totalSalesPerDay = dubaiLocation.customersPerHour.reduce(function (
      a,
      b
    ) {
      return a + b;
    },
    0);

    // append total to li in DOM
    // find target and save in variable
    let targetOne = document.getElementById('dubai-list');
    // create textnode
    let textnode = document.createTextNode(
      'Total: ' + totalSalesPerDay + ' cookies'
    );
    // create new element
    let newElementLi = document.createElement('li');
    // append text node to element
    newElementLi.appendChild(textnode);
    // append element to li
    targetOne.appendChild(newElementLi);
  }
  dubaiLocationFunction();

  //////////////// note to self: just keep swimming //////////////
  if (Math.random() < 0.1) {
    alert('JUSTIN LOVES YOU');
  }
});
