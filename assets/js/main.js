/*
 * show pass
 */
(function ($) {
  "use strict";

  /* show pass
  ------------------------------------------------------------------------------------- */
  var showPass = function () {
    $(".show-pass").on("click", function () {
      $(this).toggleClass("active");
      if ($(".password-field").attr("type") == "password") {
        $(".password-field").attr("type", "text");
      } else if ($(".password-field").attr("type") == "text") {
        $(".password-field").attr("type", "password");
      }
    });
    $(".show-pass2").on("click", function () {
      $(this).toggleClass("active");
      if ($(".password-field2").attr("type") == "password") {
        $(".password-field2").attr("type", "text");
      } else if ($(".password-field2").attr("type") == "text") {
        $(".password-field2").attr("type", "password");
      }
    });
  };
  /* image select
  ------------------------------------------------------------------------------------- */
  var selectImages = function () {
    if ($(".image-select").length > 0) {
      const selectIMG = $(".image-select");
      selectIMG.find("option").each((idx, elem) => {
        const selectOption = $(elem);
        const imgURL = selectOption.attr("data-thumbnail");
        if (imgURL) {
          selectOption.attr(
            "data-content",
            "<img src='%i'/> %s"
              .replace(/%i/, imgURL)
              .replace(/%s/, selectOption.text())
          );
        }
      });
      selectIMG.selectpicker();
    }
  };
  /* otp input
  ------------------------------------------------------------------------------------- */
  var otpInput = function () {
    if ($(".digit-group").length > 0) {
      $(".digit-group")
        .find("input")
        .each(function () {
          $(this).attr("maxlength", 1);
          $(this).on("keyup", function (e) {
            var parent = $($(this).parent());

            if (e.keyCode === 8 || e.keyCode === 37) {
              var prev = parent.find("input#" + $(this).data("previous"));

              if (prev.length) {
                $(prev).select();
              }
            } else if (
              (e.keyCode >= 48 && e.keyCode <= 57) ||
              (e.keyCode >= 65 && e.keyCode <= 90) ||
              (e.keyCode >= 96 && e.keyCode <= 105) ||
              e.keyCode === 39
            ) {
              var next = parent.find("input#" + $(this).data("next"));

              if (next.length) {
                $(next).select();
              } else {
                if (parent.data("autosubmit")) {
                  parent.submit();
                }
              }
            }
          });
        });
    }
  };
  /* check
  ------------------------------------------------------------------------------------- */
  var checkRadio = function () {
    $(".check-ip-bg:checked").parent().addClass("check");
    $(".check-ip-bg").on("click", function () {
      $(".check-ip-bg:not(:checked)").parent().removeClass("check");
      $(".check-ip-bg:checked").parent().addClass("check");
    });
  };

  /* range slider
  ------------------------------------------------------------------------------------- */
  var rangeSlider = function () {
    if ($("#range-two-val").length > 0) {
      var rangeTwoSlider = document.getElementById("range-two-val");
      noUiSlider.create(rangeTwoSlider, {
        start: [17, 128],
        connect: true,
        tooltips: [true, true],
        range: {
          min: 0,
          max: 160,
        },
        format: {
          to: (v) => v | 0,
          from: (v) => v | 0,
        },
      });
    }
  };
  /* btnQuantity
  ------------------------------------------------------------------------------------- */
  var btnQuantity = function () {
    $(".minus-btn").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest("div").find("input");
      var value = parseInt($input.val());

      if (value > 1) {
        value = value - 1;
      }

      $input.val(value);
    });
    $(".plus-btn").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest("div").find("input");
      var value = parseInt($input.val());

      if (value > 0) {
        value = value + 1;
      }

      $input.val(value);
    });
  };
  /* press heart
  ------------------------------------------------------------------------------------- */
  var pressHeart = function () {
    $(".heart").on("click", function () {
      $(this).toggleClass("active");
    });
  };
  /* Clear all
  ------------------------------------------------------------------------------------- */
  var clearAll = function () {
    $(".clear-all").on("click", function () {
      $(".history").css("display", "none");
    });
  };
  /* Clear Item History
  ------------------------------------------------------------------------------------- */
  var clearItem = function () {
    $(".item-history").each(function (e) {
      var el = this.querySelector(".clear-item");
      el.addEventListener("click", function () {
        el.closest(".item-history").style.display = "none";
      });
    });
  };
  /* Clear Checkbox 
  ------------------------------------------------------------------------------------- */
  var clearCheckbox = function () {
    $(".clear-checkbox").on("click", function () {
      $(".group-checkbox").find("input").prop("checked", false);
    });

    $(".clear-checkbox").on("click", function (e) {
      e.preventDefault();
    });
  };

  /* Suggestions
  ------------------------------------------------------------------------------------- */
  var Suggest = function () {
    $(".suggest").on("click", function () {
      var val = $(this).text();
      $(".suggest_value").val(val);
    });
  };
  /* dropdown menu
  ------------------------------------------------------------------------------------- */
  var dropDown = function () {
    $(".hhh").on("click", function () {
      console.log("hhhh");
    });
  };
  /* back Page
  ------------------------------------------------------------------------------------- */
  var backPage = function () {
    $(".back-btn").on("click", function (e) {
      e.stopPropagation();
      e.preventDefault();
      window.history.go(-1);
    });
  };

  $(function () {
    showPass();
    selectImages();
    otpInput();
    checkRadio();
    rangeSlider();
    btnQuantity();
    pressHeart();
    clearAll();
    clearItem();
    clearCheckbox();
    dropDown();
    Suggest();
    backPage();
  });
})(jQuery);
