// The SDK does not have tools for creating test accounts, so you'll have to
// make your own HTTP request.

// if you're trying this on Node, install the `node-fetch` library and
// uncomment the next line:
const fetch = require('node-fetch');
// import fetch from "node-fetch";

require('dotenv').config();


(async function main() {
    try {
      const publicKey =  process.env.publicKey;
      const response = await fetch(
        `https://friendbot.stellar.org?addr=${encodeURIComponent(
         publicKey,
        )}`,
      );
      const responseJSON = await response.json();
      console.log("SUCCESS! You have a new account :)\n", responseJSON);
    } catch (e) {
      console.error("ERROR!", e);
    }
  })();

