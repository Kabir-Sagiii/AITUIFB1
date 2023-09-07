function f1(f) {
  f(function (y) {
    y(function (z) {
      z(function () {});
    });
  });
}

f1(function (x) {});
