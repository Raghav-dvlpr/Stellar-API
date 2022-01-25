
# STELLAR API 

Stellar, or Stellar Lumens, is an open source, decentralized protocol for digital currency to fiat money low-cost transfers which allows cross-border transactions between any pair of currencies.Stellar-sdk is a high-level library that serves as client-side API for Horizon. stellar-base is lower-level library for creating Stellar primitive constructs via XDR helpers and wrappers.
Here some API for the functionalities that 

1. Create Wallet
2. Create Account
3. Fetch the balance of an address 
4. Send Lumens to another account 
5. GET Transaction History 
6. Testnet and Mainnet URLs. 

Stellar Initial release date: 31 July 2014

Developer(s): Stellar Development Foundation

Original author(s): Jed McCaleb; Joyce Kim

License: Apache License 2.0

Written in: C++, Go, Java, JavaScript, Python, Ruby



## Installation

1. Clone the repository:

```bash
  git clone https://github.com/Raghav_dvlpr/stellar-api.git
  
  cd stellar-api
```
2. Install it using npm( If you remove package.json and node modules):

```bash
  npm init

  npm install

  npm install --save fs

  npm install --save dotenv

  npm install --save express

  npm install --save nodemon

  npm install --save node-cmd

  npm install --save node-fetch

  npm install --save body-parser
  
  npm install --save stellar-sdk
  
```

    
## API Reference
All URIs are relative to localhost:3004/

#### First run the App

```
  run -> node App.js

  or

  run -> nodemon
```

#### Get Keypair

```
HTTP GET Request :

  localhost:3004/createkeypair


```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `createkeypair` | `string` | TO CREATE RANDOM KEYPAIR(ACCOUNT ID AND SECRET KEY) |

```
Output JSON RESPONSE:

  {
    "message": "Generated successfully....",
    "Account_ID_PublicKey": "GDZ5KKEWEVMLWGSOQI3NN7VV3OMJUXWURRI2NQ6XFFW24O4GMXVTE2D3",
    "Secret_Key": "SB6CJPYAAAIZBZFLVFOONHJ3HZLUZCYETHDQSMUCEKHGIJ4ZRUVVSIZL"
}

```

#### Get Account

```
HTTP GET Request :

  localhost:3004/createaccount
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `createaccount`      | `string` | TO CREATE ACCOUNT |

```
Output JSON RESPONSE :
  {
    "message": "SUCCESS! You have a new account :)"
  }


```

#### Get Balance

```
HTTP GET Request :

  localhost:3004/checkbalance
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `checkbalance`      | `string` | TO CHECK BALANCE|


```
Output JSON RESPONSE :
  {
    "Account_Address": "GDJZJS3QC36SE5DKCALEQ5TDQTKQFZBIPWXKZ4VBXTNC3KVIUFTVCWA4",
    "Balance": " 10000.0000000 Lumens"
  }


```
#### Get Payments

```
HTTP GET Request :

  GET localhost:3004/Sendpayment
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Sendpayment`      | `string` | TO MAKE PAYMENTS|

```
Output JSON RESPONSE :

  {
    "Transaction_Hash": "2d086fbf224ccfb96a74ce1af3a99ab045479a4ff4079a79677786bab8bd2383",
    "Transaction_Hash_Link": "https://horizon-testnet.stellar.org/transactions/2d086fbf224ccfb96a74ce1af3a99ab045479a4ff4079a79677786bab8bd2383"
  }

```
#### Get Transaction History

```
HTTP GET Request :

  localhost:3004/transactionhistory

```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `transactionhistory`      | `string` | TO GET TRANSACTION HISTORY|


```
Output JSON RESPONSE :
 
{
    "Transaction_History": [
        "Page 1: ",
        "Record Length:  3",
        "Transaction 0 Hash e0ae39cda37dae68aa36b571beb59f2b2bffb2e7eeac37bb9cef10fe65116299",
        "Transaction 1 Hash 7f4ac1f7825c09c9afdf1477088312ed1afb5fcfed008136f7885a89c3699b3c",
        "Transaction 2 Hash 2d086fbf224ccfb96a74ce1af3a99ab045479a4ff4079a79677786bab8bd2383",
        "Page 2: ",
        "Record Length:  0",
        ""
    ]
}
```

#### Get After Payments Balance

```
HTTP GET Request :

  localhost:3004/checkbalance
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `checkbalance`      | `string` | TO CHECK BALANCE|


```
Output JSON RESPONSE :
  
{
    "Account_Address": "GDJZJS3QC36SE5DKCALEQ5TDQTKQFZBIPWXKZ4VBXTNC3KVIUFTVCWA4",
    "Balance": " 9979.9999800 Lumens"
}

```





## Running Commands Manually

If you want to run all command for each functionalities manually follow these steps:

1. TO CREATE RANDOM KEYPAIR(ACCOUNT ID AND SECRET KEY)

```bash
  node scripts/create-keypair.js
```


2. TO CREATE ACCOUNT

```bash
  node scripts/create-account.js
```

3. TO TO CHECK BALANCE 

```bash
  node scripts/check-balance.js
```


4. TO MAKE PAYMENTS 

```bash
  node scripts/send-payments.js
```

5. TO GET TRANSACTION HISTORY  

```bash
  node scripts/transcation_history.js
```

## Mainnet and Testnet URL's
The Stellar Development Foundation (SDF) runs two instances of Horizon:

https://horizon.stellar.org/ for interacting with the public network   
https://horizon-testnet.stellar.org/ for interacting with the testnet

## Stellar Official Documentation 
For Tutorials and more information refer here

https://developers.stellar.org/docs/

## Collabration and Contribution

Thanks Amal K Santhosh (https://github.com/amal348) for your valuable contribution

