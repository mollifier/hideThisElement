// Jetpack feature
// hideThisElement

jetpack.future.import("menu");

jetpack.menu.context.page.add({
  label: "hide this element",
  command: function() {
    console.log("hide this element");
  }
});

  /*
  var obj = gContextMenu.target;
  if (obj) {
    obj.style.display = "none";
  }
  */
