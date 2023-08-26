window.console =
  window.console ||
  (function () {
    var e = {};
    e.log =
      e.warn =
      e.debug =
      e.info =
      e.error =
      e.time =
      e.dir =
      e.profile =
      e.clear =
      e.exception =
      e.trace =
      e.assert =
        function () {};
    return e;
  })();

$(document).ready(function () {
  var e =
    // '<div class="switcher-container">' +
    // 'div class="modal-menu__backdrop"></div>' +
    // '<div class="selector-box">' +
    // '<div class="clearfix"></div>' +
    // '<div class="sw-odd"><h3>Color:</h3>' +
    // '<div class="ws-colors">' +
    // '<a href="#" class="styleswitch" id="color1">' +
    // "Color1" +
    // "</a>" +
    // '<a href="#" class="styleswitch" id="color2">' +
    // "Color2" +
    // "</a>" +
    // '<a href="#" class="styleswitch" id="color3">' +
    // "Color3" +
    // "</a>" +
    // "</div></div>" +
    // '<div class="sw-even"><h3>Layout:</h3>' +
    // '<a href="#" class="sw-light">BOX</a>' +
    // '<a href="#" class="sw-dark">WIDE</a>' +
    // "</div>" +
    // '<div class="clearfix"></div>' +
    // "</div>" +
    // "</div>";

    '<div class="menu-mobile-popup">' +
    '<div class="modal-menu__backdrop"></div> ' +
    '<div class="widget-filter">' +
    '<div class="header-ct-center menu-moblie">' +
    '<div class="nav-wrap">' +
    '<nav class="main-nav mobile">' +
    '<ul id="menu-primary-menu" class="menu">' +
    '<li class="menu-item menu-item-has-children-mobile ">' +
    '<a class="iteam-menu">Home</a>' +
    '<ul class="sub-menu-mobile">' +
    '<li class="menu-item menu-item-mobile current-item">' +
    '<a href="home-01.html">Home Page 01 </a>' +
    "</li>" +
    '<li class="menu-item menu-item-mobile">' +
    '<a href="Home-02.html">Home Page 02 </a>' +
    "</li>" +
    '<li class="menu-item menu-item-mobile">' +
    '<a href="home-03.html">Home Page 03 </a>' +
    "</li>" +
    "</ul>" +
    "</li>" +
    "</ul>" +
    "</nav>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>";
  $("body").append(e);
  // switchAnimate.loadEvent();
  // switchColor.loadEvent();
  switchAnimate.btnmenu();
});

var switchAnimate = {
  btnmenu: function () {
    $(document).on("click", ".menu-item-has-children-mobile", function () {
      var args = { duration: 600 };
      if ($(this).hasClass("active")) {
        $(this).children(".sub-menu-mobile").slideUp(args);
        $(this).removeClass("active");
      } else {
        $(".sub-menu-mobile").slideUp(args);
        $(this).children(".sub-menu-mobile").slideDown(args);
        $(".menu-item-has-children-mobile").removeClass("active");
        $(this).addClass("active");
      }
    });
  },
};
