var expect = require('expect');
var {generatemessage,generateLocationMessage} = require('./message');
describe('generatemessage',() =>{
  it('should generate correct message object',() =>{
    var from = 'Jen';
    var text = 'Some message';
    var message = generatemessage(from,text);
    expect(message.createAt).toBeA('number');
    expect(message).toInclude({from, text});
    //store res in varible
    //assert from match
    //assert text match
  });
});
describe('generateLocationMessage',()=>{
  it('should generate corect location object',()=>{
    var from = 'Deb';
    var latitude = 15;
    var longtitude = 19;
    var url = 'https://www.google.com/maps?q=15,19';
    var message = generateLocationMessage(from,latitude,longtitude);
    expect(message.createAt).toBeA('number');
    expect(message).toInclude({from, url});
  });
});
