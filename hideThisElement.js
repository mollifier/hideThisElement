// @name: Hide This Element
// @description: Add context menu to hide target element.
// @auther : mollifier http://d.hatena.ne.jp/mollifier/
// @version : 0.0.1
//
// Hide This Element is released under the MIT License.
// http://www.opensource.org/licenses/mit-license.php

jetpack.future.import("menu");

jetpack.menu.context.page.add(function (context) {
  return {
    label: "hide this element",
    command: function() {
      $(context.node).toggle();
    }
  };
});

