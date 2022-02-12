$(document).ready(function () {
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  $("#name")
    .on("change", function () {
      $(".rank").hide();
      $("#" + $(this).val()).fadeIn(500);
    })
    .change();
});
