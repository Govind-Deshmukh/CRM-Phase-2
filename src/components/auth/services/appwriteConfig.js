import { Client, Account } from "appwrite";

const client = new Client();

const account = new Account(client);

client
    .setEndpoint('https://appwrite.exampledev.xyz:3031/v1')
    .setProject('63f842ea1273d5966e7c');


export default account;
// const promise = account.create('[USER_ID]', 'email@example.com', 'password');

// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });