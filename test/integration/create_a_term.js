require('co-mocha');

var Nightmare = require('nightmare');
var expect = require('chai').expect;

describe('Terms', function(){
  var API_URL = 'http://localhost:5000/terms/new';

  it("should create a term", function*(){
    var nightmare = Nightmare();
    var searchText = yield nightmare
      .goto(API_URL)
      .type('#search-input', 'Spring in Algeria')
      .click('#search-submit-btn')
      .evaluate(function(){
        // this fn runs in the context of the browser
        return document.querySelector('#search-input').innerText;
      })
      .end();
    
    expect(searchText).to.be.empty;
  });
});
