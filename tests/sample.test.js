/* jshint esversion:6 */

const { sampleFunc } = require('../app/sample');

describe('Suite #1', () => {
  it('Should pass no matter what!', () => {
    expect(true).toBe(true);
  });

  it('Should return a greeting', () => {
    expect(sampleFunc()).toBe('Hello Friend!');
  });
});

// Okay failing the test stops the build
