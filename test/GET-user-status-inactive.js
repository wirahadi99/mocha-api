const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const gorestBaseApi = "https://gorest.co.in"
const gorestApiUsers = "/public/v2/users?status=inactive";

describe('verify user status', function () {
  it('should be inactive', async function () {
    const res = await chai.request(gorestBaseApi).get(gorestApiUsers)
    .send();

    expect(res).to.have.status(200);
    const responseData = res.body;
    responseData.forEach(body => {
      expect(body.status).to.equal('inactive');
    });
    
  });
});
