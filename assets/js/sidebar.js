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
    '<div class="menu-mobile-popup">' +
    '<div class="modal-menu__backdrop"></div> ' +
    '<div class="widget-filter">' +
    '<div class="header-ct-center menu-moblie">' +
    '<a href="#" class="sidebar-logo">' +
    '<img src="assets/images/logo/logotext.png">' +
    "</a> " +
    '<ul id="menu-primary-menu" class="menu">' +
    '<li class="menu-item menu-item-has-children-mobile">' +
    '<a class="item-menu">Home</a>' +
    '<ul class="sub-menu-mobile">' +
    '<li class="menu-item-mobile">' +
    '<a href="home-01.html">Home Page 01 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-02.html">Home Page 02 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-03.html">Home Page 03 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-04.html">Home Page 04 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-05.html">Home Page 05 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-06.html">Home Page 06 </a>' +
    "</li>" +
    "</ul>" +
    "</li>" +
    '<li class="menu-item menu-item-has-children-mobile">' +
    '<a class="item-menu">Filter</a>' +
    '<ul class="sub-menu-mobile">' +
    '<li class="menu-item-mobile">' +
    '<a href="home-01.html">Home Page 01 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-02.html">Home Page 02 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-03.html">Home Page 03 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-04.html">Home Page 04 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-05.html">Home Page 05 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-06.html">Home Page 06 </a>' +
    "</li>" +
    "</ul>" +
    "</li>" +
    '<li class="menu-item menu-item-has-children-mobile">' +
    '<a class="item-menu">Product Detail</a>' +
    '<ul class="sub-menu-mobile">' +
    '<li class="menu-item-mobile">' +
    '<a href="home-01.html">Home Page 01 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-02.html">Home Page 02 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-03.html">Home Page 03 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-04.html">Home Page 04 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-05.html">Home Page 05 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-06.html">Home Page 06 </a>' +
    "</li>" +
    "</ul>" +
    "</li>" +
    '<li class="menu-item menu-item-has-children-mobile">' +
    '<a class="item-menu">Favorite</a>' +
    '<ul class="sub-menu-mobile">' +
    '<li class="menu-item-mobile">' +
    '<a href="home-01.html">Home Page 01 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-02.html">Home Page 02 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-03.html">Home Page 03 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-04.html">Home Page 04 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-05.html">Home Page 05 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-06.html">Home Page 06 </a>' +
    "</li>" +
    "</ul>" +
    "</li>" +
    '<li class="menu-item menu-item-has-children-mobile">' +
    '<a class="item-menu">Nearby</a>' +
    '<ul class="sub-menu-mobile">' +
    '<li class="menu-item-mobile">' +
    '<a href="home-01.html">Home Page 01 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-02.html">Home Page 02 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-03.html">Home Page 03 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-04.html">Home Page 04 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-05.html">Home Page 05 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-06.html">Home Page 06 </a>' +
    "</li>" +
    "</ul>" +
    "</li>" +
    '<li class="menu-item menu-item-has-children-mobile">' +
    '<a class="item-menu">Profile</a>' +
    '<ul class="sub-menu-mobile">' +
    '<li class="menu-item-mobile">' +
    '<a href="home-01.html">Home Page 01 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-02.html">Home Page 02 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-03.html">Home Page 03 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-04.html">Home Page 04 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-05.html">Home Page 05 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-06.html">Home Page 06 </a>' +
    "</li>" +
    "</ul>" +
    "</li>" +
    '<li class="menu-item menu-item-has-children-mobile">' +
    '<a class="item-menu">Order</a>' +
    '<ul class="sub-menu-mobile">' +
    '<li class="menu-item-mobile">' +
    '<a href="home-01.html">Home Page 01 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-02.html">Home Page 02 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-03.html">Home Page 03 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-04.html">Home Page 04 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-05.html">Home Page 05 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="home-06.html">Home Page 06 </a>' +
    "</li>" +
    "</ul>" +
    "</li>" +
    "</ul>" +
    "</div>" +
    "</div>" +
    "</div>";
  $("body").append(e);

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
