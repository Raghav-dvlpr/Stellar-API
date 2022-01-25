const StellarSdk = require('stellar-sdk')
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
require('dotenv').config();

const accountId = process.env.publicKey;

server.transactions()
    .forAccount(accountId)
    .call()
    .then(function (page) {
        console.log('Page 1: ');
        console.log(page.records);
        return page.next();
    })
    .then(function (page) {
        console.log('Page 2: ');
        console.log(page.records);
    })
    .catch(function (err) {
        console.log(err);
    });


// const StellarSdk = require('stellar-sdk')
// const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
// const accountId = process.env.publicKey;

// server.transactions()
//     .forAccount(accountId)
//     .call()
//     .then(function (page) {
//         console.log('Page 1: ');
//         console.log(page.records);
//         return page.next();
//     })
//     .then(function (page) {
//         console.log('Page 2: ');
//         console.log(page.records);
//     })
//     .catch(function (err) {
//         console.log(err);
//     });
