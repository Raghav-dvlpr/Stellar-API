const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const { exec } = require("child_process");
var cmd=require('node-cmd');
const { stdout } = require('process')

const fs = require("fs");
const os = require("os");


app.get('/createkeypair', function (req, res) {
    
    console.log("Processing");

    let RAW_JSON_DATA=cmd.runSync(
        `node scripts/create-keypair.js`,
        function(err, stdout, stderr){
            console.log('examples dir now contains the example file along with : ',stdout)
            
        }
    );
   //console.log(RAW_JSON_DATA);
   //console.log(n[1].replace('Secret',''));
   //console.log(n[2]);

    var getdata= RAW_JSON_DATA.data.split(":",3)
    let ACC_ID = getdata[1].replace('\n  Secret','').trim()
    let SERT_KEY = getdata[2].replace('\n','').trim(); 
    
 
    console.log("Account ID(PublicKey) :",ACC_ID);
    console.log("Secret Key :",SERT_KEY);

    setEnvValue("publicKey", ACC_ID);
    setEnvValue("secret", SERT_KEY);
    res.json({
        message:"Generated successfully....",
        Account_ID_PublicKey:ACC_ID,
        Secret_Key:SERT_KEY
    })
    
})

function setEnvValue(key, value) {

    // read file from hdd & split if from a linebreak to a array
    const ENV_VARS = fs.readFileSync("./.env", "utf8").split(os.EOL);

    // find the env we want based on the key
    const target = ENV_VARS.indexOf(ENV_VARS.find((line) => {
        return line.match(new RegExp(key));
    }));

    // replace the key/value with the new value
    ENV_VARS.splice(target, 1, `${key}=${value}`);

    // write everything back to the file system
    fs.writeFileSync("./.env", ENV_VARS.join(os.EOL));

}

app.get('/createaccount', function (req, res) {
    
    console.log("Creating an account");

    let RAW_JSON_DATA=cmd.runSync(
        `node scripts/create-account.js`,
        function(err, stdout, stderr){
            console.log('examples dir now contains the example file along with : ',stdout)
            
        }
    );
   console.log(RAW_JSON_DATA);
   console.log(RAW_JSON_DATA.data.replace(/['"]+/g, ''));
    
    res.json({
        message:"SUCCESS! You have a new account :)",
        
    })
    
})


app.get('/checkbalance', function (req, res) {
    
    console.log("Fetching account Balance...");

    let RAW_JSON_DATA=cmd.runSync(
        `node scripts/check-balance.js`,
        function(err, stdout, stderr){
            console.log('examples dir now contains the example file along with : ',stdout)
            
        }
    );
   console.log(RAW_JSON_DATA);
  
   
   var getBalance= RAW_JSON_DATA.data.split("Balance:",2) 
   let Show_Balance=getBalance[1].replace('\n','');
   console.log("Balance : "+Show_Balance);

   var getaddress= RAW_JSON_DATA.data.split(":",2)
   let getacc_address=getaddress[1].replace('\nType','').trim()
   console.log("ACC_ADDR : "+getacc_address);

    
    res.json({
        Account_Address:getacc_address,
        Balance:Show_Balance+" Lumens",
        
    })
    
})

app.get('/Sendpayment', function (req, res) {
    
    console.log("Sending Payment....");

    let RAW_JSON_DATA=cmd.runSync(
        `node scripts/send_payment.js`,
        function(err, stdout, stderr){
            console.log('examples dir now contains the example file along with : ',stdout)
            
        }
    );
   console.log(RAW_JSON_DATA);
   
   
   var TX_Data= RAW_JSON_DATA.data.split("Hash:",3) 
   let TX_HASH_DATA=TX_Data[1].replace('\nLink to Verify Transaction ','').trim()
   console.log("Transaction Hash : "+TX_HASH_DATA);

   let TX_HASH_LINK=TX_Data[2].replace('\n','').trim()
  console.log("Transaction Hash Link:"+TX_HASH_LINK);

    
    res.json({
        Transaction_Hash : TX_HASH_DATA,
        Transaction_Hash_Link:TX_HASH_LINK
        
    })
    
})

app.get('/transactionhistory', function (req, res) {
    
    console.log("Fetching Transaction History....");

    let RAW_JSON_DATA=cmd.runSync(
        `node scripts/transaction_history`,
        function(err, stdout, stderr){
            console.log('examples dir now contains the example file along with : ',stdout)
            
        }
    );
   console.log(RAW_JSON_DATA);
   console.log('Transaction_History : ',RAW_JSON_DATA.data.replace(/['"]+/g, ''));
   let TX_History=RAW_JSON_DATA.data.replace(/['"]+/g, '').split('\n')
    
    res.json({
      Transaction_History:TX_History
        
    })
    
})


app.listen(process.env.PORT,(err) =>{
    console.log("Nodejs is running in PORT", process.env.PORT)
})

