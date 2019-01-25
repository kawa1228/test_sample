// console.info("add関数のテスト");
// console.info("1+2は3である");

// if (add(1, 2) === 3) {
//   console.info("成功");
// } else {
//   console.error("失敗");
// }

var assert = require("assert");
var calcUtil = require("../src/calc-util.js");

describe("add関数のテスト", function() {
  it("1+2は3である", function() {
    // if (calcUtil.add(1, 2) === 3) {
    // } else {
    //   throw new Error("失敗");
    // }
    assert(calcUtil.add(1, 2) === 3);
  });
  // これはエラー
  it("1+2は4である", function() {
    //   if (calcUtil.add(1, 2) === 4) {
    //     } else {
    //       throw new Error("失敗");
    //     }
    assert(calcUtil.add(1, 2) === 4);
  });
});
