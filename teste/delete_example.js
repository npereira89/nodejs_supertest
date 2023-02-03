const request = require('supertest');
const chai = require('chai');
var assert = chai.assert;

request('https://api.instantwebtools.net/v1/passenger/')  // vai fazer o pedido de request
  .delete('63c91ab936a09dfd7d22474f')  // faz o delete o dado que pretendemos apagar (neste é o ID do passageiro)
  .expect (function(res) { 
    //aqui valida se existe alguma resposta com OK ou NOK, consoante o valor introduzido no verbo 'delete'
    if (res.status == 200) {
      console.log(res.body)
      return 
    }
    else
    {
      console.log("Expected different value passenger!")
      return 
    }
  })
  .end(function(err, res) {   // valida se existe algum erro de throw
    if (err) throw err;
  })
