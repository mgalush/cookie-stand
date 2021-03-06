'use strict';

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');

  // create variable for store hours
  const storeHours = [
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

  function Table(tableId) {
    this.table = document.getElementById(tableId);
    this.header = this.table.querySelector('thead');
    this.body = this.table.querySelector('tbody');
  }
  // create table header
  Table.prototype.renderHeader = function (dataArray) {
    this.renderRowOfType('th', this.header, dataArray);
  };

  // create table body
  Table.prototype.renderRow = function (dataArray) {
    this.renderRowOfType('td', this.body, dataArray);
  };

  Table.prototype.renderRowOfType = function (type, target, dataArray) {
    // create table row
    let newTableRow = document.createElement('tr');

    for (const data of dataArray) {
      // create textnode
      let text = document.createTextNode(data);
      // create new element
      let element = document.createElement(type);
      // append text node to element
      element.appendChild(text);
      // append element to table row
      newTableRow.appendChild(element);
    }

    // append table row to table body
    target.appendChild(newTableRow);
  };

  // delete last row
  Table.prototype.deleteLastRow = function () {
    this.body.querySelector('tr:last-of-type').remove();
  };

  function Location(
    location,
    minCustomers,
    maxCustomers,
    avgCookiesPerCustomer
  ) {
    this.location = location;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.cookiesSoldPerHour = [];
    this.totalSalesPerDay = 0;
  }

  Location.prototype.calculateLocation = function () {
    // generate random number of customers based off locations minimum and maximum customers per hour
    let calculateCookiesSoldPerHour = function (min, max) {
      return Math.random() * (max - min) + min;
    };

    // calculate the amounts of cookies purchased for each hour and store in a variable (getCookiesSoldPerHour)
    let getCookiesSoldPerHour;
    for (var i = 0; i < storeHours.length; i++) {
      getCookiesSoldPerHour = Math.round(
        calculateCookiesSoldPerHour(this.minCustomers, this.maxCustomers) *
          this.avgCookiesPerCustomer
      );
      // populate random customers per hour into cookiesSoldPerHour array
      this.cookiesSoldPerHour.push(getCookiesSoldPerHour);
    }

    // find total sales per store using reduce method
    this.totalSalesPerDay = this.cookiesSoldPerHour.reduce(function (a, b) {
      return a + b;
    }, 0);
  };

  // create object for each location
  const locations = [
    new Location('Seattle', 23, 65, 6.3),
    new Location('Tokyo', 3, 24, 1.2),
    new Location('Dubai', 11, 38, 3.7),
    new Location('Paris', 20, 38, 2.3),
    new Location('Lima', 2, 16, 4.6),
  ];

  // calculate hourly totals for all locations
  const calculateHourlyTotals = function(locations) {
    const hourlyTotals = new Array(storeHours.length + 1).fill(0);

    for (let location of locations) {
      for (let i in location.cookiesSoldPerHour) {
        const cookiesPerHour = location.cookiesSoldPerHour[i];
        hourlyTotals[i] += cookiesPerHour;
      }
      hourlyTotals[hourlyTotals.length - 1] += location.totalSalesPerDay;
    }

    return hourlyTotals;
  };

  const cookieSalesTable = new Table('cookie-sales-table');

  cookieSalesTable.renderHeader(['', ...storeHours, 'Daily Location Total']);

  // call both functions for each location
  for (let location of locations) {
    location.calculateLocation();
    cookieSalesTable.renderRow([
      location.location,
      ...location.cookiesSoldPerHour,
      location.totalSalesPerDay,
    ]);
  }

  let hourlyTotals = calculateHourlyTotals(locations);
  cookieSalesTable.renderRow(['Total', ...hourlyTotals]);



  ///////////////////// FORM ////////////////////////////////

  // find target
  let newLocationForm = document.getElementById('newLocationForm');

  // add event listener
  newLocationForm.addEventListener('submit', function (event) {
    event.preventDefault();

    this.location = event.target.newLocation.value;
    this.minCust = event.target.newMinCust.value;
    this.maxCust = event.target.newMaxCust.value;
    this.avgCookiesPerCustomer = event.target.newAvgCookiesPerCustomer.value;

    let location = new Location(this.location, this.minCust, this.maxCust, this.avgCookiesPerCustomer);
    locations.push(location);

    // delete last row
    cookieSalesTable.deleteLastRow();

    // create new row 
    location.calculateLocation();
    cookieSalesTable.renderRow([
      location.location,
      ...location.cookiesSoldPerHour,
      location.totalSalesPerDay,
    ]);

    let hourlyTotals = calculateHourlyTotals(locations);
    cookieSalesTable.renderRow(['Total', ...hourlyTotals]);
  });



});
