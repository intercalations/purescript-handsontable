
exports._addHook = function (key, fn, self) {
  return function () {
    return self.addHook(key, function (e1, e2, e3, e4, e5, e6) {
      fn(e1)(e2)(e3)(e4)(e5)(e6)()
    })
  }
}

exports._onAfterChange = function (fn, self) {
  return function () {
    return self.addHook('afterChange', function (changes, source) {
      if (changes != null) {
        var changeObjs = changes.map(function (change) {
          return {
            row: change[0],
            col: change[1],
            old: change[2],
            new: change[3]
          }
        })
        fn(changeObjs)(source)()
      }
    })
  }
}
