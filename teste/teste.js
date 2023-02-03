const request = require('supertest');
const chai = require('chai');
var assert = chai.assert;

request('https://api.chucknorris.io/jokes')  // vai fazer o pedido de request
  .get('/random')  // faz o get do endpoint
 
  .then (res =>{
    if (res.statusCode===200) {
      console.log(res.body)
      return 
    }
    else
    {
      throw new Error("Expected different key!")
    }
  })