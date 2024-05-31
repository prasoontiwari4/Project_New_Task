const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Your Express app

chai.should();
chai.use(chaiHttp);

describe('Users', () => {
  describe('GET /users', () => {
    it('should get all users', (done) => {
      chai.request(app)
        .get('/users')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
  });

  describe('POST /users', () => {
    it('should create a user', (done) => {
      const user = {
        username: 'testuser',
        email: 'testuser@example.com',
        password: 'password123'
      };
      chai.request(app)
        .post('/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('id');
          done();
        });
    });
  });
});
