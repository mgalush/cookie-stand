'use strict';

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');

  console.log('app.js is linked');

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

  function Location(
    location,
    minCustomers,
    maxCustomers,
    avgCookiesPerCustomer,
    listId,
    headerId
  ) {
    this.location = location;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.customersPerHour = [];
    this.listId = listId;
    this.totalSalesPerDay = 0;
    this.headerId = headerId;
  }

  Location.prototype.calculateLocation = function () {
    // generate random number of customers based off locations minimum and maximum customers per hour
    let calculateRandomNumberOfCustomers = function (min, max) {
      return Math.random() * (max - min) + min;
    };

    // calculate the amounts of cookies purchased for each hour and store in a variable (getCustomersPerHour)
    let getCustomersPerHour;
    for (var i = 0; i < storeHours.length; i++) {
      getCustomersPerHour = Math.round(
        calculateRandomNumberOfCustomers(this.minCustomers, this.maxCustomers) *
          this.avgCookiesPerCustomer
      );
      // populate random customers per hour into customersPerHour array
      this.customersPerHour.push(getCustomersPerHour);
    }
    // find total number of sales using reduce method
    this.totalSalesPerDay = this.customersPerHour.reduce(function (a, b) {
      return a + b;
    }, 0);
  };

  Location.prototype.renderLocation = function () {
    for (var i = 0; i < storeHours.length; i++) {
      //////// insert new element into DOM using DOM manipulation
      // find target and save in variable
      let targetOne = document.getElementById(this.listId);
      // create textnode
      let textnode = document.createTextNode(
        storeHours[i] + ': ' + this.customersPerHour[i] + ' cookies'
      );
      // create new element
      let newElementLi = document.createElement('li');
      // append text node to element
      newElementLi.appendChild(textnode);
      // append element to li
      targetOne.appendChild(newElementLi);
    }

    // append total to li in DOM
    // find target and save in variable
    let listTarget = document.getElementById(this.listId);
    // create textnode
    let listText = document.createTextNode(
      'Total: ' + this.totalSalesPerDay + ' cookies'
    );
    // create new element
    let newElementLi = document.createElement('li');
    // append text node to element
    newElementLi.appendChild(listText);
    // append element to li
    listTarget.appendChild(newElementLi);


    //create header for each(this) location
    let headerTarget = document.getElementById(this.headerId);
    //create textnode
    let headerText = document.createTextNode(this.location);
    //append element to h3
    headerTarget.appendChild(headerText);
  };

  // create object for each location
  const locations = [
    new Location('Seattle', 23, 65, 6.3, 'seattle-list', 'seattle-header'),
    new Location('Tokyo', 3, 24, 1.2, 'tokyo-list', 'tokyo-header'),
    new Location('Dubai', 11, 38, 3.7, 'dubai-list', 'dubai-header'),
    new Location('Paris', 20, 38, 2.3, 'paris-list', 'paris-header'),
    new Location('Lima', 2, 16, 4.6, 'lima-list', 'lima-header'),
  ];

  for (const location of locations) {
    location.calculateLocation();
    location.renderLocation();
  }
});
