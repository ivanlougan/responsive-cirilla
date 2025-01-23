// let arrow = document.getElementById("arrow")

const $arrow = $("#arrow");
// const $menu = $(".fa-bars");

$arrow.on("click", function () {
  console.log("cliclked");
  $("html, body").animate(
    {
      scrollTop: $("main").offset().top,
    },
    2000
  );
});

$(document).ready(function () {
  // Toggle the menu when the hamburger button is clicked
  $(".fa-bars").click(function () {
    $(".drop-menu").slideToggle(); // Show or hide the menu with a sliding effect
  });
});
