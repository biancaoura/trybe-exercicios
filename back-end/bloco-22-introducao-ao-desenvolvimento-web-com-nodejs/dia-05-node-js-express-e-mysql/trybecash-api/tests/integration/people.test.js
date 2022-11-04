const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../src/app');
const connection = require('../../src/db/connection');

const { expect, use } = chai;

use(chaiHttp);

const peopleList = [
  {
    id: 1,
    firstName: 'Luke',
    lastName: 'Skywalker',
    email: 'luke@skywalker.com',
    phone: '123 456 7890',
  },
  {
    id: 2,
    firstName: 'Darth',
    lastName: 'Vader',
    email: 'darth@vader.com',
    phone: '001 002 0003',
  },
];

describe('Testando os endpoints de people', function() {
  it('Testando o cadastro de uma pessoa', async function() {
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]); // mesmo formato do retorno das func do mysql2

    const response = await chai
      .request(app)
      .post('/people')
      .send(
        {
          firstName: 'First',
          lastName: 'Last',
          email: 'email@email.com',
          phone: '123 456 7890',
        },
      );

    expect(response.status).to.be.equal(201);
    expect(response.body).to.deep.equal({ message: 'Pessoa cadastrada com sucesso com o id 42' });
  });

  it('Testando a listagem das pessoas', async function() {
    sinon.stub(connection, 'execute').resolves([peopleList]);
    const response = await chai
      .request(app)
      .get('/people');
    
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(peopleList);
  });

  it('Testando a listagem da pessoa com id 1', async function() {
    sinon.stub(connection, 'execute').resolves([[peopleList[0]]]);
    const response = await chai
      .request(app)
      .get('/people/1');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(peopleList[0]);
  });

  afterEach(sinon.restore);
});