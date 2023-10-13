$(document).ready(function () {
  $('.text-area').on("input", function() {
    const out = $(this).closest(".form").find(".counter")[0];
    const count = 140 - this.value.length;
    out.value = count;
    if (count < 0) {
      $(out).css("color", "red");
    };
  });
});

