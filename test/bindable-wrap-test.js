var bindableWrap = require(".."),
expect = require("expect.js");

describe("bindable-wrap#", function () {

  it("doesn't wrap strings", function () {
    expect(bindableWrap(5)).to.be(5);
  });

  it("wraps a shallow object", function () {
    expect(bindableWrap({}).__isBindable).to.be(true);
  });


  it("wraps a nested object", function () {
    expect(bindableWrap({ city: {} }).get("city").__isBindable).to.be(true);
  });

  it("wraps a collection", function () {
    expect(bindableWrap([]).__isBindable).to.be(true);
  });


  it("wraps an object in a collection", function () {
    expect(bindableWrap([{}]).at(0).__isBindable).to.be(true);
  });

  it("wraps a nested object in a collection", function () {
    expect(bindableWrap([{ city: {} }]).at(0).get("city").__isBindable).to.be(true);
  })
});