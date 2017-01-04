var expect = require('expect');
var {generatemessage} = require('./message');
describe('generatemessage',() =>{
  it('should generate correct message object',() =>{
    var from = 'jen';
    var text = 'some message';
    var message = generatemessage(from,text);
    expect(message.createAt).toBeA('number');
    expect(message).toInclude({from, text});
    //store res in varible
    //assert from match
    //assert text match
  });
});
