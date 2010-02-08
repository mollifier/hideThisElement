// Jetpack feature
// hideThisElement

jetpack.future.import("menu");

jetpack.menu.context.page.add(function (context) {
  return {
    label: "hide this element",
    command: function() {
      $(context.node).toggle();
    }
  };
});

function console_dir(obj) {
  for (p in obj) {
    console.log(p + " : " + obj[p]);
  }
}

