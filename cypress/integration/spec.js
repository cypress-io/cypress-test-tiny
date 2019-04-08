describe('page', () => {
  it('fails as expected here', () => {
    expect(false).to.be.true;
  });

  it('passes as expected here', () => {
    expect(false).not.to.be.true; // passes
    expect(false).to.not.be.true; // passes
  });

  it('passes here, but should not!', () => {
    expect(false).to.not.not.be.true; // Double negatives are confusing!
    expect(false).not.to.not.be.true;
    expect(false).not.not.to.be.true;
    expect(false).not.not.to.not.not.not.not.not.be.true;
  })
})
