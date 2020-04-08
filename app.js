'use strict';

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');

  console.log('app.js is linked');

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

  // generate table header using storeHours array
  const renderTableHeader = function () {
    // find target and save in variable
    let headerTarget = document.getElementById('header-row');
    for (const storeHour of storeHours) {
      // create textnode
      let headerText = document.createTextNode(storeHour);
      // create new element
      let tableHeader = document.createElement('th');
      // append text node to element
      tableHeader.appendChild(headerText);
      // append element to table row
      headerTarget.appendChild(tableHeader);
    }
    // create total number of daily sales per location
    // create text node
    let dailyLocationText = document.createTextNode('Daily Location Total');
    // create table data
    let totalSalesHeader = document.createElement('th');
    //append text to table data
    totalSalesHeader.appendChild(dailyLocationText);
    // append location to row
    headerTarget.appendChild(totalSalesHeader);
  };

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
    this.cookiesSoldPerHour = [];
    this.listId = listId;
    this.totalSalesPerDay = 0;
    this.headerId = headerId;
  }

  Location.prototype.calculateLocation = function () {
    // generate random number of customers based off locations minimum and maximum customers per hour
    let calculateCookiesSoldPerHour = function (min, max) {
      return Math.random() * (max - min) + min;
    };

    // calculate the amounts of cookies purchased for each hour and store in a variable (getCustomersPerHour)
    let getCookiesSoldPerHour;
    for (var i = 0; i < storeHours.length; i++) {
      getCookiesSoldPerHour = Math.round(
        calculateCookiesSoldPerHour(this.minCustomers, this.maxCustomers) *
          this.avgCookiesPerCustomer
      );
      // populate random customers per hour into customersPerHour array
      this.cookiesSoldPerHour.push(getCookiesSoldPerHour);
    }
    // find total number of sales using reduce method
    this.totalSalesPerDay = this.cookiesSoldPerHour.reduce(function (a, b) {
      return a + b;
    }, 0);
  };

  Location.prototype.renderLocation = function () {
    //// create table body
    // find target and save in variable
    let bodyTarget = document.getElementById('table-body');
    // create table row
    let newTableRow = document.createElement('tr');

    //// fill table body with data

    // create text node
    let locationDataText = document.createTextNode(this.location);
    // create table data
    let newLocation = document.createElement('td');
    //append text to table data
    newLocation.appendChild(locationDataText);
    // append location to row
    newTableRow.appendChild(newLocation);

    // render cookie sale data in table
    for (const cookiesSold of this.cookiesSoldPerHour) {
      // create text node
      let tableDataText = document.createTextNode(cookiesSold);
      // create table data
      let newTableData = document.createElement('td');
      // append text to table data
      newTableData.appendChild(tableDataText);
      // append text node to element
      newTableRow.appendChild(newTableData);
    }
    // put total number of sales in table
    // create text node
    let totalSalesText = document.createTextNode(this.totalSalesPerDay);
    // create table data
    let totalSalesLocation = document.createElement('td');
    //append text to table data
    totalSalesLocation.appendChild(totalSalesText);
    // append location to row
    newTableRow.appendChild(totalSalesLocation);

    // append table row to table body
    bodyTarget.appendChild(newTableRow);
  };

  // create object for each location
  const locations = [
    new Location('Seattle', 23, 65, 6.3, 'seattle-list', 'seattle-header'),
    new Location('Tokyo', 3, 24, 1.2, 'tokyo-list', 'tokyo-header'),
    new Location('Dubai', 11, 38, 3.7, 'dubai-list', 'dubai-header'),
    new Location('Paris', 20, 38, 2.3, 'paris-list', 'paris-header'),
    new Location('Lima', 2, 16, 4.6, 'lima-list', 'lima-header'),
  ];

  renderTableHeader();

  // call both functions for each location
  for (const location of locations) {
    location.calculateLocation();
    location.renderLocation();
  }
});
