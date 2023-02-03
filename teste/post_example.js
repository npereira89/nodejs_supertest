const request = require('supertest');
const chai = require('chai');
var assert = chai.assert;

    request('https://jsonplaceholder.typicode.com/')  // vai fazer o pedido de request
    .post('posts')
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .send({ title: 'nao sei o que dizer', body: 'estou com alto crush da Ines', userId: 8})
    //.expect(400); // vamos esperar que a resposta seja OK (200)
    .then (res =>{
      if (res.statusCode===201) {
        console.log(res.body)
        return 
      }
      else
      {
        throw new Error("Expected different key!")
      }
    })

  /*.expect (function(res) { 

    //aqui valida se existe alguma resposta com o campo value
    if (res.statusCode===201) {
      console.log("consegui ligar!!")
      return 
    }
    else
    {
      throw new Error("Expected different key!")
    }
  })*/
/*
  app.get('/user', function(req, res) {
    res.status(200).json({ name: 'john' });
  }); */