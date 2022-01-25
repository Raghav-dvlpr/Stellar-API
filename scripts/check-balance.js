var StellarSdk = require('stellar-sdk');
const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");
require('dotenv').config();


// the JS SDK uses promises for most actions, such as retrieving an account
const checkBalance = async () => {
const publicKey = process.env.publicKey;
const account = await server.loadAccount(publicKey);
console.log("Balances for account: " + publicKey);
account.balances.forEach(function (balance) {
  console.log("Type:", balance.asset_type, ", Balance:", balance.balance);
});
};
checkBalance();


// // utils/check-balance.js
// const StellarSdk = require("stellar-sdk");
// const dotenv = require("dotenv");

// dotenv.config();
// const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");

// const checkBalance = async () => {
//   // Cargamos la cuenta a través del sdk de Stellar
//   const account = await server.loadAccount(process.env.PUBLIC_KEY);

//   console.log("Balances for account: " + process.env.PUBLIC_KEY);

//   // Checamos cada una de las cuentas y su balance
//   account.balances.forEach(balance => {
//     console.log("Type:", balance.asset_type, ", Balance:", balance.balance);
//   });
// };

// checkBalance();
