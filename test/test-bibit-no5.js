const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const punkApiBaseUrl = "https://api.punkapi.com/";
const punkApiBeersUrl = "v2/beers";

describe('JSON schema', function () {
  it('Verify that the amount of data returned', async function () {
    const res = await chai.request(punkApiBaseUrl).get(punkApiBeersUrl).send();

    const size = (res.body).length;
    console.log(size);
  });

  it('Print all returned “name” of list that endpoint data', async function () {
    const res = await chai.request(punkApiBaseUrl).get(punkApiBeersUrl).send();
    const size = (res.body).length;
    for (let i = 0; i<size;i++) {
        console.log(res.body[i].name);
    }
  });
});
