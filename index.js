var bindable = require("bindable"),
traverse     = require("traverse");

function convert (obj) {

  var clone = new bindable.Object();

  traverse(obj).forEach(function (x) {

    if (typeof x !== "object" || !x) return;

    var path = ["value"].concat(this.path);

    if (Object.prototype.toString.call(x) === "[object Array]") {
      clone.set(path, new bindable.Collection(x.map(convert)));
      this.stop();
    } else {
      clone.set(path, new bindable.Object(x));
    }
  });

  return clone.get("value");
}

module.exports = convert;