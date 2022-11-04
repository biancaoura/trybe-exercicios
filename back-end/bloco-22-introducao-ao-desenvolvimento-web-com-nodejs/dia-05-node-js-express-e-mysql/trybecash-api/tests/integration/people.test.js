const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../src/app');
const connection = require('../../src/db/connection');

const { expect, use } = chai;

use(chaiHttp);

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

  afterEach(sinon.restore);
});