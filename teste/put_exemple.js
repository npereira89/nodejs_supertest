const request = require('supertest');
const chai = require('chai');
var assert = chai.assert;



request('https://api.instantwebtools.net/v1/passenger/')  // vai fazer o pedido de request
  .put('63c91ab736a09d535f224701')  // identifica o dado a atualizar
  .send({ //indentifica os dados que devem ser atualizados
    name: "Nuno Manuel Silva Teixeira",
    trips: 11111111111111,
    airline: 8
  })
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
