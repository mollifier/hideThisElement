// Jetpack feature
// hideThisElement

jetpack.future.import("menu");

jetpack.menu.context.page.add(function (context) {
  return {
    label: "hide this element",
    command: function() {
      console_dir(context.node);
    }
  };
});

function console_dir(obj) {
  for (p in obj) {
    console.log(p + " : " + obj[p]);
  }
}

  /*
  var obj = gContextMenu.target;
  if (obj) {
    obj.style.display = "none";
  }
  */
