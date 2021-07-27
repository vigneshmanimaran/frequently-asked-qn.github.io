$(document).ready(function() {
    $(".accordion").click(function() {
        $(this).toggleClass("active");
      $(this).next(".filter").slideToggle(100);
    });
  });