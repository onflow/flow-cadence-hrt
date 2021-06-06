'use strict';

const { Given, When, Then } = require('@cucumber/cucumber');

Given('sender is {string}', function async(name) {
    console.log(`Sender is: ${name}`)
    return name;
});

Given('receiver is {string}', function async(name) {
    console.log(`Receiver is: ${name}`)
    return name
});

When('sender sends {int} Kibble to receiver', function async (amount) {
    console.log(`Amount is: ${amount}`)
    return amount
});

Then('receiver Kibble balance is {int}', function (amount) {
    console.log({amount})
    return false
});