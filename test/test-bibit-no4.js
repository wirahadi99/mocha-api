const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const punkApiBaseUrl = "https://api.punkapi.com/";
const punkApiBeersUrl = "v2/beers";

describe('verify that the amount of data', function () {
  it('with 20 data', async function () {
    const res = await chai.request(punkApiBaseUrl).get(punkApiBeersUrl).query({
        page: 2,
        per_page: 20
    })
    .send();

    expect(res.body[19]).to.be.an('object');
    expect(res.body[20]).to.be.a('undefined');
  });

  it('with 5 data', async function () {
    const res = await chai.request(punkApiBaseUrl).get(punkApiBeersUrl).query({
        page: 2,
        per_page: 5
    })
    .send();

    expect(res.body[4]).to.be.an('object');
    expect(res.body[5]).to.be.a('undefined');
  });

  it('with 1 data', async function () {
    const res = await chai.request(punkApiBaseUrl).get(punkApiBeersUrl).query({
        page: 2,
        per_page: 1
    })
    .send();

    expect(res.body[0]).to.be.an('object');
    expect(res.body[1]).to.be.a('undefined');
  });
});
