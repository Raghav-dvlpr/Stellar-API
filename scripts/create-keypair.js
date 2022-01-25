// create a completely new and unique pair of keys
// see more about KeyPair objects: https://stellar.github.io/js-stellar-sdk/Keypair.html
var StellarSdk = require('stellar-sdk');

const pair = StellarSdk.Keypair.random();

pair.secret();
// SAV76USXIJOBMEQXPANUOQM6F5LIOTLPDIDVRJBFFE2MDJXG24TAPUU7
pair.publicKey();
// GCFXHS4GXL6BVUCXBWXGTITROWLVYXQKQLF4YH5O5JT3YZXCYPAFBJZB

console.log("New key pair created!");
console.log("  Account ID: " + pair.publicKey());
console.log("  Secret: " + pair.secret());