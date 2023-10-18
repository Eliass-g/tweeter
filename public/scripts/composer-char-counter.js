$(document).ready(function() {
  $('.text-area').on("input", function() {
    const out = $(this).closest(".form").find(".counter")[0];
    const count = 140 - this.value.length;
    out.value = count;
    if (count < 0) {
      $(out).css("color", "red");
    } else {
      $(out).css("color", "#545149");
    }
  });

  $("form").on("submit", function (event) {
    event.preventDefault();
    const out = $(this).find(".counter")[0];
    out.value = 140;
    console.log(out.value);
  });
});

