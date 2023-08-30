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
    '<div class="sidebar-logo">' +
    '<img src="images/logo/logomenu.png">' +
    "<h2>Coffee Monster</h2>" +
    "</div> " +
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
    '<a class="item-menu">Filter & Search</a>' +
    '<ul class="sub-menu-mobile">' +
    '<li class="menu-item-mobile">' +
    '<a href="filter-search-01.html">Search 01</a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="filter-search-02.html">Search 02 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="filter-search-03.html">Search 03 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="search-result.html">Search result 01 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="search-result-02.html">Search result 02 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="search-result-03.html">Search result 03 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="search-result-04.html">Search result 04 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="filter.html">Filter </a>' +
    "</li>" +
    "</ul>" +
    "</li>" +
    '<li class="menu-item menu-item-has-children-mobile">' +
    '<a class="item-menu">Product Detail</a>' +
    '<ul class="sub-menu-mobile">' +
    '<li class="menu-item-mobile">' +
    '<a href="product-details-1.html">Product details 01 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="product-details-2.html">Product details 02 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="product-details-3.html">Product details 03 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="product-details-4.html">Product details 04 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="product-details-5.html">Product details 05 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="product-details-6.html">Product details 06 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="product-details-7.html">Product details 07 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="product-details-8.html">Product details 08 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="product-details-9.html">Product details 09 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="product-details-10.html">Product details 10 </a>' +
    "</li>" +
    "</ul>" +
    "</li>" +
    '<li class="menu-item menu-item-has-children-mobile">' +
    '<a class="item-menu">Favorite</a>' +
    '<ul class="sub-menu-mobile">' +
    '<li class="menu-item-mobile">' +
    '<a href="favorite.html">Favorite 01 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="favorite-02.html">Favorite 02 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="favorite-03.html">Favorite 03 </a>' +
    "</li>" +
    "</ul>" +
    "</li>" +
    '<li class="menu-item menu-item-has-children-mobile">' +
    '<a class="item-menu">Nearby</a>' +
    '<ul class="sub-menu-mobile">' +
    '<li class="menu-item-mobile">' +
    '<a href="nearby.html"> Nearby 01 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="nearby-02.html">Nearby 02 </a>' +
    "</li>" +
    "</ul>" +
    "</li>" +
    '<li class="menu-item menu-item-has-children-mobile">' +
    '<a class="item-menu">Profile</a>' +
    '<ul class="sub-menu-mobile">' +
    '<li class="menu-item-mobile">' +
    '<a href="profile.html">Profile 01 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="profile-02">Profile 02 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="profile-03.html">Profile 03 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="add-location.html">Location 01 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="add-location-02.html">Location 02 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="add-location-03.html">Location 03 </a>' +
    "</li>" +
    "</ul>" +
    "</li>" +
    '<li class="menu-item menu-item-has-children-mobile">' +
    '<a class="item-menu">Order</a>' +
    '<ul class="sub-menu-mobile">' +
    '<li class="menu-item-mobile">' +
    '<a href="payment.html">Payment 01 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="payment-method.html">Payment 02 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="payment-method-2.html">Payment 03 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="rate-coffee.html">Rate 01 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="rate-coffee-02.html">Rate 02 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="rate-driver.html">Rate 03 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="order-track.html">Order track 01 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="order-track-02.html">Order track 02 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="order-track-03.html">Order track 03 </a>' +
    "</li>" +
    '<li class="menu-item-mobile">' +
    '<a href="order-track-04.html">Order track 04 </a>' +
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
