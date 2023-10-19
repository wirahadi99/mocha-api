const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const gorestBaseApi = "https://gorest.co.in"
const gorestApiTodos = "/public/v2/todos";


describe('verify that the amount of data', function () {
  it('should be 10 data', async function () {
    const res = await chai.request(gorestBaseApi).get(gorestApiTodos)
    .send();

    expect(res).to.have.status(200);
    expect(res.body.length).to.eql(10);
  });
});
