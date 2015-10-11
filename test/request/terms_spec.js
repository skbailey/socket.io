var hippie = require('hippie');

describe('Terms API', function(){
  var API_URL = 'http://localhost:5000/terms';

  describe('GET /terms', function(){
    it('should get a list of terms', function(done){
      hippie()
        .url(API_URL)
        .method('GET')
        .expectStatus(200)
        .end(function(err, res, body){
          if (err) throw err;
          done();
        });
    });
  });

  describe("POST /terms", function(){
    it("should create a term", function(done){
      hippie()
        .url(API_URL)
        .method('POST')
        .expectStatus(200)
        .end(function(err, res, body) {
          if (err) throw err;
          done();
        });
    });
  });
});
