const merge = require('../mergeSort');
const expect = require('chai').expect;

describe('Merge Sort function', () => {
  it('exists', () => {
    expect(merge).to.be.ok;
  });
  it('sorts', () => {
    expect(merge([2,1])).to.eql([1,2]);
    expect(merge([33,666,444,22,3,11])).to.eql([3,11,22,33,444,666]);
  })
})